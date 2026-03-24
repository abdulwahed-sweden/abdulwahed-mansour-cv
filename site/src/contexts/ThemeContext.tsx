import { useEffect, useState, type ReactNode } from 'react';
import { ThemeCtxValue } from './ThemeCtx';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const s = localStorage.getItem('theme');
    if (s === 'light' || s === 'dark') return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return <ThemeCtxValue.Provider value={{ theme, toggle }}>{children}</ThemeCtxValue.Provider>;
}
