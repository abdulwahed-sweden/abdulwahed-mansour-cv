import { useState, useCallback } from "react";

const CV_PROFILES = [
  { id: "CV-01", title: "Senior Python Backend Architect", keywords: "Python 3.12+, FastAPI, Django 5.x, DRF, SQLAlchemy, Pydantic, PostgreSQL, Redis, Docker, JWT, OAuth2, MCP, LangChain, Pytest, Hypothesis", summary: "Backend architect building high-throughput APIs, data pipelines, and distributed systems with FastAPI and Django." },
  { id: "CV-02", title: "Senior Rust Systems Engineer", keywords: "Rust 2021/2024, Tokio, Axum, async-std, Serde, Clap, reqwest, rustls, HKDF, WASM, zero-copy parsing, 5,700+ tests", summary: "Systems engineer building high-performance async-first applications — HTTP servers, CLI toolkits, cryptographic engines, forensics platforms." },
  { id: "CV-03", title: "Smart Contract Security Auditor", keywords: "Solidity 0.8.x, Foundry, Slither, Echidna, ERC-4337, ERC-4626, EIP-1153, Sherlock, Immunefi, Code4rena, invariant testing", summary: "Independent auditor with proven findings in production DeFi protocols. Discovered the ADS vulnerability class (~$98.6M exposure)." },
  { id: "CV-04", title: "Blockchain Security Researcher", keywords: "DeFi security, oracle manipulation, MEV, economic exploit modeling, EVM internals, mainnet fork simulation, Foundry fuzzing", summary: "Researcher focused on DeFi vulnerabilities, oracle manipulation defense, and economic exploit modeling with custom fuzzers and invariant frameworks." },
  { id: "CV-05", title: "DeFi Protocol Engineer \u2014 Islamic Finance", keywords: "Sunna Protocol, ERC-4626, Mudaraba, JHD effort units, Shariah compliance, constitutional invariants, multi-chain EVM+Solana, 1,630+ tests", summary: "Protocol architect pioneering Shariah-compliant DeFi with constitutional invariant enforcement and on-chain effort measurement." },
  { id: "CV-06", title: "Full-Stack Web Developer", keywords: "Vue.js, React, Next.js, TypeScript, Tailwind CSS, Django, FastAPI, DRF, Axum, Bootstrap 5, shadcn/ui, i18n RTL/LTR", summary: "Full-stack developer building modern web apps with Python/Rust backends and JavaScript/TypeScript frontends." },
  { id: "CV-07", title: "DevOps & Cloud Infrastructure Engineer", keywords: "Docker, Docker Compose, GitHub Actions, CI/CD, Vercel, Hugging Face Spaces, PostgreSQL, container isolation, multi-stage builds", summary: "DevOps engineer designing containerized deployments, CI/CD pipelines, and cloud-native infrastructure." },
  { id: "CV-08", title: "Security Engineer & Penetration Tester", keywords: "Chthonic framework, Rust pentesting, TCP scanning, HTTP injection, bug bounty, Immunefi, HackerOne, Bugcrowd, Intigriti, MITRE ATT&CK", summary: "Security engineer building offensive and defensive tools in Rust. Active bug bounty hunter with high-severity findings." },
  { id: "CV-09", title: "Blockchain Forensics & Intelligence Analyst", keywords: "BTC Sentinel, transaction tracing, fund flow reconstruction, entity clustering, MITRE ATT&CK, AML, THORChain, Chainflip, Lazarus Group", summary: "Forensics specialist building intelligence platforms. Traced the $1.5B Bybit hack in 36 seconds with BTC Sentinel." },
  { id: "CV-10", title: "AI-Integrated Backend Engineer", keywords: "LLM APIs (DeepSeek, OpenAI, Anthropic, Gemini), MCP, LangChain, Vercel AI SDK, RAG, NL-to-SQL, content pipelines, Rust AI clients", summary: "Backend engineer specializing in AI integration — LLM APIs, MCP servers, AI-powered data pipelines." },
];

const ROLE_TEMPLATES = {
  "security-researcher": {
    label: "Security Researcher",
    titleLine: "Security Researcher \u00b7 Systems Engineer \u00b7 Protocol Architect",
    openingHook: "With extensive hands-on experience in vulnerability research, smart contract auditing, and protocol security analysis, I am confident in my ability to strengthen your security posture.",
    bodyParagraph: "My work spans security research, Rust systems engineering, Python backend architecture, and DeFi protocol design.",
    bodyHighlights: [
      "Discovered and formalized the ADS (Asymmetric Deficit Socialization) vulnerability class \u2014 a ~$98.6M phantom yield exposure affecting Aave V4 ($96M), Morpho Blue ($2M), and Curve crvUSD ($585K).",
      "Active auditor on Sherlock and Immunefi with confirmed findings including a High-severity SlippagePriceChecker vulnerability in Moonwell/Mamo, and multiple findings in Fluid DEX V2 (liquidation dust debt, precision loss, BigMath accounting mismatch).",
      "Built BTC Sentinel \u2014 a professional-grade multi-chain forensics platform in Rust (14,900+ LOC, 213 tests, 5 core engines) that traced the $1.5B Bybit hack across 682 transactions and 42,479 addresses in 36 seconds, attributing the attack to Lazarus Group.",
    ],
    suggestedCVs: ["CV-03", "CV-04", "CV-08", "CV-09"],
  },
  "rust-engineer": {
    label: "Rust Systems Engineer",
    titleLine: "Senior Rust Systems Engineer \u00b7 Security Architect",
    openingHook: "With deep expertise in building high-performance, memory-safe systems in Rust \u2014 from async network services and cryptographic engines to forensics platforms and CLI toolkits \u2014 I am eager to contribute robust engineering to your team.",
    bodyParagraph: "My work spans Rust systems programming, async-first architecture, cryptography, and security tooling.",
    bodyHighlights: [
      "Maintain 21+ repositories totaling 208,000+ lines of production code with 5,700+ tests. Flagship Rust projects include BTC Sentinel (213 tests, 5 core engines with zero-copy parsing), HuntKey (ERC-4337, HKDF-SHA256, 126 tests), Chthonic (modular pentest framework), and Polaris Chronos (WASM-compiled prayer time engine deployed on Hugging Face Spaces).",
      "Built high-performance async services using Tokio/Axum, including real-time blockchain monitoring pipelines, MCP-integrated REST APIs, and production web applications with full RTL/LTR internationalization and 40+ CSS design tokens.",
      "Engineered cryptographic backends with HKDF-SHA256 key derivation hierarchies, EIP-712 structured signing, BIP-39 mnemonic management, and dual-layer EIP-1153 oracle defense proven on $50M mainnet fork simulations.",
    ],
    suggestedCVs: ["CV-02", "CV-08", "CV-09"],
  },
  "python-backend": {
    label: "Python Backend Architect",
    titleLine: "Senior Python Backend Architect \u00b7 Systems Engineer",
    openingHook: "With a strong track record building scalable, production-grade Python backends \u2014 from enterprise Django platforms to high-throughput FastAPI services and AI-powered pipelines \u2014 I bring both architectural vision and hands-on delivery.",
    bodyParagraph: "My work spans Python backend architecture, API design, AI integration, and DevOps.",
    bodyHighlights: [
      "Architected and shipped production services with FastAPI and Django 5.x including BookFlow (full-stack booking platform with JWT auth, role-based access, SQLAlchemy models), AuthProfile (Django starter with complete auth flow, DRF API, Docker Compose, CI/CD), and a Django operations dashboard for a multi-chain DeFi protocol with audit trail logging and compliance tracking.",
      "Built AI-powered data pipelines including a news aggregation bot (fetch \u2192 deduplicate \u2192 DeepSeek AI summarize \u2192 Telegram delivery), a Docker-isolated MCP server enabling AI agents to query PostgreSQL via natural language (LangChain SQLDatabaseChain), and an async Rust client library for the DeepSeek AI API.",
      "Designed and maintained 21+ repositories with 208,000+ LOC and 5,700+ tests, with strong focus on clean architecture, type safety (Pydantic), comprehensive API documentation (OpenAPI/Swagger), and CI/CD pipelines with GitHub Actions and Ruff enforcement.",
    ],
    suggestedCVs: ["CV-01", "CV-10", "CV-07"],
  },
  "blockchain-defi": {
    label: "Blockchain / DeFi",
    titleLine: "DeFi Protocol Engineer \u00b7 Blockchain Security Researcher",
    openingHook: "With hands-on experience designing, auditing, and securing DeFi protocols \u2014 and a published vulnerability class affecting $98.6M in assets \u2014 I bring both builder and breaker perspectives to blockchain engineering.",
    bodyParagraph: "My work spans DeFi protocol design, smart contract security, blockchain forensics, and Islamic finance innovation.",
    bodyHighlights: [
      "Discovered and published the ADS (Asymmetric Deficit Socialization) vulnerability class \u2014 a systemic flaw where protocols extract fees on accrued interest before verifying collectibility, exposing ~$98.6M across Aave V4, Morpho Blue, and Curve crvUSD.",
      "Designed and built Sunna Protocol \u2014 the world\u2019s first Shariah-compliant DeFi infrastructure with 4-layer architecture: constitutional invariants governance cannot override, ERC-4626 adapter (Sunna Shield), on-chain effort measurement (JHD units), and $HELAL governance. Deployed 36+ contracts on Base Sepolia with 1,630+ tests across EVM and Solana.",
      "Built TickDriftGuardV4 \u2014 a dual-layer EIP-1153 defense against Uniswap V3 oracle manipulation, proven on $50M mainnet fork simulation (tick drift: 20,985 \u2192 0). Conducted forensic investigations into the $1.5B Bybit hack and DSI hack.",
    ],
    suggestedCVs: ["CV-04", "CV-05", "CV-03", "CV-09"],
  },
  "fullstack": {
    label: "Full-Stack Developer",
    titleLine: "Full-Stack Engineer \u00b7 Systems Architect",
    openingHook: "Combining strong backend engineering in Python and Rust with modern frontend development, I deliver complete, production-ready applications from database design to deployment.",
    bodyParagraph: "My work spans full-stack web development, API architecture, and cloud-native deployment.",
    bodyHighlights: [
      "Built complete full-stack applications including BookFlow (FastAPI + Vue.js booking platform with JWT auth, role-based access, Swagger docs), AuthProfile (Django 5.2 + DRF + Bootstrap 5 with Docker Compose and CI/CD), and a Next.js AI chatbot with Vercel AI SDK supporting 4 LLM providers, Postgres persistence, and shadcn/ui components.",
      "Developed production Rust web applications with Axum 0.8 featuring dark/light theme systems (40+ CSS design tokens), full Arabic/English i18n with automatic RTL/LTR layout, comprehensive component libraries, and async-first architecture on Tokio.",
      "Maintain 21+ repositories totaling 208,000+ LOC across Python, Rust, TypeScript, and Solidity with 5,700+ tests, Docker-based deployment, GitHub Actions CI/CD, and deployments on Vercel, Hugging Face Spaces, and self-hosted infrastructure.",
    ],
    suggestedCVs: ["CV-06", "CV-01", "CV-07", "CV-10"],
  },
  "ai-engineer": {
    label: "AI-Integrated Engineer",
    titleLine: "AI-Integrated Backend Engineer \u00b7 Systems Architect",
    openingHook: "With hands-on experience building production systems that connect LLM APIs, Model Context Protocol servers, and AI-powered data pipelines with robust backend infrastructure, I am well-positioned to accelerate your AI engineering efforts.",
    bodyParagraph: "My work spans AI integration, backend systems, and developer tooling across multiple languages and frameworks.",
    bodyHighlights: [
      "Built AI integration systems across the full stack: a multi-provider chatbot (Next.js + Vercel AI SDK supporting Gemini, OpenAI, Anthropic, Cohere), a Docker-isolated MCP server for AI agents to query PostgreSQL via natural language (LangChain SQLDatabaseChain), and a Rust MCP tool provider auto-detected by Claude Code Desktop.",
      "Published an async Rust client library for the DeepSeek AI API with full type safety, exponential backoff retries, and builder pattern API. Built automated content pipelines (fetch \u2192 deduplicate \u2192 AI summarize \u2192 deliver) and production-grade data collection tools designed for feeding AI training data and RAG pipelines.",
      "Strong backend foundation in Python (FastAPI, Django) and Rust (Axum, Tokio) with 21+ repositories, 208,000+ LOC, and comprehensive testing. Experienced with the full AI application stack: LLM API integration, RAG patterns, prompt engineering, and deploying AI-powered services on cloud platforms.",
    ],
    suggestedCVs: ["CV-10", "CV-01", "CV-02", "CV-07"],
  },
  "devops": {
    label: "DevOps & Cloud",
    titleLine: "DevOps & Cloud Infrastructure Engineer",
    openingHook: "With hands-on experience designing containerized deployments, CI/CD pipelines, and cloud-native infrastructure for web services, APIs, and blockchain protocols, I bring strong infrastructure engineering to your team.",
    bodyParagraph: "My work spans containerization, CI/CD automation, cloud deployment, and infrastructure-as-code practices.",
    bodyHighlights: [
      "Designed and maintained infrastructure for multi-service architectures including a multi-chain DeFi protocol spanning 4 pillars (EVM contracts, Solana programs, security lab, operations dashboard) with CI/CD security gates running invariant verification on every code change before merge.",
      "Built Docker-based deployments across multiple platforms: containerized Rust applications on Hugging Face Spaces, Next.js deployments on Vercel with Postgres and Blob storage, Docker Compose configurations with read-only database access and network segmentation, and GitHub Actions pipelines with test \u2192 lint \u2192 security \u2192 deploy stages.",
      "Created secure container isolation patterns including a Dockerized read-only PostgreSQL server for AI agent access via MCP, multi-stage builds for optimized images, and automated pipelines with scheduling, deduplication, error handling, and retry logic for unattended operation.",
    ],
    suggestedCVs: ["CV-07", "CV-01", "CV-06"],
  },
  "forensics": {
    label: "Blockchain Forensics",
    titleLine: "Blockchain Forensics & Intelligence Analyst",
    openingHook: "With proven experience building forensics intelligence platforms and conducting real-world investigations into major cryptocurrency incidents, I bring deep analytical and engineering capabilities to blockchain investigations.",
    bodyParagraph: "My work spans blockchain forensics, threat intelligence, AML analysis, and security research.",
    bodyHighlights: [
      "Built BTC Sentinel \u2014 a professional-grade multi-chain forensics platform in Rust with 5 specialized engines: pattern analysis (10+ behavioral heuristics), forensic flow tracing, cluster analysis (Union-Find), watchlist scanning, and real-time mempool interception. Zero-copy parsing and zero-allocation hot paths for high-throughput analysis.",
      "Conducted comprehensive forensic investigation of the $1.5B Bybit hack (Operation DELTA STRIKE) \u2014 traced fund flows across 682 transactions and 42,479 addresses in 36 seconds, identified Lazarus Group (DPRK) attribution through behavioral pattern analysis and transaction timing, and traced cross-bridge movements via THORChain and Chainflip.",
      "Deep DeFi security expertise supporting forensics work: discovered the ADS vulnerability class (~$98.6M exposure), built oracle manipulation defense tools (TickDriftGuardV4), and conducted MEV research across 33,827 on-chain liquidation events on Aave V3.",
    ],
    suggestedCVs: ["CV-09", "CV-04", "CV-08", "CV-03"],
  },
  "pentester": {
    label: "Pentester / SecEng",
    titleLine: "Security Engineer & Penetration Tester",
    openingHook: "With experience building offensive and defensive security tools in Rust and conducting vulnerability research across web and blockchain platforms, I bring strong technical security engineering to your team.",
    bodyParagraph: "My work spans penetration testing, security tool development, bug bounty hunting, and blockchain forensics.",
    bodyHighlights: [
      "Built Chthonic \u2014 a next-generation modular penetration testing framework in Rust inspired by Metasploit. Memory-safe, 10x faster than Ruby-based tools, with async-first networking (Tokio), plugin architecture via traits, async TCP port scanner, HTTP header injection scanner (30+ payloads), session manager, and interactive CLI. Single statically-linked binary (~5MB) for Linux, macOS, and Windows.",
      "Active bug bounty hunter across 6 platforms (Immunefi, Sherlock, Code4rena, HackerOne, Bugcrowd, Intigriti) with confirmed findings including High-severity SlippagePriceChecker vulnerability in Moonwell/Mamo, and the original ADS vulnerability class (~$98.6M exposure across Aave V4, Morpho Blue, Curve crvUSD).",
      "Built complementary security tools: BTC Sentinel (multi-chain forensics, 213 tests), TickDriftGuardV4 (oracle defense, EIP-1153), HuntKey (4-layer account abstraction security, 126 tests), and Swiftline (secure HTTP client with rustls TLS, no OpenSSL dependency).",
    ],
    suggestedCVs: ["CV-08", "CV-03", "CV-04", "CV-09"],
  },
  "custom": {
    label: "Custom / General",
    titleLine: "Security Researcher \u00b7 Systems Engineer \u00b7 Protocol Architect",
    openingHook: "With extensive hands-on experience building secure, high-performance systems across backend infrastructure, smart contract security, and blockchain protocols, I am confident in my ability to bring significant value to your team.",
    bodyParagraph: "My work spans security research, Rust systems engineering, Python backend architecture, and DeFi protocol design.",
    bodyHighlights: [
      "Discovered and formalized the ADS vulnerability class \u2014 a ~$98.6M phantom yield exposure affecting major lending protocols including Aave V4, Morpho Blue, and Curve crvUSD.",
      "Built and maintain 21+ repositories totaling 208,000+ lines of production code with 5,700+ tests across Rust, Python, Solidity, and TypeScript.",
      "Active security auditor on Sherlock and Immunefi with confirmed findings in production DeFi protocols, and builder of forensics tools that traced the $1.5B Bybit hack in 36 seconds.",
    ],
    suggestedCVs: ["CV-02", "CV-03", "CV-04", "CV-01"],
  },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function getTodayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export default function CoverLetterGenerator() {
  const [companyName, setCompanyName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [roleTemplate, setRoleTemplate] = useState("security-researcher");
  const [selectedDate, setSelectedDate] = useState(getTodayISO());
  const [selectedCVs, setSelectedCVs] = useState(ROLE_TEMPLATES["security-researcher"].suggestedCVs);
  const [customOpening, setCustomOpening] = useState("");
  const [customHighlights, setCustomHighlights] = useState("");
  const [showSwedish, setShowSwedish] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("compose");

  const template = ROLE_TEMPLATES[roleTemplate];

  const handleTemplateChange = (key) => {
    setRoleTemplate(key);
    setSelectedCVs(ROLE_TEMPLATES[key].suggestedCVs);
  };

  const toggleCV = (id) => {
    setSelectedCVs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const greeting = recipientName ? `Dear ${recipientName},` : "Dear Hiring Manager,";
  const companyRef = companyName || "your organization";
  const roleTitleRef = roleTitle || template.label;

  const opening = customOpening ||
    `I am writing to express my strong interest in the ${roleTitleRef} position at ${companyRef}. ${template.openingHook}`;

  const highlights = customHighlights
    ? customHighlights.split("\n").filter(Boolean)
    : template.bodyHighlights;

  const attachedCVs = CV_PROFILES.filter((c) => selectedCVs.includes(c.id));

  const letterText = `ABDULWAHED MANSOUR
${template.titleLine}
Mejramv\u00e4gen 37, 145 73 Norsborg, Stockholm, Sweden
+46 76 930 8145 | abdulwahed.sweden@gmail.com
GitHub: github.com/abdulwahed-sweden | LinkedIn: linkedin.com/in/abdulwahed-mansour

${formatDate(selectedDate)}

${greeting}

${opening}

${template.bodyParagraph}

${highlights.map((h) => `\u2022 ${h}`).join("\n\n")}

Several of these projects are hosted in private repositories due to their sensitive nature and are available for review upon request.
${showSwedish ? "\nJag ser fram emot att bidra till ert team och v\u00e4xa tillsammans med er organisation. Tack f\u00f6r att ni tar er tid att granska min ans\u00f6kan!\n" : ""}
I would welcome the chance to discuss how my experience aligns with your needs.

Best regards,
Abdulwahed Mansour
${roleTitleRef}

ATTACHED PROFILES
${attachedCVs.map((c) => `- ${c.id}: ${c.title}`).join("\n")}

Portfolio: abdulwahed-mansour.dev`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(letterText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [letterText]);

  // ── Styles using site design tokens ──
  const s = {
    sectionTitle: {
      fontSize: 12, fontWeight: 700,
      letterSpacing: "0.06em", textTransform: "uppercase",
      color: "var(--text-tertiary)", marginBottom: 6,
    },
    input: {
      fontSize: 14, padding: "9px 12px",
      border: "1px solid var(--border)", borderRadius: 8,
      background: "var(--bg-card)", color: "var(--text-primary)",
      outline: "none", width: "100%", boxSizing: "border-box",
      fontFamily: "inherit",
    },
  };

  const tabBtn = (active) => ({
    fontSize: 13, fontWeight: active ? 700 : 500,
    padding: "8px 20px", borderRadius: "8px 8px 0 0",
    border: `1px solid ${active ? "var(--border)" : "transparent"}`,
    borderBottom: active ? "2px solid var(--bg-card)" : "1px solid var(--border)",
    background: active ? "var(--bg-card)" : "transparent",
    color: active ? "var(--accent)" : "var(--text-tertiary)",
    cursor: "pointer", marginBottom: -1, position: "relative", zIndex: active ? 2 : 1,
    fontFamily: "inherit",
  });

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>Cover Letter Generator</h1>
          <div style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 2 }}>10 profiles &middot; 10 templates &middot; dynamic content</div>
        </div>
        <button onClick={handleCopy} className="btn btn-primary" style={{ fontSize: 14 }}>
          {copied ? "\u2713 Copied" : "Copy Letter"}
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 2, borderBottom: "1px solid var(--border)" }}>
        {[["compose", "Compose"], ["preview", "Preview"], ["cvinfo", "CV Profiles"]].map(([key, label]) => (
          <button key={key} style={tabBtn(activeTab === key)} onClick={() => setActiveTab(key)}>{label}</button>
        ))}
      </div>

      {/* Content */}
      <div className="card-static" style={{ borderTop: "none", borderRadius: "0 0 16px 16px", padding: "20px 24px", minHeight: 460 }}>

        {/* ── COMPOSE TAB ── */}
        {activeTab === "compose" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Templates */}
            <div>
              <div style={s.sectionTitle}>Role Template</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {Object.entries(ROLE_TEMPLATES).map(([key, val]) => (
                  <button key={key} onClick={() => handleTemplateChange(key)} style={{
                    fontFamily: "inherit", fontSize: 13, fontWeight: roleTemplate === key ? 700 : 500,
                    padding: "5px 12px", borderRadius: 16,
                    border: roleTemplate === key ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                    background: roleTemplate === key ? "var(--accent-wash)" : "transparent",
                    color: roleTemplate === key ? "var(--accent)" : "var(--text-primary)", cursor: "pointer",
                  }}>{val.label}</button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 140px", gap: 10 }}>
              <div>
                <div style={s.sectionTitle}>Company</div>
                <input style={s.input} placeholder="e.g. Trail of Bits" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>
              <div>
                <div style={s.sectionTitle}>Recipient</div>
                <input style={s.input} placeholder="e.g. Dr. Sarah Chen" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
              </div>
              <div>
                <div style={s.sectionTitle}>Role Title Override</div>
                <input style={s.input} placeholder={template.label} value={roleTitle} onChange={(e) => setRoleTitle(e.target.value)} />
              </div>
              <div>
                <div style={s.sectionTitle}>Date</div>
                <input type="date" style={s.input} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
              </div>
            </div>

            {/* Custom overrides */}
            <div>
              <div style={s.sectionTitle}>Custom Opening (optional)</div>
              <textarea style={{ ...s.input, minHeight: 60, resize: "vertical", lineHeight: 1.5 }} placeholder="Leave blank for auto-generated opening..." value={customOpening} onChange={(e) => setCustomOpening(e.target.value)} />
            </div>
            <div>
              <div style={s.sectionTitle}>Custom Bullet Points (optional, one per line)</div>
              <textarea style={{ ...s.input, minHeight: 70, resize: "vertical", lineHeight: 1.5 }} placeholder="Leave blank for template highlights..." value={customHighlights} onChange={(e) => setCustomHighlights(e.target.value)} />
            </div>

            {/* CV selection */}
            <div>
              <div style={s.sectionTitle}>Attached CV Profiles</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                {CV_PROFILES.map((cv) => {
                  const active = selectedCVs.includes(cv.id);
                  const suggested = template.suggestedCVs.includes(cv.id);
                  return (
                    <label key={cv.id} style={{
                      display: "flex", alignItems: "center", gap: 8, padding: "6px 10px",
                      borderRadius: 8, cursor: "pointer", fontSize: 13,
                      background: active ? "var(--accent-wash)" : "transparent",
                      border: `1px solid ${active ? "var(--accent-border)" : "transparent"}`,
                    }}>
                      <input type="checkbox" checked={active} onChange={() => toggleCV(cv.id)} style={{ accentColor: "var(--accent)", flexShrink: 0 }} />
                      <span>
                        <strong style={{ color: active ? "var(--accent)" : "var(--text-primary)" }}>{cv.id}</strong>
                        <span style={{ color: "var(--text-secondary)", marginLeft: 4 }}>{cv.title}</span>
                        {suggested && <span style={{ fontSize: 12, background: "var(--accent)", color: "#fff", padding: "2px 6px", borderRadius: 8, marginLeft: 4, fontWeight: 700, verticalAlign: "middle" }}>REC</span>}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, cursor: "pointer", color: "var(--text-secondary)" }}>
              <input type="checkbox" checked={showSwedish} onChange={() => setShowSwedish(!showSwedish)} style={{ accentColor: "var(--accent)" }} />
              Include Swedish closing line
            </label>
          </div>
        )}

        {/* ── PREVIEW TAB ── */}
        {activeTab === "preview" && (
          <div style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-primary)" }}>
            <div style={{ textAlign: "center", paddingBottom: 16, marginBottom: 16, borderBottom: "2px solid var(--accent)" }}>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.03em" }}>ABDULWAHED MANSOUR</div>
              <div style={{ fontSize: 14, color: "var(--accent)", fontWeight: 600, marginTop: 3 }}>{template.titleLine}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.6 }}>
                Mejramv&auml;gen 37, 145 73 Norsborg, Stockholm, Sweden<br />
                +46 76 930 8145 | abdulwahed.sweden@gmail.com<br />
                GitHub: github.com/abdulwahed-sweden | LinkedIn: linkedin.com/in/abdulwahed-mansour
              </div>
            </div>

            <div style={{ marginBottom: 14, color: "var(--text-secondary)" }}>{formatDate(selectedDate)}</div>
            <div style={{ marginBottom: 14 }}>{greeting}</div>
            <div style={{ marginBottom: 14 }}>{opening}</div>
            <div style={{ marginBottom: 10 }}>{template.bodyParagraph}</div>

            {highlights.map((h, i) => (
              <div key={i} style={{ paddingLeft: 18, marginBottom: 10, position: "relative", fontSize: 14 }}>
                <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>&bull;</span>
                {h}
              </div>
            ))}

            <div style={{ color: "var(--text-secondary)", fontStyle: "italic", margin: "14px 0", fontSize: 13, padding: "10px 14px", background: "var(--notice-wash)", border: "1px solid var(--notice-border)", borderRadius: 8 }}>
              Several of these projects are hosted in private repositories due to their sensitive nature and are available for review upon request.
            </div>

            {showSwedish && (
              <div style={{ color: "var(--accent)", fontStyle: "italic", margin: "10px 0", fontSize: 14 }}>
                Jag ser fram emot att bidra till ert team och v&auml;xa tillsammans med er organisation. Tack f&ouml;r att ni tar er tid att granska min ans&ouml;kan!
              </div>
            )}

            <div style={{ margin: "14px 0" }}>I would welcome the chance to discuss how my experience aligns with your needs.</div>

            <div style={{ marginTop: 20 }}>
              <div>Best regards,</div>
              <div style={{ fontWeight: 700, marginTop: 4 }}>Abdulwahed Mansour</div>
              <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>{roleTitleRef}</div>
            </div>

            {attachedCVs.length > 0 && (
              <div style={{ marginTop: 24, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                <div style={{ ...s.sectionTitle, marginBottom: 8 }}>ATTACHED PROFILES</div>
                {attachedCVs.map((c) => (
                  <div key={c.id} style={{ fontSize: 13, marginBottom: 2 }}>
                    &mdash; <strong>{c.id}</strong>: {c.title}
                  </div>
                ))}
                <div style={{ fontSize: 13, color: "var(--accent)", marginTop: 8 }}>Portfolio: abdulwahed-mansour.dev</div>
              </div>
            )}
          </div>
        )}

        {/* ── CV INFO TAB ── */}
        {activeTab === "cvinfo" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 4 }}>
              Reference data from all 10 CV profiles &mdash; use to customize cover letter content.
            </div>
            {CV_PROFILES.map((cv) => {
              const active = selectedCVs.includes(cv.id);
              return (
                <div key={cv.id} style={{
                  padding: "12px 14px", borderRadius: 10,
                  border: `1px solid ${active ? "var(--accent-border)" : "var(--border)"}`,
                  background: active ? "var(--accent-wash)" : "var(--bg-subtle)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <span className="tag tag-accent" style={{ fontSize: 12, fontWeight: 700 }}>{cv.id}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{cv.title}</span>
                    {active && <span style={{ fontSize: 12, background: "var(--accent)", color: "#fff", padding: "2px 6px", borderRadius: 8, fontWeight: 700 }}>SELECTED</span>}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>{cv.summary}</div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--text-tertiary)", lineHeight: 1.5, wordBreak: "break-word" }}>{cv.keywords}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer status */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", fontSize: 13, color: "var(--text-tertiary)", marginTop: 12, flexWrap: "wrap" }}>
        <span>Template: <strong style={{ color: "var(--accent)" }}>{template.label}</strong></span>
        <span>&middot;</span>
        <span>CVs: <strong>{selectedCVs.length}</strong></span>
        <span>&middot;</span>
        <span>{formatDate(selectedDate)}</span>
        {companyName && <><span>&middot;</span><span>To: <strong style={{ color: "var(--accent)" }}>{companyName}</strong></span></>}
      </div>
    </div>
  );
}
