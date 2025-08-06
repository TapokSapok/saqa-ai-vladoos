import { ROUTES } from '../../app/main';
import MyBalance from '../../components/my-balance';
import Title from '../../components/title';
import GreenButton from '../../components/ui/green-button';
import { useTheme } from '../../hooks/use-theme';
import WrapperLayout from '../../layouts/wrapper-layout';

import logo1Png from '../../assets/logo1.png';
import bankaLightPng from '../../assets/banka-light.png';
import bankaPng from '../../assets/banka.png';

export default function BalancePage() {
	const { theme } = useTheme();
	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<img className='rounded-[var(--rounded)] w-[360px] h-[280px]' src={theme === 'light' ? bankaLightPng : bankaPng} />
			</div>

			<div className='mb-[25px] flex justify-center items-center gap-[7px] text-[14px] font-[600] p-[15px] rounded-[var(--rounded)] border-[1px] border-solid border-[var(--border-color)] w-full'>
				Каждая генерация — твой новый шедевр
				<img className='w-[15px] h-[15px]' src={logo1Png} />
			</div>

			<Title
				titleText='Генерация'
				secondText={
					<span>
						Генерации - твоя магия 🎨
						<br />
						Пополняй баланс и твори без ограничений!
					</span>
				}
				route={ROUTES.photo_home}
			/>

			<MyBalance />
			<GreenButton text='Купить генерации' onClick={() => {}} />
		</WrapperLayout>
	);
}
