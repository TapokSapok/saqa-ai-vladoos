import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../app/main';
import AdsBanner from '../../../components/ads-banner';
import UpgradeButton from '../../../components/ui/upgrade-button';
import WrapperLayout from '../../../layouts/wrapper-layout';
import Title from '../../../components/title';

import upgrade1Png from '../../../assets/upgrade/upgrade1.png';
import upgrade2Png from '../../../assets/upgrade/upgrade2.png';
import upgrade3Png from '../../../assets/upgrade/upgrade3.png';
import upgrade4Png from '../../../assets/upgrade/upgrade4.png';
import upgrade5Png from '../../../assets/upgrade/upgrade5.png';
import { useTranslation } from 'react-i18next';

export default function UpgradePage() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.upgrade.title')} secondText={t('photo.upgrade.desc')} route={ROUTES.photo_home} />
				<div className='grid grid-cols-2 gap-[10px] pt-[30px] ml-[5px]'>
					<UpgradeButton text={t('photo.upgrade.btns.improve')} image={upgrade1Png} size='small' onClick={() => navigate(ROUTES.photo_improve)} />
					<UpgradeButton text={t('photo.upgrade.btns.increase')} image={upgrade2Png} size='small' onClick={() => navigate(ROUTES.photo_format)} />
					<UpgradeButton text={t('photo.upgrade.btns.delete')} image={upgrade3Png} size='big' onClick={() => navigate(ROUTES.photo_delete_object)} />
					<UpgradeButton text={t('photo.upgrade.btns.change')} image={upgrade4Png} size='big' onClick={() => navigate(ROUTES.photo_change_object)} />
					<UpgradeButton text={t('photo.upgrade.btns.revive')} image={upgrade5Png} size='big' onClick={() => {}} />
				</div>
			</div>
		</WrapperLayout>
	);
}
