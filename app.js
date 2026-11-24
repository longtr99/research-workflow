// ==========================================
// AI PROVIDERS CATALOG (UPDATED 2026)
// ==========================================
const AI_PROVIDERS = {
  gemini: {
    id: "gemini",
    name: "Google Gemini (Khuyên dùng · Có gói miễn phí)",
    shortName: "Google Gemini",
    protocol: "gemini",
    apiKeyPlaceholder: "Nhập Gemini API Key (bắt đầu bằng AIza...)",
    keyUrl: "https://aistudio.google.com/apikey",
    keyLinkLabel: "Tạo Gemini API Key miễn phí tại aistudio.google.com/apikey ↗",
    defaultModel: "gemini-2.5-flash",
    canFetchLiveModels: true,
    models: [
      { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash (Khuyên dùng · Nhanh & Miễn phí)" },
      { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro (Chuyên sâu)" },
      { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite (Siêu nhẹ)" },
      { id: "gemini-3.8-flash", label: "Gemini 3.8 Flash (Mới nhất · 1M context)" },
      { id: "gemini-3.5-flash", label: "Gemini 3.5 Flash" },
      { id: "gemini-3.5-flash-lite", label: "Gemini 3.5 Flash-Lite" },
      { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro Preview" },
      { id: "gemini-4-hydrogen", label: "Gemini 4 Hydrogen (Thế hệ 4 · Nhanh)" },
      { id: "gemini-4-argon", label: "Gemini 4 Argon (Thế hệ 4 · Suy luận sâu)" },
      { id: "gemini-4-carbon", label: "Gemini 4 Carbon (Thế hệ 4 · Cao cấp nhất)" },
      { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
      { id: "gemini-2.0-flash-lite", label: "Gemini 2.0 Flash-Lite" }
    ]
  },
  openai: {
    id: "openai",
    name: "OpenAI (ChatGPT / GPT-6 / GPT-5 / GPT-4o)",
    shortName: "OpenAI",
    protocol: "openai",
    baseUrl: "https://api.openai.com/v1",
    apiKeyPlaceholder: "Nhập OpenAI API Key (bắt đầu bằng sk-...)",
    keyUrl: "https://platform.openai.com/api-keys",
    keyLinkLabel: "Lấy API Key tại platform.openai.com ↗",
    defaultModel: "gpt-4o-mini",
    canFetchLiveModels: true,
    models: [
      { id: "gpt-6.2-astra", label: "GPT-6.2 Astra (Cao cấp nhất · Suy luận sâu)" },
      { id: "gpt-6.2-sol", label: "GPT-6.2 Sol (Cân bằng hiệu năng & chi phí)" },
      { id: "gpt-6.1-sol", label: "GPT-6.1 Sol" },
      { id: "gpt-6.1-terra", label: "GPT-6.1 Terra (Nhanh & tiết kiệm)" },
      { id: "gpt-6-luna", label: "GPT-6 Luna (Siêu nhẹ)" },
      { id: "gpt-5", label: "GPT-5" },
      { id: "gpt-5-mini", label: "GPT-5 Mini" },
      { id: "gpt-5-nano", label: "GPT-5 Nano" },
      { id: "gpt-4.1", label: "GPT-4.1" },
      { id: "gpt-4.1-mini", label: "GPT-4.1 Mini" },
      { id: "gpt-4.1-nano", label: "GPT-4.1 Nano" },
      { id: "gpt-4o", label: "GPT-4o" },
      { id: "gpt-4o-mini", label: "GPT-4o Mini (Phổ biến · Tiết kiệm)" },
      { id: "o4-mini", label: "o4-mini (Reasoning)" },
      { id: "o3", label: "o3 (Reasoning)" },
      { id: "o3-mini", label: "o3-mini (Reasoning)" }
    ]
  },
  openrouter: {
    id: "openrouter",
    name: "OpenRouter (Đa nhà cung cấp · Nhiều model miễn phí)",
    shortName: "OpenRouter",
    protocol: "openai",
    baseUrl: "https://openrouter.ai/api/v1",
    apiKeyPlaceholder: "Nhập OpenRouter API Key (bắt đầu bằng sk-or-v1-...)",
    keyUrl: "https://openrouter.ai/keys",
    keyLinkLabel: "Tạo OpenRouter API Key tại openrouter.ai/keys ↗",
    defaultModel: "google/gemini-2.5-flash",
    canFetchLiveModels: true,
    publicModelsEndpoint: true,
    models: [
      { id: "google/gemini-2.5-flash", label: "Google: Gemini 2.5 Flash" },
      { id: "google/gemini-2.5-pro", label: "Google: Gemini 2.5 Pro" },
      { id: "google/gemini-3.8-flash", label: "Google: Gemini 3.8 Flash" },
      { id: "google/gemini-2.0-flash-exp:free", label: "Google: Gemini 2.0 Flash Exp (Miễn phí :free)" },
      { id: "openai/gpt-4o-mini", label: "OpenAI: GPT-4o Mini" },
      { id: "openai/gpt-5-mini", label: "OpenAI: GPT-5 Mini" },
      { id: "openai/gpt-6.2-sol", label: "OpenAI: GPT-6.2 Sol" },
      { id: "anthropic/claude-sonnet-5-5", label: "Anthropic: Claude Sonnet 5.5" },
      { id: "anthropic/claude-haiku-5-5", label: "Anthropic: Claude Haiku 5.5" },
      { id: "anthropic/claude-opus-5-5", label: "Anthropic: Claude Opus 5.5" },
      { id: "anthropic/claude-sonnet-4", label: "Anthropic: Claude Sonnet 4" },
      { id: "deepseek/deepseek-chat-v3-0324:free", label: "DeepSeek: V3 Chat (Miễn phí :free)" },
      { id: "deepseek/deepseek-r1:free", label: "DeepSeek: R1 Reasoning (Miễn phí :free)" },
      { id: "deepseek/deepseek-flash", label: "DeepSeek: V4 Flash" },
      { id: "meta-llama/llama-3.3-70b-instruct:free", label: "Meta: Llama 3.3 70B (Miễn phí :free)" },
      { id: "meta-llama/llama-4-maverick:free", label: "Meta: Llama 4 Maverick (Miễn phí :free)" },
      { id: "qwen/qwen3-235b-a22b:free", label: "Qwen: Qwen3 235B (Miễn phí :free)" },
      { id: "qwen/qwen3.6-plus", label: "Qwen: Qwen 3.6 Plus" },
      { id: "x-ai/grok-4.7", label: "xAI: Grok 4.7" },
      { id: "mistralai/mistral-small-4", label: "Mistral: Small 4" },
      { id: "mistralai/mistral-large-4", label: "Mistral: Large 4" },
      { id: "perplexity/sonar-pro", label: "Perplexity: Sonar Pro" },
      { id: "perplexity/sonar-deep-research", label: "Perplexity: Sonar Deep Research" },
      { id: "openrouter/auto", label: "OpenRouter Auto (Tự chọn model tối ưu)" }
    ]
  },
  anthropic: {
    id: "anthropic",
    name: "Anthropic Claude (Claude 5.5 / Fable / 4.5 / 4)",
    shortName: "Anthropic Claude",
    protocol: "anthropic",
    baseUrl: "https://api.anthropic.com/v1",
    apiKeyPlaceholder: "Nhập Anthropic API Key (bắt đầu bằng sk-ant-...)",
    keyUrl: "https://console.anthropic.com/settings/keys",
    keyLinkLabel: "Lấy API Key tại console.anthropic.com ↗",
    defaultModel: "claude-sonnet-5-5",
    canFetchLiveModels: true,
    models: [
      { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5 (Cân bằng · Khuyên dùng)" },
      { id: "claude-opus-5-5", label: "Claude Opus 5.5 (Chuyên sâu mạnh nhất)" },
      { id: "claude-haiku-5-5", label: "Claude Haiku 5.5 (Nhanh & tiết kiệm)" },
      { id: "claude-fable-5-2", label: "Claude Fable 5.2 (Nghiên cứu đa tài liệu)" },
      { id: "claude-sonnet-4-5", label: "Claude Sonnet 4.5" },
      { id: "claude-opus-4-5", label: "Claude Opus 4.5" },
      { id: "claude-haiku-4-5", label: "Claude Haiku 4.5" },
      { id: "claude-sonnet-4-0", label: "Claude Sonnet 4" },
      { id: "claude-opus-4-0", label: "Claude Opus 4" },
      { id: "claude-3-7-sonnet-latest", label: "Claude 3.7 Sonnet" },
      { id: "claude-3-5-haiku-latest", label: "Claude 3.5 Haiku" }
    ]
  },
  deepseek: {
    id: "deepseek",
    name: "DeepSeek (V4 Flash / V4 Pro / V3 / R1)",
    shortName: "DeepSeek",
    protocol: "openai",
    baseUrl: "https://api.deepseek.com",
    apiKeyPlaceholder: "Nhập DeepSeek API Key (bắt đầu bằng sk-...)",
    keyUrl: "https://platform.deepseek.com/api_keys",
    keyLinkLabel: "Lấy API Key tại platform.deepseek.com ↗",
    defaultModel: "deepseek-flash",
    canFetchLiveModels: true,
    models: [
      { id: "deepseek-flash", label: "DeepSeek V4.1 Flash (Mới nhất · 1M context)" },
      { id: "deepseek-v4-pro", label: "DeepSeek V4 Pro (Suy luận học thuật sâu)" },
      { id: "deepseek-chat", label: "DeepSeek Chat (V3 · Tương thích cũ)" },
      { id: "deepseek-reasoner", label: "DeepSeek Reasoner (R1 · Tương thích cũ)" }
    ]
  },
  groq: {
    id: "groq",
    name: "Groq (Siêu nhanh · Có gói miễn phí)",
    shortName: "Groq",
    protocol: "openai",
    baseUrl: "https://api.groq.com/openai/v1",
    apiKeyPlaceholder: "Nhập Groq API Key (bắt đầu bằng gsk_...)",
    keyUrl: "https://console.groq.com/keys",
    keyLinkLabel: "Tạo Groq API Key miễn phí tại console.groq.com/keys ↗",
    defaultModel: "llama-3.3-70b-versatile",
    canFetchLiveModels: true,
    models: [
      { id: "llama-3.3-70b-versatile", label: "Llama 3.3 70B Versatile (Khuyên dùng)" },
      { id: "llama-3.1-8b-instant", label: "Llama 3.1 8B Instant (Siêu nhanh)" },
      { id: "meta-llama/llama-4-maverick-17b-128e-instruct", label: "Llama 4 Maverick 17B" },
      { id: "meta-llama/llama-4-scout-17b-16e-instruct", label: "Llama 4 Scout 17B" },
      { id: "qwen/qwen3-32b", label: "Qwen 3 32B" },
      { id: "deepseek-r1-distill-llama-70b", label: "DeepSeek R1 Distill Llama 70B" },
      { id: "openai/gpt-oss-120b", label: "OpenAI GPT-OSS 120B" },
      { id: "openai/gpt-oss-20b", label: "OpenAI GPT-OSS 20B" },
      { id: "gemma2-9b-it", label: "Google Gemma 2 9B IT" },
      { id: "mixtral-8x7b-32768", label: "Mixtral 8x7B 32K" }
    ]
  },
  xai: {
    id: "xai",
    name: "xAI (Grok 4.7 / Grok 4 / Grok 3)",
    shortName: "xAI Grok",
    protocol: "openai",
    baseUrl: "https://api.x.ai/v1",
    apiKeyPlaceholder: "Nhập xAI API Key (bắt đầu bằng xai-...)",
    keyUrl: "https://console.x.ai/",
    keyLinkLabel: "Lấy API Key tại console.x.ai ↗",
    defaultModel: "grok-4.7",
    canFetchLiveModels: true,
    models: [
      { id: "grok-4.7", label: "Grok 4.7 (Flagship mới nhất · 500K context)" },
      { id: "grok-420-reasoning", label: "Grok 420 Reasoning (Suy luận sâu)" },
      { id: "grok-4", label: "Grok 4" },
      { id: "grok-4-fast", label: "Grok 4 Fast (Nhanh & tiết kiệm)" },
      { id: "grok-3", label: "Grok 3" },
      { id: "grok-3-mini", label: "Grok 3 Mini" }
    ]
  },
  mistral: {
    id: "mistral",
    name: "Mistral AI (Large 4 / Small 4 / Magistral)",
    shortName: "Mistral AI",
    protocol: "openai",
    baseUrl: "https://api.mistral.ai/v1",
    apiKeyPlaceholder: "Nhập Mistral API Key",
    keyUrl: "https://console.mistral.ai/api-keys",
    keyLinkLabel: "Lấy API Key tại console.mistral.ai ↗",
    defaultModel: "mistral-small-4",
    canFetchLiveModels: true,
    models: [
      { id: "mistral-small-4", label: "Mistral Small 4 (Mới nhất · Tiết kiệm)" },
      { id: "mistral-large-4", label: "Mistral Large 4 (Flagship · 1M context)" },
      { id: "ministral-3b-latest", label: "Ministral 3B (Siêu nhanh)" },
      { id: "ministral-8b-latest", label: "Ministral 8B" },
      { id: "mistral-large-latest", label: "Mistral Large Latest" },
      { id: "mistral-medium-latest", label: "Mistral Medium Latest" },
      { id: "mistral-small-latest", label: "Mistral Small Latest" },
      { id: "magistral-medium-latest", label: "Magistral Medium (Reasoning)" },
      { id: "magistral-small-latest", label: "Magistral Small (Reasoning)" },
      { id: "codestral-latest", label: "Codestral Latest" }
    ]
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity (Sonar / Deep Research)",
    shortName: "Perplexity",
    protocol: "openai",
    baseUrl: "https://api.perplexity.ai",
    apiKeyPlaceholder: "Nhập Perplexity API Key (bắt đầu bằng pplx-...)",
    keyUrl: "https://www.perplexity.ai/settings/api",
    keyLinkLabel: "Lấy API Key tại perplexity.ai/settings/api ↗",
    defaultModel: "sonar",
    canFetchLiveModels: false,
    models: [
      { id: "sonar", label: "Sonar (Nhanh · Có tìm kiếm web)" },
      { id: "sonar-pro", label: "Sonar Pro (Phân tích sâu)" },
      { id: "sonar-reasoning", label: "Sonar Reasoning" },
      { id: "sonar-reasoning-pro", label: "Sonar Reasoning Pro" },
      { id: "sonar-deep-research", label: "Sonar Deep Research (Nghiên cứu tổng hợp)" }
    ]
  },
  qwen: {
    id: "qwen",
    name: "Alibaba Cloud Qwen (DashScope · Qwen 3.8 / 3.6)",
    shortName: "Alibaba Qwen",
    protocol: "openai",
    baseUrl: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    apiKeyPlaceholder: "Nhập DashScope API Key (bắt đầu bằng sk-...)",
    keyUrl: "https://modelstudio.console.alibabacloud.com/",
    keyLinkLabel: "Lấy API Key tại Alibaba Cloud Model Studio ↗",
    defaultModel: "qwen3.6-flash",
    canFetchLiveModels: true,
    models: [
      { id: "qwen3.6-flash", label: "Qwen 3.6 Flash (Nhanh & tiết kiệm)" },
      { id: "qwen3.6-plus", label: "Qwen 3.6 Plus (Cân bằng · 1M context)" },
      { id: "qwen3.8-max", label: "Qwen 3.8 Max (Flagship mới nhất)" },
      { id: "qwen3.8-flash", label: "Qwen 3.8 Flash" },
      { id: "qwen-plus", label: "Qwen Plus" },
      { id: "qwen-turbo", label: "Qwen Turbo" },
      { id: "qwen-max", label: "Qwen Max" },
      { id: "qwq-plus", label: "QwQ Plus (Reasoning)" }
    ]
  },
  moonshot: {
    id: "moonshot",
    name: "Moonshot AI (Kimi K3.1 / K3 / K2.6)",
    shortName: "Moonshot Kimi",
    protocol: "openai",
    baseUrl: "https://api.moonshot.ai/v1",
    apiKeyPlaceholder: "Nhập Moonshot API Key (bắt đầu bằng sk-...)",
    keyUrl: "https://platform.moonshot.ai/console/api-keys",
    keyLinkLabel: "Lấy API Key tại platform.moonshot.ai ↗",
    defaultModel: "kimi-k3",
    canFetchLiveModels: true,
    models: [
      { id: "kimi-k3.1-pro", label: "Kimi K3.1 Pro (Flagship · 1M context)" },
      { id: "kimi-k3", label: "Kimi K3" },
      { id: "kimi-k2.6", label: "Kimi K2.6" },
      { id: "kimi-k2-0905-preview", label: "Kimi K2 Preview" },
      { id: "kimi-k2-thinking", label: "Kimi K2 Thinking (Reasoning)" },
      { id: "moonshot-v1-128k", label: "Moonshot v1 128K" },
      { id: "moonshot-v1-32k", label: "Moonshot v1 32K" },
      { id: "moonshot-v1-8k", label: "Moonshot v1 8K" }
    ]
  },
  zhipu: {
    id: "zhipu",
    name: "Zhipu AI (GLM 5.3 / 5.2 / 4.5 · Z.ai)",
    shortName: "Zhipu GLM",
    protocol: "openai",
    baseUrl: "https://api.z.ai/api/paas/v4",
    apiKeyPlaceholder: "Nhập Z.ai / Zhipu API Key",
    keyUrl: "https://z.ai/manage-apikey/apikey-list",
    keyLinkLabel: "Lấy API Key tại z.ai ↗",
    defaultModel: "glm-5.3-flash",
    canFetchLiveModels: false,
    models: [
      { id: "glm-5.3-flash", label: "GLM 5.3 Flash (Nhanh & tiết kiệm)" },
      { id: "glm-5.3", label: "GLM 5.3 (Flagship · 1M context)" },
      { id: "glm-5.2", label: "GLM 5.2 (Open-weight mạnh)" },
      { id: "glm-4.5-flash", label: "GLM 4.5 Flash (Miễn phí / nhẹ)" },
      { id: "glm-4.5", label: "GLM 4.5" },
      { id: "glm-4.5-air", label: "GLM 4.5 Air" },
      { id: "glm-4-plus", label: "GLM 4 Plus" },
      { id: "glm-4-flash", label: "GLM 4 Flash" }
    ]
  },
  cohere: {
    id: "cohere",
    name: "Cohere (Command A+ / Command A / R+)",
    shortName: "Cohere",
    protocol: "openai",
    baseUrl: "https://api.cohere.com/compatibility/v1",
    apiKeyPlaceholder: "Nhập Cohere API Key",
    keyUrl: "https://dashboard.cohere.com/api-keys",
    keyLinkLabel: "Lấy API Key tại dashboard.cohere.com ↗",
    defaultModel: "command-a-plus-05-2026",
    canFetchLiveModels: true,
    models: [
      { id: "command-a-plus-05-2026", label: "Command A+ (Mới nhất · Dịch & Tổng hợp mạnh)" },
      { id: "command-a-03-2025", label: "Command A" },
      { id: "command-a-reasoning-08-2025", label: "Command A Reasoning" },
      { id: "command-r-plus", label: "Command R+" },
      { id: "command-r", label: "Command R" },
      { id: "command-r7b-12-2024", label: "Command R7B (Nhẹ & nhanh)" }
    ]
  },
  together: {
    id: "together",
    name: "Together AI (Serverless Open-Source Models)",
    shortName: "Together AI",
    protocol: "openai",
    baseUrl: "https://api.together.xyz/v1",
    apiKeyPlaceholder: "Nhập Together AI API Key",
    keyUrl: "https://api.together.xyz/settings/api-keys",
    keyLinkLabel: "Lấy API Key tại api.together.xyz ↗",
    defaultModel: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
    canFetchLiveModels: true,
    models: [
      { id: "meta-llama/Llama-3.3-70B-Instruct-Turbo", label: "Llama 3.3 70B Instruct Turbo" },
      { id: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8", label: "Llama 4 Maverick 17B FP8" },
      { id: "deepseek-ai/DeepSeek-V3", label: "DeepSeek V3" },
      { id: "deepseek-ai/DeepSeek-R1", label: "DeepSeek R1" },
      { id: "Qwen/Qwen3-235B-A22B-Instruct-2507-tput", label: "Qwen 3 235B Instruct" },
      { id: "moonshotai/kimi-k3.1-pro", label: "Moonshot Kimi K3.1 Pro" },
      { id: "zai-org/GLM-5.2", label: "Zhipu GLM 5.2" },
      { id: "mistralai/Mistral-Small-24B-Instruct-2501", label: "Mistral Small 24B" }
    ]
  },
  fireworks: {
    id: "fireworks",
    name: "Fireworks AI (Inference tốc độ cao)",
    shortName: "Fireworks AI",
    protocol: "openai",
    baseUrl: "https://api.fireworks.ai/inference/v1",
    apiKeyPlaceholder: "Nhập Fireworks API Key (bắt đầu bằng fw_...)",
    keyUrl: "https://fireworks.ai/account/api-keys",
    keyLinkLabel: "Lấy API Key tại fireworks.ai ↗",
    defaultModel: "accounts/fireworks/models/deepseek-v3",
    canFetchLiveModels: true,
    models: [
      { id: "accounts/fireworks/models/deepseek-v3", label: "DeepSeek V3" },
      { id: "accounts/fireworks/models/deepseek-r1", label: "DeepSeek R1" },
      { id: "accounts/fireworks/models/llama-v3p3-70b-instruct", label: "Llama 3.3 70B Instruct" },
      { id: "accounts/fireworks/models/llama4-maverick-instruct-basic", label: "Llama 4 Maverick" },
      { id: "accounts/fireworks/models/qwen3-235b-a22b", label: "Qwen 3 235B" }
    ]
  },
  custom: {
    id: "custom",
    name: "Tùy chỉnh (OpenAI-Compatible / Ollama / LM Studio)",
    shortName: "Custom AI",
    protocol: "openai",
    baseUrl: "http://localhost:11434/v1",
    apiKeyPlaceholder: "Nhập API Key (có thể để trống nếu chạy Ollama / LM Studio cục bộ)",
    keyUrl: "https://ollama.com/library",
    keyLinkLabel: "Xem danh sách model Ollama cục bộ ↗",
    defaultModel: "qwen2.5:7b",
    canFetchLiveModels: true,
    optionalKey: true,
    models: [
      { id: "qwen2.5:7b", label: "Ollama: qwen2.5:7b" },
      { id: "qwen3:8b", label: "Ollama: qwen3:8b" },
      { id: "llama3.3:70b", label: "Ollama: llama3.3:70b" },
      { id: "gemma3:12b", label: "Ollama: gemma3:12b" },
      { id: "deepseek-r1:8b", label: "Ollama: deepseek-r1:8b" }
    ]
  }
};

// ==========================================
// STATE & LOCAL STORAGE
// ==========================================
let papers = [];
let scopusMap = {}; // key: "I:ISSN" hoặc "T:title" -> { q, sjr }
let liveModelsCache = {}; // { providerId: [{ id, label }, ...] }
let settings = {
  analysisMode: "api", // "api" | "free"
  provider: "gemini",
  model: "gemini-2.5-flash",
  apiKey: "",
  customBaseUrl: "http://localhost:11434/v1",
  email: ""
};
let stopAiFlag = false;
let localTranslateServerAvailable = null; // null = chưa kiểm tra, true/false = đã kiểm tra

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
  liveModelsCache = JSON.parse(localStorage.getItem("rw_live_models_v1") || "{}");
} catch (e) {
  liveModelsCache = {};
}

try {
  const savedSettings = JSON.parse(localStorage.getItem("rw_settings") || "null");
  if (savedSettings && typeof savedSettings === "object") {
    settings = { ...settings, ...savedSettings };
  }
} catch (e) {}

if (!AI_PROVIDERS[settings.provider]) {
  settings.provider = "gemini";
}
if (!["api", "free"].includes(settings.analysisMode)) {
  settings.analysisMode = "api";
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  ensureLanguageFilterUI();
  upgradeQuartileFilterUI();
  populateProviderDropdown();
  loadSettingsUI();
  syncAnalysisModeUI();
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

function switchToTab(tabId) {
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-content").forEach((c) => {
    c.classList.toggle("active", c.id === tabId);
  });
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchToTab(btn.dataset.tab);
    });
  });
}

// ==========================================
// PROVIDER & MODEL CATALOG MANAGEMENT
// ==========================================
function getModelsForProvider(providerId) {
  const cfg = AI_PROVIDERS[providerId] || AI_PROVIDERS.gemini;
  const cached = Array.isArray(liveModelsCache[providerId]) ? liveModelsCache[providerId] : [];
  if (cached.length === 0) return cfg.models;

  const map = new Map();
  cfg.models.forEach((m) => map.set(m.id, m));
  cached.forEach((m) => {
    if (!map.has(m.id)) {
      map.set(m.id, m);
    }
  });
  return Array.from(map.values());
}

function populateProviderDropdown() {
  const providerEl = document.getElementById("aiProvider");
  const countEl = document.getElementById("providerCountBadge");
  if (!providerEl) return;

  const providerList = Object.values(AI_PROVIDERS);
  const currentVal = settings.provider || "gemini";

  providerEl.innerHTML = providerList
    .map((p) => {
      const count = getModelsForProvider(p.id).length;
      return `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} (${count} models)</option>`;
    })
    .join("");

  providerEl.value = AI_PROVIDERS[currentVal] ? currentVal : "gemini";
  if (countEl) {
    countEl.textContent = `${providerList.length} nhà cung cấp`;
  }
}

function populateModelsForProvider(providerId, preferredModel = "") {
  const cfg = AI_PROVIDERS[providerId] || AI_PROVIDERS.gemini;
  const models = getModelsForProvider(cfg.id);
  const selectEl = document.getElementById("aiModelSelect");
  const modelInput = document.getElementById("aiModel");
  const countBadge = document.getElementById("modelCountBadge");
  const fetchBtn = document.getElementById("btnFetchModels");
  const keyLink = document.getElementById("providerKeyLink");
  const apiKeyEl = document.getElementById("aiApiKey");
  const customUrlGroup = document.getElementById("customBaseUrlGroup");
  const fetchHint = document.getElementById("modelFetchStatus");

  if (selectEl) {
    const optionsHtml = models
      .map((m) => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.id)}${m.label && m.label !== m.id ? " — " + escapeHtml(m.label) : ""}</option>`)
      .join("");
    selectEl.innerHTML = optionsHtml + `<option value="__custom__">-- Nhập mã model tùy chỉnh ở ô bên dưới --</option>`;

    const targetModel = preferredModel || cfg.defaultModel;
    if (models.some((m) => m.id === targetModel)) {
      selectEl.value = targetModel;
    } else if (preferredModel) {
      selectEl.value = "__custom__";
    } else {
      selectEl.value = models[0]?.id || "__custom__";
    }

    if (modelInput) {
      modelInput.value = targetModel || models[0]?.id || "";
    }
  }

  if (countBadge) {
    countBadge.textContent = `${models.length} models`;
  }

  if (fetchBtn) {
    fetchBtn.style.display = cfg.canFetchLiveModels ? "inline-block" : "none";
  }

  if (keyLink) {
    keyLink.href = cfg.keyUrl;
    keyLink.textContent = cfg.keyLinkLabel;
  }

  if (apiKeyEl) {
    apiKeyEl.placeholder = cfg.apiKeyPlaceholder;
  }

  if (customUrlGroup) {
    customUrlGroup.style.display = cfg.id === "custom" ? "block" : "none";
  }

  if (fetchHint) {
    const hasLive = Array.isArray(liveModelsCache[cfg.id]) && liveModelsCache[cfg.id].length > 0;
    if (hasLive) {
      fetchHint.textContent = `Đã đồng bộ ${models.length} models (bao gồm danh sách mới nhất từ API của ${cfg.shortName}).`;
    } else if (cfg.publicModelsEndpoint) {
      fetchHint.textContent = `Mẹo: Bấm "↻ Tải model mới từ API" để tải toàn bộ 200+ models mới nhất của ${cfg.shortName} (không cần nhập Key trước).`;
    } else if (cfg.canFetchLiveModels) {
      fetchHint.textContent = `Hiển thị ${models.length} models phổ biến mới nhất của ${cfg.shortName}. Nhập API Key và bấm "↻ Tải model mới từ API" để quét toàn bộ tài khoản của bạn.`;
    } else {
      fetchHint.textContent = `Hiển thị ${models.length} models chính thức của ${cfg.shortName}. Bạn có thể nhập mã model bất kỳ vào ô trên.`;
    }
  }

  // Cập nhật lại số lượng model hiển thị ngay trong dropdown nhà cung cấp
  const providerOption = document.querySelector(`#aiProvider option[value="${cfg.id}"]`);
  if (providerOption) {
    providerOption.textContent = `${cfg.name} (${models.length} models)`;
  }
}

async function fetchLiveModelsForCurrentProvider(silent = false) {
  const providerId = document.getElementById("aiProvider")?.value || settings.provider || "gemini";
  const cfg = AI_PROVIDERS[providerId];
  if (!cfg || !cfg.canFetchLiveModels) return;

  const apiKey = (document.getElementById("aiApiKey")?.value || settings.apiKey || "").trim();
  const customBaseUrl = (document.getElementById("customBaseUrl")?.value || settings.customBaseUrl || "").trim().replace(/\/+$/, "");
  const btn = document.getElementById("btnFetchModels");
  const hint = document.getElementById("modelFetchStatus");

  if (!apiKey && !cfg.publicModelsEndpoint && !cfg.optionalKey) {
    if (!silent) {
      if (hint) hint.textContent = `Vui lòng nhập API Key của ${cfg.shortName} trước rồi bấm tải danh sách model từ API.`;
      alert(`Hãy nhập API Key của ${cfg.shortName} trước để tải toàn bộ danh sách model trực tiếp từ nhà cung cấp.`);
    }
    return;
  }

  if (btn) btn.disabled = true;
  if (hint && !silent) hint.textContent = `Đang tải danh sách model mới nhất từ ${cfg.shortName}...`;

  try {
    let fetchedModels = [];

    if (cfg.protocol === "gemini") {
      const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}&pageSize=200`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      fetchedModels = (data.models || [])
        .filter((m) => (m.supportedGenerationMethods || []).includes("generateContent"))
        .map((m) => {
          const id = (m.name || "").replace(/^models\//, "");
          return { id, label: m.displayName || id };
        })
        .filter((m) => m.id);
    } else if (cfg.protocol === "anthropic") {
      const res = await fetch("https://api.anthropic.com/v1/models?limit=100", {
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      fetchedModels = (data.data || [])
        .map((m) => ({ id: m.id, label: m.display_name || m.id }))
        .filter((m) => m.id);
    } else {
      const base = (cfg.id === "custom" ? customBaseUrl : cfg.baseUrl).replace(/\/+$/, "");
      const url = `${base}/models`;
      const headers = {};
      if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const rawList = Array.isArray(data.data) ? data.data : Array.isArray(data.models) ? data.models : Array.isArray(data) ? data : [];
      fetchedModels = rawList
        .map((m) => {
          const id = typeof m === "string" ? m : m.id || m.name || "";
          const label = typeof m === "string" ? m : m.name || m.display_name || m.id || "";
          return { id, label };
        })
        .filter((m) => m.id);

      // Lọc bớt model embedding/tts/whisper cho gọn khi danh sách rất dài (như OpenAI)
      if (cfg.id === "openai") {
        fetchedModels = fetchedModels.filter((m) =>
          /^(gpt|o1|o3|o4|chatgpt)/i.test(m.id) && !/(audio|realtime|transcribe|tts|image|search-preview)/i.test(m.id)
        );
      }
    }

    if (fetchedModels.length === 0) {
      throw new Error("Không tìm thấy model phù hợp từ API.");
    }

    // Sắp xếp gọn theo chữ cái (giữ các model mặc định lên đầu trong getModelsForProvider)
    fetchedModels.sort((a, b) => a.id.localeCompare(b.id));
    liveModelsCache[cfg.id] = fetchedModels;
    try {
      localStorage.setItem("rw_live_models_v1", JSON.stringify(liveModelsCache));
    } catch (e) {}

    const currentModel = (document.getElementById("aiModel")?.value || "").trim();
    populateModelsForProvider(cfg.id, currentModel || cfg.defaultModel);
    if (hint) {
      const total = getModelsForProvider(cfg.id).length;
      hint.textContent = `Đã cập nhật thành công ${total} models mới nhất từ ${cfg.shortName}!`;
    }
  } catch (err) {
    if (!silent && hint) {
      hint.textContent = `Không tải được danh sách live (${err.message}). Đang giữ danh sách ${getModelsForProvider(cfg.id).length} models tích hợp sẵn.`;
    }
  } finally {
    if (btn) btn.disabled = false;
  }
}

function loadSettingsUI() {
  const providerEl = document.getElementById("aiProvider");
  const apiKeyEl = document.getElementById("aiApiKey");
  const customUrlEl = document.getElementById("customBaseUrl");
  const emailEl = document.getElementById("userEmail");

  const providerId = AI_PROVIDERS[settings.provider] ? settings.provider : "gemini";
  if (providerEl) providerEl.value = providerId;
  if (apiKeyEl) apiKeyEl.value = settings.apiKey || "";
  if (customUrlEl) customUrlEl.value = settings.customBaseUrl || "http://localhost:11434/v1";
  if (emailEl) emailEl.value = settings.email || "";

  populateModelsForProvider(providerId, settings.model || AI_PROVIDERS[providerId].defaultModel);
}

function persistSettings() {
  try {
    localStorage.setItem("rw_settings", JSON.stringify(settings));
  } catch (e) {}
}

function setAnalysisMode(mode) {
  if (!["api", "free"].includes(mode)) return;
  settings.analysisMode = mode;
  persistSettings();
  syncAnalysisModeUI();
}

function syncAnalysisModeUI() {
  const isApi = settings.analysisMode !== "free";

  const cards = [
    { el: document.getElementById("modeCardTab3Api"), active: isApi },
    { el: document.getElementById("modeCardTab3Free"), active: !isApi },
    { el: document.getElementById("modeCardTab4Api"), active: isApi },
    { el: document.getElementById("modeCardTab4Free"), active: !isApi }
  ];

  cards.forEach(({ el, active }) => {
    if (!el) return;
    el.classList.toggle("active", active);
    el.setAttribute("aria-checked", active ? "true" : "false");
  });

  const runLabel = document.getElementById("btnRunAiLabel");
  if (runLabel) {
    runLabel.textContent = isApi
      ? "Chạy AI Chuyên Sâu (API Key)"
      : "Chạy Miễn Phí (Không API Key)";
  }

  const apiHint = document.getElementById("tab3ApiConfigHint");
  if (apiHint) {
    const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
    const hasKey = Boolean((settings.apiKey || "").trim()) || Boolean(cfg.optionalKey);
    const keyBadge = hasKey
      ? `<span style="color:#047857;font-weight:700;">● Đã sẵn sàng</span>`
      : `<span style="color:#b45309;font-weight:700;">● Chưa nhập API Key</span>`;
    apiHint.innerHTML = `
      <span>Đang cấu hình: <strong>${escapeHtml(cfg.shortName)}</strong> · <code>${escapeHtml(settings.model || cfg.defaultModel)}</code> · ${keyBadge}</span>
      <button type="button" class="link-jump" id="btnJumpToSettings">Đổi cấu hình Tab 4 →</button>
    `;
    document.getElementById("btnJumpToSettings")?.addEventListener("click", (evt) => {
      evt.stopPropagation();
      switchToTab("tab-settings");
    });
  }
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

  // Mode cards (Tab 3 & Tab 4 synced)
  document.querySelectorAll(".mode-card[data-mode]").forEach((card) => {
    const activate = () => setAnalysisMode(card.dataset.mode);
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
  });

  // AI Matrix
  document.getElementById("btnRunAiMatrix")?.addEventListener("click", runAiMatrixAnalysis);
  document.getElementById("btnStopAi")?.addEventListener("click", () => {
    stopAiFlag = true;
  });

  // Settings — Provider & Model Auto-Jump
  document.getElementById("aiProvider")?.addEventListener("change", (e) => {
    const nextProvider = e.target.value;
    const cfg = AI_PROVIDERS[nextProvider] || AI_PROVIDERS.gemini;
    populateModelsForProvider(cfg.id, cfg.defaultModel);

    // Tự tải toàn bộ danh sách công khai của OpenRouter khi người dùng chọn lần đầu
    if (cfg.publicModelsEndpoint && (!liveModelsCache[cfg.id] || liveModelsCache[cfg.id].length === 0)) {
      fetchLiveModelsForCurrentProvider(true);
    }
  });

  document.getElementById("aiModelSelect")?.addEventListener("change", (e) => {
    const val = e.target.value;
    const modelInput = document.getElementById("aiModel");
    if (val !== "__custom__" && modelInput) {
      modelInput.value = val;
    } else if (val === "__custom__" && modelInput) {
      modelInput.focus();
      modelInput.select();
    }
  });

  document.getElementById("aiModel")?.addEventListener("input", (e) => {
    const typed = e.target.value.trim();
    const selectEl = document.getElementById("aiModelSelect");
    if (!selectEl) return;
    const hasMatch = [...selectEl.options].some((opt) => opt.value === typed);
    selectEl.value = hasMatch ? typed : "__custom__";
  });

  document.getElementById("btnFetchModels")?.addEventListener("click", () => {
    fetchLiveModelsForCurrentProvider(false);
  });

  document.getElementById("btnToggleApiKey")?.addEventListener("click", () => {
    const input = document.getElementById("aiApiKey");
    const btn = document.getElementById("btnToggleApiKey");
    if (!input || !btn) return;
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    btn.textContent = showing ? "Hiện" : "Ẩn";
  });

  document.getElementById("btnSaveSettings")?.addEventListener("click", saveSettingsFromForm);
  document.getElementById("btnTestApi")?.addEventListener("click", testAiConnection);

  // Export / Import
  document.getElementById("btnExportExcel")?.addEventListener("click", exportToExcel);
  document.getElementById("btnExportJson")?.addEventListener("click", exportProjectJson);
  document.getElementById("inputImportJson")?.addEventListener("change", importProjectJson);
}

function readSettingsFromForm() {
  const provider = document.getElementById("aiProvider")?.value || "gemini";
  const cfg = AI_PROVIDERS[provider] || AI_PROVIDERS.gemini;
  const model = (document.getElementById("aiModel")?.value || cfg.defaultModel).trim();
  const apiKey = (document.getElementById("aiApiKey")?.value || "").trim();
  const customBaseUrl = (document.getElementById("customBaseUrl")?.value || cfg.baseUrl || "").trim();
  const email = (document.getElementById("userEmail")?.value || "").trim();

  return {
    ...settings,
    provider: cfg.id,
    model: model || cfg.defaultModel,
    apiKey,
    customBaseUrl: customBaseUrl || "http://localhost:11434/v1",
    email
  };
}

function saveSettingsFromForm() {
  settings = readSettingsFromForm();
  persistSettings();
  syncAnalysisModeUI();
  const statusEl = document.getElementById("settingsStatus");
  if (statusEl) {
    const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
    statusEl.textContent = `Đã lưu cấu hình (${cfg.shortName} · ${settings.model}) thành công!`;
  }
}

async function testAiConnection() {
  const draft = readSettingsFromForm();
  const cfg = AI_PROVIDERS[draft.provider] || AI_PROVIDERS.gemini;
  const statusEl = document.getElementById("settingsStatus");
  const btn = document.getElementById("btnTestApi");

  if (!draft.apiKey && !cfg.optionalKey) {
    alert(`Vui lòng nhập API Key cho ${cfg.shortName} trước khi kiểm tra kết nối.`);
    return;
  }

  settings = draft;
  persistSettings();
  syncAnalysisModeUI();

  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = `Đang kiểm tra kết nối tới ${cfg.shortName} (${draft.model})...`;

  try {
    const samplePaper = {
      title: "Corporate Carbon Disclosure and Firm Value",
      abstract:
        "This study examines the impact of corporate carbon disclosure on firm value using panel data from 200 listed firms between 2018 and 2023. The findings show a positive association, while future research should investigate private firms."
    };
    const result = await callAiExtractMatrix(samplePaper);
    if (!result || (!result.summary && !result.findings)) {
      throw new Error("Phản hồi không đúng cấu trúc JSON mong đợi.");
    }
    if (statusEl) {
      statusEl.textContent = `Kết nối thành công với ${cfg.shortName} (${draft.model})! Sẵn sàng chạy Trường hợp 1.`;
    }
  } catch (err) {
    console.error(err);
    if (statusEl) {
      statusEl.textContent = `Kiểm tra thất bại (${cfg.shortName}): ${err.message}`;
    }
  } finally {
    if (btn) btn.disabled = false;
  }
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
        aiGap: "",
        aiMode: "",
        aiModelUsed: ""
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

      const safeId = escapeAttr(p.id);
      const pdfBtn = p.pdfUrl
        ? `<button class="link-btn pdf" onclick="downloadNamedPdf('${safeId}')">Tải PDF chuẩn</button>`
        : `<span style="font-size:11px;color:#94a3b8;">Khóa</span>`;

      const doiBtn = p.doi
        ? `<a class="link-btn" href="https://doi.org/${encodeURIComponent(p.doi)}" target="_blank" rel="noopener">DOI</a>`
        : "";

      return `
        <tr>
          <td><input type="checkbox" ${p.selected ? "checked" : ""} onchange="togglePaperSelect('${safeId}', this.checked)" /></td>
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
// 4. AI TÓM TẮT & LẬP MA TRẬN TÀI LIỆU (2 CHẾ ĐỘ)
// ==========================================
function hasAnalyzedMatrix(p) {
  return Boolean(
    (p.aiSummary && !p.aiSummary.startsWith("Lỗi AI:")) ||
      p.aiMethod ||
      p.aiFindings ||
      p.aiGap
  );
}

function renderModeBadge(p) {
  if (!hasAnalyzedMatrix(p)) return "";
  const mode = p.aiMode || "api"; // tương thích dự án JSON cũ trước khi có nhãn
  const titleAttr = p.aiModelUsed ? ` title="${escapeHtml(p.aiModelUsed)}"` : "";
  if (mode === "free") {
    return `<span class="tag tag-mode-free"${titleAttr}>Không API Key</span>`;
  }
  return `<span class="tag tag-mode-api"${titleAttr}>AI API</span>`;
}

function renderMatrixTable() {
  const tbody = document.getElementById("matrixTbody");
  if (!tbody) return;
  const selectedPapers = papers.filter((p) => p.selected);

  if (selectedPapers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Chưa có bài nào được chọn. Hãy tick chọn bài ở Tab 1.</td></tr>`;
    return;
  }

  tbody.innerHTML = selectedPapers
    .map((p) => {
      const safeId = escapeAttr(p.id);
      const badgeHtml = renderModeBadge(p);
      const rerunBtn = p.abstract
        ? `<button type="button" class="btn-rerun-row" onclick="rerunSinglePaperMatrix('${safeId}')" title="Chạy lại bài này bằng chế độ đang chọn ở trên">↻ Chạy lại</button>`
        : "";
      const emptySummary = p.abstract ? "[Chưa phân tích]" : "[Không có Abstract]";

      return `
      <tr>
        <td>
          <strong>${escapeHtml(p.firstAuthor)} (${escapeHtml(p.year)})</strong><br>
          <span style="font-size:11px;color:#64748b;">${escapeHtml(p.journal)}</span>
          <div class="matrix-badge-row">${badgeHtml}${rerunBtn}</div>
        </td>
        <td>${escapeHtml(p.title)}</td>
        <td>${escapeHtml(p.aiSummary || emptySummary)}</td>
        <td>${escapeHtml(p.aiMethod || "-")}</td>
        <td>${escapeHtml(p.aiFindings || "-")}</td>
        <td>${escapeHtml(p.aiGap || "-")}</td>
      </tr>
    `;
    })
    .join("");
}

window.rerunSinglePaperMatrix = async function (id) {
  const paper = papers.find((item) => item.id === id);
  if (!paper) return;
  if (!paper.abstract) {
    alert("Bài báo này không có Abstract từ OpenAlex để phân tích.");
    return;
  }

  const mode = settings.analysisMode === "free" ? "free" : "api";
  const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
  if (mode === "api" && !settings.apiKey && !cfg.optionalKey) {
    alert("Chế độ Trường hợp 1 cần API Key ở Tab 4. Bạn có thể chuyển sang Trường hợp 2 (Miễn phí) để chạy ngay!");
    return;
  }

  const statusEl = document.getElementById("aiStatus");
  if (statusEl) {
    statusEl.textContent = `Đang chạy lại (${mode === "api" ? "AI API" : "Không API Key"}): ${paper.title.slice(0, 50)}...`;
  }

  try {
    if (mode === "api") {
      const result = await callAiExtractMatrixWithRetry(paper, statusEl, 1, 1);
      paper.aiSummary = result.summary || "";
      paper.aiMethod = result.method || "";
      paper.aiFindings = result.findings || "";
      paper.aiGap = result.gap || "";
      paper.aiMode = "api";
      paper.aiModelUsed = `${cfg.shortName} · ${settings.model}`;
    } else {
      const result = await analyzePaperFreeMode(paper);
      paper.aiSummary = result.summary;
      paper.aiMethod = result.method;
      paper.aiFindings = result.findings;
      paper.aiGap = result.gap;
      paper.aiMode = "free";
      paper.aiModelUsed = result.metaLabel;
    }
    savePapers();
    renderMatrixTable();
    if (statusEl) {
      statusEl.textContent = `Đã cập nhật xong bài "${paper.title.slice(0, 48)}..." bằng chế độ ${mode === "api" ? "AI API" : "Không API Key"}.`;
    }
  } catch (err) {
    console.error(err);
    paper.aiSummary = `Lỗi AI: ${err.message}`;
    paper.aiMode = "";
    renderMatrixTable();
    if (statusEl) statusEl.textContent = `Lỗi khi chạy lại bài: ${err.message}`;
  }
};

async function runAiMatrixAnalysis() {
  const mode = settings.analysisMode === "free" ? "free" : "api";
  const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;

  if (mode === "api" && !settings.apiKey && !cfg.optionalKey) {
    const switchFree = confirm(
      `Bạn chưa nhập API Key cho ${cfg.shortName} ở Tab 4.\n\nBấm OK để chuyển sang Tab 4 nhập API Key (có link tạo Gemini API Key miễn phí),\nhoặc bấm Hủy rồi chọn thẻ "Trường hợp 2 — Miễn Phí" để chạy ngay không cần API Key.`
    );
    if (switchFree) switchToTab("tab-settings");
    return;
  }

  const overwrite = document.getElementById("chkOverwriteMatrix")?.checked ?? true;
  const selectedWithAbstract = papers.filter((p) => p.selected && p.abstract);
  if (selectedWithAbstract.length === 0) {
    alert("Không có bài đã chọn nào có dữ liệu Abstract để phân tích!");
    return;
  }

  const targets = overwrite
    ? selectedWithAbstract
    : selectedWithAbstract.filter((p) => !hasAnalyzedMatrix(p));

  if (targets.length === 0) {
    alert('Tất cả các bài đã chọn đều đã có kết quả. Hãy tick "Ghi đè bài đã phân tích" nếu muốn chạy lại bằng chế độ khác!');
    return;
  }

  stopAiFlag = false;
  const btnRun = document.getElementById("btnRunAiMatrix");
  const btnStop = document.getElementById("btnStopAi");
  const statusEl = document.getElementById("aiStatus");
  if (btnRun) btnRun.disabled = true;
  if (btnStop) btnStop.disabled = false;

  const delayBetweenCallsMs = mode === "api" ? 3000 : 250;
  let translatedCount = 0;
  let englishFallbackCount = 0;

  for (let i = 0; i < targets.length; i++) {
    if (stopAiFlag) {
      if (statusEl) statusEl.textContent = `Đã dừng ở bài ${i}/${targets.length}.`;
      break;
    }

    const p = targets[i];
    const modeTag = mode === "api" ? `AI API · ${cfg.shortName}` : "Không API Key · Miễn phí";
    if (statusEl) {
      statusEl.textContent = `[${modeTag}] Đang phân tích bài ${i + 1}/${targets.length}: ${p.title.slice(0, 48)}...`;
    }

    try {
      if (mode === "api") {
        const result = await callAiExtractMatrixWithRetry(p, statusEl, i + 1, targets.length);
        p.aiSummary = result.summary || "";
        p.aiMethod = result.method || "";
        p.aiFindings = result.findings || "";
        p.aiGap = result.gap || "";
        p.aiMode = "api";
        p.aiModelUsed = `${cfg.shortName} · ${settings.model}`;
      } else {
        const result = await analyzePaperFreeMode(p);
        p.aiSummary = result.summary;
        p.aiMethod = result.method;
        p.aiFindings = result.findings;
        p.aiGap = result.gap;
        p.aiMode = "free";
        p.aiModelUsed = result.metaLabel;
        if (result.translated) translatedCount++;
        else englishFallbackCount++;
      }
      savePapers();
      renderMatrixTable();
    } catch (err) {
      console.error(err);
      p.aiSummary = `Lỗi AI: ${err.message}`;
      p.aiMode = "";
      renderMatrixTable();
    }

    if (i < targets.length - 1 && !stopAiFlag) {
      if (mode === "api" && statusEl) {
        statusEl.textContent = `Xong bài ${i + 1}/${targets.length}. Đang nghỉ 3 giây tránh giới hạn tốc độ API...`;
      }
      await sleep(delayBetweenCallsMs);
    }
  }

  if (btnRun) btnRun.disabled = false;
  if (btnStop) btnStop.disabled = true;
  if (!stopAiFlag && statusEl) {
    if (mode === "api") {
      statusEl.textContent = `Hoàn tất phân tích chuyên sâu ${targets.length} bài bằng ${cfg.shortName} (${settings.model})!`;
    } else if (englishFallbackCount > 0 && translatedCount === 0) {
      statusEl.textContent = `Hoàn tất trích xuất miễn phí ${targets.length} bài (đang giữ nguyên tiếng Anh do ngoại tuyến/không gọi được dịch vụ dịch).`;
    } else if (englishFallbackCount > 0) {
      statusEl.textContent = `Hoàn tất miễn phí ${targets.length} bài (${translatedCount} bài đã dịch tiếng Việt, ${englishFallbackCount} bài giữ tiếng Anh).`;
    } else {
      statusEl.textContent = `Hoàn tất trích xuất & dịch tiếng Việt miễn phí ${targets.length} bài (Không cần API Key)!`;
    }
  }
}

// ==========================================
// 4A. TRƯỜNG HỢP 1 — GỌI AI API ĐA NHÀ CUNG CẤP
// ==========================================
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

function buildMatrixPrompt(paper) {
  return `Bạn là trợ lý nghiên cứu khoa học chuyên nghiệp. Hãy đọc tiêu đề và tóm tắt (Abstract) bài báo dưới đây, sau đó trả về DUY NHẤT một đối tượng JSON hợp lệ (không bọc markdown, không giải thích thêm) gồm đúng 4 trường bằng tiếng Việt học thuật, súc tích:
{
  "summary": "Tóm tắt mục tiêu và bối cảnh nghiên cứu trong 2-3 câu",
  "method": "Phương pháp nghiên cứu, mô hình, biến số hoặc cỡ mẫu dữ liệu",
  "findings": "Kết quả và phát hiện chính của nghiên cứu",
  "gap": "Hạn chế hoặc khoảng trống nghiên cứu có thể khai thác tiếp"
}

Tiêu đề: ${paper.title}
Abstract: ${paper.abstract}`;
}

function parseAiJsonResponse(rawText) {
  let cleaned = (rawText || "").trim();
  // Gỡ bỏ thẻ suy nghĩ của các reasoning models (DeepSeek R1, QwQ, v.v.)
  cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  // Gỡ bỏ markdown code fence nếu có
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch (_) {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start !== -1 && end !== -1 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }
    throw new Error("AI trả về dữ liệu không phải JSON hợp lệ.");
  }
}

async function readErrorMessage(res, prefix) {
  try {
    const text = await res.text();
    const json = JSON.parse(text);
    const detail = json?.error?.message || json?.message || text.slice(0, 140);
    return `${prefix} HTTP ${res.status}: ${detail}`;
  } catch (_) {
    return `${prefix} HTTP ${res.status}`;
  }
}

async function callAiExtractMatrix(paper) {
  const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
  const model = (settings.model || cfg.defaultModel).trim();
  const prompt = buildMatrixPrompt(paper);

  if (cfg.protocol === "gemini") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if (!res.ok) throw new Error(await readErrorMessage(res, "Gemini"));
    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    return parseAiJsonResponse(rawText);
  }

  if (cfg.protocol === "anthropic") {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": settings.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model,
        max_tokens: 1200,
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!res.ok) throw new Error(await readErrorMessage(res, "Anthropic"));
    const data = await res.json();
    const textBlock = (data.content || []).find((c) => c.type === "text");
    return parseAiJsonResponse(textBlock?.text || "{}");
  }

  // OpenAI & tất cả nhà cung cấp tương thích OpenAI (OpenRouter, DeepSeek, Groq, xAI, Mistral, Perplexity, Qwen, Moonshot, Zhipu, Cohere, Together, Fireworks, Custom)
  const baseUrl = (cfg.id === "custom" ? settings.customBaseUrl : cfg.baseUrl).replace(/\/+$/, "");
  const endpoint = baseUrl.endsWith("/chat/completions") ? baseUrl : `${baseUrl}/chat/completions`;
  const headers = { "Content-Type": "application/json" };
  if (settings.apiKey) {
    headers.Authorization = `Bearer ${settings.apiKey}`;
  }
  if (cfg.id === "openrouter") {
    headers["HTTP-Referer"] = window.location.origin || "https://github.com";
    headers["X-Title"] = "AI Research Workflow";
  }

  const sendOpenAiReq = async (useJsonFormat) => {
    const payload = {
      model,
      messages: [{ role: "user", content: prompt }]
    };
    if (useJsonFormat && cfg.id !== "perplexity") {
      payload.response_format = { type: "json_object" };
    }
    return fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  };

  let res = await sendOpenAiReq(true);
  // Một số model (reasoning hoặc open-source trên OpenRouter/Groq) không hỗ trợ response_format: json_object -> tự thử lại không kèm tham số này
  if (res.status === 400) {
    res = await sendOpenAiReq(false);
  }
  if (!res.ok) throw new Error(await readErrorMessage(res, cfg.shortName));
  const data = await res.json();
  const rawContent = data.choices?.[0]?.message?.content || "{}";
  return parseAiJsonResponse(rawContent);
}

// ==========================================
// 4B. TRƯỜNG HỢP 2 — MIỄN PHÍ (KHÔNG API KEY)
// ==========================================
function cleanAbstractText(raw) {
  return (raw || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isVietnameseText(text) {
  return /[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i.test(text || "");
}

function splitAcademicSentences(text) {
  if (!text) return [];
  const protectedTokens = [
    ["et al.", "et al__DOT__"],
    ["e.g.", "e__DOT__g__DOT__"],
    ["i.e.", "i__DOT__e__DOT__"],
    ["vs.", "vs__DOT__"],
    ["Fig.", "Fig__DOT__"],
    ["Tab.", "Tab__DOT__"],
    ["Eq.", "Eq__DOT__"],
    ["No.", "No__DOT__"],
    ["Vol.", "Vol__DOT__"],
    ["Dr.", "Dr__DOT__"],
    ["Prof.", "Prof__DOT__"],
    ["U.S.", "U__DOT__S__DOT__"],
    ["U.K.", "U__DOT__K__DOT__"],
    ["p.", "p__DOT__"],
    ["pp.", "pp__DOT__"]
  ];

  let masked = text;
  protectedTokens.forEach(([orig, token]) => {
    const escaped = orig.replace(/\./g, "\\.");
    masked = masked.replace(new RegExp(escaped, "gi"), token);
  });
  // Bảo vệ số thập phân như 0.05 hoặc 12.4%
  masked = masked.replace(/(\d)\.(\d)/g, "$1__DEC__$2");

  const parts = masked
    .split(/(?<=[.!?])\s+(?=[A-ZÀ-Ỹ0-9("“])/)
    .map((s) =>
      s
        .replace(/__DEC__/g, ".")
        .replace(/__DOT__/g, ".")
        .trim()
    )
    .filter((s) => s.length > 18);

  return parts.length > 0 ? parts : [text];
}

function parseStructuredAbstractSections(text) {
  // Nhận diện các Abstract có cấu trúc nhãn chuẩn (Emerald, Springer, Elsevier, PubMed...)
  const headingRegex =
    /(?:^|\s)(Background|Purpose|Objectives?|Aims?|Introduction|Design\/methodology\/approach|Methodology|Methods?|Materials?\s+and\s+methods?|Data(?:\s+and\s+methods?)?|Sample|Findings?|Results?|Conclusions?|Originality\/value|Research\s+limitations?(?:\/implications?)?|Limitations?|Practical\s+implications?|Implications?|Future\s+research)\s*[:\-–]\s*/gi;

  const matches = [];
  let m;
  while ((m = headingRegex.exec(text)) !== null) {
    matches.push({
      label: m[1].toLowerCase(),
      start: m.index,
      contentStart: m.index + m[0].length
    });
  }

  if (matches.length < 2) return null;

  const sections = { summary: [], method: [], findings: [], gap: [] };
  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const nextStart = i + 1 < matches.length ? matches[i + 1].start : text.length;
    const chunk = text.slice(cur.contentStart, nextStart).trim();
    if (!chunk) continue;

    const lbl = cur.label;
    if (/background|purpose|objective|aim|introduction/.test(lbl)) {
      sections.summary.push(chunk);
    } else if (/design|method|data|sample/.test(lbl)) {
      sections.method.push(chunk);
    } else if (/finding|result|conclusion/.test(lbl)) {
      sections.findings.push(chunk);
    } else if (/limitation|implication|originality|future/.test(lbl)) {
      sections.gap.push(chunk);
    }
  }

  return {
    summary: sections.summary.join(" ").trim(),
    method: sections.method.join(" ").trim(),
    findings: sections.findings.join(" ").trim(),
    gap: sections.gap.join(" ").trim()
  };
}

function scoreSentence(sentence, patterns) {
  let score = 0;
  for (const [regex, weight] of patterns) {
    if (regex.test(sentence)) score += weight;
  }
  return score;
}

function extractMatrixFreeEnglish(paper) {
  const clean = cleanAbstractText(paper.abstract);
  if (!clean) {
    return {
      summary: "[Không có Abstract]",
      method: "-",
      findings: "-",
      gap: "-"
    };
  }

  const structured = parseStructuredAbstractSections(clean);
  const sentences = splitAcademicSentences(clean);

  const summaryPatterns = [
    [/\b(this (study|paper|article|research|work)|we (aim|examine|investigate|explore|analyze|analyse|study|propose|assess|evaluate))\b/i, 4],
    [/\b(purpose|objective|aims? to|seeks? to|focuses? on|addresses?|examines?|investigates?|explores?)\b/i, 3],
    [/\b(mục tiêu|nghiên cứu này|bài viết này|bối cảnh|nhằm mục đích|xem xét|đánh giá)\b/i, 4]
  ];

  const methodPatterns = [
    [/\b(method|methodology|approach|framework|model|regression|panel data|sem|pls-sem|did|difference-in-differences|gmm|ols|iv|econometric|machine learning|deep learning|neural network|meta-analysis|bibliometric|prisma|case study|qualitative|quantitative|mixed-method|experiment)\b/i, 4],
    [/\b(sample|dataset|data from|survey|questionnaire|interview|observations?|firms?|companies|enterprises|participants|respondents|countries|listed|database|compustat|bloomberg|world bank)\b/i, 3],
    [/\b(n\s*=\s*\d+|\d{2,5}\s+(firms|companies|observations|participants|respondents|articles|papers|studies|countries)|(?:19|20)\d{2}\s*[-–to]+\s*(?:19|20)\d{2})\b/i, 3],
    [/\b(phương pháp|dữ liệu|mẫu nghiên cứu|khảo sát|phỏng vấn|hồi quy|mô hình|dữ liệu bảng|doanh nghiệp|quan sát)\b/i, 4]
  ];

  const findingsPatterns = [
    [/\b(results? (show|indicate|reveal|demonstrate|suggest|confirm)|findings? (show|indicate|reveal|demonstrate|suggest)|we find|our findings|evidence shows?|empirically)\b/i, 5],
    [/\b(significant(ly)?|positively|negatively|impact|effect|associated with|relationship|increases?|decreases?|improves?|reduces?|outperforms?|mediates?|moderates?|drives?)\b/i, 3],
    [/\b(kết quả|phát hiện|cho thấy|tác động tích cực|tác động tiêu cực|có ý nghĩa thống kê|mối quan hệ|ảnh hưởng)\b/i, 5]
  ];

  const gapPatterns = [
    [/\b(limitation|limitations|caveat|shortcoming|drawback|future research|further (research|study|studies|investigation)|remain(s)? (unclear|limited|scarce|unexplored)|research gap|gap in the literature)\b/i, 6],
    [/\b(however|although|nevertheless|despite|yet|still scarce|lack of|little is known|underexplored|challenge|barrier|implications? for (policy|practice|managers|future))\b/i, 3],
    [/\b(hạn chế|khoảng trống|nghiên cứu tương lai|nghiên cứu tiếp theo|tuy nhiên|thách thức|hàm ý chính sách|hàm ý quản trị)\b/i, 5]
  ];

  const pickBestSentences = (patterns, maxCount, excludeIndices = new Set(), biasFn = null) => {
    const scored = sentences.map((s, idx) => {
      let sc = scoreSentence(s, patterns);
      if (biasFn) sc += biasFn(idx, sentences.length);
      if (excludeIndices.has(idx)) sc -= 1.5;
      return { idx, text: s, score: sc };
    });
    const positives = scored.filter((item) => item.score > 0).sort((a, b) => b.score - a.score);
    const chosen = positives.slice(0, maxCount).sort((a, b) => a.idx - b.idx);
    chosen.forEach((c) => excludeIndices.add(c.idx));
    return chosen.map((c) => c.text).join(" ");
  };

  const used = new Set();

  let summary = structured?.summary || "";
  if (!summary) {
    summary = pickBestSentences(summaryPatterns, 2, used, (idx) => (idx === 0 ? 2 : idx === 1 ? 1 : 0));
    if (!summary) summary = sentences.slice(0, Math.min(2, sentences.length)).join(" ");
  }

  let method = structured?.method || "";
  if (!method) {
    method = pickBestSentences(methodPatterns, 2, used);
    if (!method) {
      method = isVietnameseText(clean)
        ? "Abstract chưa nêu chi tiết phương pháp hoặc cỡ mẫu; cần kiểm tra mục Methodology trong bài gốc."
        : "Not explicitly specified in the abstract; check the Methodology/Data section in the full text.";
    }
  }

  let findings = structured?.findings || "";
  if (!findings) {
    findings = pickBestSentences(findingsPatterns, 2, used, (idx, len) => (idx >= Math.floor(len * 0.45) ? 1 : 0));
    if (!findings) {
      const tailIdx = Math.max(0, sentences.length - 2);
      findings = sentences.slice(tailIdx).join(" ");
    }
  }

  let gap = structured?.gap || "";
  if (!gap) {
    gap = pickBestSentences(gapPatterns, 2, used, (idx, len) => (idx === len - 1 ? 1 : 0));
    if (!gap) {
      gap = isVietnameseText(clean)
        ? "Abstract chưa nêu trực tiếp hạn chế/khoảng trống; gợi ý đọc phần Conclusion & Future Research trong bài gốc."
        : "No explicit limitations or research gap stated in the abstract; inspect Conclusion & Future Research in the full text.";
    }
  }

  return { summary, method, findings, gap };
}

async function translateViaLocalServer(texts) {
  if (localTranslateServerAvailable === false) return null;
  if (window.location.protocol === "file:") {
    localTranslateServerAvailable = false;
    return null;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts, source: "auto", target: "vi" }),
      signal: controller.signal
    });
    clearTimeout(timer);

    if (!res.ok) {
      if (res.status === 404 || res.status === 405) {
        localTranslateServerAvailable = false;
      }
      return null;
    }
    const data = await res.json();
    if (data?.ok && Array.isArray(data.translated) && data.translated.length === texts.length) {
      localTranslateServerAvailable = true;
      return data.translated;
    }
    return null;
  } catch (_) {
    localTranslateServerAvailable = false;
    return null;
  }
}

async function translateSingleTextBrowser(text) {
  const trimmed = (text || "").trim();
  if (!trimmed || isVietnameseText(trimmed)) return trimmed;

  // Nguồn 1: Google Translate public endpoint (hỗ trợ CORS trực tiếp từ GitHub Pages)
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${encodeURIComponent(trimmed)}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const joined = data[0].map((part) => (Array.isArray(part) ? part[0] || "" : "")).join("").trim();
        if (joined) return joined;
      }
    }
  } catch (_) {}

  // Nguồn 2: MyMemory free API dự phòng (giới hạn 500 ký tự mỗi lần)
  try {
    const snippet = trimmed.slice(0, 480);
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(snippet)}&langpair=en|vi`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      const translated = data?.responseData?.translatedText;
      if (translated && !/MYMEMORY WARNING/i.test(translated)) {
        return translated.trim();
      }
    }
  } catch (_) {}

  return null;
}

async function analyzePaperFreeMode(paper) {
  const extracted = extractMatrixFreeEnglish(paper);
  const fields = [extracted.summary, extracted.method, extracted.findings, extracted.gap];

  // Nếu Abstract đã là tiếng Việt sẵn thì không cần dịch
  if (isVietnameseText(paper.abstract)) {
    return {
      ...extracted,
      translated: true,
      metaLabel: "Trích xuất tự động (Tiếng Việt gốc)"
    };
  }

  // Nếu đang mất mạng, trả về ngay kết quả tiếng Anh để không lỗi
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return {
      ...extracted,
      translated: false,
      metaLabel: "Trích xuất tự động (EN · Ngoại tuyến)"
    };
  }

  // Ưu tiên 1: Dịch nhanh qua server.py nếu đang chạy local server
  const serverResult = await translateViaLocalServer(fields);
  if (serverResult) {
    return {
      summary: serverResult[0] || extracted.summary,
      method: serverResult[1] || extracted.method,
      findings: serverResult[2] || extracted.findings,
      gap: serverResult[3] || extracted.gap,
      translated: true,
      metaLabel: "Trích xuất tự động + Dịch nhanh (server.py)"
    };
  }

  // Ưu tiên 2: Dịch trực tiếp trên trình duyệt (hoạt động tốt trên GitHub Pages)
  try {
    const translatedParts = await Promise.all(fields.map((t) => translateSingleTextBrowser(t)));
    const anyTranslated = translatedParts.some((val, idx) => Boolean(val && val !== fields[idx]));
    if (anyTranslated) {
      return {
        summary: translatedParts[0] || extracted.summary,
        method: translatedParts[1] || extracted.method,
        findings: translatedParts[2] || extracted.findings,
        gap: translatedParts[3] || extracted.gap,
        translated: true,
        metaLabel: "Trích xuất tự động + Dịch nhanh VI"
      };
    }
  } catch (_) {}

  // Dự phòng an toàn tuyệt đối: giữ nguyên tiếng Anh đã tách
  return {
    ...extracted,
    translated: false,
    metaLabel: "Trích xuất tự động (EN · Giữ nguyên khi mất mạng)"
  };
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
  const sheet2Data = (selected.length > 0 ? selected : papers).map((p, idx) => {
    const modeLabel = !hasAnalyzedMatrix(p)
      ? ""
      : (p.aiMode || "api") === "free"
        ? "Không API Key"
        : `AI API${p.aiModelUsed ? " (" + p.aiModelUsed + ")" : ""}`;
    return {
      STT: idx + 1,
      "Tác giả (Năm)": `${p.firstAuthor} (${p.year})`,
      "Tên bài báo": p.title,
      "Tạp chí & Hạng Q": `${p.journal} ${p.scopusQuartile ? "(" + p.scopusQuartile + ")" : ""}`,
      "Chế độ phân tích": modeLabel,
      "Tóm tắt (Tiếng Việt)": p.aiSummary,
      "Phương pháp & Dữ liệu": p.aiMethod,
      "Phát hiện chính": p.aiFindings,
      "Khoảng trống nghiên cứu": p.aiGap,
      DOI: p.doi ? `https://doi.org/${p.doi}` : ""
    };
  });
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

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}
