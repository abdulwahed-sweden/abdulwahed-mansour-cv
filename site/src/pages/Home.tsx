import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Server, Code, Mail, Linkedin, Github } from 'lucide-react';
import { cvs } from '../data/cvs';

export function Home() {
  const sorted = [...cvs].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Hero */}
        <div className="pt-24 pb-20">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-8">
              <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              Available for opportunities in Stockholm
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Abdulwahed Mansour
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Senior Backend Engineer &amp; Security Engineer. I build reliable systems with Python and Django, and protect them.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:abdulwahed.mansour@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition font-medium text-sm">
                <Mail size={16} />
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition font-medium text-sm">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition font-medium text-sm">
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden mb-20">
            <div className="bg-white dark:bg-gray-950 p-8">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">9+ Years</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Building production backend systems with Python, Django, and cloud infrastructure</p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-600 dark:text-red-400" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Security Research</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Confirmed high-severity findings on Immunefi and Sherlock. Active vulnerability researcher</p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">End-to-End</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">From system design to production. Correctness, concurrency control, and reliability under load</p>
            </div>
          </div>

          {/* What I Do */}
          <div className="mb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">What I Do</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Backend Engineering', desc: 'Production systems with Django, FastAPI, PostgreSQL. API design, database optimization, authentication, scalable architecture.' },
                { title: 'Systems Security', desc: 'Vulnerability analysis, threat modeling, secure architecture. Offensive and defensive tooling in Python and Rust.' },
                { title: 'DevOps & Infrastructure', desc: 'Docker, CI/CD with GitHub Actions, cloud infrastructure across AWS, GCP, Azure. Automated deployment and monitoring.' },
                { title: 'AI Integration', desc: 'LLM pipelines with MCP protocol, OpenAI, Claude, Mistral. Safe AI-to-database connections for production use.' },
              ].map(item => (
                <div key={item.title} className="group p-6 rounded-xl border border-gray-150 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CV Profiles */}
          <div className="mb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">CV Profiles</h2>
            <div className="space-y-3">
              {sorted.map(cv => (
                <Link
                  key={cv.slug}
                  to={`/cv/${cv.slug}`}
                  className="group flex items-center gap-5 p-5 rounded-xl border border-gray-150 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white font-bold font-mono text-sm">{String(cv.order).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-1">
                      {cv.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cv.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-10 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Let's work together</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">Available for full-time positions and contract work. Based in Stockholm, open to remote.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:abdulwahed.mansour@gmail.com" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition font-medium text-sm">
                Start a Conversation
                <ArrowRight size={16} />
              </a>
              <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition font-medium text-sm">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
