#!/usr/bin/env python3
"""
Local static server + free translation proxy for AI Research Workflow.
Zero external dependencies (Python 3 standard library only).

Usage:
  python3 server.py          # runs on http://localhost:8000
  python3 server.py 8080     # runs on http://localhost:8080
"""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import os
import sys
import urllib.parse
import urllib.request


def translate_google_free(text: str, source: str = "auto", target: str = "vi") -> str:
    text = (text or "").strip()
    if not text:
        return ""
    params = urllib.parse.urlencode({
        "client": "gtx",
        "sl": source,
        "tl": target,
        "dt": "t",
        "q": text,
    })
    url = f"https://translate.googleapis.com/translate_a/single?{params}"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=12) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    if isinstance(data, list) and data and isinstance(data[0], list):
        return "".join(chunk[0] for chunk in data[0] if isinstance(chunk, list) and chunk and chunk[0]).strip()
    return text


class ResearchWorkflowHandler(SimpleHTTPRequestHandler):
    def _send_json(self, status_code: int, payload: dict):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send_json(200, {"ok": True})

    def do_GET(self):
        if self.path.split("?")[0] == "/api/health":
            self._send_json(200, {"ok": True, "server": "research-workflow"})
            return
        super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/api/translate":
            self._send_json(404, {"ok": False, "error": "Not found"})
            return

        try:
            content_len = int(self.headers.get("Content-Length", "0"))
            raw_body = self.rfile.read(content_len).decode("utf-8") if content_len > 0 else "{}"
            body = json.loads(raw_body)
            source = body.get("source", "auto")
            target = body.get("target", "vi")

            if isinstance(body.get("texts"), list):
                translated = []
                for item in body["texts"]:
                    try:
                        translated.append(translate_google_free(str(item or ""), source, target))
                    except Exception:
                        translated.append(str(item or ""))
                self._send_json(200, {"ok": True, "translated": translated})
                return

            text = str(body.get("text", ""))
            result = translate_google_free(text, source, target)
            self._send_json(200, {"ok": True, "translated": result})
        except Exception as exc:
            self._send_json(502, {"ok": False, "error": str(exc)})


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), ResearchWorkflowHandler)
    print(f"AI Research Workflow server đang chạy tại: http://localhost:{port}")
    print("Nhấn Ctrl+C để dừng server.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng server.")
        server.server_close()


if __name__ == "__main__":
    main()
