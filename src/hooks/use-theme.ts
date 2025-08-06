import { useContext } from 'react';
import { ThemeContext, type ThemeContextType } from '../contexts/theme-context';

export function useTheme(): ThemeContextType {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme not implement ThemeProvider');
	return context;
}
