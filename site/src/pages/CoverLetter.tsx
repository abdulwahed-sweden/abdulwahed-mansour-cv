import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';

const CV_PROFILES = [
  { id: "CV-01", title: "Senior Backend Engineer (Python / Django)" },
  { id: "CV-02", title: "Security Engineer (Systems Security & Backend Protection)" },
];

const TEMPLATES: Record<string, { label: string; titleLine: string; hook: string; body: string; highlights: string[]; cvs: string[] }> = {
  "backend": {
    label: "Backend Engineer",
    titleLine: "Senior Backend Engineer (Python / Django)",
    hook: "With a strong track record building scalable, production-grade Python backends — from enterprise Django platforms to high-throughput FastAPI services — I bring both architectural depth and hands-on delivery.",
    body: "My work spans Python backend architecture, API design, database optimization, and cloud infrastructure.",
    highlights: [
      "Designed and shipped production backend systems with Django and FastAPI — including a production-hardened auth platform with role-based access, rate limiting, HSTS, and CI/CD, and a booking API with conflict prevention and lifecycle management.",
      "Built AI-to-database integration systems connecting natural language queries to PostgreSQL safely, with read-only enforcement at both database and application levels.",
      "Developed a production-ready Django backend tailored for the Swedish market — BankID authentication, Swish payments, VAT logic, and GDPR-aware data structures.",
    ],
    cvs: ["CV-01"],
  },
  "security": {
    label: "Security Engineer",
    titleLine: "Security Engineer (Systems Security & Backend Protection)",
    hook: "With hands-on experience in vulnerability analysis, threat modeling, and building security tooling that addresses real-world backend and infrastructure risks, I am confident in my ability to strengthen your security posture.",
    body: "My work spans security research, penetration testing, secure architecture, and building offensive/defensive tools in Python and Rust.",
    highlights: [
      "Built a modular penetration testing framework from scratch in Rust with async TCP scanning, HTTP header injection detection (30+ payloads), and a plugin architecture for extensible security analysis.",
      "Active security researcher on Immunefi, Sherlock, and Code4rena with confirmed high-severity findings in production systems — including vulnerability discovery affecting ~$98.6M in assets.",
      "Developed a large-scale security automation platform (25,000+ lines of code) and a high-performance forensic analysis platform used in real investigations tracing $1.5B in stolen funds.",
    ],
    cvs: ["CV-02"],
  },
  "general": {
    label: "General",
    titleLine: "Senior Backend & Security Engineer",
    hook: "With 9+ years of experience building reliable backend systems and a strong security-focused mindset, I bring both engineering depth and a defensive perspective to every system I work on.",
    body: "My work spans Python backend architecture, security research, and building tools that address real-world system risks.",
    highlights: [
      "Designed and shipped production backend systems with Django and FastAPI — including auth platforms, booking APIs, and AI-to-database integrations with security hardening at every layer.",
      "Active security researcher with confirmed high-severity vulnerability findings in production systems, and builder of penetration testing and forensic analysis tools in Rust and Python.",
      "Experienced in designing systems that handle real-world constraints — concurrency, reliability under load, and secure architecture — with a preference for simple, testable solutions.",
    ],
    cvs: ["CV-01", "CV-02"],
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
  const [tpl, setTpl] = useState('backend');
  const [company, setCompany] = useState('');
  const [recipient, setRecipient] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState(today());
  const [selectedCVs, setSelectedCVs] = useState(TEMPLATES.backend.cvs);
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
Stockholm, Sweden
+46 76 930 8145 | abdulwahed.mansour@gmail.com
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

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder:text-gray-400 dark:placeholder:text-gray-500";

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="no-print flex items-center gap-2 text-sm mb-10 text-gray-400 dark:text-gray-500">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Cover Letter</span>
        </nav>

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Cover Letter Generator</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2 profiles · 3 templates · dynamic content</p>
          </div>
          <button onClick={handleCopy} aria-label={copied ? 'Copied to clipboard' : 'Copy letter to clipboard'} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition font-medium text-sm">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Letter'}</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-gray-200 dark:border-gray-800" role="tablist">
          {(['compose', 'preview'] as const).map(key => (
            <button key={key} role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={`px-5 py-3 text-sm font-medium transition border-b-2 -mb-px ${tab === key ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}>
              {key === 'compose' ? 'Compose' : 'Preview'}
            </button>
          ))}
        </div>

        {/* Compose Tab */}
        {tab === 'compose' && (
          <div className="space-y-8">
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Role Template</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(TEMPLATES).map(([key, val]) => (
                  <button key={key} onClick={() => switchTemplate(key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tpl === key ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'}`}>
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Company</label>
                <input value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Klarna" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Recipient</label>
                <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="e.g. Dr. Sarah Chen" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Role Title Override</label>
              <input value={role} onChange={e => setRole(e.target.value)} placeholder={t.label} className={inputClass} />
            </div>

            {/* CV Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Attached CV Profiles</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CV_PROFILES.map(cv => {
                  const active = selectedCVs.includes(cv.id);
                  const rec = t.cvs.includes(cv.id);
                  return (
                    <label key={cv.id} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition border ${active ? 'bg-blue-50 dark:bg-blue-900/15 border-blue-200 dark:border-blue-800' : 'border-gray-150 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'}`}>
                      <input type="checkbox" checked={active} onChange={() => toggleCV(cv.id)} className="accent-blue-600 w-4 h-4" />
                      <span className="text-sm">
                        <strong className={active ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}>{cv.id}</strong>
                        <span className="text-gray-500 dark:text-gray-400 ml-2">{cv.title}</span>
                        {rec && <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded font-medium">REC</span>}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showSwedish} onChange={() => setShowSwedish(!showSwedish)} className="accent-blue-600 w-4 h-4" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Include Swedish closing line</span>
            </label>
          </div>
        )}

        {/* Preview Tab */}
        {tab === 'preview' && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 sm:p-10">
            <div className="text-center pb-6 mb-6 border-b-2 border-gray-900 dark:border-white">
              <div className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">ABDULWAHED MANSOUR</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">{t.titleLine}</div>
              <div className="text-sm text-gray-400 dark:text-gray-500 mt-2 leading-relaxed">
                Stockholm, Sweden<br />
                +46 76 930 8145 | abdulwahed.mansour@gmail.com<br />
                GitHub: github.com/abdulwahed-sweden | LinkedIn: linkedin.com/in/abdulwahed-sweden
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
              <p className="text-gray-400 dark:text-gray-500">{formatDate(date)}</p>
              <p>{greeting}</p>
              <p>{opening}</p>
              <p>{t.body}</p>

              {t.highlights.map((h, i) => (
                <div key={i} className="pl-5 relative">
                  <span className="absolute left-0 text-blue-600 font-bold">•</span>
                  {h}
                </div>
              ))}

              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/30 rounded-lg p-4 text-sm text-amber-700 dark:text-amber-400 italic">
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
                <p className="font-bold text-gray-900 dark:text-white mt-1">Abdulwahed Mansour</p>
                <p className="text-gray-400 dark:text-gray-500">{roleRef}</p>
              </div>

              {attached.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Attached Profiles</p>
                  {attached.map(c => (
                    <p key={c.id} className="text-sm text-gray-600 dark:text-gray-400">— <strong className="text-gray-900 dark:text-white">{c.id}</strong>: {c.title}</p>
                  ))}
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Portfolio: abdulwahed-mansour.dev</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Status bar */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-gray-400 dark:text-gray-500">
          <span>Template: <strong className="text-gray-600 dark:text-gray-300">{t.label}</strong></span>
          <span>·</span>
          <span>CVs: <strong className="text-gray-600 dark:text-gray-300">{selectedCVs.length}</strong></span>
          <span>·</span>
          <span>{formatDate(date)}</span>
          {company && <><span>·</span><span>To: <strong className="text-gray-600 dark:text-gray-300">{company}</strong></span></>}
        </div>
      </div>
    </div>
  );
}
