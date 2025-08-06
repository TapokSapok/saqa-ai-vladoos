import { useEffect, useState, type PropsWithChildren } from 'react';
import { ThemeContext, type ThemeType } from '../contexts/theme-context';

export default function ThemeProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState<ThemeType>(() => (localStorage.getItem('theme') as ThemeType) || 'light');

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(theme === 'dark' ? 'light' : 'dark');
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	function toggleTheme() {
		setTheme(p => (p === 'dark' ? 'light' : 'dark'));
	}

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
