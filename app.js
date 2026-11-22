// ==========================================
// STATE & LOCAL STORAGE
// ==========================================
let papers = [];
let scopusMap = {}; // key: "I:ISSN" hoặc "T:title" -> { q, sjr }
let settings = {
  provider: "gemini",
  model: "gemini-2.5-flash",
  apiKey: "",
  email: ""
};
let stopAiFlag = false;

try {
  papers = JSON.parse(localStorage.getItem("rw_papers") || "[]");
} catch (e) {
  papers = [];
}

try {
  scopusMap = JSON.parse(localStorage.getItem("rw_scopus_map") || "{}");
} catch (e) {
  scopusMap = {};
}

try {
  const savedSettings = JSON.parse(localStorage.getItem("rw_settings") || "null");
  if (savedSettings && typeof savedSettings === "object") {
    settings = { ...settings, ...savedSettings };
  }
} catch (e) {}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  ensureLanguageFilterUI();
  upgradeQuartileFilterUI();
  loadSettingsUI();
  updateScopusDbStatus();
  renderPapersTable();
  renderMatrixTable();
  bindEvents();
});

function ensureLanguageFilterUI() {
  const onlyOaEl = document.getElementById("onlyOpenAccess");
  if (!onlyOaEl || document.getElementById("searchLanguage")) return;

  const wrapper = document.createElement("div");
  wrapper.className = "form-group";
  wrapper.style.marginTop = "10px";
  wrapper.innerHTML = `
    <label for="searchLanguage">Ngôn ngữ tài liệu (OpenAlex)</label>
    <select id="searchLanguage">
      <option value="ALL">Tất cả ngôn ngữ</option>
      <option value="vi">Tiếng Việt (vi)</option>
      <option value="en">Tiếng Anh (en)</option>
    </select>
  `;
  onlyOaEl.parentElement?.insertAdjacentElement("afterend", wrapper);
}

function upgradeQuartileFilterUI() {
  const selectEl = document.getElementById("filterQuartile");
  if (!selectEl) return;

  const currentVal = selectEl.value || "ALL";
  selectEl.innerHTML = `
    <option value="ALL">Tất cả hạng Q</option>
    <option value="Q1_Q2">Nhóm nền tảng: Q1 + Q2</option>
    <option value="Q1_Q2_Q3">Nhóm mở rộng: Q1 + Q2 + Q3</option>
    <option value="Q3_Q4">Nhóm bổ sung: Q3 + Q4</option>
    <option value="Q1">Chỉ Q1</option>
    <option value="Q2">Chỉ Q2</option>
    <option value="Q3">Chỉ Q3</option>
    <option value="Q4">Chỉ Q4</option>
    <option value="SCOPUS">Có trong danh mục Scopus</option>
    <option value="NO_Q">Chưa có hạng Q / Ngoài Scopus</option>
  `;

  if ([...selectEl.options].some((opt) => opt.value === currentVal)) {
    selectEl.value = currentVal;
  }
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

function loadSettingsUI() {
  const providerEl = document.getElementById("aiProvider");
  const modelEl = document.getElementById("aiModel");
  const apiKeyEl = document.getElementById("aiApiKey");
  const emailEl = document.getElementById("userEmail");

  if (providerEl) providerEl.value = settings.provider || "gemini";
  if (modelEl) modelEl.value = settings.model || "gemini-2.5-flash";
  if (apiKeyEl) apiKeyEl.value = settings.apiKey || "";
  if (emailEl) emailEl.value = settings.email || "";
}

function savePapers() {
  try {
    localStorage.setItem("rw_papers", JSON.stringify(papers));
  } catch (e) {
    console.warn("Không lưu được rw_papers vào localStorage:", e);
  }
  updateStats();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ==========================================
// EVENT BINDINGS
// ==========================================
function bindEvents() {
  document.getElementById("btnRunSearch")?.addEventListener("click", runOpenAlexSearch);
  document.getElementById("filterText")?.addEventListener("input", renderPapersTable);
  document.getElementById("filterQuartile")?.addEventListener("change", renderPapersTable);
  document.getElementById("filterSelected")?.addEventListener("change", renderPapersTable);

  document.getElementById("checkAllHeader")?.addEventListener("change", (e) => {
    const visibleIds = new Set(getFilteredPapers().map((p) => p.id));
    papers.forEach((p) => {
      if (visibleIds.has(p.id)) p.selected = e.target.checked;
    });
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  document.getElementById("btnSelectAllVisible")?.addEventListener("click", () => {
    const visibleIds = new Set(getFilteredPapers().map((p) => p.id));
    papers.forEach((p) => {
      if (visibleIds.has(p.id)) p.selected = true;
    });
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  document.getElementById("btnDeselectAll")?.addEventListener("click", () => {
    papers.forEach((p) => {
      p.selected = false;
    });
    savePapers();
    renderPapersTable();
    renderMatrixTable();
  });

  // Scopus CSV Upload
  document.getElementById("inputScopusCsv")?.addEventListener("change", handleScopusCsvUpload);
  document.getElementById("btnReMatchScopus")?.addEventListener("click", () => {
    papers.forEach((p) => matchScopusForPaper(p));
    savePapers();
    renderPapersTable();
    alert("Đã đối chiếu lại toàn bộ danh sách với dữ liệu Scopus/Q!");
  });
  document.getElementById("btnClearScopus")?.addEventListener("click", () => {
    scopusMap = {};
    localStorage.removeItem("rw_scopus_map");
    updateScopusDbStatus();
    papers.forEach((p) => matchScopusForPaper(p));
    savePapers();
    renderPapersTable();
  });

  // AI Matrix
  document.getElementById("btnRunAiMatrix")?.addEventListener("click", runAiMatrixAnalysis);
  document.getElementById("btnStopAi")?.addEventListener("click", () => {
    stopAiFlag = true;
  });

  // Settings
  document.getElementById("aiProvider")?.addEventListener("change", (e) => {
    const modelInput = document.getElementById("aiModel");
    if (modelInput) {
      modelInput.value = e.target.value === "gemini" ? "gemini-2.5-flash" : "gpt-4o-mini";
    }
  });

  document.getElementById("btnSaveSettings")?.addEventListener("click", () => {
    settings = {
      provider: document.getElementById("aiProvider")?.value || "gemini",
      model: (document.getElementById("aiModel")?.value || "gemini-2.5-flash").trim(),
      apiKey: (document.getElementById("aiApiKey")?.value || "").trim(),
      email: (document.getElementById("userEmail")?.value || "").trim()
    };
    try {
      localStorage.setItem("rw_settings", JSON.stringify(settings));
    } catch (e) {}
    const statusEl = document.getElementById("settingsStatus");
    if (statusEl) statusEl.textContent = "Đã lưu cấu hình thành công!";
  });

  // Export / Import
  document.getElementById("btnExportExcel")?.addEventListener("click", exportToExcel);
  document.getElementById("btnExportJson")?.addEventListener("click", exportProjectJson);
  document.getElementById("inputImportJson")?.addEventListener("change", importProjectJson);
}

// ==========================================
// 1. OPENALEX SEARCH & DEDUPLICATION
// ==========================================
async function runOpenAlexSearch() {
  const queryInput = document.getElementById("searchQuery");
  const query = (queryInput?.value || "").trim();
  if (!query) {
    alert("Vui lòng nhập chủ đề hoặc từ khóa tìm kiếm!");
    return;
  }

  const yearFrom = document.getElementById("yearFrom")?.value || "2020";
  const yearTo = document.getElementById("yearTo")?.value || "2026";
  const maxResults = parseInt(document.getElementById("maxResults")?.value || "100", 10);
  const sortBy = document.getElementById("sortBy")?.value || "cited_by_count:desc";
  const minCitations = parseInt(document.getElementById("minCitations")?.value || "0", 10);
  const onlyOA = document.getElementById("onlyOpenAccess")?.value === "oa";
  const lang = document.getElementById("searchLanguage")?.value || "ALL";

  const statusEl = document.getElementById("searchStatus");
  const btn = document.getElementById("btnRunSearch");
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = "Đang kết nối OpenAlex API...";

  let fetched = [];
  let cursor = "*";
  const perPage = 100;
  let stoppedByLimit = false;

  try {
    while (fetched.length < maxResults && cursor) {
      const filters = [`publication_year:${yearFrom}-${yearTo}`, "type:article"];
      if (minCitations > 0) filters.push(`cited_by_count:>${minCitations - 1}`);
      if (onlyOA) filters.push("is_oa:true");
      if (lang !== "ALL") filters.push(`language:${lang}`);

      let url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=${filters.join(",")}&sort=${sortBy}&per-page=${perPage}&cursor=${encodeURIComponent(cursor)}`;
      if (settings.email) url += `&mailto=${encodeURIComponent(settings.email)}`;

      let res = await fetch(url);
      if (res.status === 429) {
        if (statusEl) statusEl.textContent = "OpenAlex giới hạn tạm thời (HTTP 429), đang đợi 5 giây thử lại...";
        await sleep(5000);
        res = await fetch(url);
      }

      if (!res.ok) {
        if ((res.status === 401 || res.status === 429) && fetched.length > 0) {
          stoppedByLimit = true;
          break;
        }
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();

      if (!data.results || data.results.length === 0) break;
      fetched = fetched.concat(data.results);
      cursor = data.meta?.next_cursor || null;
      if (statusEl) {
        statusEl.textContent = `Đã quét ${Math.min(fetched.length, maxResults)} / ${maxResults} bài...`;
      }
    }

    fetched = fetched.slice(0, maxResults);

    const seen = new Set();
    const cleaned = [];

    for (const w of fetched) {
      const doi = w.doi ? w.doi.replace("https://doi.org/", "").toLowerCase().trim() : "";
      const normTitle = (w.title || "").toLowerCase().replace(/[^a-z0-9\u00C0-\u1EF9]/g, "");
      const dedupKey = doi || normTitle;
      if (!dedupKey || seen.has(dedupKey)) continue;
      seen.add(dedupKey);

      const authorsList = (w.authorships || []).map((a) => a.author?.display_name).filter(Boolean);
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
    if (statusEl) {
      statusEl.textContent = stoppedByLimit
        ? `Hoàn tất một phần! Thu được ${papers.length} bài (do giới hạn tần suất/phân trang của OpenAlex).`
        : `Hoàn tất! Thu được ${papers.length} bài báo sau khi lọc trùng.`;
    }
  } catch (err) {
    console.error(err);
    if (statusEl) statusEl.textContent = `Lỗi khi quét dữ liệu: ${err.message}`;
  } finally {
    if (btn) btn.disabled = false;
  }
}

function reconstructAbstract(invertedIndex) {
  if (!invertedIndex) return "";
  const words = [];
  for (const [word, positions] of Object.entries(invertedIndex)) {
    for (const pos of positions) words[pos] = word;
  }
  return words.join(" ").trim();
}

function buildStandardFileName(author, year, title) {
  const cleanAuthor = (author || "Author")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
  const cleanTitle = (title || "Paper")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
function parseCsvLine(line, delimiter = ",") {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    const nextCh = line[i + 1];

    if (ch === '"') {
      if (inQuotes && nextCh === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === delimiter && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

function detectDelimiter(headerLine) {
  const commas = (headerLine.match(/,/g) || []).length;
  const semis = (headerLine.match(/;/g) || []).length;
  return semis > commas ? ";" : ",";
}

function handleScopusCsvUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const statusEl = document.getElementById("scopusDbStatus");
  if (statusEl) statusEl.textContent = `Đang đọc file "${file.name}"...`;

  const reader = new FileReader();
  reader.onerror = function () {
    alert("Không đọc được file từ thiết bị. Hãy kiểm tra lại quyền truy cập file.");
    updateScopusDbStatus();
  };

  reader.onload = function (evt) {
    try {
      const rawText = (evt.target.result || "").replace(/^\uFEFF/, "");
      const lines = rawText.split(/\r?\n/).filter((l) => l.trim().length > 0);
      if (lines.length < 2) {
        alert("File CSV rỗng hoặc không có dữ liệu.");
        updateScopusDbStatus();
        return;
      }

      const delimiter = detectDelimiter(lines[0]);
      const headers = parseCsvLine(lines[0], delimiter).map((h) =>
        h.replace(/^["']|["']$/g, "").trim().toLowerCase()
      );

      const idxTitle = headers.findIndex((h) => ["title", "source title", "journal"].includes(h));
      const idxIssn = headers.findIndex((h) => ["issn", "eissn"].includes(h));
      const idxQ = headers.findIndex((h) => ["sjr best quartile", "quartile", "q"].includes(h));
      const idxSjr = headers.findIndex((h) => h === "sjr");

      if (idxTitle === -1 && idxIssn === -1) {
        alert("Không tìm thấy cột Title hoặc Issn trong file CSV.");
        updateScopusDbStatus();
        return;
      }

      const nextMap = {};
      let count = 0;

      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i], delimiter);
        const title = idxTitle !== -1 ? (cols[idxTitle] || "").replace(/^["']|["']$/g, "").trim() : "";
        const issnRaw = idxIssn !== -1 ? (cols[idxIssn] || "").replace(/^["']|["']$/g, "").trim() : "";
        const quartile = idxQ !== -1 ? (cols[idxQ] || "").replace(/^["']|["']$/g, "").trim().toUpperCase() : "";
        const sjr = idxSjr !== -1 ? (cols[idxSjr] || "").replace(/^["']|["']$/g, "").trim() : "";

        if (!title && !issnRaw) continue;

        const info = {
          q: quartile || "SCOPUS",
          sjr: sjr
        };

        if (issnRaw) {
          issnRaw.split(/[,;\s/]+/).forEach((code) => {
            const cleanIssn = code.replace(/[^0-9Xx]/g, "").toUpperCase();
            if (cleanIssn.length === 8) {
              nextMap[`I:${cleanIssn}`] = info;
            }
          });
        }

        if (title) {
          nextMap[`T:${title.toLowerCase()}`] = info;
          count++;
        }
      }

      if (count === 0 && Object.keys(nextMap).length === 0) {
        alert("Đọc file xong nhưng không có dòng tạp chí hợp lệ nào.");
        updateScopusDbStatus();
        return;
      }

      let savedToStorage = true;
      try {
        localStorage.setItem("rw_scopus_map", JSON.stringify(nextMap));
      } catch (storageErr) {
        savedToStorage = false;
      }

      scopusMap = nextMap;
      updateScopusDbStatus(savedToStorage ? "localStorage" : "memory");

      if (papers.length > 0) {
        papers.forEach((p) => matchScopusForPaper(p));
        savePapers();
        renderPapersTable();
      }

      e.target.value = "";
      alert(`Đã nạp thành công ${count.toLocaleString()} tạp chí!`);
    } catch (err) {
      console.error(err);
      alert(`Lỗi khi xử lý file CSV: ${err.message}`);
      updateScopusDbStatus();
    }
  };

  reader.readAsText(file, "UTF-8");
}

function matchScopusForPaper(paper) {
  let matched = null;
  const issns = (paper.issn || "").split(/[,;\s]+/);
  for (const raw of issns) {
    const clean = raw.replace(/[^0-9Xx]/g, "").toUpperCase();
    if (clean && scopusMap[`I:${clean}`]) {
      matched = scopusMap[`I:${clean}`];
      break;
    }
  }
  if (!matched && paper.journal) {
    matched = scopusMap[`T:${paper.journal.toLowerCase().trim()}`] || null;
  }

  if (matched) {
    paper.scopusQuartile = matched.q;
    paper.sjrScore = matched.sjr;
  } else {
    paper.scopusQuartile = "";
    paper.sjrScore = "";
  }
}

function updateScopusDbStatus(mode = "localStorage") {
  const keys = Object.keys(scopusMap || {}).filter((k) => k.startsWith("T:"));
  const el = document.getElementById("scopusDbStatus");
  if (!el) return;

  if (keys.length > 0) {
    const suffix =
      mode === "memory"
        ? " (đang giữ trên phiên trình duyệt hiện tại do file lớn, tải lại trang sẽ cần nạp lại)."
        : " trong bộ nhớ đối chiếu cục bộ.";
    el.textContent = `Đang lưu trữ ${keys.length.toLocaleString()} tạp chí${suffix}`;
  } else {
    el.textContent = "Chưa nạp danh mục tạp chí nào.";
  }
}

// ==========================================
// 3. RENDER TABLE & TẢI PDF TÊN CHUẨN
// ==========================================
function getFilteredPapers() {
  const q = (document.getElementById("filterText")?.value || "").toLowerCase().trim();
  const qFilter = document.getElementById("filterQuartile")?.value || "ALL";
  const selFilter = document.getElementById("filterSelected")?.value || "ALL";

  return papers.filter((p) => {
    if (q) {
      const hay = `${p.title} ${p.authors} ${p.journal}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (qFilter !== "ALL") {
      if (qFilter === "SCOPUS" && !p.scopusQuartile) return false;
      if (qFilter === "NO_Q" && p.scopusQuartile) return false;
      if (qFilter === "Q1_Q2" && !["Q1", "Q2"].includes(p.scopusQuartile)) return false;
      if (qFilter === "Q1_Q2_Q3" && !["Q1", "Q2", "Q3"].includes(p.scopusQuartile)) return false;
      if (qFilter === "Q3_Q4" && !["Q3", "Q4"].includes(p.scopusQuartile)) return false;
      if (["Q1", "Q2", "Q3", "Q4"].includes(qFilter) && p.scopusQuartile !== qFilter) return false;
    }
    if (selFilter === "SELECTED" && !p.selected) return false;
    if (selFilter === "UNSELECTED" && p.selected) return false;
    return true;
  });
}

function renderPapersTable() {
  const tbody = document.getElementById("papersTbody");
  if (!tbody) return;
  const list = getFilteredPapers();
  updateStats();

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-row">Không có bài báo nào khớp bộ lọc.</td></tr>`;
    return;
  }

  tbody.innerHTML = list
    .map((p) => {
      const qClass = ["Q1", "Q2", "Q3", "Q4"].includes(p.scopusQuartile)
        ? `tag-${p.scopusQuartile.toLowerCase()}`
        : "tag-oa";
      const qBadge = p.scopusQuartile
        ? `<span class="tag ${qClass}">${escapeHtml(p.scopusQuartile)}</span>`
        : `<span style="color:#94a3b8;font-size:12px;">-</span>`;

      const pdfBtn = p.pdfUrl
        ? `<button class="link-btn pdf" onclick="downloadNamedPdf('${p.id}')">Tải PDF chuẩn</button>`
        : `<span style="font-size:11px;color:#94a3b8;">Khóa</span>`;

      const doiBtn = p.doi
        ? `<a class="link-btn" href="https://doi.org/${encodeURIComponent(p.doi)}" target="_blank" rel="noopener">DOI</a>`
        : "";

      return `
        <tr>
          <td><input type="checkbox" ${p.selected ? "checked" : ""} onchange="togglePaperSelect('${p.id}', this.checked)" /></td>
          <td><strong>${escapeHtml(p.year)}</strong></td>
          <td>
            <span class="paper-title">${escapeHtml(p.title)}</span>
            <span class="paper-authors">${escapeHtml(p.authors.slice(0, 140))}${p.authors.length > 140 ? "..." : ""}</span>
          </td>
          <td>
            <div>${escapeHtml(p.journal || "-")}</div>
            <div style="font-size:11px;color:#64748b;">${p.issnL ? "ISSN: " + escapeHtml(p.issnL) : ""}</div>
          </td>
          <td>${qBadge}</td>
          <td>${escapeHtml(p.citations)}</td>
          <td>${pdfBtn}${doiBtn}</td>
        </tr>
      `;
    })
    .join("");
}

window.togglePaperSelect = function (id, checked) {
  const p = papers.find((item) => item.id === id);
  if (p) {
    p.selected = checked;
    savePapers();
    renderMatrixTable();
  }
};

window.downloadNamedPdf = async function (id) {
  const p = papers.find((item) => item.id === id);
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
    navigator.clipboard?.writeText(p.standardFileName);
    window.open(p.pdfUrl, "_blank");
    alert(
      `Nguồn tạp chí chặn tải trực tiếp qua trình duyệt nên đã mở PDF ở tab mới.\nTên file chuẩn đã được copy vào Clipboard:\n${p.standardFileName}`
    );
  }
};

function updateStats() {
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const selCount = papers.filter((p) => p.selected).length;
  setText("statTotal", papers.length);
  setText("statOA", papers.filter((p) => p.pdfUrl).length);
  setText("statScopus", papers.filter((p) => p.scopusQuartile).length);
  setText("statSelected", selCount);
  setText("aiSelectedCount", selCount);
}

// ==========================================
// 4. AI TÓM TẮT & LẬP MA TRẬN TÀI LIỆU
// ==========================================
function renderMatrixTable() {
  const tbody = document.getElementById("matrixTbody");
  if (!tbody) return;
  const selectedPapers = papers.filter((p) => p.selected);

  if (selectedPapers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Chưa có bài nào được chọn. Hãy tick chọn bài ở Tab 1.</td></tr>`;
    return;
  }

  tbody.innerHTML = selectedPapers
    .map(
      (p) => `
      <tr>
        <td><strong>${escapeHtml(p.firstAuthor)} (${escapeHtml(p.year)})</strong><br><span style="font-size:11px;color:#64748b;">${escapeHtml(p.journal)}</span></td>
        <td>${escapeHtml(p.title)}</td>
        <td>${escapeHtml(p.aiSummary || (p.abstract ? "[Chưa chạy AI]" : "[Không có Abstract]"))}</td>
        <td>${escapeHtml(p.aiMethod || "-")}</td>
        <td>${escapeHtml(p.aiFindings || "-")}</td>
        <td>${escapeHtml(p.aiGap || "-")}</td>
      </tr>
    `
    )
    .join("");
}

async function runAiMatrixAnalysis() {
  if (!settings.apiKey) {
    alert("Bạn chưa nhập API Key! Vui lòng vào Tab 4 (Cấu Hình AI & Dữ Liệu) để nhập API Key trước.");
    return;
  }

  const targets = papers.filter((p) => p.selected && p.abstract);
  if (targets.length === 0) {
    alert("Không có bài đã chọn nào có dữ liệu Abstract để phân tích!");
    return;
  }

  stopAiFlag = false;
  const btnRun = document.getElementById("btnRunAiMatrix");
  const btnStop = document.getElementById("btnStopAi");
  const statusEl = document.getElementById("aiStatus");
  if (btnRun) btnRun.disabled = true;
  if (btnStop) btnStop.disabled = false;

  const delayBetweenCallsMs = 3500;

  for (let i = 0; i < targets.length; i++) {
    if (stopAiFlag) {
      if (statusEl) statusEl.textContent = `Đã dừng ở bài ${i}/${targets.length}.`;
      break;
    }
    const p = targets[i];
    if (statusEl) {
      statusEl.textContent = `Đang phân tích bài ${i + 1}/${targets.length}: ${p.title.slice(0, 50)}...`;
    }

    try {
      const result = await callAiExtractMatrixWithRetry(p, statusEl, i + 1, targets.length);
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

    if (i < targets.length - 1 && !stopAiFlag) {
      if (statusEl) {
        statusEl.textContent = `Xong bài ${i + 1}/${targets.length}. Đang nghỉ 3,5 giây tránh giới hạn tốc độ API...`;
      }
      await sleep(delayBetweenCallsMs);
    }
  }

  if (btnRun) btnRun.disabled = false;
  if (btnStop) btnStop.disabled = true;
  if (!stopAiFlag && statusEl) {
    statusEl.textContent = `Hoàn tất phân tích ${targets.length} bài báo!`;
  }
}

async function callAiExtractMatrixWithRetry(paper, statusEl, currentIdx, totalCount) {
  try {
    return await callAiExtractMatrix(paper);
  } catch (err) {
    if (err.message.includes("429") && !stopAiFlag) {
      if (statusEl) {
        statusEl.textContent = `API tạm giới hạn tốc độ (429) ở bài ${currentIdx}/${totalCount}. Đang đợi 12 giây để tự thử lại...`;
      }
      await sleep(12000);
      if (!stopAiFlag) {
        return await callAiExtractMatrix(paper);
      }
    }
    throw err;
  }
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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(settings.model)}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
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
        Authorization: `Bearer ${settings.apiKey}`
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
  if (papers.length === 0) {
    alert("Chưa có dữ liệu để xuất Excel!");
    return;
  }
  if (typeof XLSX === "undefined") {
    alert("Thư viện xuất Excel (XLSX) chưa tải xong. Vui lòng kiểm tra kết nối mạng và tải lại trang.");
    return;
  }

  const wb = XLSX.utils.book_new();

  const sheet1Data = papers.map((p, idx) => ({
    STT: idx + 1,
    Chọn: p.selected ? "x" : "",
    Năm: p.year,
    "Tác giả": p.authors,
    "Tên bài báo": p.title,
    "Tạp chí": p.journal,
    ISSN: p.issnL || p.issn,
    "Hạng Scopus/Q": p.scopusQuartile || "Chưa khớp",
    SJR: p.sjrScore,
    "Số trích dẫn": p.citations,
    DOI: p.doi ? `https://doi.org/${p.doi}` : "",
    "Link PDF Mở": p.pdfUrl,
    "Tên file PDF chuẩn": p.standardFileName,
    Abstract: p.abstract
  }));
  const ws1 = XLSX.utils.json_to_sheet(sheet1Data);
  XLSX.utils.book_append_sheet(wb, ws1, "Tong_hop_tai_lieu");

  const selected = papers.filter((p) => p.selected);
  const sheet2Data = (selected.length > 0 ? selected : papers).map((p, idx) => ({
    STT: idx + 1,
    "Tác giả (Năm)": `${p.firstAuthor} (${p.year})`,
    "Tên bài báo": p.title,
    "Tạp chí & Hạng Q": `${p.journal} ${p.scopusQuartile ? "(" + p.scopusQuartile + ")" : ""}`,
    "Tóm tắt (AI)": p.aiSummary,
    "Phương pháp & Dữ liệu (AI)": p.aiMethod,
    "Phát hiện chính (AI)": p.aiFindings,
    "Khoảng trống nghiên cứu (AI)": p.aiGap,
    DOI: p.doi ? `https://doi.org/${p.doi}` : ""
  }));
  const ws2 = XLSX.utils.json_to_sheet(sheet2Data);
  XLSX.utils.book_append_sheet(wb, ws2, "Ma_tran_tai_lieu");

  const fileName = `Tong_hop_tai_lieu_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

function exportProjectJson() {
  const blob = new Blob(
    [JSON.stringify({ papers, exportedAt: new Date().toISOString() }, null, 2)],
    { type: "application/json" }
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `research_project_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProjectJson(e) {
  const file = e.target.files?.[0];
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
      } else {
        alert("File JSON không có danh sách bài báo hợp lệ.");
      }
    } catch (err) {
      alert("File JSON không hợp lệ!");
    }
  };
  reader.readAsText(file, "UTF-8");
}

function escapeHtml(str) {
  return (str ?? "")
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
