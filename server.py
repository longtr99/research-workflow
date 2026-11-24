from __future__ import annotations

import base64
import json
import mimetypes
import re
import sys
import time
import traceback
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Dict, List
from urllib.parse import parse_qs, unquote, urlparse

import openpyxl
from openpyxl.styles import Font, PatternFill

ROOT_DIR = Path(__file__).resolve().parent
DOCS_DIR = ROOT_DIR / "docs"
SCRIPTS_DIR = ROOT_DIR / "scripts"
if str(SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPTS_DIR))

from common_utils import (  # noqa: E402
    OUTPUT_DIR,
    UPLOADS_DIR,
    analyze_paper_matrix,
    apply_scopus_matching,
    clear_scopus_db,
    download_pdf_with_fallback,
    ensure_dirs,
    extract_paper_matrix_offline,
    fetch_openalex_page,
    get_scopus_db_status,
    load_state,
    make_standard_pdf_name,
    parse_scopus_catalog_bytes,
    rel_output_path,
    safe_filename,
    save_state,
)
import wf01_openalex_pdf  # noqa: E402
import wf02_scan_excel  # noqa: E402
import wf03_research_map  # noqa: E402
import wf04_prisma_sr  # noqa: E402
import wf05_verify  # noqa: E402
import wf06_hallucination_guard  # noqa: E402
import wf07_docx_style  # noqa: E402
import wf08_factcheck  # noqa: E402
import wf09_admin_teaching  # noqa: E402

WORKFLOW_MODULES = {
    1: wf01_openalex_pdf,
    2: wf02_scan_excel,
    3: wf03_research_map,
    4: wf04_prisma_sr,
    5: wf05_verify,
    6: wf06_hallucination_guard,
    7: wf07_docx_style,
    8: wf08_factcheck,
    9: wf09_admin_teaching,
}


def build_master_excel(payload: Dict[str, Any]) -> Path:
    """Xuất file Excel tổng hợp nhiều sheet cho toàn bộ các Workflow đã chạy."""
    ensure_dirs()
    out_path = OUTPUT_DIR / "AI_Workflow_Hub_Tong_Hop.xlsx"
    wb = openpyxl.Workbook()
    header_fill = PatternFill(start_color="0F294A", end_color="0F294A", fill_type="solid")
    header_font = Font(color="FFFFFF", bold=True)

    summary_ws = wb.active
    summary_ws.title = "Tong_Quan"
    summary_ws.append(["Workflow", "Số mục dữ liệu", "Số mục đã chọn"])
    for c in range(1, 4):
        summary_ws.cell(1, c).fill = header_fill
        summary_ws.cell(1, c).font = header_font

    wf_items_map: Dict[str, List[Dict[str, Any]]] = payload.get("wf_items") or {}
    selected_map: Dict[str, List[str]] = payload.get("selected_ids") or {}

    for wf_id_str, items in sorted(wf_items_map.items(), key=lambda kv: int(kv[0])):
        if not items:
            continue
        sel_set = set(selected_map.get(wf_id_str) or [])
        summary_ws.append([f"WF {wf_id_str}", len(items), len(sel_set)])

        ws = wb.create_sheet(f"WF_{wf_id_str}")
        if isinstance(items[0], dict) and "title" in items[0]:
            cols = [
                "Đã chọn", "Năm", "Tên bài báo", "Tác giả", "Tạp chí",
                "ISSN", "Scopus/Q", "Nhóm", "Trích dẫn", "DOI", "Link OA", "Trạng thái PDF"
            ]
            ws.append(cols)
            for idx, col in enumerate(cols, 1):
                ws.cell(1, idx).fill = header_fill
                ws.cell(1, idx).font = header_font
            for r_idx, it in enumerate(items, 2):
                ws.append([
                    "✓" if it.get("id") in sel_set else "",
                    it.get("year", ""),
                    it.get("title", ""),
                    it.get("authors") or it.get("first_author", ""),
                    it.get("journal", ""),
                    it.get("issn", ""),
                    it.get("quartile", ""),
                    it.get("group") or it.get("screen_decision", ""),
                    it.get("cited_by", 0),
                    it.get("doi", ""),
                    it.get("oa_url") or it.get("landing_url", ""),
                    it.get("pdf_status", ""),
                ])
                if it.get("doi"):
                    cell = ws.cell(r_idx, 10)
                    cell.hyperlink = it["doi"]
                    cell.font = Font(color="2563EB", underline="single")
            widths = [9, 8, 52, 28, 28, 14, 10, 14, 11, 30, 30, 18]
            for i, w in enumerate(widths, 1):
                ws.column_dimensions[openpyxl.utils.get_column_letter(i)].width = w
        else:
            # Generic table export for WF 5-9
            if isinstance(items[0], dict):
                keys = list(items[0].keys())
                ws.append(keys)
                for i in range(1, len(keys) + 1):
                    ws.cell(1, i).fill = header_fill
                    ws.cell(1, i).font = header_font
                for it in items:
                    ws.append([str(it.get(k, "")) for k in keys])

    wf_matrix: Dict[str, Dict[str, Any]] = payload.get("wf_matrix") or {}
    if wf_matrix:
        ws_m = wb.create_sheet("Ma_Tran_AI")
        m_cols = [
            "Tác giả (Năm)",
            "Tên bài báo",
            "Tạp chí",
            "Scopus/Q",
            "Tóm tắt ngắn gọn (Tiếng Việt)",
            "Phương pháp & Mẫu dữ liệu",
            "Kết quả / Phát hiện chính",
            "Khoảng trống nghiên cứu",
            "DOI",
        ]
        ws_m.append(m_cols)
        for i in range(1, len(m_cols) + 1):
            ws_m.cell(1, i).fill = header_fill
            ws_m.cell(1, i).font = header_font
        wf1_lookup = {str(it.get("id")): it for it in (wf_items_map.get("1") or []) if isinstance(it, dict)}
        for pid, mrow in wf_matrix.items():
            if not isinstance(mrow, dict):
                continue
            p = wf1_lookup.get(str(pid)) or {}
            author_yr = mrow.get("author_year") or f"{p.get('first_author') or p.get('authors') or '-'} ({p.get('year') or '-'})"
            ws_m.append([
                author_yr,
                mrow.get("title") or p.get("title") or "",
                p.get("journal", ""),
                p.get("quartile", ""),
                mrow.get("summary_vi", ""),
                mrow.get("methodology", ""),
                mrow.get("findings", ""),
                mrow.get("gaps", ""),
                p.get("doi", ""),
            ])
        for i, w in enumerate([22, 42, 24, 10, 44, 38, 38, 38, 28], 1):
            ws_m.column_dimensions[openpyxl.utils.get_column_letter(i)].width = w
        summary_ws.append(["Ma trận AI (WF 1)", len(wf_matrix), len(wf_matrix)])

    wb.save(out_path)
    return out_path


class AutomationHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DOCS_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def _send_json(self, status_code: int, payload: Dict[str, Any]):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self) -> Dict[str, Any]:
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8"))

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self._send_json(
                200,
                {
                    "ok": True,
                    "mode": "local_automation",
                    "version": "v3.1",
                    "workflows": list(WORKFLOW_MODULES.keys()),
                },
            )
            return

        if parsed.path == "/api/scopus/status":
            self._send_json(200, {"ok": True, **get_scopus_db_status()})
            return

        if parsed.path == "/api/download":
            qs = parse_qs(parsed.query)
            rel = unquote((qs.get("path") or [""])[0]).lstrip("/")
            target = (ROOT_DIR / rel).resolve()
            allowed_roots = [(ROOT_DIR / "output").resolve(), (ROOT_DIR / "docs" / "data").resolve()]
            if not any(str(target).startswith(str(r)) for r in allowed_roots) or not target.is_file():
                self._send_json(404, {"ok": False, "error": "Không tìm thấy file hoặc đường dẫn không hợp lệ."})
                return
            data = target.read_bytes()
            ctype, _ = mimetypes.guess_type(str(target))
            self.send_response(200)
            self.send_header("Content-Type", ctype or "application/octet-stream")
            self.send_header("Content-Disposition", f'attachment; filename="{target.name}"')
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return

        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)

        if parsed.path == "/api/upload":
            try:
                body = self._read_json_body()
                filename = str(body.get("filename") or "upload.bin")
                content_b64 = str(body.get("content_base64") or "")
                ensure_dirs()
                ext = Path(filename).suffix
                stem = safe_filename(Path(filename).stem, 50)
                dest = UPLOADS_DIR / f"{int(time.time())}_{stem}{ext}"
                dest.write_bytes(base64.b64decode(content_b64))
                self._send_json(200, {"ok": True, "path": str(dest), "filename": dest.name})
            except Exception as e:
                self._send_json(400, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/download_pdf_item":
            try:
                item = self._read_json_body()
                pdf_dir = ensure_dirs("_pdfs")
                fname = make_standard_pdf_name(item)
                dest = pdf_dir / fname
                res = download_pdf_with_fallback(item, dest)
                if res["downloaded"]:
                    self._send_json(
                        200,
                        {
                            "ok": True,
                            "filename": fname,
                            "path": res["file"],
                            "size_kb": res["size_kb"],
                            "download_url": f"/api/download?path={res['file']}",
                        },
                    )
                else:
                    self._send_json(
                        200,
                        {
                            "ok": False,
                            "error": res.get("reason") or "Không tải được PDF trực tiếp",
                            "fallback_url": item.get("oa_url") or item.get("doi") or item.get("landing_url") or "",
                        },
                    )
            except Exception as e:
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/scopus/upload":
            try:
                body = self._read_json_body()
                filename = str(body.get("filename") or "scimagojr.csv")
                if body.get("content_text") is not None:
                    raw_bytes = str(body.get("content_text")).encode("utf-8")
                else:
                    raw_bytes = base64.b64decode(str(body.get("content_base64") or ""))
                meta = parse_scopus_catalog_bytes(filename, raw_bytes)
                self._send_json(200, {"ok": True, **meta})
            except Exception as e:
                traceback.print_exc()
                self._send_json(400, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/scopus/match":
            try:
                body = self._read_json_body()
                items = body.get("items") or []
                updated, matched = apply_scopus_matching(items, fallback_openalex=False)
                self._send_json(
                    200,
                    {
                        "ok": True,
                        "items": updated,
                        "matched": matched,
                        "total": len(updated),
                        "db_status": get_scopus_db_status(),
                    },
                )
            except Exception as e:
                traceback.print_exc()
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/scopus/clear":
            try:
                clear_scopus_db()
                self._send_json(200, {"ok": True, "count": 0})
            except Exception as e:
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/wf/1/scan_page":
            try:
                body = self._read_json_body()
                res = fetch_openalex_page(
                    query=str(body.get("query") or "bank credit risk determinants"),
                    from_year=int(body.get("from_year") or 2020),
                    to_year=int(body.get("to_year")) if body.get("to_year") else None,
                    per_page=int(body.get("per_page") or 200),
                    sort=str(body.get("sort") or "cited_by_count:desc"),
                    min_citations=int(body.get("min_citations") or 0),
                    oa_only=bool(body.get("oa_only", False)),
                    language=str(body.get("language") or "all"),
                    email=str(body.get("email") or ""),
                    cursor=str(body.get("cursor") or "*"),
                    enrich_q=True,
                )
                self._send_json(200, {"ok": True, **res})
            except Exception as e:
                traceback.print_exc()
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/wf/1/save_scan":
            try:
                import pandas as pd

                body = self._read_json_body()
                rows = body.get("items") or []
                query = str(body.get("query") or "openalex").strip()
                out_dir = ensure_dirs("wf01_openalex")
                csv_path = out_dir / f"step1_openalex_{safe_filename(query, 40)}.csv"
                if rows:
                    pd.DataFrame(rows).to_csv(csv_path, index=False, encoding="utf-8-sig")
                state = load_state("wf01_openalex")
                state.update(
                    {
                        "query": query,
                        "from_year": body.get("from_year") or 2020,
                        "to_year": body.get("to_year"),
                        "limit": len(rows),
                        "rows": rows,
                        "step1_csv": rel_output_path(csv_path),
                    }
                )
                save_state("wf01_openalex", state)
                self._send_json(
                    200,
                    {
                        "ok": True,
                        "files": [{"label": "CSV kết quả quét OpenAlex", "path": rel_output_path(csv_path)}] if rows else [],
                    },
                )
            except Exception as e:
                traceback.print_exc()
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/ai/analyze_paper":
            try:
                body = self._read_json_body()
                paper = body.get("paper") or {}
                mode = str(body.get("mode") or "ai").strip().lower()
                api_key = str(body.get("api_key") or "").strip()
                provider = str(body.get("provider") or "gemini").strip().lower()
                model = str(body.get("model") or "").strip()
                translate_vi = bool(body.get("translate_vi", True))
                if mode == "offline":
                    matrix = extract_paper_matrix_offline(paper, translate_vi=translate_vi)
                    self._send_json(200, {"ok": True, "mode": "offline", "matrix": matrix})
                    return
                if not api_key and provider != "ollama":
                    self._send_json(400, {"ok": False, "error": "Chưa cấu hình API Key ở Tab 4."})
                    return
                matrix = analyze_paper_matrix(paper=paper, api_key=api_key, provider=provider, model=model)
                self._send_json(200, {"ok": True, "mode": "ai", "matrix": matrix})
            except Exception as e:
                traceback.print_exc()
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if parsed.path == "/api/export_master_excel":
            try:
                body = self._read_json_body()
                out_path = build_master_excel(body)
                rel = rel_output_path(out_path)
                self._send_json(
                    200,
                    {"ok": True, "path": rel, "download_url": f"/api/download?path={rel}", "filename": out_path.name},
                )
            except Exception as e:
                traceback.print_exc()
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        m = re.match(r"^/api/wf/(\d+)/step/(\d+)$", parsed.path)
        if m:
            wf_id = int(m.group(1))
            step_num = int(m.group(2))
            mod = WORKFLOW_MODULES.get(wf_id)
            if not mod:
                self._send_json(404, {"ok": False, "error": f"Không tìm thấy Workflow {wf_id}"})
                return
            t0 = time.time()
            try:
                params = self._read_json_body()
                result = mod.run_step(step_num, params)
                result["elapsed_ms"] = int((time.time() - t0) * 1000)
                result["ok"] = True
                self._send_json(200, result)
            except Exception as e:
                traceback.print_exc()
                self._send_json(
                    500,
                    {
                        "ok": False,
                        "step": step_num,
                        "status": "error",
                        "error": str(e),
                        "elapsed_ms": int((time.time() - t0) * 1000),
                    },
                )
            return

        self._send_json(404, {"ok": False, "error": f"Không hỗ trợ endpoint {parsed.path}"})


def main():
    host = "127.0.0.1"
    port = 8080
    ensure_dirs()
    server = ThreadingHTTPServer((host, port), AutomationHandler)
    print(f"AI Workflow Hub v3.0 (Auto-Execution Server) running at http://{host}:{port}/", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
