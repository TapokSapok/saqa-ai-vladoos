import { ROUTES } from '../../app/main';
import Title from '../../components/title';
import WrapperLayout from '../../layouts/wrapper-layout';

import localizationImageLightPng from '../../assets/local-light.png';
import localizationImagePng from '../../assets/local.png';
import { useTheme } from '../../hooks/use-theme';
import Switch from '../../components/ui/switch';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../hooks/use-lang';

export default function LocalizationPage() {
	const { theme } = useTheme();
	const { t, i18n } = useTranslation();
	const { lang, setLang } = useLang();

	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [lang]);

	return (
		<WrapperLayout>
			<Title titleText={t('localization.title')} secondText={t('localization.desc')} route={ROUTES.photo_home} />
			<div className='w-full mt-[20px]'>
				<Switch first={['Русский', 'ru']} second={['Якутский', 'saqa']} selectedValue={lang} setValue={setLang} />
			</div>
			<div className='mt-[85px]'>
				<img className='w-[360px] h-[360px]' src={theme === 'light' ? localizationImageLightPng : localizationImagePng} alt='localization' />
			</div>
		</WrapperLayout>
	);
}
