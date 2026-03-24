import { createContext } from 'react';
import type { ThemeCtx } from '../hooks/useTheme';

export const ThemeCtxValue = createContext<ThemeCtx | undefined>(undefined);
