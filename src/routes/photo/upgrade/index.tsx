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

export default function UpgradePage() {
	const navigate = useNavigate();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText='Фото мастерская' secondText='Редактируйте фото за секунды — легко и удобно!' route={ROUTES.photo_home} />
				<div className='grid grid-cols-2 gap-[10px] pt-[30px] ml-[5px]'>
					<UpgradeButton text='Улучшить фото' image={upgrade1Png} size='small' onClick={() => navigate(ROUTES.photo_improve)} />
					<UpgradeButton text='Увеличить фото' image={upgrade2Png} size='small' onClick={() => navigate(ROUTES.photo_format)} />
					<UpgradeButton text='Удалить объект' image={upgrade3Png} size='big' onClick={() => navigate(ROUTES.photo_delete_object)} />
					<UpgradeButton text='Сменить объект' image={upgrade4Png} size='big' onClick={() => navigate(ROUTES.photo_change_object)} />
					<UpgradeButton text='Оживить фото' image={upgrade5Png} size='big' onClick={() => {}} />
				</div>
			</div>
		</WrapperLayout>
	);
}
