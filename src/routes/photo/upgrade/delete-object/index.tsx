import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import GreenButton from '../../../../components/ui/green-button';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import coinPng from '../../../../assets/coin.png';

export default function DeleteObjectPage() {
	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText='Удалить объект' secondText='Удали лишнее с фото' route={ROUTES.photo_upgrade} />
				<div className='mt-[45px] flex flex-col gap-[15px]'>
					<GreenButton onClick={() => {}} text='Выбрать фото' fontSize={16} />
					<GreenButton onClick={() => {}} text='Генерировать - 2' imgPos='right' image={coinPng} fontSize={16} />
				</div>
			</div>
		</WrapperLayout>
	);
}
