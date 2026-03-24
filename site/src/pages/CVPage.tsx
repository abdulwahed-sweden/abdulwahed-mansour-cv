import { useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, ExternalLink, Github, Printer, ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cvs, loadCVContent } from '../data/cvs';

function useCVContent(slug: string | undefined) {
  const cache = useRef<Record<string, string>>({});
  const listeners = useRef(new Set<() => void>());

  const subscribe = useMemo(() => (cb: () => void) => {
    listeners.current.add(cb);
    return () => { listeners.current.delete(cb); };
  }, []);

  useEffect(() => {
    if (!slug || cache.current[slug] !== undefined) return;
    let cancelled = false;
    loadCVContent(slug).then(md => {
      if (!cancelled) {
        cache.current[slug] = md;
        listeners.current.forEach(cb => cb());
      }
    });
    return () => { cancelled = true; };
  }, [slug]);

  const content = useSyncExternalStore(
    subscribe,
    () => slug ? (cache.current[slug] ?? null) : null,
  );

  return { content, loading: content === null };
}

export function CVPage() {
  const { slug } = useParams<{ slug: string }>();

  const sorted = [...cvs].sort((a, b) => a.order - b.order);
  const cv = sorted.find(c => c.slug === slug);
  const idx = sorted.findIndex(c => c.slug === slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const { content, loading } = useCVContent(slug);

  useEffect(() => {
    if (cv) document.title = `${cv.title} — Abdulwahed Mansour`;
    return () => { document.title = 'Abdulwahed Mansour — Senior Backend & Security Engineer'; };
  }, [cv]);

  useEffect(() => {
    if (content) window.scrollTo(0, 0);
  }, [content]);

  if (!cv) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600 dark:text-gray-400">CV not found</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="no-print flex items-center gap-2 text-sm mb-10 text-gray-400 dark:text-gray-500">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{cv.short}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Abdulwahed Mansour</h1>
          <h2 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-5">{cv.title}</h2>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Stockholm, Sweden</span>
            <a href="mailto:abdulwahed.mansour@gmail.com" className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Mail size={14} /><span>abdulwahed.mansour@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <ExternalLink size={14} /><span>LinkedIn</span>
            </a>
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Github size={14} /><span>GitHub</span>
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cv.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="no-print flex flex-wrap gap-3">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition text-sm font-medium">
              <Printer size={15} /><span>Print / PDF</span>
            </button>
            <a href="mailto:abdulwahed.mansour@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition text-sm font-medium">
              <Mail size={15} /><span>Contact me</span>
            </a>
          </div>
        </div>

        {/* Private repos notice */}
        <div className="no-print flex items-start gap-3 p-4 mb-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/30 rounded-xl">
          <Lock size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-700 dark:text-amber-400/80">Some projects are in private repositories. Source access available upon request for interviews and due diligence.</p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center gap-3 py-12 text-gray-400 dark:text-gray-500">
            <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-blue-600 rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          <article className="cv-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ children }) {
                  const text = String(children).trim();
                  if (text === 'NEW') {
                    return <span className="cv-badge-new">NEW</span>;
                  }
                  return <code>{children}</code>;
                },
              }}
            >{content ?? ''}</ReactMarkdown>
          </article>
        )}

        {/* Prev / Next */}
        <div className="no-print mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-800/60 grid grid-cols-2 gap-4">
          {prev ? (
            <Link to={`/cv/${prev.slug}`} className="group p-4 rounded-xl border border-gray-150 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition">
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-1">
                <ArrowLeft size={12} /><span>Previous</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{prev.short}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/cv/${next.slug}`} className="group p-4 rounded-xl border border-gray-150 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition text-right ml-auto w-full">
              <div className="flex items-center justify-end gap-2 text-xs text-gray-400 dark:text-gray-500 mb-1">
                <span>Next</span><ArrowRight size={12} />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{next.short}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
