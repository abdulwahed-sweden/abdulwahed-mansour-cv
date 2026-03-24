import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const loc = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/cover-letter', label: 'Cover Letter' },
  ];

  return (
    <nav className="no-print bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200/60 dark:border-gray-800/60 sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white hidden sm:inline">Abdulwahed Mansour</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${loc.pathname === l.to ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                {l.label}
              </Link>
            ))}
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">GitHub</a>
            <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />
            <button onClick={toggle} aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="flex items-center space-x-1 md:hidden">
            <button onClick={toggle} aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200/60 dark:border-gray-800/60">
          <div className="max-w-5xl mx-auto px-6 py-3 space-y-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${loc.pathname === l.to ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{l.label}</Link>
            ))}
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
}
