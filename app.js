// ==========================================
// STATE & LOCAL STORAGE
// ==========================================
let papers = JSON.parse(localStorage.getItem("rw_papers") || "[]");
let scopusMap = JSON.parse(localStorage.getItem("rw_scopus_map") || "{}"); // key: normalized ISSN or Title -> { quartile, sjr, title }
let settings = JSON.parse(localStorage.getItem("rw_settings") || '{"provider":"gemini","model":"gemini-2.5-flash","apiKey":"","email":""}');
let stopAiFlag = false;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  loadSettingsUI();
  updateScopusDbStatus();
  renderPapersTable();
  renderMatrixTable();
  bindEvents();
});

function initTabs() {
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

function loadSettingsUI() {
  document.getElementById("aiProvider").value = settings.provider || "gemini";
  document.getElementById("aiModel").value = settings.model || "gemini-2.5-flash";
  document.getElementById("aiApiKey").value = settings.apiKey || "";
  document.getElementById("userEmail").value = settings.email || "";
}

function savePapers() {
  localStorage.setItem("rw_papers", JSON.stringify(papers));
  updateStats();
}

// ==========================================
// EVENT BINDINGS
// ==========================================
function bindEvents() {
  document.getElementById("btnRunSearch").addEventListener("click", runOpenAlexSearch);
  document.getElementById("filterText").addEventListener("input", renderPapersTable);
  document.getElementById("filterQuartile").addEventListener("change", renderPapersTable);
  document.getElementById("filterSelected").addEventListener("change", renderPapersTable);

  document.getElementById("checkAllHeader").addEventListener("change", (e) => {
    const visibleIds = getFilteredPapers().map(p => p.id);
    papers.forEach(p => { if (visibleIds.includes(p.id)) p.selected = e.target.checked; });
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  document.getElementById("btnSelectAllVisible").addEventListener("click", () => {
    const visibleIds = getFilteredPapers().map(p => p.id);
    papers.forEach(p => { if (visibleIds.includes(p.id)) p.selected = true; });
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  document.getElementById("btnDeselectAll").addEventListener("click", () => {
    papers.forEach(p => p.selected = false);
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  // Scopus CSV Upload
  document.getElementById("inputScopusCsv").addEventListener("change", handleScopusCsvUpload);
  document.getElementById("btnReMatchScopus").addEventListener("click", () => {
    papers.forEach(p => matchScopusForPaper(p));
    savePapers();
    renderPapersTable();
    alert("Đã đối chiếu lại toàn bộ danh sách với dữ liệu Scopus/Q!");
  });
  document.getElementById("btnClearScopus").addEventListener("click", () => {
    scopusMap = {};
    localStorage.removeItem("rw_scopus_map");
    updateScopusDbStatus();
  });

  // AI Matrix
  document.getElementById("btnRunAiMatrix").addEventListener("click", runAiMatrixAnalysis);
  document.getElementById("btnStopAi").addEventListener("click", () => { stopAiFlag = true; });

  // Settings
  document.getElementById("aiProvider").addEventListener("change", (e) => {
    document.getElementById("aiModel").value = e.target.value === "gemini" ? "gemini-2.5-flash" : "gpt-4o-mini";
  });
  document.getElementById("btnSaveSettings").addEventListener("click", () => {
    settings = {
      provider: document.getElementById("aiProvider").value,
      model: document.getElementById("aiModel").value.trim(),
      apiKey: document.getElementById("aiApiKey").value.trim(),
      email: document.getElementById("userEmail").value.trim()
    };
    localStorage.setItem("rw_settings", JSON.stringify(settings));
    document.getElementById("settingsStatus").textContent = "Đã lưu cấu hình thành công!";
  });

  // Export / Import
  document.getElementById("btnExportExcel").addEventListener("click", exportToExcel);
  document.getElementById("btnExportJson").addEventListener("click", exportProjectJson);
  document.getElementById("inputImportJson").addEventListener("change", importProjectJson);
}

// ==========================================
// 1. OPENALEX SEARCH & DEDUPLICATION
// ==========================================
async function runOpenAlexSearch() {
  const query = document.getElementById("searchQuery").value.trim();
  if (!query) return alert("Vui lòng nhập chủ đề hoặc từ khóa tìm kiếm!");

  const yearFrom = document.getElementById("yearFrom").value;
  const yearTo = document.getElementById("yearTo").value;
  const maxResults = parseInt(document.getElementById("maxResults").value, 10);
  const sortBy = document.getElementById("sortBy").value;
  const minCitations = parseInt(document.getElementById("minCitations").value || "0", 10);
  const onlyOA = document.getElementById("onlyOpenAccess").value === "oa";

  const statusEl = document.getElementById("searchStatus");
  const btn = document.getElementById("btnRunSearch");
  btn.disabled = true;
  statusEl.textContent = "Đang kết nối OpenAlex API...";

  let fetched = [];
  let cursor = "*";
  const perPage = 100;

  try {
    while (fetched.length < maxResults && cursor) {
      let filters = [`publication_year:${yearFrom}-${yearTo}`, `type:article`];
      if (minCitations > 0) filters.push(`cited_by_count:>${minCitations - 1}`);
      if (onlyOA) filters.push(`is_oa:true`);

      let url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=${filters.join(",")}&sort=${sortBy}&per-page=${perPage}&cursor=${encodeURIComponent(cursor)}`;
      if (settings.email) url += `&mailto=${encodeURIComponent(settings.email)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (!data.results || data.results.length === 0) break;
      fetched = fetched.concat(data.results);
      cursor = data.meta.next_cursor;
      statusEl.textContent = `Đã quét ${Math.min(fetched.length, maxResults)} / ${maxResults} bài...`;
    }

    fetched = fetched.slice(0, maxResults);

    // Chuẩn hóa & Loại trùng theo DOI hoặc Tên bài viết
    const seen = new Set();
    const cleaned = [];

    for (const w of fetched) {
      const doi = w.doi ? w.doi.replace("https://doi.org/", "").toLowerCase().trim() : "";
      const normTitle = (w.title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const dedupKey = doi || normTitle;
      if (!dedupKey || seen.has(dedupKey)) continue;
      seen.add(dedupKey);

      const authorsList = (w.authorships || []).map(a => a.author?.display_name).filter(Boolean);
      const firstAuthorLastName = authorsList[0] ? authorsList[0].split(" ").pop() : "Unknown";
      const source = w.primary_location?.source || {};
      const pdfUrl = w.open_access?.oa_url || w.primary_location?.pdf_url || "";
      const abstractText = reconstructAbstract(w.abstract_inverted_index);

      const paperObj = {
        id: w.id,
        title: w.title || "Untitled",
        year: w.publication_year || "",
        authors: authorsList.join("; "),
        firstAuthor: firstAuthorLastName,
        journal: source.display_name || "",
        issn: (source.issn || []).join(", "),
        issnL: source.issn_l || "",
        citations: w.cited_by_count || 0,
        doi: doi,
        pdfUrl: pdfUrl,
        standardFileName: buildStandardFileName(firstAuthorLastName, w.publication_year, w.title),
        abstract: abstractText,
        scopusQuartile: "",
        sjrScore: "",
        selected: false,
        aiSummary: "",
        aiMethod: "",
        aiFindings: "",
        aiGap: ""
      };

      matchScopusForPaper(paperObj);
      cleaned.push(paperObj);
    }

    papers = cleaned;
    savePapers();
    renderPapersTable();
    renderMatrixTable();
    statusEl.textContent = `Hoàn tất! Thu được ${papers.length} bài báo sau khi lọc trùng.`;
  } catch (err) {
    console.error(err);
    statusEl.textContent = `Lỗi khi quét dữ liệu: ${err.message}`;
  } finally {
    btn.disabled = false;
  }
}

// Khôi phục Abstract từ định dạng Inverted Index của OpenAlex
function reconstructAbstract(invertedIndex) {
  if (!invertedIndex) return "";
  const words = [];
  for (const [word, positions] of Object.entries(invertedIndex)) {
    for (const pos of positions) words[pos] = word;
  }
  return words.join(" ").trim();
}

// Đặt tên file chuẩn: TacGia_Nam_TenBai.pdf
function buildStandardFileName(author, year, title) {
  const cleanAuthor = (author || "Author").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "");
  const cleanTitle = (title || "Paper")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 7)
    .join("_");
  return `${cleanAuthor}_${year || "Year"}_${cleanTitle}.pdf`;
}

// ==========================================
// 2. ĐỐI CHIẾU SCOPUS / SCIMAGO QUARTILE
// ==========================================
function handleScopusCsvUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    // Dùng SheetJS để parse CSV (hỗ trợ cả dấu phẩy và chấm phẩy của SCImago)
    const workbook = XLSX.read(text, { type: "string" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    let count = 0;
    rows.forEach(row => {
      const title = (row["Title"] || row["Source title"] || row["Journal"] || "").toString().trim();
      const issnRaw = (row["Issn"] || row["ISSN"] || row["EISSN"] || "").toString();
      const quartile = (row["SJR Best Quartile"] || row["Quartile"] || row["Q"] || "").toString().trim().toUpperCase();
      const sjr = (row["SJR"] || "").toString().trim();

      const info = { quartile: quartile || "Scopus", sjr, title };

      // Tách nhiều ISSN (SCImago thường ghi dạng "12345678, 87654321")
      issnRaw.split(/[,;\s]+/).forEach(code => {
        const cleanIssn = code.replace(/[^0-9Xx]/g, "").toUpperCase();
        if (cleanIssn.length === 8) {
          scopusMap[`ISSN:${cleanIssn}`] = info;
        }
      });

      if (title) {
        scopusMap[`TITLE:${title.toLowerCase()}`] = info;
        count++;
      }
    });

    localStorage.setItem("rw_scopus_map", JSON.stringify(scopusMap));
    updateScopusDbStatus();

    if (papers.length > 0) {
      papers.forEach(p => matchScopusForPaper(p));
      savePapers();
      renderPapersTable();
    }
    alert(`Đã nạp thành công ${count} tạp chí vào bộ nhớ đối chiếu!`);
  };
  reader.readAsText(file);
}

function matchScopusForPaper(paper) {
  let matched = null;
  const issns = (paper.issn || "").split(/[,;\s]+/);
  for (const raw of issns) {
    const clean = raw.replace(/[^0-9Xx]/g, "").toUpperCase();
    if (clean && scopusMap[`ISSN:${clean}`]) {
      matched = scopusMap[`ISSN:${clean}`];
      break;
    }
  }
  if (!matched && paper.journal) {
    matched = scopusMap[`TITLE:${paper.journal.toLowerCase().trim()}`] || null;
  }

  if (matched) {
    paper.scopusQuartile = matched.quartile;
    paper.sjrScore = matched.sjr;
  } else {
    paper.scopusQuartile = "";
    paper.sjrScore = "";
  }
}

function updateScopusDbStatus() {
  const keys = Object.keys(scopusMap).filter(k => k.startsWith("TITLE:"));
  const el = document.getElementById("scopusDbStatus");
  el.textContent = keys.length > 0
    ? `Đang lưu trữ ${keys.length.toLocaleString()} tạp chí trong bộ nhớ đối chiếu cục bộ.`
    : "Chưa nạp danh mục tạp chí nào.";
}

// ==========================================
// 3. RENDER TABLE & TẢI PDF TÊN CHUẨN
// ==========================================
function getFilteredPapers() {
  const q = document.getElementById("filterText").value.toLowerCase().trim();
  const qFilter = document.getElementById("filterQuartile").value;
  const selFilter = document.getElementById("filterSelected").value;

  return papers.filter(p => {
    if (q) {
      const hay = `${p.title} ${p.authors} ${p.journal}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (qFilter !== "ALL") {
      if (qFilter === "SCOPUS" && !p.scopusQuartile) return false;
      if (["Q1", "Q2", "Q3", "Q4"].includes(qFilter) && p.scopusQuartile !== qFilter) return false;
    }
    if (selFilter === "SELECTED" && !p.selected) return false;
    if (selFilter === "UNSELECTED" && p.selected) return false;
    return true;
  });
}

function renderPapersTable() {
  const tbody = document.getElementById("papersTbody");
  const list = getFilteredPapers();
  updateStats();

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-row">Không có bài báo nào khớp bộ lọc.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(p => {
    const qBadge = p.scopusQuartile
      ? `<span class="tag tag-${p.scopusQuartile.toLowerCase()}">${p.scopusQuartile}</span>`
      : `<span style="color:#94a3b8;font-size:12px;">-</span>`;

    const pdfBtn = p.pdfUrl
      ? `<button class="link-btn pdf" onclick="downloadNamedPdf('${p.id}')">Tải PDF chuẩn</button>`
      : `<span style="font-size:11px;color:#94a3b8;">Khóa</span>`;

    const doiBtn = p.doi
      ? `<a class="link-btn" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI</a>`
      : "";

    return `
      <tr>
        <td><input type="checkbox" ${p.selected ? "checked" : ""} onchange="togglePaperSelect('${p.id}', this.checked)" /></td>
        <td><strong>${p.year}</strong></td>
        <td>
          <span class="paper-title">${escapeHtml(p.title)}</span>
          <span class="paper-authors">${escapeHtml(p.authors.slice(0, 140))}${p.authors.length > 140 ? "..." : ""}</span>
        </td>
        <td>
          <div>${escapeHtml(p.journal || "-")}</div>
          <div style="font-size:11px;color:#64748b;">${p.issnL ? "ISSN: " + p.issnL : ""}</div>
        </td>
        <td>${qBadge}</td>
        <td>${p.citations}</td>
        <td>${pdfBtn}${doiBtn}</td>
      </tr>
    `;
  }).join("");
}

window.togglePaperSelect = function(id, checked) {
  const p = papers.find(item => item.id === id);
  if (p) {
    p.selected = checked;
    savePapers();
    renderMatrixTable();
  }
};

// Tải PDF và đặt tên chuẩn; nếu server nguồn chặn CORS thì mở tab mới + copy tên file chuẩn vào clipboard
window.downloadNamedPdf = async function(id) {
  const p = papers.find(item => item.id === id);
  if (!p || !p.pdfUrl) return;

  try {
    const res = await fetch(p.pdfUrl);
    if (!res.ok) throw new Error("CORS or HTTP blocked");
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = p.standardFileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    // Fallback khi server tạp chí chặn CORS tải ngầm từ trình duyệt
    navigator.clipboard?.writeText(p.standardFileName);
    window.open(p.pdfUrl, "_blank");
    alert(`Nguồn tạp chí chặn tải trực tiếp qua trình duyệt nên đã mở PDF ở tab mới.\nTên file chuẩn đã được copy vào Clipboard:\n${p.standardFileName}`);
  }
};

function updateStats() {
  document.getElementById("statTotal").textContent = papers.length;
  document.getElementById("statOA").textContent = papers.filter(p => p.pdfUrl).length;
  document.getElementById("statScopus").textContent = papers.filter(p => p.scopusQuartile).length;
  const selCount = papers.filter(p => p.selected).length;
  document.getElementById("statSelected").textContent = selCount;
  document.getElementById("aiSelectedCount").textContent = selCount;
}

// ==========================================
// 4. AI TÓM TẮT & LẬP MA TRẬN TÀI LIỆU
// ==========================================
function renderMatrixTable() {
  const tbody = document.getElementById("matrixTbody");
  const selectedPapers = papers.filter(p => p.selected);

  if (selectedPapers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Chưa có bài nào được chọn. Hãy tick chọn bài ở Tab 1.</td></tr>`;
    return;
  }

  tbody.innerHTML = selectedPapers.map(p => `
    <tr>
      <td><strong>${escapeHtml(p.firstAuthor)} (${p.year})</strong><br><span style="font-size:11px;color:#64748b;">${escapeHtml(p.journal)}</span></td>
      <td>${escapeHtml(p.title)}</td>
      <td>${escapeHtml(p.aiSummary || (p.abstract ? "[Chưa chạy AI]" : "[Không có Abstract]"))}</td>
      <td>${escapeHtml(p.aiMethod || "-")}</td>
      <td>${escapeHtml(p.aiFindings || "-")}</td>
      <td>${escapeHtml(p.aiGap || "-")}</td>
    </tr>
  `).join("");
}

async function runAiMatrixAnalysis() {
  if (!settings.apiKey) {
    alert("Bạn chưa nhập API Key! Vui lòng vào Tab 4 (Cấu Hình AI & Dữ Liệu) để nhập API Key trước.");
    return;
  }

  const targets = papers.filter(p => p.selected && p.abstract);
  if (targets.length === 0) {
    alert("Không có bài đã chọn nào có dữ liệu Abstract để phân tích!");
    return;
  }

  stopAiFlag = false;
  const btnRun = document.getElementById("btnRunAiMatrix");
  const btnStop = document.getElementById("btnStopAi");
  const statusEl = document.getElementById("aiStatus");
  btnRun.disabled = true;
  btnStop.disabled = false;

  for (let i = 0; i < targets.length; i++) {
    if (stopAiFlag) {
      statusEl.textContent = `Đã dừng ở bài ${i}/${targets.length}.`;
      break;
    }
    const p = targets[i];
    statusEl.textContent = `Đang phân tích bài ${i + 1}/${targets.length}: ${p.title.slice(0, 50)}...`;

    try {
      const result = await callAiExtractMatrix(p);
      p.aiSummary = result.summary || "";
      p.aiMethod = result.method || "";
      p.aiFindings = result.findings || "";
      p.aiGap = result.gap || "";
      savePapers();
      renderMatrixTable();
    } catch (err) {
      console.error(err);
      p.aiSummary = `Lỗi AI: ${err.message}`;
      renderMatrixTable();
    }
  }

  btnRun.disabled = false;
  btnStop.disabled = true;
  if (!stopAiFlag) statusEl.textContent = `Hoàn tất phân tích ${targets.length} bài báo!`;
}

async function callAiExtractMatrix(paper) {
  const prompt = `Bạn là trợ lý nghiên cứu khoa học. Hãy đọc tiêu đề và tóm tắt (Abstract) bài báo dưới đây, sau đó trả về đúng định dạng JSON (không bọc markdown \`\`\`json) gồm 4 trường bằng tiếng Việt học thuật, súc tích:
{
  "summary": "Tóm tắt mục tiêu và bối cảnh nghiên cứu trong 2-3 câu",
  "method": "Phương pháp nghiên cứu, mô hình, biến số hoặc cỡ mẫu dữ liệu",
  "findings": "Kết quả và phát hiện chính của nghiên cứu",
  "gap": "Hạn chế hoặc khoảng trống nghiên cứu có thể khai thác tiếp"
}

Tiêu đề: ${paper.title}
Abstract: ${paper.abstract}`;

  if (settings.provider === "gemini") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${settings.model}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if (!res.ok) throw new Error(`Gemini HTTP ${res.status}`);
    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    return JSON.parse(rawText);
  } else {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${settings.apiKey}`
      },
      body: JSON.stringify({
        model: settings.model,
        response_format: { type: "json_object" },
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!res.ok) throw new Error(`OpenAI HTTP ${res.status}`);
    const data = await res.json();
    return JSON.parse(data.choices[0].message.content);
  }
}

// ==========================================
// 5. XUẤT EXCEL TỔNG HỢP & LƯU DỰ ÁN
// ==========================================
function exportToExcel() {
  if (papers.length === 0) return alert("Chưa có dữ liệu để xuất Excel!");

  const wb = XLSX.utils.book_new();

  // Sheet 1: Toàn bộ tài liệu đã quét & đối chiếu Scopus/Q
  const sheet1Data = papers.map((p, idx) => ({
    "STT": idx + 1,
    "Chọn": p.selected ? "x" : "",
    "Năm": p.year,
    "Tác giả": p.authors,
    "Tên bài báo": p.title,
    "Tạp chí": p.journal,
    "ISSN": p.issnL || p.issn,
    "Hạng Scopus/Q": p.scopusQuartile || "Chưa khớp",
    "SJR": p.sjrScore,
    "Số trích dẫn": p.citations,
    "DOI": p.doi ? `https://doi.org/${p.doi}` : "",
    "Link PDF Mở": p.pdfUrl,
    "Tên file PDF chuẩn": p.standardFileName,
    "Abstract": p.abstract
  }));
  const ws1 = XLSX.utils.json_to_sheet(sheet1Data);
  XLSX.utils.book_append_sheet(wb, ws1, "Tong_hop_tai_lieu");

  // Sheet 2: Ma trận tài liệu (Các bài đã chọn + Phân tích AI)
  const selected = papers.filter(p => p.selected);
  const sheet2Data = (selected.length > 0 ? selected : papers).map((p, idx) => ({
    "STT": idx + 1,
    "Tác giả (Năm)": `${p.firstAuthor} (${p.year})`,
    "Tên bài báo": p.title,
    "Tạp chí & Hạng Q": `${p.journal} ${p.scopusQuartile ? "(" + p.scopusQuartile + ")" : ""}`,
    "Tóm tắt (AI)": p.aiSummary,
    "Phương pháp & Dữ liệu (AI)": p.aiMethod,
    "Phát hiện chính (AI)": p.aiFindings,
    "Khoảng trống nghiên cứu (AI)": p.aiGap,
    "DOI": p.doi ? `https://doi.org/${p.doi}` : ""
  }));
  const ws2 = XLSX.utils.json_to_sheet(sheet2Data);
  XLSX.utils.book_append_sheet(wb, ws2, "Ma_tran_tai_lieu");

  const fileName = `Tong_hop_tai_lieu_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

function exportProjectJson() {
  const blob = new Blob([JSON.stringify({ papers, exportedAt: new Date().toISOString() }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `research_project_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProjectJson(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data.papers)) {
        papers = data.papers;
        savePapers();
        renderPapersTable();
        renderMatrixTable();
        alert(`Đã nạp thành công ${papers.length} bài báo từ file dự án!`);
      }
    } catch (err) {
      alert("File JSON không hợp lệ!");
    }
  };
  reader.readAsText(file);
}

function escapeHtml(str) {
  return (str || "").toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
