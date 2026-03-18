import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const loc = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/#profiles', label: 'Profiles' },
    { to: '/cover-letter', label: 'Cover Letter' },
  ];

  return (
    <nav className="no-print bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-lg hidden sm:inline">Abdulwahed Mansour</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`text-[15px] font-medium transition ${loc.pathname === l.to ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}>
                {l.label}
              </Link>
            ))}
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">GitHub</a>
            <button onClick={toggle} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button onClick={toggle} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-[15px] font-medium text-gray-600 dark:text-gray-300 py-2">{l.label}</Link>
            ))}
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="block text-[15px] font-medium text-gray-600 dark:text-gray-300 py-2">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
}
