import { useContext } from 'react';
import { LangContext, type LangContextType } from '../contexts/lang-context';

export function useLang(): LangContextType {
	const context = useContext(LangContext);
	if (!context) throw new Error('useLang not implement LangProvider');
	return context;
}
