import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';

const CV_PROFILES = [
  { id: "CV-01", title: "Senior Python Backend Architect" },
  { id: "CV-02", title: "Senior Rust Systems Engineer" },
  { id: "CV-03", title: "Smart Contract Security Auditor" },
  { id: "CV-04", title: "Blockchain Security Researcher" },
  { id: "CV-05", title: "DeFi Protocol Engineer — Islamic Finance" },
  { id: "CV-06", title: "Full-Stack Web Developer" },
  { id: "CV-07", title: "DevOps & Cloud Infrastructure Engineer" },
  { id: "CV-08", title: "Security Engineer & Penetration Tester" },
  { id: "CV-09", title: "Blockchain Forensics & Intelligence Analyst" },
  { id: "CV-10", title: "AI-Integrated Backend Engineer" },
];

const TEMPLATES: Record<string, { label: string; titleLine: string; hook: string; body: string; highlights: string[]; cvs: string[] }> = {
  "security": {
    label: "Security Researcher",
    titleLine: "Security Researcher · Systems Engineer · Protocol Architect",
    hook: "With extensive hands-on experience in vulnerability research, smart contract auditing, and protocol security analysis, I am confident in my ability to strengthen your security posture.",
    body: "My work spans security research, Rust systems engineering, Python backend architecture, and DeFi protocol design.",
    highlights: [
      "Discovered and formalized the ADS (Asymmetric Deficit Socialization) vulnerability class — a ~$98.6M phantom yield exposure affecting Aave V4 ($96M), Morpho Blue ($2M), and Curve crvUSD ($585K).",
      "Active auditor on Sherlock and Immunefi with confirmed findings including a High-severity SlippagePriceChecker vulnerability in Moonwell/Mamo, and multiple findings in Fluid DEX V2.",
      "Built BTC Sentinel — a professional-grade multi-chain forensics platform in Rust (14,900+ LOC, 213 tests, 5 core engines) that traced the $1.5B Bybit hack in 36 seconds.",
    ],
    cvs: ["CV-03", "CV-04", "CV-08", "CV-09"],
  },
  "rust": {
    label: "Rust Systems Engineer",
    titleLine: "Senior Rust Systems Engineer · Security Architect",
    hook: "With deep expertise in building high-performance, memory-safe systems in Rust — from async network services and cryptographic engines to forensics platforms and CLI toolkits — I am eager to contribute robust engineering to your team.",
    body: "My work spans Rust systems programming, async-first architecture, cryptography, and security tooling.",
    highlights: [
      "Maintain 21+ repositories totaling 208,000+ lines of production code with 5,700+ tests. Flagship Rust projects include BTC Sentinel (213 tests, 5 core engines), HuntKey (ERC-4337, HKDF-SHA256, 126 tests), Chthonic (modular pentest framework).",
      "Built high-performance async services using Tokio/Axum, including real-time blockchain monitoring pipelines, MCP-integrated REST APIs, and production web applications.",
      "Engineered cryptographic backends with HKDF-SHA256 key derivation hierarchies, EIP-712 structured signing, and dual-layer EIP-1153 oracle defense proven on $50M mainnet fork simulations.",
    ],
    cvs: ["CV-02", "CV-08", "CV-09"],
  },
  "python": {
    label: "Python Backend",
    titleLine: "Senior Python Backend Architect · Systems Engineer",
    hook: "With a strong track record building scalable, production-grade Python backends — from enterprise Django platforms to high-throughput FastAPI services and AI-powered pipelines — I bring both architectural vision and hands-on delivery.",
    body: "My work spans Python backend architecture, API design, AI integration, and DevOps.",
    highlights: [
      "Architected and shipped production services with FastAPI and Django 5.x including BookFlow (full-stack booking platform), AuthProfile (Django starter with complete auth flow), and a Django operations dashboard for a multi-chain DeFi protocol.",
      "Built AI-powered data pipelines including a news aggregation bot, a Docker-isolated MCP server enabling AI agents to query PostgreSQL via natural language, and an async Rust client library for the DeepSeek AI API.",
      "Designed and maintained 21+ repositories with 208,000+ LOC and 5,700+ tests, with strong focus on clean architecture, type safety, and CI/CD pipelines.",
    ],
    cvs: ["CV-01", "CV-10", "CV-07"],
  },
  "blockchain": {
    label: "Blockchain / DeFi",
    titleLine: "DeFi Protocol Engineer · Blockchain Security Researcher",
    hook: "With hands-on experience designing, auditing, and securing DeFi protocols — and a published vulnerability class affecting $98.6M in assets — I bring both builder and breaker perspectives to blockchain engineering.",
    body: "My work spans DeFi protocol design, smart contract security, blockchain forensics, and Islamic finance innovation.",
    highlights: [
      "Discovered the ADS vulnerability class — a systemic flaw exposing ~$98.6M across Aave V4, Morpho Blue, and Curve crvUSD.",
      "Designed and built Sunna Protocol — the world's first Shariah-compliant DeFi infrastructure with constitutional invariants, ERC-4626 adapter, on-chain effort measurement, and 1,630+ tests across EVM and Solana.",
      "Built TickDriftGuardV4 — a dual-layer EIP-1153 defense against Uniswap V3 oracle manipulation, proven on $50M mainnet fork simulation.",
    ],
    cvs: ["CV-04", "CV-05", "CV-03", "CV-09"],
  },
  "fullstack": {
    label: "Full-Stack Developer",
    titleLine: "Full-Stack Engineer · Systems Architect",
    hook: "Combining strong backend engineering in Python and Rust with modern frontend development, I deliver complete, production-ready applications from database design to deployment.",
    body: "My work spans full-stack web development, API architecture, and cloud-native deployment.",
    highlights: [
      "Built complete full-stack applications including BookFlow (FastAPI + Vue.js), AuthProfile (Django 5.2 + DRF + Bootstrap 5), and a Next.js AI chatbot with Vercel AI SDK supporting 4 LLM providers.",
      "Developed production Rust web applications with Axum 0.8 featuring dark/light theme systems, full Arabic/English i18n, and async-first architecture on Tokio.",
      "Maintain 21+ repositories totaling 208,000+ LOC across Python, Rust, TypeScript, and Solidity with 5,700+ tests and CI/CD pipelines.",
    ],
    cvs: ["CV-06", "CV-01", "CV-07", "CV-10"],
  },
  "ai": {
    label: "AI Engineer",
    titleLine: "AI-Integrated Backend Engineer · Systems Architect",
    hook: "With hands-on experience building production systems that connect LLM APIs, Model Context Protocol servers, and AI-powered data pipelines with robust backend infrastructure, I am well-positioned to accelerate your AI engineering efforts.",
    body: "My work spans AI integration, backend systems, and developer tooling across multiple languages and frameworks.",
    highlights: [
      "Built AI integration systems: a multi-provider chatbot (Next.js + Vercel AI SDK), a Docker-isolated MCP server for PostgreSQL via natural language, and a Rust MCP tool provider for Claude Code Desktop.",
      "Published an async Rust client library for the DeepSeek AI API with full type safety. Built automated content pipelines and production-grade data collection tools for AI training data and RAG pipelines.",
      "Strong backend foundation in Python (FastAPI, Django) and Rust (Axum, Tokio) with 21+ repositories, 208,000+ LOC, and comprehensive testing.",
    ],
    cvs: ["CV-10", "CV-01", "CV-02", "CV-07"],
  },
  "devops": {
    label: "DevOps & Cloud",
    titleLine: "DevOps & Cloud Infrastructure Engineer",
    hook: "With hands-on experience designing containerized deployments, CI/CD pipelines, and cloud-native infrastructure for web services, APIs, and blockchain protocols, I bring strong infrastructure engineering to your team.",
    body: "My work spans containerization, CI/CD automation, cloud deployment, and infrastructure-as-code practices.",
    highlights: [
      "Designed infrastructure for a multi-chain DeFi protocol spanning 4 pillars with CI/CD security gates running invariant verification on every code change.",
      "Built Docker-based deployments across Hugging Face Spaces, Vercel, and self-hosted infrastructure with GitHub Actions pipelines.",
      "Created secure container isolation patterns including Dockerized read-only PostgreSQL for AI agent access via MCP and multi-stage builds.",
    ],
    cvs: ["CV-07", "CV-01", "CV-06"],
  },
  "pentester": {
    label: "Pentester / SecEng",
    titleLine: "Security Engineer & Penetration Tester",
    hook: "With experience building offensive and defensive security tools in Rust and conducting vulnerability research across web and blockchain platforms, I bring strong technical security engineering to your team.",
    body: "My work spans penetration testing, security tool development, bug bounty hunting, and blockchain forensics.",
    highlights: [
      "Built Chthonic — a modular penetration testing framework in Rust inspired by Metasploit. Memory-safe, 10x faster, with async networking, plugin architecture, TCP scanner, HTTP injection scanner (30+ payloads).",
      "Active bug bounty hunter across 6 platforms with confirmed findings including High-severity vulnerabilities and the ADS vulnerability class (~$98.6M exposure).",
      "Built complementary security tools: BTC Sentinel (forensics, 213 tests), TickDriftGuardV4 (oracle defense), HuntKey (account abstraction security, 126 tests).",
    ],
    cvs: ["CV-08", "CV-03", "CV-04", "CV-09"],
  },
  "forensics": {
    label: "Blockchain Forensics",
    titleLine: "Blockchain Forensics & Intelligence Analyst",
    hook: "With proven experience building forensics intelligence platforms and conducting real-world investigations into major cryptocurrency incidents, I bring deep analytical and engineering capabilities to blockchain investigations.",
    body: "My work spans blockchain forensics, threat intelligence, AML analysis, and security research.",
    highlights: [
      "Built BTC Sentinel — a multi-chain forensics platform in Rust with 5 engines: pattern analysis, forensic flow tracing, cluster analysis, watchlist scanning, and real-time mempool interception.",
      "Traced the $1.5B Bybit hack across 682 transactions and 42,479 addresses in 36 seconds, identifying Lazarus Group attribution.",
      "Deep DeFi security expertise: discovered the ADS vulnerability class (~$98.6M), built oracle manipulation defense tools, and conducted MEV research across 33,827 liquidation events.",
    ],
    cvs: ["CV-09", "CV-04", "CV-08", "CV-03"],
  },
  "general": {
    label: "General",
    titleLine: "Security Researcher · Systems Engineer · Protocol Architect",
    hook: "With extensive hands-on experience building secure, high-performance systems across backend infrastructure, smart contract security, and blockchain protocols, I am confident in my ability to bring significant value to your team.",
    body: "My work spans security research, Rust systems engineering, Python backend architecture, and DeFi protocol design.",
    highlights: [
      "Discovered the ADS vulnerability class — a ~$98.6M phantom yield exposure affecting major lending protocols.",
      "Built and maintain 21+ repositories totaling 208,000+ lines of production code with 5,700+ tests.",
      "Active security auditor on Sherlock and Immunefi, and builder of forensics tools that traced the $1.5B Bybit hack in 36 seconds.",
    ],
    cvs: ["CV-02", "CV-03", "CV-04", "CV-01"],
  },
};

function formatDate(d: string) {
  if (!d) return '';
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function today() {
  return new Date().toISOString().split('T')[0];
}

export function CoverLetter() {
  const [tpl, setTpl] = useState('security');
  const [company, setCompany] = useState('');
  const [recipient, setRecipient] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState(today());
  const [selectedCVs, setSelectedCVs] = useState(TEMPLATES.security.cvs);
  const [showSwedish, setShowSwedish] = useState(true);
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<'compose' | 'preview'>('compose');

  const t = TEMPLATES[tpl];
  const greeting = recipient ? `Dear ${recipient},` : 'Dear Hiring Manager,';
  const companyRef = company || 'your organization';
  const roleRef = role || t.label;
  const opening = `I am writing to express my strong interest in the ${roleRef} position at ${companyRef}. ${t.hook}`;
  const attached = CV_PROFILES.filter(c => selectedCVs.includes(c.id));

  const letterText = `ABDULWAHED MANSOUR
${t.titleLine}
Mejramvägen 37, 145 73 Norsborg, Stockholm, Sweden
+46 76 930 8145 | abdulwahed.sweden@gmail.com
GitHub: github.com/abdulwahed-sweden | LinkedIn: linkedin.com/in/abdulwahed-sweden

${formatDate(date)}

${greeting}

${opening}

${t.body}

${t.highlights.map(h => `• ${h}`).join('\n\n')}

Several of these projects are hosted in private repositories due to their sensitive nature and are available for review upon request.
${showSwedish ? '\nJag ser fram emot att bidra till ert team och växa tillsammans med er organisation. Tack för att ni tar er tid att granska min ansökan!\n' : ''}
I would welcome the chance to discuss how my experience aligns with your needs.

Best regards,
Abdulwahed Mansour
${roleRef}

ATTACHED PROFILES
${attached.map(c => `- ${c.id}: ${c.title}`).join('\n')}

Portfolio: abdulwahed-mansour.dev`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(letterText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [letterText]);

  const toggleCV = (id: string) => {
    setSelectedCVs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const switchTemplate = (key: string) => {
    setTpl(key);
    setSelectedCVs(TEMPLATES[key].cvs);
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="no-print flex items-center gap-2 text-sm mb-8 text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Cover Letter</span>
        </nav>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cover Letter Generator</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">10 profiles · 10 templates · dynamic content</p>
          </div>
          <button onClick={handleCopy} className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy Letter'}</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200 dark:border-gray-800">
          {(['compose', 'preview'] as const).map(key => (
            <button key={key} onClick={() => setTab(key)} className={`px-5 py-3 text-sm font-semibold transition border-b-2 -mb-px ${tab === key ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
              {key === 'compose' ? 'Compose' : 'Preview'}
            </button>
          ))}
        </div>

        {/* Compose Tab */}
        {tab === 'compose' && (
          <div className="space-y-8">
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Role Template</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(TEMPLATES).map(([key, val]) => (
                  <button key={key} onClick={() => switchTemplate(key)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${tpl === key ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Company</label>
                <input value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Trail of Bits" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Recipient</label>
                <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="e.g. Dr. Sarah Chen" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Role Title Override</label>
              <input value={role} onChange={e => setRole(e.target.value)} placeholder={t.label} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
            </div>

            {/* CV Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Attached CV Profiles</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CV_PROFILES.map(cv => {
                  const active = selectedCVs.includes(cv.id);
                  const rec = t.cvs.includes(cv.id);
                  return (
                    <label key={cv.id} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${active ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-700'}`}>
                      <input type="checkbox" checked={active} onChange={() => toggleCV(cv.id)} className="accent-blue-600 w-4 h-4" />
                      <span className="text-sm">
                        <strong className={active ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}>{cv.id}</strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">{cv.title}</span>
                        {rec && <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">REC</span>}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showSwedish} onChange={() => setShowSwedish(!showSwedish)} className="accent-blue-600 w-4 h-4" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Include Swedish closing line</span>
            </label>
          </div>
        )}

        {/* Preview Tab */}
        {tab === 'preview' && (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 sm:p-10">
            <div className="text-center pb-6 mb-6 border-b-2 border-gray-900 dark:border-white">
              <div className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">ABDULWAHED MANSOUR</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">{t.titleLine}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                Mejramvägen 37, 145 73 Norsborg, Stockholm, Sweden<br />
                +46 76 930 8145 | abdulwahed.sweden@gmail.com<br />
                GitHub: github.com/abdulwahed-sweden | LinkedIn: linkedin.com/in/abdulwahed-sweden
              </div>
            </div>

            <div className="space-y-4 text-gray-800 dark:text-gray-200 text-[15px] leading-relaxed">
              <p className="text-gray-500 dark:text-gray-400">{formatDate(date)}</p>
              <p>{greeting}</p>
              <p>{opening}</p>
              <p>{t.body}</p>

              {t.highlights.map((h, i) => (
                <div key={i} className="pl-5 relative">
                  <span className="absolute left-0 text-blue-600 font-bold">•</span>
                  {h}
                </div>
              ))}

              <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4 text-sm text-yellow-800 dark:text-yellow-300 italic">
                Several of these projects are hosted in private repositories due to their sensitive nature and are available for review upon request.
              </div>

              {showSwedish && (
                <p className="text-blue-600 dark:text-blue-400 italic">
                  Jag ser fram emot att bidra till ert team och växa tillsammans med er organisation. Tack för att ni tar er tid att granska min ansökan!
                </p>
              )}

              <p>I would welcome the chance to discuss how my experience aligns with your needs.</p>

              <div className="mt-6">
                <p>Best regards,</p>
                <p className="font-bold mt-1">Abdulwahed Mansour</p>
                <p className="text-gray-500 dark:text-gray-400">{roleRef}</p>
              </div>

              {attached.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Attached Profiles</p>
                  {attached.map(c => (
                    <p key={c.id} className="text-sm text-gray-700 dark:text-gray-300">— <strong>{c.id}</strong>: {c.title}</p>
                  ))}
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Portfolio: abdulwahed-mansour.dev</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Status bar */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-500 dark:text-gray-400">
          <span>Template: <strong className="text-gray-900 dark:text-white">{t.label}</strong></span>
          <span>·</span>
          <span>CVs: <strong className="text-gray-900 dark:text-white">{selectedCVs.length}</strong></span>
          <span>·</span>
          <span>{formatDate(date)}</span>
          {company && <><span>·</span><span>To: <strong className="text-gray-900 dark:text-white">{company}</strong></span></>}
        </div>
      </div>
    </div>
  );
}
