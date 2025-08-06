import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import GreenButton from '../../../../components/ui/green-button';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import coinPng from '../../../../assets/coin.png';

export default function ChangeObjectPage() {
	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText='Сменить объект' secondText='Замени что угодно на что угодно' route={ROUTES.photo_upgrade} />
				<div className='mt-[30px] flex flex-col gap-[15px]'>
					<textarea
						className='p-[20px] transition-all w-full h-[320px] rounded-[var(--rounded)] font-[400] text-[14px] border-[2px] border-solid border-[var(--border-color)] resize-none bg-[#7698BB0D] outline-none focus:border-[var(--brand-color)]'
						placeholder='Опишите что хотите увидеть...'
					></textarea>
					<GreenButton onClick={() => {}} text='Выбрать фото' fontSize={16} />
					<GreenButton onClick={() => {}} text='Генерировать - 2' imgPos='right' image={coinPng} fontSize={16} />
				</div>
			</div>
		</WrapperLayout>
	);
}
