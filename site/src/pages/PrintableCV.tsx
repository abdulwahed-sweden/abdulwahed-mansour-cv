import { Printer } from 'lucide-react';

export function PrintableCV() {
  return (
    <div className="bg-white min-h-screen">
      {/* Print button */}
      <div className="no-print fixed top-20 right-6 z-50">
        <button
          onClick={() => window.print()}
          aria-label="Print or save as PDF"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
        >
          <Printer size={18} />
          Print / Save PDF
        </button>
      </div>

      <div className="cv-print max-w-5xl mx-auto px-6 sm:px-8 py-10 text-gray-900">
        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">ABDULWAHED MANSOUR</h1>
          <p className="text-lg font-medium text-gray-700 mt-1">Senior Backend Engineer (Python / Django)</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
            <span>Stockholm, Sweden</span>
            <span className="text-gray-400">|</span>
            <span>+46 76 930 8145</span>
            <span className="text-gray-400">|</span>
            <a href="mailto:abdulwahed.mansour@gmail.com" className="text-blue-700 hover:underline">abdulwahed.mansour@gmail.com</a>
            <span className="text-gray-400">|</span>
            <a href="https://github.com/abdulwahed-sweden" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com/abdulwahed-sweden</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Senior Backend Engineer with 9+ years of experience building reliable, scalable systems in cloud environments. Strong focus on Python, Django, and system design, with hands-on experience delivering production-ready backend services end-to-end. Experienced in designing systems that handle real-world constraints — concurrency, fairness, and reliability under load. Brings a security-conscious mindset and a strong sense of ownership.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-[140px_1fr] gap-y-1.5 text-sm">
            <span className="font-semibold text-gray-800">Languages</span>
            <span className="text-gray-700">Python, TypeScript (Node.js), Rust, Bash, SQL</span>
            <span className="font-semibold text-gray-800">Backend</span>
            <span className="text-gray-700">Django, FastAPI, REST APIs, Microservices, Django REST Framework</span>
            <span className="font-semibold text-gray-800">Databases</span>
            <span className="text-gray-700">PostgreSQL, MySQL, SQLite, Redis — schema design, query optimization, migrations</span>
            <span className="font-semibold text-gray-800">DevOps &amp; Cloud</span>
            <span className="text-gray-700">AWS, GCP, Azure — Docker, Terraform, GitHub Actions CI/CD</span>
            <span className="font-semibold text-gray-800">Security</span>
            <span className="text-gray-700">Application security, threat modeling, secure system design</span>
            <span className="font-semibold text-gray-800">AI Integration</span>
            <span className="text-gray-700">OpenAI, Claude, Mistral, Ollama — LLM pipelines, MCP integration</span>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Professional Experience</h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-bold text-gray-900">Independent Backend &amp; DevOps Engineer</h3>
              <span className="text-xs text-gray-500 shrink-0 ml-2">2016 – Present</span>
            </div>
            <p className="text-xs text-gray-500 mb-1">Self-employed / Open Source · Stockholm, Sweden</p>
            <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Designed and implemented backend systems using Python (Django, FastAPI) with focus on correctness and reliability
              </li>
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Built scalable services with concurrency control, rate limiting, and production hardening
              </li>
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Containerized applications with Docker, implemented CI/CD pipelines, and managed cloud infrastructure
              </li>
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Designed and optimized relational databases (PostgreSQL, MySQL, SQLite)
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-bold text-gray-900">Security Researcher (Part-time)</h3>
              <span className="text-xs text-gray-500 shrink-0 ml-2">2022 – Present</span>
            </div>
            <p className="text-xs text-gray-500 mb-1">Immunefi / Sherlock / Code4rena · Remote</p>
            <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Conducted security reviews of complex distributed systems, identifying vulnerabilities and edge-case failures
              </li>
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                Applied security thinking to improve system architecture and design decisions
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Selected Projects</h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Django Auth Platform — Production-Ready Backend System</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Django · DRF · PostgreSQL</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Production-ready backend with REST APIs, role-based access, rate limiting, HSTS, secure cookies, and CI/CD (50+ tests)
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">BookFlow — Appointment Booking API</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">FastAPI · SQLAlchemy · JWT</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Clean REST API with role-based access control, booking conflict prevention, and clean architecture separating business logic
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Django Sweden Enterprise Template</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Django · BankID · Swish · GDPR</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Production backend for the Swedish market — BankID authentication, Swish payments, VAT logic, GDPR-aware data structures
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Docker MCP PostgreSQL Server — AI-to-Database Integration</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Python · PostgreSQL · MCP</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Natural language to SQL system with read-only enforcement at database and application levels
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">News Bot — Automated Content Pipeline</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Python · DeepSeek API · SQLite</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Three-stage pipeline: scrape → AI summarisation → Telegram delivery with deduplication and scheduling
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Education</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-800">Software Engineer Equivalency Certification</span> — Linköping University, 2010
            </div>
            <div>
              <span className="font-semibold text-gray-800">Graduate Studies</span> — Université Pierre et Marie Curie (Paris 6), 2004
            </div>
            <div>
              <span className="font-semibold text-gray-800">Technical Engineering</span> — Al-Azhar University, Palestine, 1999
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Languages</h2>
          <div className="text-sm text-gray-700 flex gap-6">
            <span><strong>English</strong> — Professional</span>
            <span><strong>Swedish</strong> — Basic (actively learning)</span>
            <span><strong>Arabic</strong> — Native</span>
          </div>
        </section>
      </div>
    </div>
  );
}
