import { ROUTES } from '../../app/main';
import MyBalance from '../../components/my-balance';
import Title from '../../components/title';
import { useTheme } from '../../hooks/use-theme';
import WrapperLayout from '../../layouts/wrapper-layout';

import datePng from '../../assets/date.png';
import moonIconPng from '../../assets/icons/moon-stars-svgrepo-com.png';
import sunIconPng from '../../assets/icons/sun.png';
import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div>
				<img className='w-[100px] h-[100px] rounded-[50%] object-cover' src='/exxxiee2.jpg' />
			</div>
			<button className='bg-[var(--bg-inverted)] text-[white] py-[10px] rounded-[var(--rounded)] text-[12px] mt-[5px] font-bold px-[20px] mb-[25px]'>{t('profile.my_id')}</button>

			<Title titleText={t('profile.title')} secondText={t('profile.desc')} route={ROUTES.photo_home} />
			<MyBalance />

			<button className='relative rounded-[var(--rounded)] p-[23px] border-[1px] border-solid border-[var(--border-color)] w-full text-left overflow-hidden'>
				<h1 className='text-[18px]! flex items-center leading-[21px]'>{t('profile.registration.title')}</h1>
				<h2 className='text-[13px] leading-[16px]'>{t('profile.registration.desc')}</h2>
				<img className='absolute w-[132px] h-[125px] top-[0px] right-[0px]' src={datePng} />
			</button>

			<button
				className='w-full mt-[25px] flex justify-center p-[16px] font-[600] text-[14px] text-[#ffffff] gap-[10px] bg-[var(--bg-inverted)] rounded-[var(--rounded)] transition-all hover:transform hover:translate-y-[-5%] hover:rotate-1'
				onClick={toggleTheme}
			>
				<img className='w-[20px] h-[20px]' src={theme === 'light' ? moonIconPng : sunIconPng} />
				{theme === 'light' ? t('profile.change_theme.to_night') : t('profile.change_theme.to_light')}
			</button>
		</WrapperLayout>
	);
}
