import { Printer } from 'lucide-react';

export function PrintableCV() {
  return (
    <div className="bg-white min-h-screen">
      {/* Print button */}
      <div className="no-print fixed top-20 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
        >
          <Printer size={18} />
          Print / Save PDF
        </button>
      </div>

      <div className="cv-print max-w-[210mm] mx-auto px-8 py-10 text-gray-900">
        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">ABDULWAHED MANSOUR</h1>
          <p className="text-lg font-medium text-gray-700 mt-1">Security Researcher &amp; Smart Contract Auditor</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
            <span>Stockholm, Sweden</span>
            <span className="text-gray-400">|</span>
            <span>+46 76 930 8145</span>
            <span className="text-gray-400">|</span>
            <a href="mailto:abdulwahed.sweden@gmail.com" className="text-blue-700 hover:underline">abdulwahed.sweden@gmail.com</a>
            <span className="text-gray-400">|</span>
            <a href="https://linkedin.com/in/abdulwahed-sweden" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/abdulwahed-sweden</a>
            <span className="text-gray-400">|</span>
            <a href="https://github.com/abdulwahed-sweden" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com/abdulwahed-sweden</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Security researcher and smart contract auditor specializing in DeFi protocol vulnerabilities, blockchain forensics, and systems-level security tooling. Discovered and formalized the ADS (Asymmetric Deficit Socialization) vulnerability class affecting major lending protocols. Active auditor on Sherlock and Immunefi with confirmed findings in production protocols. Combines rigorous security analysis with hands-on engineering across Solidity, Rust, and Python to build defensive tools and verification frameworks.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-[140px_1fr] gap-y-1.5 text-sm">
            <span className="font-semibold text-gray-800">Languages</span>
            <span className="text-gray-700">Solidity, Rust, Python, TypeScript, SQL, Bash</span>
            <span className="font-semibold text-gray-800">Security Tools</span>
            <span className="text-gray-700">Foundry (Forge/Cast), Slither, Echidna, Hypothesis, Custom fuzzers &amp; invariant frameworks</span>
            <span className="font-semibold text-gray-800">Smart Contracts</span>
            <span className="text-gray-700">EVM internals, ERC-4337, ERC-4626, EIP-712, EIP-1153, OpenZeppelin</span>
            <span className="font-semibold text-gray-800">Backend</span>
            <span className="text-gray-700">FastAPI, Django, Axum, Tokio, SQLAlchemy, PostgreSQL, Docker</span>
            <span className="font-semibold text-gray-800">Platforms</span>
            <span className="text-gray-700">Sherlock, Immunefi, Code4rena, HackerOne, Bugcrowd, Intigriti</span>
            <span className="font-semibold text-gray-800">Methodology</span>
            <span className="text-gray-700">Invariant testing, property-based fuzzing, mainnet fork simulations, economic modeling</span>
          </div>
        </section>

        {/* Security Research & Audit Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Security Research &amp; Audit Experience</h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-bold text-gray-900">ADS Vulnerability Discovery — Original Research</h3>
            </div>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              Discovered and formalized the Asymmetric Deficit Socialization vulnerability class — a systemic issue in DeFi lending protocols where fee extraction occurs on accrued interest before verifying collectibility. Identified exposure across Aave V4 (~$96M), Morpho Blue (~$2M), and Curve crvUSD (~$585K), totaling ~$98.6M in phantom yield at risk.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Audit Contest Findings</h3>
            <table className="w-full text-sm mt-2 border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-1 pr-3 font-semibold text-gray-800">Program</th>
                  <th className="text-left py-1 pr-3 font-semibold text-gray-800">Finding</th>
                  <th className="text-left py-1 font-semibold text-gray-800">Severity</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-1 pr-3">Moonwell / Mamo</td>
                  <td className="py-1 pr-3">SlippagePriceChecker vulnerability</td>
                  <td className="py-1 font-medium">High</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1 pr-3">Fluid DEX V2 (Sherlock)</td>
                  <td className="py-1 pr-3">Liquidation dust debt creates uncloseable positions</td>
                  <td className="py-1">Low–Medium</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1 pr-3">Fluid DEX V2 (Sherlock)</td>
                  <td className="py-1 pr-3">Smart Debt round-trip precision loss</td>
                  <td className="py-1">Informational</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Blockchain Forensics</h3>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                <strong>Bybit Hack (DELTA STRIKE)</strong> — Traced $1.5B theft across 682 transactions and 42,479 addresses; attributed to Lazarus Group with cross-bridge fund flow analysis via THORChain/Chainflip.
              </li>
              <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                <strong>DSI Hack</strong> — Full fund flow reconstruction from initial exploit through laundering stages.
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
                <h3 className="text-sm font-bold text-gray-900">BTC Sentinel — Multi-Chain Forensic Intelligence Platform</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Rust · MITRE ATT&CK · AML</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Built 5-engine forensics platform: pattern analysis (10+ heuristics), flow tracing, cluster analysis (Union-Find), watchlist scanning, and real-time mempool interception
                </li>
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Zero-copy parsing and zero-allocation hot paths for high-throughput Bitcoin transaction analysis; 213 tests
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Fluid DEX V2 — Independent Security Architecture Review</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Solidity · Foundry</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Line-by-line review of Money Market Core, DEX V2 Base, and cross-module state consistency using a rigorous 5-phase methodology
                </li>
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Documented 5 design observations, 8 code quality notes, and 9 informational findings
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">TickDriftGuardV4 — Oracle Manipulation Defense Library</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Solidity · EIP-1153</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Dual-layer defense against Uniswap V3 tick drift oracle attacks using EIP-1153 transient storage
                </li>
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Validated on $50M mainnet fork simulation; tested against Fluid Protocol's live ETH/USDC vault
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">HuntKey — ERC-4337 Account Abstraction Security Protocol</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Rust · Solidity · 126 Tests</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  4-layer defense-in-depth protocol with 15 sequential on-chain validation checks, HKDF-derived session keys, and guardian-based recovery
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Chthonic — Modular Penetration Testing Framework</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Rust · Tokio · Async</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Metasploit-inspired security framework in Rust with async TCP port scanner, HTTP header injection scanner (30+ payloads), and plugin architecture
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">Sunna Protocol — DeFi Invariant Enforcement</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">Solidity · Foundry · 124 Tests</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  6 constitutional invariants preventing phantom yield extraction; ERC-4626 adapter that enforces invariants onto existing protocols
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">BookFlow — Full-Stack Appointment Booking System</h3>
                <span className="text-xs text-gray-500 shrink-0 ml-2">FastAPI · Vue.js · JWT</span>
              </div>
              <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                  Complete booking platform with JWT authentication, role-based access, REST API with Swagger documentation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Additional Experience</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
              <strong>Backend Development:</strong> Production APIs with FastAPI, Django, and Rust (Axum/Tokio); PostgreSQL, Docker, CI/CD with GitHub Actions
            </li>
            <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
              <strong>AI Integration:</strong> LLM-powered systems with MCP, LangChain, and Vercel AI SDK; multi-provider chatbot, NL-to-SQL database interface
            </li>
            <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
              <strong>Full-Stack:</strong> React, Vue.js, Next.js, TypeScript, Tailwind CSS; responsive design and i18n (RTL/LTR)
            </li>
            <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
              <strong>Open Source:</strong> 21+ public repositories with 5,700+ tests across Solidity, Rust, Python, and TypeScript
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Education</h2>
          <p className="text-sm text-gray-700">
            Self-directed deep study in cryptographic protocols, DeFi mechanism design, formal verification, and systems programming. Published original security research (ADS vulnerability class). Continuous learning through audit contests, open-source development, and applied research.
          </p>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Languages</h2>
          <div className="text-sm text-gray-700 flex gap-6">
            <span><strong>Arabic</strong> — Native</span>
            <span><strong>English</strong> — Professional working proficiency</span>
            <span><strong>Swedish</strong> — Basic (actively learning)</span>
          </div>
        </section>
      </div>
    </div>
  );
}
