import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Code } from 'lucide-react';
import { cvs } from '../data/cvs';

export function Home() {
  const sorted = [...cvs].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Abdulwahed Mansour
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
              Security Researcher &amp; Systems Engineer based in Stockholm
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I find vulnerabilities in DeFi protocols, build forensics tools in Rust, and architect secure systems. 21+ repositories, 208K+ lines of code, 5,700+ tests.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#profiles" className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                <span>View Profiles</span>
                <ArrowRight size={18} />
              </a>
              <a href="mailto:abdulwahed.sweden@gmail.com" className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition font-semibold">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">$98.6M Exposure Discovered</h3>
              <p className="text-gray-600 dark:text-gray-400">ADS vulnerability class found across Aave V4, Morpho Blue, and Curve crvUSD lending protocols.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">$1.5B Hack Traced in 36s</h3>
              <p className="text-gray-600 dark:text-gray-400">Bybit hack traced across 682 transactions and 42,479 addresses with BTC Sentinel forensics platform.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">208K+ Lines of Code</h3>
              <p className="text-gray-600 dark:text-gray-400">Across 21+ repositories with 5,700+ tests in Rust, Python, Solidity, and TypeScript.</p>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What I Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Security</h3>
                <p className="text-gray-600 dark:text-gray-400">Smart contract auditing, penetration testing, blockchain forensics, and vulnerability research. Active on Sherlock, Immunefi, and Code4rena.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Systems Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400">High-performance Rust services with Tokio/Axum. Python backends with FastAPI and Django. DevOps, CI/CD, and cloud infrastructure.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Blockchain</h3>
                <p className="text-gray-600 dark:text-gray-400">DeFi protocol design, Islamic finance protocols, ERC-4337 account abstraction, ERC-4626 vaults. Solidity and Foundry.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI &amp; Full-Stack</h3>
                <p className="text-gray-600 dark:text-gray-400">LLM-powered systems with MCP, LangChain, and multi-provider backends. Full-stack applications with Next.js, Vue, and React.</p>
              </div>
            </div>
          </div>

          {/* Profiles */}
          <div id="profiles" className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Profiles</h2>
            <div className="grid gap-4">
              {sorted.map(cv => (
                <Link
                  key={cv.slug}
                  to={`/cv/${cv.slug}`}
                  className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg dark:hover:shadow-xl transition"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-mono text-sm">{String(cv.order).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {cv.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{cv.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cv.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's work together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">Available for full-time positions, contract work, and security audits. Based in Stockholm, open to remote.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:abdulwahed.sweden@gmail.com" className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </a>
              <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition font-semibold shadow-sm">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
