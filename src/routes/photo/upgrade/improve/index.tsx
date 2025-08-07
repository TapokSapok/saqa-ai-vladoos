import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import GreenButton from '../../../../components/ui/green-button';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import coinPng from '../../../../assets/coin.png';
import { useTranslation } from 'react-i18next';
import { send } from '../../../../telegram';

export default function ImprovePhotoPage() {
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.upgrade.improve.title')} secondText={t('photo.upgrade.improve.desc')} route={ROUTES.photo_upgrade} />
				<div className='mt-[45px]'>
					<GreenButton onClick={() => send('enhance_photo')} text={`${t('buttons.generate')} - 2`} imgPos='right' image={coinPng} fontSize={16} />
				</div>
			</div>
		</WrapperLayout>
	);
}
