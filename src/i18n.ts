import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationSAQA from './locales/saqa/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
	saqa: { translation: translationSAQA },
	ru: { translation: translationRU },
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
