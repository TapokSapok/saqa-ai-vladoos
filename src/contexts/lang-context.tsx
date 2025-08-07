import { createContext } from 'react';

export type LangType = 'ru' | 'saqa';

export interface LangContextType {
	lang: LangType;
	setLang: (lang: LangType) => void;
}

export const LangContext = createContext<LangContextType | null>(null);
