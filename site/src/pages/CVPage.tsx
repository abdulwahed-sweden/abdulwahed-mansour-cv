import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, ExternalLink, Github, Printer, ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cvs, loadCVContent } from '../data/cvs';

export function CVPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const sorted = [...cvs].sort((a, b) => a.order - b.order);
  const cv = sorted.find(c => c.slug === slug);
  const idx = sorted.findIndex(c => c.slug === slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  useEffect(() => {
    if (slug) {
      setLoading(true);
      loadCVContent(slug).then(md => {
        setContent(md);
        setLoading(false);
        window.scrollTo(0, 0);
      });
    }
  }, [slug]);

  useEffect(() => {
    if (cv) document.title = `${cv.title} — Abdulwahed Mansour`;
    return () => { document.title = 'Abdulwahed Mansour — Security Researcher & Systems Engineer'; };
  }, [cv]);

  if (!cv) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600 dark:text-gray-400">CV not found</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="no-print flex items-center gap-2 text-sm mb-8 text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{cv.short}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Abdulwahed Mansour</h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{cv.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Stockholm, Sweden</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a href="mailto:abdulwahed.sweden@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
              <Mail size={16} /><span>abdulwahed.sweden@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
              <ExternalLink size={16} /><span>LinkedIn</span>
            </a>
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
              <Github size={16} /><span>GitHub</span>
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cv.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="no-print flex flex-wrap gap-3">
            <button onClick={() => window.print()} className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm font-medium">
              <Printer size={16} /><span>Print / PDF</span>
            </button>
            <a href="mailto:abdulwahed.sweden@gmail.com" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
              <Mail size={16} /><span>Contact me</span>
            </a>
          </div>
        </div>

        {/* Private repos notice */}
        <div className="no-print flex items-start gap-3 p-4 mb-10 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-xl">
          <Lock size={18} className="text-yellow-700 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-0.5">Private Repositories</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-400/80">Some projects referenced below are hosted in private GitHub repositories due to sensitivity. Full source access is available upon request for interviews and due diligence.</p>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        ) : (
          <article className="cv-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        )}

        {/* Prev / Next */}
        <div className="no-print mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 gap-4">
          {prev ? (
            <Link to={`/cv/${prev.slug}`} className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                <ArrowLeft size={14} /><span>Previous</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{prev.short}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/cv/${next.slug}`} className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-4 hover:shadow-lg transition text-right ml-auto w-full">
              <div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span>Next</span><ArrowRight size={14} />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{next.short}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
