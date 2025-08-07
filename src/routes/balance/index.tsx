import { ROUTES } from '../../app/main';
import MyBalance from '../../components/my-balance';
import Title from '../../components/title';
import GreenButton from '../../components/ui/green-button';
import { useTheme } from '../../hooks/use-theme';
import WrapperLayout from '../../layouts/wrapper-layout';

import logo1Png from '../../assets/logo1.png';
import bankaLightPng from '../../assets/banka-light.png';
import bankaPng from '../../assets/banka.png';
import { useTranslation } from 'react-i18next';

export default function BalancePage() {
	const { theme } = useTheme();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<img className='rounded-[var(--rounded)] w-[360px] h-[280px]' src={theme === 'light' ? bankaLightPng : bankaPng} />
			</div>

			<div className='mb-[25px] flex justify-center items-center gap-[7px] text-[14px] font-[600] p-[15px] rounded-[var(--rounded)] border-[1px] border-solid border-[var(--border-color)] w-full text-[var(--text)]'>
				{t('balance.masterpiece')}
				<img className='w-[15px] h-[15px]' src={logo1Png} />
			</div>

			<Title
				titleText={t('balance.title')}
				secondText={
					<span>
						{t('balance.desc1')}
						<br />
						{t('balance.desc2')}
					</span>
				}
				route={ROUTES.photo_home}
			/>

			<MyBalance />
			<GreenButton text={t('balance.buy_button')} onClick={() => {}} />
		</WrapperLayout>
	);
}
