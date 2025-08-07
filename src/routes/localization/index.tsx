import { ROUTES } from '../../app/main';
import Title from '../../components/title';
import WrapperLayout from '../../layouts/wrapper-layout';

import localizationImageLightPng from '../../assets/local-light.png';
import localizationImagePng from '../../assets/local.png';
import { useTheme } from '../../hooks/use-theme';
import Switch from '../../components/ui/switch';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LocalizationPage() {
	const { theme } = useTheme();
	const [language, setLanguage] = useState('ru');
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	return (
		<WrapperLayout>
			<Title titleText={t('localization.title')} secondText={t('localization.desc')} route={ROUTES.photo_home} />
			<div className='w-full mt-[20px]'>
				<Switch first={['Русский', 'ru']} second={['Якутский', 'saqa']} selectedValue={language} setValue={setLanguage} />
			</div>
			<div className='mt-[85px]'>
				<img className='w-[360px] h-[360px]' src={theme === 'light' ? localizationImageLightPng : localizationImagePng} alt='localization' />
			</div>
		</WrapperLayout>
	);
}
