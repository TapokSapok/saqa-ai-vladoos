import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import GreenButton from '../../../../components/ui/green-button';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import coinPng from '../../../../assets/coin.png';
import { useTranslation } from 'react-i18next';

export default function DeleteObjectPage() {
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.upgrade.delete_object.title')} secondText={t('photo.upgrade.delete_object.desc')} route={ROUTES.photo_upgrade} />
				<div className='mt-[45px] flex flex-col gap-[15px]'>
					<GreenButton onClick={() => {}} text={t('buttons.select_photo')} fontSize={16} />
					<GreenButton onClick={() => {}} text='Генерировать - 2' imgPos='right' image={coinPng} fontSize={16} />
				</div>
			</div>
		</WrapperLayout>
	);
}
