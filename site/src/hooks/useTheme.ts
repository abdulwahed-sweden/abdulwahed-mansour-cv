import { useContext } from 'react';
import { ThemeCtxValue } from '../contexts/ThemeCtx';

export interface ThemeCtx {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export function useTheme() {
  const ctx = useContext(ThemeCtxValue);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
}
