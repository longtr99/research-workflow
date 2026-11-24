// ==========================================
// AI PROVIDERS CATALOG (UPDATED 2026)
// ==========================================
const AI_PROVIDERS = {
  gemini: {
    id: "gemini",
    name: "Google Gemini (Khuyên dùng · Từ 3.8 trở lên)",
    shortName: "Google Gemini",
    protocol: "gemini",
    apiKeyPlaceholder: "Nhập Gemini API Key (bắt đầu bằng AIza...)",
    keyUrl: "https://aistudio.google.com/apikey",
    keyLinkLabel: "Tạo Gemini API Key miễn phí tại aistudio.google.com/apikey ↗",
    defaultModel: "gemini-3.8-flash",
    canFetchLiveModels: true,
    autoTiers: {
      speed: ["gemini-3.8-flash", "gemini-4-hydrogen"],
      balanced: ["gemini-3.8-flash", "gemini-4-hydrogen", "gemini-4-argon"],
      quality: ["gemini-4-argon", "gemini-4-carbon", "gemini-3.8-flash"]
    },
    models: [
      { id: "gemini-3.8-flash", label: "Gemini 3.8 Flash (Khuyên dùng · Nhanh & 1M context)" },
      { id: "gemini-4-hydrogen", label: "Gemini 4 Hydrogen (Thế hệ 4 · Nhanh & hiệu quả)" },
      { id: "gemini-4-argon", label: "Gemini 4 Argon (Thế hệ 4 · Suy luận sâu)" },
      { id: "gemini-4-carbon", label: "Gemini 4 Carbon (Thế hệ 4 · Cao cấp nhất)" },
      { id: "gemini-4-neon", label: "Gemini 4 Neon (Thế hệ 4 · Preview)" }
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
    autoTiers: {
      speed: ["gpt-6.1-terra", "gpt-4o-mini", "gpt-5-nano", "gpt-6-luna"],
      balanced: ["gpt-6.2-sol", "gpt-5-mini", "gpt-4o-mini", "gpt-4.1-mini"],
      quality: ["gpt-6.2-astra", "gpt-5", "gpt-4o", "gpt-6.2-sol"]
    },
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
    defaultModel: "google/gemini-3.8-flash",
    canFetchLiveModels: true,
    publicModelsEndpoint: true,
    autoTiers: {
      speed: ["google/gemini-3.8-flash", "deepseek/deepseek-chat-v3-0324:free", "meta-llama/llama-3.3-70b-instruct:free"],
      balanced: ["google/gemini-3.8-flash", "openai/gpt-6.2-sol", "deepseek/deepseek-flash", "openrouter/auto"],
      quality: ["anthropic/claude-sonnet-5-5", "google/gemini-4-argon", "openai/gpt-6.2-sol", "anthropic/claude-opus-5-5"]
    },
    models: [
      { id: "google/gemini-3.8-flash", label: "Google: Gemini 3.8 Flash" },
      { id: "google/gemini-4-hydrogen", label: "Google: Gemini 4 Hydrogen" },
      { id: "google/gemini-4-argon", label: "Google: Gemini 4 Argon" },
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
    autoTiers: {
      speed: ["claude-haiku-5-5", "claude-haiku-4-5", "claude-3-5-haiku-latest"],
      balanced: ["claude-sonnet-5-5", "claude-sonnet-4-5", "claude-haiku-5-5"],
      quality: ["claude-opus-5-5", "claude-fable-5-2", "claude-sonnet-5-5"]
    },
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
    autoTiers: {
      speed: ["deepseek-flash", "deepseek-chat"],
      balanced: ["deepseek-flash", "deepseek-v4-pro", "deepseek-chat"],
      quality: ["deepseek-v4-pro", "deepseek-reasoner", "deepseek-flash"]
    },
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
    autoTiers: {
      speed: ["llama-3.1-8b-instant", "meta-llama/llama-4-scout-17b-16e-instruct", "gemma2-9b-it"],
      balanced: ["llama-3.3-70b-versatile", "meta-llama/llama-4-maverick-17b-128e-instruct", "llama-3.1-8b-instant"],
      quality: ["meta-llama/llama-4-maverick-17b-128e-instruct", "qwen/qwen3-32b", "deepseek-r1-distill-llama-70b", "llama-3.3-70b-versatile"]
    },
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
    autoTiers: {
      speed: ["grok-4-fast", "grok-3-mini"],
      balanced: ["grok-4.7", "grok-4-fast", "grok-4"],
      quality: ["grok-4.7", "grok-420-reasoning", "grok-4"]
    },
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
    autoTiers: {
      speed: ["ministral-3b-latest", "mistral-small-4", "ministral-8b-latest"],
      balanced: ["mistral-small-4", "mistral-medium-latest", "mistral-large-4"],
      quality: ["mistral-large-4", "mistral-large-latest", "magistral-medium-latest"]
    },
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
    autoTiers: {
      speed: ["sonar", "sonar-pro"],
      balanced: ["sonar", "sonar-pro", "sonar-reasoning"],
      quality: ["sonar-pro", "sonar-deep-research", "sonar-reasoning-pro"]
    },
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
    autoTiers: {
      speed: ["qwen3.6-flash", "qwen3.8-flash", "qwen-turbo"],
      balanced: ["qwen3.6-plus", "qwen3.6-flash", "qwen-plus"],
      quality: ["qwen3.8-max", "qwen3.6-plus", "qwq-plus"]
    },
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
    autoTiers: {
      speed: ["moonshot-v1-8k", "kimi-k2.6", "kimi-k3"],
      balanced: ["kimi-k3", "kimi-k2.6", "moonshot-v1-32k"],
      quality: ["kimi-k3.1-pro", "kimi-k3", "kimi-k2-thinking"]
    },
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
    autoTiers: {
      speed: ["glm-4.5-flash", "glm-5.3-flash", "glm-4-flash"],
      balanced: ["glm-5.3-flash", "glm-5.2", "glm-4.5"],
      quality: ["glm-5.3", "glm-5.2", "glm-5.3-flash"]
    },
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
    autoTiers: {
      speed: ["command-r7b-12-2024", "command-r"],
      balanced: ["command-a-plus-05-2026", "command-a-03-2025", "command-r"],
      quality: ["command-a-plus-05-2026", "command-a-reasoning-08-2025", "command-r-plus"]
    },
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
    autoTiers: {
      speed: ["mistralai/Mistral-Small-24B-Instruct-2501", "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8", "meta-llama/Llama-3.3-70B-Instruct-Turbo"],
      balanced: ["meta-llama/Llama-3.3-70B-Instruct-Turbo", "deepseek-ai/DeepSeek-V3", "zai-org/GLM-5.2"],
      quality: ["Qwen/Qwen3-235B-A22B-Instruct-2507-tput", "deepseek-ai/DeepSeek-V3", "moonshotai/kimi-k3.1-pro"]
    },
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
    autoTiers: {
      speed: ["accounts/fireworks/models/llama4-maverick-instruct-basic", "accounts/fireworks/models/llama-v3p3-70b-instruct"],
      balanced: ["accounts/fireworks/models/deepseek-v3", "accounts/fireworks/models/llama-v3p3-70b-instruct"],
      quality: ["accounts/fireworks/models/deepseek-v3", "accounts/fireworks/models/qwen3-235b-a22b", "accounts/fireworks/models/deepseek-r1"]
    },
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
    autoTiers: {
      speed: ["qwen2.5:7b", "qwen3:8b", "deepseek-r1:8b"],
      balanced: ["qwen3:8b", "qwen2.5:7b", "gemma3:12b"],
      quality: ["llama3.3:70b", "gemma3:12b", "qwen3:8b"]
    },
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
let scopusFileName = "";
let liveModelsCache = {}; // { providerId: [{ id, label }, ...] }
let settings = {
  analysisMode: "api", // "api" | "free"
  provider: "gemini",
  model: "auto",
  autoProfile: "balanced", // "balanced" | "speed" | "quality"
  apiKey: "",
  customBaseUrl: "http://localhost:11434/v1",
  email: ""
};
let stopAiFlag = false;
let activeAbortController = null;
let localTranslateServerAvailable = null; // null = chưa kiểm tra, true/false = đã kiểm tra

try {
  papers = JSON.parse(localStorage.getItem("rw_papers") || "[]");
} catch (e) {
  papers = [];
}

try {
  scopusMap = JSON.parse(localStorage.getItem("rw_scopus_map") || "{}");
  scopusFileName = localStorage.getItem("rw_scopus_filename") || "";
} catch (e) {
  scopusMap = {};
  scopusFileName = "";
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

function isDeprecatedGeminiModel(modelId) {
  const id = (modelId || "").toLowerCase().replace(/^google\//, "");
  if (!id.startsWith("gemini-")) return false;
  const verMatch = id.match(/^gemini-(\d+)(?:\.(\d+))?/);
  if (!verMatch) return false;
  const major = parseInt(verMatch[1], 10);
  const minor = parseInt(verMatch[2] || "0", 10);
  return major < 3 || (major === 3 && minor < 8);
}

if (!AI_PROVIDERS[settings.provider]) {
  settings.provider = "gemini";
}
if (!["api", "free"].includes(settings.analysisMode)) {
  settings.analysisMode = "api";
}
if (!["balanced", "speed", "quality"].includes(settings.autoProfile)) {
  settings.autoProfile = "balanced";
}
// Tự động nâng cấp model Gemini cũ (< 3.8) đã lưu từ trước sang gemini-3.8-flash
if (settings.provider === "gemini" && isDeprecatedGeminiModel(settings.model)) {
  settings.model = "gemini-3.8-flash";
  try {
    localStorage.setItem("rw_settings", JSON.stringify(settings));
  } catch (e) {}
} else if (settings.provider === "openrouter" && isDeprecatedGeminiModel(settings.model)) {
  settings.model = "google/gemini-3.8-flash";
  try {
    localStorage.setItem("rw_settings", JSON.stringify(settings));
  } catch (e) {}
}
// Loại bỏ model Gemini cũ (< 3.8) nếu từng được cache từ API
if (Array.isArray(liveModelsCache.gemini)) {
  liveModelsCache.gemini = liveModelsCache.gemini.filter((m) => !isDeprecatedGeminiModel(m.id));
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
    const autoOptionHtml = `<option value="auto">★ Auto — Tự chọn model tối ưu theo yêu cầu</option>`;
    const optionsHtml = models
      .map((m) => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.id)}${m.label && m.label !== m.id ? " — " + escapeHtml(m.label) : ""}</option>`)
      .join("");
    selectEl.innerHTML = autoOptionHtml + optionsHtml + `<option value="__custom__">-- Nhập mã model tùy chỉnh ở ô bên dưới --</option>`;

    const targetModel = preferredModel || "auto";
    if (targetModel.toLowerCase() === "auto") {
      selectEl.value = "auto";
    } else if (models.some((m) => m.id === targetModel)) {
      selectEl.value = targetModel;
    } else if (preferredModel) {
      selectEl.value = "__custom__";
    } else {
      selectEl.value = "auto";
    }

    if (modelInput) {
      modelInput.value = targetModel || "auto";
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
        .filter((m) => m.id && !isDeprecatedGeminiModel(m.id));
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
  const autoProfileEl = document.getElementById("aiAutoProfile");

  const providerId = AI_PROVIDERS[settings.provider] ? settings.provider : "gemini";
  if (providerEl) providerEl.value = providerId;
  if (apiKeyEl) apiKeyEl.value = settings.apiKey || "";
  if (customUrlEl) customUrlEl.value = settings.customBaseUrl || "http://localhost:11434/v1";
  if (emailEl) emailEl.value = settings.email || "";
  if (autoProfileEl) autoProfileEl.value = settings.autoProfile || "balanced";

  populateModelsForProvider(providerId, settings.model || "auto");
  updatePerfEstimateUI();
}

function isAutoModelSelected() {
  return (settings.model || "auto").trim().toLowerCase() === "auto";
}

function resolveAutoModelPlan(providerId, targets = [], profileOverride = null) {
  const cfg = AI_PROVIDERS[providerId] || AI_PROVIDERS.gemini;
  const profile = profileOverride || settings.autoProfile || "balanced";
  const count = Array.isArray(targets) ? targets.length : 0;
  const avgAbstractLen =
    count > 0
      ? Math.round(targets.reduce((acc, p) => acc + (p.abstract || "").length, 0) / count)
      : 1000;

  const tiers = cfg.autoTiers || {};
  const liveIds = (Array.isArray(liveModelsCache[cfg.id]) ? liveModelsCache[cfg.id] : []).map((m) => m.id);

  if (!isAutoModelSelected()) {
    const fixedModel = (settings.model || cfg.defaultModel).trim() || cfg.defaultModel;
    const backups = [
      ...(tiers.speed || []),
      ...(tiers.balanced || []),
      ...(tiers.quality || []),
      cfg.defaultModel
    ].filter((m) => m && m !== fixedModel);
    const candidateModels = [fixedModel, ...new Set(backups)].slice(0, 5);
    return {
      isAuto: false,
      profile,
      tier: "manual",
      primaryModel: fixedModel,
      candidateModels,
      batchSize: 2,
      maxAbstractChars: 1200
    };
  }

  let tier = "balanced";
  let batchSize = count > 0 && count <= 6 ? 2 : 3;
  let maxAbstractChars = 1200;

  if (profile === "speed") {
    tier = "speed";
    batchSize = 3;
    maxAbstractChars = 1000;
  } else if (profile === "quality") {
    tier = "quality";
    batchSize = 2;
    maxAbstractChars = 1800;
  } else {
    if (count > 0 && count <= 4 && avgAbstractLen >= 900) {
      tier = "quality";
      batchSize = 2;
      maxAbstractChars = 1500;
    } else if (count >= 12) {
      tier = "speed";
      batchSize = 3;
      maxAbstractChars = 1100;
    } else {
      tier = "balanced";
      batchSize = count > 0 && count <= 6 ? 2 : 3;
      maxAbstractChars = 1200;
    }
  }

  const tierOrder = [
    ...(tiers[tier] || []),
    ...(tiers.speed || []),
    ...(tiers.balanced || []),
    ...(tiers.quality || []),
    cfg.defaultModel
  ];
  const candidateModels = [...new Set([...tierOrder, ...liveIds].filter(Boolean))].slice(0, 6);

  return {
    isAuto: true,
    profile,
    tier,
    primaryModel: candidateModels[0] || cfg.defaultModel,
    candidateModels,
    batchSize,
    maxAbstractChars
  };
}

function updatePerfEstimateUI() {
  const chkAuto = document.getElementById("chkTab3AutoModel");
  const profileSel = document.getElementById("tab3AutoProfile");
  const strip = document.getElementById("tab3PerfStrip");
  const estEl = document.getElementById("tab3PerfEstimate");

  const isAuto = isAutoModelSelected();
  const isFree = settings.analysisMode === "free";

  if (chkAuto) {
    chkAuto.checked = isAuto;
    chkAuto.disabled = isFree;
  }
  if (profileSel) {
    profileSel.value = settings.autoProfile || "balanced";
    profileSel.disabled = isFree || !isAuto;
  }
  if (strip) {
    strip.classList.toggle("is-free", isFree);
  }

  if (!estEl) return;

  const overwrite = document.getElementById("chkOverwriteMatrix")?.checked ?? true;
  const selectedWithAbstract = papers.filter((p) => p.selected && p.abstract);
  const targets = overwrite
    ? selectedWithAbstract
    : selectedWithAbstract.filter((p) => !hasAnalyzedMatrix(p));

  if (isFree) {
    const estCalls = targets.length;
    estEl.innerHTML =
      targets.length > 0
        ? `Chế độ miễn phí: <strong>${targets.length} bài</strong> · gộp 1 lần dịch/bài, chạy song song 3 luồng (~<strong>${estCalls}</strong> yêu cầu, 0 API token)`
        : `Chế độ miễn phí: <strong>0 API token</strong> · Gộp dịch 1 lần/bài &amp; song song 3 luồng.`;
    return;
  }

  const plan = resolveAutoModelPlan(settings.provider, targets);
  if (targets.length === 0) {
    estEl.innerHTML = plan.isAuto
      ? `Auto đang chọn sẵn: <strong>${escapeHtml(plan.primaryModel)}</strong> (gộp ${plan.batchSize} bài/lô · song song 2 luồng)`
      : `Model cố định: <strong>${escapeHtml(plan.primaryModel)}</strong> (kèm ${Math.max(0, plan.candidateModels.length - 1)} model dự phòng · gộp ${plan.batchSize} bài/lô · song song 2 luồng)`;
    return;
  }

  const batchCalls = Math.ceil(targets.length / plan.batchSize);
  const savedCallsPct = Math.max(0, Math.round((1 - batchCalls / targets.length) * 100));
  estEl.innerHTML = `${plan.isAuto ? "Auto chọn" : "Model"}: <strong>${escapeHtml(plan.primaryModel)}</strong> · ${targets.length} bài → <strong>${batchCalls} lần gọi API</strong> (song song 2 luồng · giảm ~${savedCallsPct}% lệnh gọi)`;
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
    const plan = resolveAutoModelPlan(cfg.id, papers.filter((p) => p.selected && p.abstract));
    const modelLabel = plan.isAuto ? `Auto → ${plan.primaryModel}` : plan.primaryModel;
    apiHint.innerHTML = `
      <span>Đang cấu hình: <strong>${escapeHtml(cfg.shortName)}</strong> · <code>${escapeHtml(modelLabel)}</code> · ${keyBadge}</span>
      <button type="button" class="link-jump" id="btnJumpToSettings">Đổi cấu hình Tab 4 →</button>
    `;
    document.getElementById("btnJumpToSettings")?.addEventListener("click", (evt) => {
      evt.stopPropagation();
      switchToTab("tab-settings");
    });
  }

  updatePerfEstimateUI();
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
function debounce(fn, delayMs = 180) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}

function bindEvents() {
  document.getElementById("btnRunSearch")?.addEventListener("click", runOpenAlexSearch);
  document.getElementById("filterText")?.addEventListener("input", debounce(renderPapersTable, 180));
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
    if (papers.length === 0) {
      setScopusFeedback("Chưa có bài báo nào ở Tab 1 để đối chiếu.", "info");
      return;
    }
    papers.forEach((p) => matchScopusForPaper(p));
    savePapers();
    renderPapersTable();
    const matchedCount = papers.filter((p) => p.scopusQuartile).length;
    setScopusFeedback(
      `Đã đối chiếu lại danh sách hiện tại: khớp ${matchedCount}/${papers.length} bài với danh mục Scopus/Q!`,
      "success"
    );
  });
  document.getElementById("btnClearScopus")?.addEventListener("click", () => {
    scopusMap = {};
    scopusFileName = "";
    localStorage.removeItem("rw_scopus_map");
    localStorage.removeItem("rw_scopus_filename");
    updateScopusDbStatus();
    papers.forEach((p) => matchScopusForPaper(p));
    savePapers();
    renderPapersTable();
    setScopusFeedback("Đã xóa dữ liệu danh mục tạp chí.", "info");
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
    if (activeAbortController) {
      try {
        activeAbortController.abort();
      } catch (_) {}
    }
  });
  document.getElementById("chkOverwriteMatrix")?.addEventListener("change", updatePerfEstimateUI);

  // Tab 3 Auto Model quick controls
  document.getElementById("chkTab3AutoModel")?.addEventListener("change", (e) => {
    const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
    const nextModel = e.target.checked ? "auto" : cfg.defaultModel;
    settings.model = nextModel;
    persistSettings();
    populateModelsForProvider(cfg.id, nextModel);
    syncAnalysisModeUI();
  });
  document.getElementById("tab3AutoProfile")?.addEventListener("change", (e) => {
    settings.autoProfile = e.target.value;
    const tab4Profile = document.getElementById("aiAutoProfile");
    if (tab4Profile) tab4Profile.value = settings.autoProfile;
    persistSettings();
    syncAnalysisModeUI();
  });

  // Settings — Provider & Model Auto-Jump
  document.getElementById("aiProvider")?.addEventListener("change", (e) => {
    const nextProvider = e.target.value;
    const cfg = AI_PROVIDERS[nextProvider] || AI_PROVIDERS.gemini;
    const keepAuto = isAutoModelSelected() ? "auto" : cfg.defaultModel;
    settings.provider = cfg.id;
    settings.model = keepAuto;
    persistSettings();
    populateModelsForProvider(cfg.id, keepAuto);
    syncAnalysisModeUI();

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
      settings.model = val;
      persistSettings();
      syncAnalysisModeUI();
    } else if (val === "__custom__" && modelInput) {
      modelInput.focus();
      modelInput.select();
    }
  });

  document.getElementById("aiAutoProfile")?.addEventListener("change", (e) => {
    settings.autoProfile = e.target.value;
    persistSettings();
    syncAnalysisModeUI();
  });

  document.getElementById("aiModel")?.addEventListener("input", (e) => {
    const typed = e.target.value.trim();
    const selectEl = document.getElementById("aiModelSelect");
    if (!selectEl) return;
    const lower = typed.toLowerCase();
    if (lower === "auto") {
      selectEl.value = "auto";
    } else {
      const hasMatch = [...selectEl.options].some((opt) => opt.value === typed);
      selectEl.value = hasMatch ? typed : "__custom__";
    }
    settings.model = typed || "auto";
    syncAnalysisModeUI();
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
  const rawModel = (document.getElementById("aiModel")?.value || "auto").trim();
  const model = rawModel.toLowerCase() === "auto" ? "auto" : rawModel || "auto";
  const autoProfile = document.getElementById("aiAutoProfile")?.value || settings.autoProfile || "balanced";
  const apiKey = (document.getElementById("aiApiKey")?.value || "").trim();
  const customBaseUrl = (document.getElementById("customBaseUrl")?.value || cfg.baseUrl || "").trim();
  const email = (document.getElementById("userEmail")?.value || "").trim();

  return {
    ...settings,
    provider: cfg.id,
    model,
    autoProfile,
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
    const plan = resolveAutoModelPlan(cfg.id, []);
    const modelDesc = plan.isAuto ? `Auto (${plan.primaryModel})` : plan.primaryModel;
    statusEl.textContent = `Đã lưu cấu hình (${cfg.shortName} · ${modelDesc}) thành công!`;
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

  const samplePaper = {
    id: "__test__",
    title: "Corporate Carbon Disclosure and Firm Value",
    abstract:
      "This study examines the impact of corporate carbon disclosure on firm value using panel data from 200 listed firms between 2018 and 2023. The findings show a positive association, while future research should investigate private firms."
  };
  const plan = resolveAutoModelPlan(cfg.id, [samplePaper], draft.autoProfile);

  if (btn) btn.disabled = true;
  if (statusEl) {
    statusEl.textContent = `Đang kiểm tra kết nối tới ${cfg.shortName} (${plan.isAuto ? "Auto → " + plan.primaryModel : plan.primaryModel})...`;
  }

  const startedAt = Date.now();
  const telemetry = { callsMade: 0, totalTokens: 0, hadRateLimit: false };
  try {
    const res = await callAiBatchWithRetryAndFallback(
      [samplePaper],
      plan.candidateModels,
      plan.maxAbstractChars,
      statusEl,
      "Kiểm tra",
      telemetry
    );
    const first = res.items?.[0];
    if (!first || (!first.summary && !first.findings)) {
      throw new Error("Phản hồi không đúng cấu trúc JSON mong đợi.");
    }
    const elapsedMs = Date.now() - startedAt;
    if (statusEl) {
      statusEl.textContent = `Kết nối thành công với ${cfg.shortName} (${res.usedModel}) trong ${elapsedMs}ms! (~${telemetry.totalTokens || res.totalTokens || "?"} tokens)`;
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
async function fetchWithTimeout(url, options = {}, timeoutMs = 20000, externalSignal = null) {
  const controller = new AbortController();
  const timeoutErr = new Error(`Quá thời gian chờ (${Math.round(timeoutMs / 1000)}s)`);
  timeoutErr.name = "TimeoutError";
  timeoutErr.isTimeout = true;

  const abortErr = new Error("Đã hủy bởi người dùng");
  abortErr.name = "AbortError";
  abortErr.isUserAbort = true;

  const timer = setTimeout(() => controller.abort(timeoutErr), timeoutMs);
  const onExternalAbort = () => controller.abort(abortErr);

  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timer);
      throw abortErr;
    }
    externalSignal.addEventListener("abort", onExternalAbort, { once: true });
  }

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (err) {
    if (externalSignal?.aborted || err?.isUserAbort) throw abortErr;
    if (controller.signal.aborted && controller.signal.reason) {
      throw controller.signal.reason;
    }
    throw err;
  } finally {
    clearTimeout(timer);
    if (externalSignal) {
      externalSignal.removeEventListener("abort", onExternalAbort);
    }
  }
}

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
  const sortBy = document.getElementById("sortBy")?.value || "relevance_score:desc";
  const minCitations = parseInt(document.getElementById("minCitations")?.value || "0", 10);
  const onlyOA = document.getElementById("onlyOpenAccess")?.value === "oa";
  const lang = document.getElementById("searchLanguage")?.value || "ALL";

  const statusEl = document.getElementById("searchStatus");
  const btn = document.getElementById("btnRunSearch");
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = "Đang kết nối OpenAlex API (chế độ tải nhanh)...";

  const startedAt = Date.now();
  let fetched = [];
  let cursor = "*";
  let stoppedByLimit = false;
  const selectFields =
    "id,doi,title,publication_year,authorships,primary_location,open_access,cited_by_count,abstract_inverted_index";

  try {
    while (fetched.length < maxResults && cursor) {
      const remaining = maxResults - fetched.length;
      const perPage = Math.min(200, Math.max(25, remaining));
      const filters = [`publication_year:${yearFrom}-${yearTo}`, "type:article"];
      if (minCitations > 0) filters.push(`cited_by_count:>${minCitations - 1}`);
      if (onlyOA) filters.push("is_oa:true");
      if (lang !== "ALL") filters.push(`language:${lang}`);

      let url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=${filters.join(",")}&sort=${sortBy}&per-page=${perPage}&select=${selectFields}&cursor=${encodeURIComponent(cursor)}`;
      if (settings.email) url += `&mailto=${encodeURIComponent(settings.email)}`;

      let res = null;
      for (let attempt = 0; attempt < 3; attempt++) {
        res = await fetchWithTimeout(url, {}, 25000);
        if (res.status === 429 || res.status >= 500) {
          if (attempt < 2) {
            const waitMs = res.status === 429 ? 3500 * (attempt + 1) : 1500 * (attempt + 1);
            if (statusEl) {
              statusEl.textContent = `OpenAlex phản hồi HTTP ${res.status}, tự thử lại sau ${(waitMs / 1000).toFixed(1)}s...`;
            }
            await sleep(waitMs);
            continue;
          }
        }
        break;
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
    const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1);
    if (statusEl) {
      statusEl.textContent = stoppedByLimit
        ? `Hoàn tất một phần trong ${elapsedSec}s! Thu được ${papers.length} bài (do giới hạn tần suất/phân trang của OpenAlex).`
        : `Hoàn tất trong ${elapsedSec}s! Thu được ${papers.length} bài báo sau khi lọc trùng.`;
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
        localStorage.setItem("rw_scopus_filename", file.name);
      } catch (storageErr) {
        savedToStorage = false;
      }

      scopusMap = nextMap;
      scopusFileName = file.name;
      updateScopusDbStatus(savedToStorage ? "localStorage" : "memory");

      if (papers.length > 0) {
        papers.forEach((p) => matchScopusForPaper(p));
        savePapers();
        renderPapersTable();
        const matchedCount = papers.filter((p) => p.scopusQuartile).length;
        setScopusFeedback(
          `Đã nạp thành công ${count.toLocaleString("vi-VN")} tạp chí và đối chiếu khớp ${matchedCount}/${papers.length} bài hiện tại với danh mục Scopus/Q!`,
          "success"
        );
      } else {
        setScopusFeedback(
          `Đã nạp thành công ${count.toLocaleString("vi-VN")} tạp chí!`,
          "success"
        );
      }

      e.target.value = "";
    } catch (err) {
      console.error(err);
      setScopusFeedback(`Lỗi khi xử lý file CSV: ${err.message}`, "error");
      updateScopusDbStatus();
    }
  };

  reader.readAsText(file, "UTF-8");
}

function setScopusFeedback(message, type = "success") {
  const el = document.getElementById("scopusMatchFeedback");
  if (!el) return;
  el.textContent = message || "";
  el.className = message ? `status-feedback ${type}` : "status-feedback";
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
    const fileNote = scopusFileName ? ` (${escapeHtml(scopusFileName)})` : "";
    el.innerHTML = `Đang lưu trữ <strong>${keys.length.toLocaleString("vi-VN")}</strong> tạp chí${suffix}${fileNote}`;
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
  updatePerfEstimateUI();
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

function shouldAllowFreeFallback(err) {
  if (!err) return false;
  if (err.isUserAbort || err.name === "AbortError" || stopAiFlag) return false;
  const status = err.status || 0;
  if (status === 401 || status === 402) return false;
  return Boolean(document.getElementById("chkAutoFallbackFree")?.checked ?? true);
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
  const startedAt = Date.now();
  stopAiFlag = false;
  activeAbortController = new AbortController();

  try {
    if (mode === "api") {
      const plan = resolveAutoModelPlan(cfg.id, [paper]);
      const telemetry = { callsMade: 0, totalTokens: 0, hadRateLimit: false };
      if (statusEl) {
        statusEl.textContent = `Đang chạy lại (AI API · ${plan.isAuto ? "Auto → " + plan.primaryModel : plan.primaryModel}): ${paper.title.slice(0, 48)}...`;
      }
      try {
        const res = await callAiBatchWithRetryAndFallback(
          [paper],
          plan.candidateModels,
          plan.maxAbstractChars,
          statusEl,
          "1/1",
          telemetry
        );
        const item = res.items?.[0] || {};
        paper.aiSummary = item.summary || "";
        paper.aiMethod = item.method || "";
        paper.aiFindings = item.findings || "";
        paper.aiGap = item.gap || "";
        paper.aiMode = "api";
        paper.aiModelUsed = `${cfg.shortName} · ${plan.isAuto ? "Auto → " : ""}${res.usedModel}`;
      } catch (apiErr) {
        if (shouldAllowFreeFallback(apiErr)) {
          if (statusEl) statusEl.textContent = `AI API quá tải (${apiErr.message.slice(0, 40)}). Chuyển sang dự phòng Miễn phí...`;
          const freeRes = await analyzePaperFreeMode(paper);
          paper.aiSummary = freeRes.summary;
          paper.aiMethod = freeRes.method;
          paper.aiFindings = freeRes.findings;
          paper.aiGap = freeRes.gap;
          paper.aiMode = "free";
          paper.aiModelUsed = "Dự phòng Miễn phí (AI API quá tải)";
        } else {
          throw apiErr;
        }
      }
    } else {
      if (statusEl) {
        statusEl.textContent = `Đang chạy lại (Không API Key): ${paper.title.slice(0, 50)}...`;
      }
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
    const sec = ((Date.now() - startedAt) / 1000).toFixed(1);
    if (statusEl) {
      statusEl.textContent = `Đã cập nhật xong "${paper.title.slice(0, 45)}..." trong ${sec}s (${paper.aiMode === "api" ? "AI API" : "Không API Key"}).`;
    }
  } catch (err) {
    if (err.isUserAbort || err.name === "AbortError" || stopAiFlag) {
      if (statusEl) statusEl.textContent = "Đã dừng phân tích.";
      return;
    }
    console.error(err);
    paper.aiSummary = `Lỗi AI: ${err.message}`;
    paper.aiMode = "";
    renderMatrixTable();
    if (statusEl) statusEl.textContent = `Lỗi khi chạy lại bài: ${err.message}`;
  } finally {
    activeAbortController = null;
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
  activeAbortController = new AbortController();
  const btnRun = document.getElementById("btnRunAiMatrix");
  const btnStop = document.getElementById("btnStopAi");
  const statusEl = document.getElementById("aiStatus");
  if (btnRun) btnRun.disabled = true;
  if (btnStop) btnStop.disabled = false;

  const startedAt = Date.now();

  try {
    if (mode === "api") {
      const plan = resolveAutoModelPlan(cfg.id, targets);
      const telemetry = { callsMade: 0, totalTokens: 0, hadRateLimit: false };
      let preferredModel = plan.primaryModel;
      let lastUsedModel = plan.primaryModel;
      let apiSuccessCount = 0;
      let freeFallbackCount = 0;
      let errorCount = 0;
      let donePapers = 0;

      const batches = [];
      for (let i = 0; i < targets.length; i += plan.batchSize) {
        batches.push(targets.slice(i, i + plan.batchSize));
      }

      const getOrderedCandidates = () => {
        if (!preferredModel) return [...plan.candidateModels];
        return [preferredModel, ...plan.candidateModels.filter((m) => m !== preferredModel)];
      };

      const applyFreeFallbackForPapers = async (paperList) => {
        await Promise.all(
          paperList.map(async (p) => {
            try {
              const freeRes = await analyzePaperFreeMode(p);
              p.aiSummary = freeRes.summary;
              p.aiMethod = freeRes.method;
              p.aiFindings = freeRes.findings;
              p.aiGap = freeRes.gap;
              p.aiMode = "free";
              p.aiModelUsed = "Dự phòng Miễn phí (AI API quá tải)";
              freeFallbackCount++;
            } catch (e) {
              p.aiSummary = `Lỗi AI: ${e.message}`;
              p.aiMode = "";
              errorCount++;
            }
          })
        );
      };

      const processBatch = async (batch, bIdx) => {
        const batchLabel = `lô ${bIdx + 1}/${batches.length}`;
        const candidates = getOrderedCandidates();
        if (statusEl) {
          statusEl.textContent = `[AI API · ${plan.isAuto ? "Auto → " : ""}${candidates[0]}] Đang xử lý ${batchLabel} (${batch.length} bài)...`;
        }

        try {
          const res = await callAiBatchWithRetryAndFallback(
            batch,
            candidates,
            plan.maxAbstractChars,
            statusEl,
            batchLabel,
            telemetry
          );
          if (res.usedModel) {
            preferredModel = res.usedModel;
            lastUsedModel = res.usedModel;
          }

          for (let j = 0; j < batch.length; j++) {
            const p = batch[j];
            let item = res.items?.[j];
            if ((!item || (!item.summary && !item.findings)) && !stopAiFlag) {
              try {
                const single = await callAiBatchWithRetryAndFallback(
                  [p],
                  getOrderedCandidates(),
                  plan.maxAbstractChars,
                  statusEl,
                  `bù bài`,
                  telemetry,
                  15000
                );
                if (single.usedModel) {
                  preferredModel = single.usedModel;
                  lastUsedModel = single.usedModel;
                }
                item = single.items?.[0];
              } catch (_) {}
            }

            if (item && (item.summary || item.findings || item.method || item.gap)) {
              p.aiSummary = item.summary || "";
              p.aiMethod = item.method || "";
              p.aiFindings = item.findings || "";
              p.aiGap = item.gap || "";
              p.aiMode = "api";
              p.aiModelUsed = `${cfg.shortName} · ${plan.isAuto ? "Auto → " : ""}${lastUsedModel}`;
              apiSuccessCount++;
            } else if (shouldAllowFreeFallback(new Error("Thiếu dữ liệu JSON"))) {
              await applyFreeFallbackForPapers([p]);
            } else {
              p.aiSummary = "Lỗi AI: Model không trả đủ trường cho bài này.";
              p.aiMode = "";
              errorCount++;
            }
          }
        } catch (err) {
          if (err.isUserAbort || err.name === "AbortError" || stopAiFlag) {
            throw err;
          }

          // Split-batch rescue: chỉ tách lô khi nghi quá tải kích thước lô (timeout hoặc lỗi parse JSON), không tách khi cả nhà cung cấp đang 503/429
          const status = err.status || 0;
          const shouldSplitBatch = batch.length > 1 && (err.isTimeout || status === 0);
          if (shouldSplitBatch) {
            if (statusEl) {
              statusEl.textContent = `Tách ${batchLabel} thành từng bài đơn để tối ưu độ ổn định...`;
            }
            for (const p of batch) {
              if (stopAiFlag) break;
              try {
                const single = await callAiBatchWithRetryAndFallback(
                  [p],
                  getOrderedCandidates(),
                  plan.maxAbstractChars,
                  statusEl,
                  "tách bài",
                  telemetry,
                  15000
                );
                if (single.usedModel) {
                  preferredModel = single.usedModel;
                  lastUsedModel = single.usedModel;
                }
                const item = single.items?.[0];
                if (item && (item.summary || item.findings || item.method || item.gap)) {
                  p.aiSummary = item.summary || "";
                  p.aiMethod = item.method || "";
                  p.aiFindings = item.findings || "";
                  p.aiGap = item.gap || "";
                  p.aiMode = "api";
                  p.aiModelUsed = `${cfg.shortName} · ${plan.isAuto ? "Auto → " : ""}${lastUsedModel}`;
                  apiSuccessCount++;
                  continue;
                }
              } catch (singleErr) {
                if (singleErr.isUserAbort || singleErr.name === "AbortError" || stopAiFlag) throw singleErr;
                if (shouldAllowFreeFallback(singleErr)) {
                  await applyFreeFallbackForPapers([p]);
                  continue;
                }
                p.aiSummary = `Lỗi AI: ${singleErr.message}`;
                p.aiMode = "";
                errorCount++;
                continue;
              }
              if (shouldAllowFreeFallback(err)) {
                await applyFreeFallbackForPapers([p]);
              } else {
                p.aiSummary = `Lỗi AI: ${err.message}`;
                p.aiMode = "";
                errorCount++;
              }
            }
          } else if (shouldAllowFreeFallback(err)) {
            if (statusEl) {
              statusEl.textContent = `AI API quá tải ở ${batchLabel} (${err.message.slice(0, 42)}). Đang chuyển sang dự phòng Miễn phí...`;
            }
            await applyFreeFallbackForPapers(batch);
          } else {
            batch.forEach((p) => {
              p.aiSummary = `Lỗi AI: ${err.message}`;
              p.aiMode = "";
              errorCount++;
            });
          }
        }

        donePapers += batch.length;
        savePapers();
        renderMatrixTable();
      };

      // Chạy song song 2 luồng batch để rút ngắn tối đa thời gian; tự giảm về tuần tự nếu dính 429
      const API_CONCURRENCY = Math.min(2, batches.length);
      let nextBatchIdx = 0;

      const apiWorker = async () => {
        while (!stopAiFlag) {
          const bIdx = nextBatchIdx++;
          if (bIdx >= batches.length) break;
          if (telemetry.hadRateLimit && bIdx > 0) {
            await sleep(1200);
          }
          try {
            await processBatch(batches[bIdx], bIdx);
          } catch (err) {
            if (err.isUserAbort || err.name === "AbortError" || stopAiFlag) break;
          }
        }
      };

      await Promise.all(Array.from({ length: API_CONCURRENCY }, () => apiWorker()));

      if (stopAiFlag) {
        if (statusEl) statusEl.textContent = `Đã dừng (${donePapers}/${targets.length} bài · ${telemetry.callsMade} lần gọi API).`;
      } else if (statusEl) {
        const sec = ((Date.now() - startedAt) / 1000).toFixed(1);
        const tokenText = telemetry.totalTokens > 0 ? ` · ~${telemetry.totalTokens.toLocaleString("vi-VN")} tokens` : "";
        if (freeFallbackCount > 0 && errorCount === 0) {
          statusEl.textContent = `Hoàn tất ${apiSuccessCount + freeFallbackCount}/${targets.length} bài trong ${sec}s (${apiSuccessCount} AI API, ${freeFallbackCount} dự phòng Miễn phí · ${telemetry.callsMade} lần gọi API${tokenText})`;
        } else if (errorCount > 0) {
          statusEl.textContent = `Kết thúc trong ${sec}s: ${apiSuccessCount}/${targets.length} bài thành công, ${errorCount} bài lỗi (${telemetry.callsMade} lần gọi API).`;
        } else {
          statusEl.textContent = `Hoàn tất ${apiSuccessCount}/${targets.length} bài trong ${sec}s · ${telemetry.callsMade} lần gọi API${tokenText} · Model: ${lastUsedModel}`;
        }
      }
    } else {
      // TRƯỜNG HỢP 2: CHẠY SONG SONG 3 LUỒNG + GỘP 1 LẦN DỊCH / BÀI
      const CONCURRENCY = 3;
      let nextIdx = 0;
      let doneCount = 0;
      let translatedCount = 0;
      let englishFallbackCount = 0;

      const worker = async () => {
        while (!stopAiFlag) {
          const idx = nextIdx++;
          if (idx >= targets.length) break;
          const p = targets[idx];
          if (statusEl) {
            statusEl.textContent = `[Miễn phí · 3 luồng] Đang xử lý ${Math.min(doneCount + 1, targets.length)}/${targets.length}: ${p.title.slice(0, 44)}...`;
          }
          try {
            const result = await analyzePaperFreeMode(p);
            p.aiSummary = result.summary;
            p.aiMethod = result.method;
            p.aiFindings = result.findings;
            p.aiGap = result.gap;
            p.aiMode = "free";
            p.aiModelUsed = result.metaLabel;
            if (result.translated) translatedCount++;
            else englishFallbackCount++;
          } catch (err) {
            console.error(err);
            p.aiSummary = `Lỗi trích xuất: ${err.message}`;
            p.aiMode = "";
          }
          doneCount++;
          savePapers();
          renderMatrixTable();
        }
      };

      const workerCount = Math.min(CONCURRENCY, targets.length);
      await Promise.all(Array.from({ length: workerCount }, () => worker()));

      if (stopAiFlag) {
        if (statusEl) statusEl.textContent = `Đã dừng (${doneCount}/${targets.length} bài).`;
      } else if (statusEl) {
        const sec = ((Date.now() - startedAt) / 1000).toFixed(1);
        if (englishFallbackCount > 0 && translatedCount === 0) {
          statusEl.textContent = `Hoàn tất miễn phí ${targets.length} bài trong ${sec}s (giữ tiếng Anh do ngoại tuyến/không gọi được dịch).`;
        } else if (englishFallbackCount > 0) {
          statusEl.textContent = `Hoàn tất miễn phí ${targets.length} bài trong ${sec}s (${translatedCount} bài dịch VI, ${englishFallbackCount} bài giữ EN).`;
        } else {
          statusEl.textContent = `Hoàn tất trích xuất & dịch tiếng Việt miễn phí ${targets.length} bài trong ${sec}s (0 API token)!`;
        }
      }
    }
  } finally {
    activeAbortController = null;
    if (btnRun) btnRun.disabled = false;
    if (btnStop) btnStop.disabled = true;
  }
}

// ==========================================
// 4A. TRƯỜNG HỢP 1 — GỌI AI API TỐI ƯU TOKEN, GOM LÔ & FALLBACK
// ==========================================
function trimAbstractForTokens(abstract, maxChars = 1500) {
  const clean = cleanAbstractText(abstract);
  if (!clean || clean.length <= maxChars) return clean;
  const headLen = Math.floor(maxChars * 0.68);
  const tailLen = Math.max(180, maxChars - headLen - 10);
  let head = clean.slice(0, headLen);
  const lastSpace = head.lastIndexOf(" ");
  if (lastSpace > headLen * 0.7) head = head.slice(0, lastSpace);

  let tail = clean.slice(clean.length - tailLen);
  const firstSpace = tail.indexOf(" ");
  if (firstSpace > 0 && firstSpace < tailLen * 0.3) tail = tail.slice(firstSpace + 1);
  return `${head} [...] ${tail}`;
}

function buildBatchMatrixPrompt(batch, maxAbstractChars = 1500) {
  const papersBlock = batch
    .map((p, idx) => `[#${idx}] ${p.title}\nAbs: ${trimAbstractForTokens(p.abstract, maxAbstractChars)}`)
    .join("\n---\n");

  return `Phân tích ${batch.length} bài báo sau. Trả về DUY NHẤT JSON hợp lệ (không markdown):
{"items":[{"i":0,"s":"Tóm tắt mục tiêu 1-2 câu tiếng Việt học thuật","m":"Phương pháp, mô hình, cỡ mẫu","f":"Kết quả/phát hiện chính","g":"Hạn chế/khoảng trống nghiên cứu"}]}
Đủ ${batch.length} phần tử i=0..${batch.length - 1}, súc tích.

${papersBlock}`;
}

function parseAiJsonResponse(rawText) {
  let cleaned = (rawText || "").trim();
  cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch (_) {
    const objStart = cleaned.indexOf("{");
    const objEnd = cleaned.lastIndexOf("}");
    const arrStart = cleaned.indexOf("[");
    const arrEnd = cleaned.lastIndexOf("]");
    if (objStart !== -1 && objEnd > objStart && (arrStart === -1 || objStart < arrStart)) {
      return JSON.parse(cleaned.slice(objStart, objEnd + 1));
    }
    if (arrStart !== -1 && arrEnd > arrStart) {
      return JSON.parse(cleaned.slice(arrStart, arrEnd + 1));
    }
    throw new Error("AI trả về dữ liệu không phải JSON hợp lệ.");
  }
}

function normalizeMatrixItem(raw) {
  if (!raw || typeof raw !== "object") return null;
  return {
    summary: String(raw.s ?? raw.summary ?? "").trim(),
    method: String(raw.m ?? raw.method ?? "").trim(),
    findings: String(raw.f ?? raw.findings ?? "").trim(),
    gap: String(raw.g ?? raw.gap ?? "").trim()
  };
}

function parseBatchAiResponse(rawText, expectedCount) {
  const parsed = parseAiJsonResponse(rawText);
  const out = new Array(expectedCount).fill(null);

  if (Array.isArray(parsed)) {
    parsed.forEach((item, idx) => {
      const targetIdx = typeof item?.i === "number" ? item.i : idx;
      if (targetIdx >= 0 && targetIdx < expectedCount) {
        out[targetIdx] = normalizeMatrixItem(item);
      }
    });
    return out;
  }

  if (parsed && Array.isArray(parsed.items)) {
    parsed.items.forEach((item, idx) => {
      const targetIdx = typeof item?.i === "number" ? item.i : idx;
      if (targetIdx >= 0 && targetIdx < expectedCount) {
        out[targetIdx] = normalizeMatrixItem(item);
      }
    });
    return out;
  }

  if (parsed && typeof parsed === "object" && expectedCount === 1) {
    out[0] = normalizeMatrixItem(parsed);
    return out;
  }

  throw new Error("Cấu trúc JSON từ AI thiếu trường items.");
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

function parseRetryAfterMs(res) {
  const header = res.headers?.get?.("retry-after");
  if (!header) return 0;
  const sec = parseFloat(header);
  if (!Number.isNaN(sec) && sec > 0) return Math.min(15000, Math.max(2000, sec * 1000));
  return 0;
}

function getGeminiThinkingLevel(model, profile = "balanced") {
  if (/flash/i.test(model || "") && profile !== "quality") {
    return "minimal";
  }
  return "low";
}

async function callAiBatchRequest(batch, modelOverride, maxAbstractChars, telemetry = null, timeoutMsOverride = 0) {
  const cfg = AI_PROVIDERS[settings.provider] || AI_PROVIDERS.gemini;
  const model = (modelOverride || cfg.defaultModel).trim();
  const prompt = buildBatchMatrixPrompt(batch, maxAbstractChars);
  const maxOutputTokens = Math.min(2600, 450 * batch.length + 300);
  const signal = activeAbortController?.signal || null;
  const timeoutMs = timeoutMsOverride || (settings.autoProfile === "quality" ? 28000 : 20000);

  if (cfg.protocol === "gemini") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
    const preferredLevel = getGeminiThinkingLevel(model, settings.autoProfile);

    const sendGeminiReq = async (thinkingLevel) => {
      if (telemetry) telemetry.callsMade++;
      const generationConfig = {
        responseMimeType: "application/json",
        temperature: 0.2,
        maxOutputTokens
      };
      if (thinkingLevel) {
        generationConfig.thinkingConfig = { thinkingLevel };
      }
      return fetchWithTimeout(
        url,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig
          })
        },
        timeoutMs,
        signal
      );
    };

    let res = await sendGeminiReq(preferredLevel);
    if (res.status === 400 && preferredLevel === "minimal") {
      res = await sendGeminiReq("low");
    }
    if (res.status === 400) {
      res = await sendGeminiReq(null);
    }

    if (!res.ok) {
      const err = new Error(await readErrorMessage(res, "Gemini"));
      err.status = res.status;
      err.retryAfterMs = parseRetryAfterMs(res);
      throw err;
    }
    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    const items = parseBatchAiResponse(rawText, batch.length);
    const totalTokens = data.usageMetadata?.totalTokenCount || 0;
    if (telemetry) telemetry.totalTokens += totalTokens;
    return { items, totalTokens, usedModel: model };
  }

  if (cfg.protocol === "anthropic") {
    if (telemetry) telemetry.callsMade++;
    const res = await fetchWithTimeout(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": settings.apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model,
          max_tokens: maxOutputTokens,
          temperature: 0.2,
          messages: [{ role: "user", content: prompt }]
        })
      },
      timeoutMs,
      signal
    );
    if (!res.ok) {
      const err = new Error(await readErrorMessage(res, "Anthropic"));
      err.status = res.status;
      err.retryAfterMs = parseRetryAfterMs(res);
      throw err;
    }
    const data = await res.json();
    const textBlock = (data.content || []).find((c) => c.type === "text");
    const items = parseBatchAiResponse(textBlock?.text || "{}", batch.length);
    const totalTokens = (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0);
    if (telemetry) telemetry.totalTokens += totalTokens;
    return { items, totalTokens, usedModel: model };
  }

  // OpenAI & tất cả nhà cung cấp tương thích OpenAI
  const baseUrl = (cfg.id === "custom" ? settings.customBaseUrl : cfg.baseUrl).replace(/\/+$/, "");
  const endpoint = baseUrl.endsWith("/chat/completions") ? baseUrl : `${baseUrl}/chat/completions`;
  const headers = { "Content-Type": "application/json" };
  if (settings.apiKey) headers.Authorization = `Bearer ${settings.apiKey}`;
  if (cfg.id === "openrouter") {
    headers["HTTP-Referer"] = window.location.origin || "https://github.com";
    headers["X-Title"] = "AI Research Workflow";
  }

  const sendOpenAiReq = async (useJsonFormat) => {
    if (telemetry) telemetry.callsMade++;
    const payload = {
      model,
      temperature: 0.2,
      max_tokens: maxOutputTokens,
      messages: [{ role: "user", content: prompt }]
    };
    if (useJsonFormat && cfg.id !== "perplexity") {
      payload.response_format = { type: "json_object" };
    }
    return fetchWithTimeout(
      endpoint,
      {
        method: "POST",
        headers,
        body: JSON.stringify(payload)
      },
      timeoutMs,
      signal
    );
  };

  let res = await sendOpenAiReq(true);
  if (res.status === 400) {
    res = await sendOpenAiReq(false);
  }
  if (!res.ok) {
    const err = new Error(await readErrorMessage(res, cfg.shortName));
    err.status = res.status;
    err.retryAfterMs = parseRetryAfterMs(res);
    throw err;
  }
  const data = await res.json();
  const rawContent = data.choices?.[0]?.message?.content || "{}";
  const items = parseBatchAiResponse(rawContent, batch.length);
  const totalTokens = data.usage?.total_tokens || 0;
  if (telemetry) telemetry.totalTokens += totalTokens;
  return { items, totalTokens, usedModel: model };
}

async function callAiBatchWithRetryAndFallback(
  batch,
  candidateModels,
  maxAbstractChars,
  statusEl,
  batchLabel,
  telemetry = { callsMade: 0, totalTokens: 0, hadRateLimit: false },
  timeoutMsOverride = 0
) {
  const models = candidateModels && candidateModels.length > 0 ? candidateModels : [settings.model];
  let lastError = null;

  for (let mIdx = 0; mIdx < models.length; mIdx++) {
    const model = models[mIdx];
    const hasNextModel = mIdx < models.length - 1;

    for (let attempt = 0; attempt < 2; attempt++) {
      if (stopAiFlag) {
        const abortErr = new Error("Đã dừng bởi người dùng");
        abortErr.name = "AbortError";
        abortErr.isUserAbort = true;
        throw abortErr;
      }

      try {
        const result = await callAiBatchRequest(batch, model, maxAbstractChars, telemetry, timeoutMsOverride);
        return { ...result, callsMade: telemetry.callsMade, hadRateLimit: telemetry.hadRateLimit };
      } catch (err) {
        if (err.isUserAbort || err.name === "AbortError" || stopAiFlag) throw err;
        lastError = err;
        const status = err.status || 0;

        // Lỗi xác thực / thanh toán -> không thử model khác
        if (status === 401 || status === 402) throw err;

        // Timeout -> không ngủ chờ retry model đang treo, chuyển ngay sang model kế tiếp
        if (err.isTimeout) {
          if (hasNextModel) {
            if (statusEl) {
              statusEl.textContent = `"${model}" phản hồi chậm ở ${batchLabel}. Chuyển nhanh sang "${models[mIdx + 1]}"...`;
            }
            break;
          }
          throw err;
        }

        // Model không tồn tại / bị chặn / không hỗ trợ -> chuyển ngay
        if (status === 404 || status === 403 || status === 400) {
          if (hasNextModel) {
            if (statusEl) {
              statusEl.textContent = `"${model}" báo HTTP ${status} ở ${batchLabel}. Tự chuyển sang "${models[mIdx + 1]}"...`;
            }
            break;
          }
          throw err;
        }

        // HTTP 503 (High Demand) hoặc 5xx -> nếu còn model dự phòng thì chuyển nhanh sau 400ms, chỉ retry nếu là model cuối cùng
        if (status >= 500) {
          if (hasNextModel) {
            if (statusEl) {
              statusEl.textContent = `"${model}" đang quá tải (HTTP ${status}) ở ${batchLabel}. Chuyển sang "${models[mIdx + 1]}"...`;
            }
            await sleep(400);
            break;
          }
          if (attempt === 0) {
            if (statusEl) {
              statusEl.textContent = `API (${model}) báo HTTP ${status} ở ${batchLabel}. Đợi 1.8s thử lại...`;
            }
            await sleep(1800);
            continue;
          }
          throw err;
        }

        // HTTP 429 (Rate Limit)
        if (status === 429) {
          telemetry.hadRateLimit = true;
          if (hasNextModel) {
            if (statusEl) {
              statusEl.textContent = `"${model}" chạm giới hạn 429 ở ${batchLabel}. Chuyển sang "${models[mIdx + 1]}"...`;
            }
            break;
          }
          if (attempt === 0) {
            const waitMs = Math.min(6000, err.retryAfterMs || 3500);
            if (statusEl) {
              statusEl.textContent = `API (${model}) tạm giới hạn 429 ở ${batchLabel}. Đợi ${(waitMs / 1000).toFixed(1)}s thử lại...`;
            }
            await sleep(waitMs);
            continue;
          }
          throw err;
        }

        // Lỗi mạng tạm thời (status === 0) hoặc JSON parse error
        if (attempt === 0 && !hasNextModel) {
          await sleep(1200);
          continue;
        }
        if (hasNextModel) {
          if (statusEl) {
            statusEl.textContent = `"${model}" gặp lỗi (${err.message.slice(0, 45)}). Chuyển sang "${models[mIdx + 1]}"...`;
          }
          break;
        }
      }
    }
  }

  throw lastError || new Error("Không gọi được AI API.");
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
  if (structured && (structured.summary || structured.method || structured.findings || structured.gap)) {
    const vi = isVietnameseText(clean);
    return {
      summary: structured.summary || splitAcademicSentences(clean)[0] || clean,
      method:
        structured.method ||
        (vi
          ? "Abstract chưa nêu chi tiết phương pháp hoặc cỡ mẫu; cần kiểm tra mục Methodology trong bài gốc."
          : "Not explicitly specified in the abstract; check the Methodology/Data section in the full text."),
      findings:
        structured.findings ||
        (vi
          ? "Abstract chưa tách riêng kết quả chính; xem thêm mục Results trong bài gốc."
          : "Key empirical findings are not separately detailed in the abstract."),
      gap:
        structured.gap ||
        (vi
          ? "Abstract chưa nêu trực tiếp hạn chế/khoảng trống; gợi ý đọc phần Conclusion & Future Research."
          : "No explicit limitations or research gap stated in the abstract; inspect Conclusion & Future Research.")
    };
  }

  const sentences = splitAcademicSentences(clean);

  const summaryPatterns = [
    [/\b(this (study|paper|article|research|work)|we (aim|examine|investigate|explore|analyze|analyse|study|propose|assess|evaluate|present|provide|introduce|review)|here,? we)\b/i, 5],
    [/\b(purpose|objective|aims? to|seeks? to|focuses? on|addresses?|examines?|investigates?|explores?|crucial|important|growing interest)\b/i, 3],
    [/\b(mục tiêu|nghiên cứu này|bài viết này|bối cảnh|nhằm mục đích|xem xét|đánh giá)\b/i, 5]
  ];

  const methodPatterns = [
    [/\b(using|apply(?:ing)?|employ(?:ing)?|adopt(?:ing)?|utiliz(?:e|ing)|based on|collected from|conducted|method|methodology|approach|framework|model|regression|panel data|sem|pls-sem|did|difference-in-differences|gmm|ols|iv|econometric|machine learning|deep learning|neural network|meta-analysis|bibliometric|prisma|case study|qualitative|quantitative|mixed-method|experiment)\b/i, 4],
    [/\b(sample|dataset|data from|survey|questionnaire|interview|observations?|firms?|companies|enterprises|participants|respondents|countries|listed|database|compustat|bloomberg|world bank)\b/i, 3],
    [/\b(n\s*=\s*\d+|\d{2,5}\s+(firms|companies|observations|participants|respondents|articles|papers|studies|countries)|(?:19|20)\d{2}\s*[-–to]+\s*(?:19|20)\d{2})\b/i, 4],
    [/\b(phương pháp|dữ liệu|mẫu nghiên cứu|khảo sát|phỏng vấn|hồi quy|mô hình|dữ liệu bảng|doanh nghiệp|quan sát)\b/i, 4]
  ];

  const findingsPatterns = [
    [/\b(results? (show|indicate|reveal|demonstrate|suggest|confirm)|findings? (show|indicate|reveal|demonstrate|suggest)|we find|our findings|evidence shows?|empirically|we show that|we demonstrate)\b/i, 6],
    [/\b(significant(ly)?|positively|negatively|impact|effect|associated with|relationship|increases?|decreases?|improves?|reduces?|outperforms?|mediates?|moderates?|drives?|accuracy)\b/i, 3],
    [/\b(kết quả|phát hiện|cho thấy|tác động tích cực|tác động tiêu cực|có ý nghĩa thống kê|mối quan hệ|ảnh hưởng)\b/i, 6]
  ];

  const gapPatterns = [
    [/\b(limitation|limitations|caveat|shortcoming|drawback|future research|further (research|study|studies|investigation)|remain(s)? (unclear|limited|scarce|unexplored)|research gap|gap in the literature|open question)\b/i, 7],
    [/\b(however|although|nevertheless|despite|yet|still scarce|lack of|little is known|underexplored|challenge|barrier|implications? for (policy|practice|managers|future))\b/i, 4],
    [/\b(hạn chế|khoảng trống|nghiên cứu tương lai|nghiên cứu tiếp theo|tuy nhiên|thách thức|hàm ý chính sách|hàm ý quản trị)\b/i, 6]
  ];

  // Gán ĐỘC QUYỀN từng câu vào đúng 1 cột có điểm cao nhất (tránh trùng lặp câu giữa các cột)
  const buckets = { summary: [], method: [], findings: [], gap: [] };
  const n = sentences.length;

  sentences.forEach((s, idx) => {
    const startsLikeMethod = /^(using|employing|applying|based on|to (test|examine|investigate|analyze)|this study uses)/i.test(s);
    const scores = {
      summary: scoreSentence(s, summaryPatterns) + (idx === 0 && !startsLikeMethod ? 3.0 : idx === 1 && !startsLikeMethod ? 1.0 : 0),
      method: scoreSentence(s, methodPatterns) + (idx >= 1 && idx <= Math.ceil(n * 0.65) ? 0.8 : 0) + (startsLikeMethod ? 2.0 : 0),
      findings: scoreSentence(s, findingsPatterns) + (idx >= Math.floor(n * 0.4) ? 1.2 : 0),
      gap: scoreSentence(s, gapPatterns) + (idx === n - 1 && n > 2 ? 0.8 : 0)
    };

    const ordered = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const [bestBucket, bestScore] = ordered[0];
    if (bestScore >= 2.5) {
      buckets[bestBucket].push({ idx, text: s, score: bestScore });
    }
  });

  const usedIndices = new Set();
  // Bảo đảm câu đầu tiên luôn thuộc Tóm tắt nếu Tóm tắt chưa có ứng viên và abstract có >= 2 câu
  if (buckets.summary.length === 0 && n >= 2) {
    buckets.summary.push({ idx: 0, text: sentences[0], score: 99 });
    ["method", "findings", "gap"].forEach((k) => {
      buckets[k] = buckets[k].filter((item) => item.idx !== 0);
    });
  }

  const finalizeBucket = (key, maxCount) => {
    const chosen = buckets[key]
      .filter((item) => !usedIndices.has(item.idx))
      .sort((a, b) => b.score - a.score)
      .slice(0, maxCount)
      .sort((a, b) => a.idx - b.idx);
    chosen.forEach((item) => usedIndices.add(item.idx));
    return chosen.map((item) => item.text).join(" ");
  };

  // Thứ tự ưu tiên lấy câu rõ ràng nhất cho từng cột
  let summary = finalizeBucket("summary", 2);
  let gap = finalizeBucket("gap", 2);
  let method = finalizeBucket("method", 2);
  let findings = finalizeBucket("findings", 2);

  // Nếu Tóm tắt vẫn chưa có (VD abstract chỉ có 1 câu), lấy câu chưa dùng đầu tiên nếu có
  if (!summary) {
    const firstUnused = sentences.findIndex((_, idx) => !usedIndices.has(idx));
    if (firstUnused !== -1) {
      usedIndices.add(firstUnused);
      summary = sentences[firstUnused];
    } else {
      summary = clean;
    }
  }

  // Nếu Kết quả chưa có câu nào và vẫn còn câu chưa dùng ở nửa sau, lấy 1 câu chưa dùng
  if (!findings) {
    const unusedTail = sentences
      .map((s, idx) => ({ idx, s }))
      .filter((item) => !usedIndices.has(item.idx) && item.idx >= Math.floor(n / 2));
    if (unusedTail.length > 0) {
      const pick = unusedTail[unusedTail.length - 1];
      usedIndices.add(pick.idx);
      findings = pick.s;
    }
  }

  const vi = isVietnameseText(clean);
  if (!method) {
    method = vi
      ? "Abstract chưa nêu chi tiết phương pháp hoặc cỡ mẫu; cần kiểm tra mục Methodology trong bài gốc."
      : "Not explicitly specified in the abstract; check the Methodology/Data section in the full text.";
  }
  if (!findings) {
    findings = vi
      ? "Abstract chưa tách riêng kết quả chính; xem thêm mục Results trong bài gốc."
      : "Key empirical findings are not separately detailed in the abstract; inspect the Results section.";
  }
  if (!gap) {
    gap = vi
      ? "Abstract chưa nêu trực tiếp hạn chế/khoảng trống; gợi ý đọc phần Conclusion & Future Research trong bài gốc."
      : "No explicit limitations or research gap stated in the abstract; inspect Conclusion & Future Research in the full text.";
  }

  return { summary, method, findings, gap };
}

async function translateViaLocalServer(texts) {
  if (localTranslateServerAvailable === false) return null;
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const isLocalHost = host === "localhost" || host === "127.0.0.1" || host === "[::1]";
  if (!isLocalHost || window.location.protocol === "file:") {
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
      const anyChanged = data.translated.some((val, idx) => Boolean(val && val !== texts[idx]));
      if (anyChanged) {
        localTranslateServerAvailable = true;
        return data.translated;
      }
      // server.py trả về nguyên văn (mạng server cục bộ bị chặn) -> chuyển sang trình duyệt dịch trực tiếp
      localTranslateServerAvailable = false;
      return null;
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

async function translateFourFieldsCombinedBrowser(fields) {
  const combined = fields.map((f, idx) => `[${idx + 1}] ${f}`).join("\n");
  const translatedCombined = await translateSingleTextBrowser(combined);
  if (!translatedCombined) return null;

  const lines = translatedCombined.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const parsed = new Array(4).fill("");
  let currentSlot = -1;

  for (const line of lines) {
    const match = line.match(/^\[(\d+)\]\s*(.*)$/);
    if (match) {
      const slot = parseInt(match[1], 10) - 1;
      if (slot >= 0 && slot < 4) {
        currentSlot = slot;
        parsed[slot] = match[2].trim();
        continue;
      }
    }
    if (currentSlot !== -1) {
      parsed[currentSlot] = `${parsed[currentSlot]} ${line}`.trim();
    }
  }

  if (parsed.every((item) => item.length > 0)) {
    return parsed;
  }
  return null;
}

async function analyzePaperFreeMode(paper) {
  const extracted = extractMatrixFreeEnglish(paper);
  const fields = [extracted.summary, extracted.method, extracted.findings, extracted.gap];

  if (isVietnameseText(paper.abstract)) {
    return {
      ...extracted,
      translated: true,
      metaLabel: "Trích xuất tự động (Tiếng Việt gốc)"
    };
  }

  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return {
      ...extracted,
      translated: false,
      metaLabel: "Trích xuất tự động (EN · Ngoại tuyến)"
    };
  }

  // Ưu tiên 1: Dịch nhanh qua server.py (chỉ gọi khi chạy localhost)
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

  // Ưu tiên 2: Gộp 4 cột thành 1 lần gọi dịch duy nhất trên trình duyệt (giảm 4x request)
  try {
    const combinedTranslated = await translateFourFieldsCombinedBrowser(fields);
    if (combinedTranslated && combinedTranslated.some((val, idx) => Boolean(val && val !== fields[idx]))) {
      return {
        summary: combinedTranslated[0] || extracted.summary,
        method: combinedTranslated[1] || extracted.method,
        findings: combinedTranslated[2] || extracted.findings,
        gap: combinedTranslated[3] || extracted.gap,
        translated: true,
        metaLabel: "Trích xuất tự động + Dịch nhanh VI (1-call)"
      };
    }

    // Dự phòng tách từng trường nếu chuỗi gộp bị mất định dạng
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

  return {
    ...extracted,
    translated: false,
    metaLabel: "Trích xuất tự động (EN · Giữ nguyên khi mất mạng)"
  };
}

// ==========================================
// 5. XUẤT EXCEL TỔNG HỢP & LƯU DỰ ÁN
// ==========================================
let xlsxLoadPromise = null;
function ensureXlsxLoaded() {
  if (typeof XLSX !== "undefined") return Promise.resolve();
  if (xlsxLoadPromise) return xlsxLoadPromise;

  xlsxLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      xlsxLoadPromise = null;
      reject(new Error("Không tải được thư viện xuất Excel (XLSX). Vui lòng kiểm tra kết nối mạng."));
    };
    document.head.appendChild(script);
  });
  return xlsxLoadPromise;
}

async function exportToExcel() {
  if (papers.length === 0) {
    alert("Chưa có dữ liệu để xuất Excel!");
    return;
  }

  const btn = document.getElementById("btnExportExcel");
  const prevText = btn?.textContent || "";
  try {
    if (typeof XLSX === "undefined" && btn) {
      btn.disabled = true;
      btn.textContent = "Đang tải thư viện Excel...";
    }
    await ensureXlsxLoaded();
  } catch (err) {
    alert(err.message);
    if (btn) {
      btn.disabled = false;
      btn.textContent = prevText;
    }
    return;
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = prevText || "Xuất Excel Tổng Hợp (.xlsx)";
    }
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
