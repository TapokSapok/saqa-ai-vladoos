import { useEffect, useState, type PropsWithChildren } from 'react';
import { LangContext, type LangType } from '../contexts/lang-context';

export default function LangProvider({ children }: PropsWithChildren) {
	const [lang, setLang] = useState<LangType>(() => (localStorage.getItem('lang') as LangType) || 'ru');

	useEffect(() => {
		localStorage.setItem('lang', lang);
		console.log(lang);
	}, [lang]);

	// setLang(lang);

	return <LangContext value={{ lang, setLang }}>{children}</LangContext>;
}
