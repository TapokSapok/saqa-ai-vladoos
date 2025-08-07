import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../app/main';
import AdsBanner from '../../components/ads-banner';
import BigButton from '../../components/ui/big-button';
import WrapperLayout from '../../layouts/wrapper-layout';
import Title from '../../components/title';
import { useTranslation } from 'react-i18next';

export default function PhotoHomePage() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.title')} secondText={t('photo.desc')} route={ROUTES.home} />
				<div className='grid grid-cols-2 gap-[10px] mt-[30px]'>
					<BigButton text={t('photo.btns.create_character')} onClick={() => navigate(ROUTES.photo_create_character)} />
					<BigButton text={t('photo.btns.photo_upgrade')} onClick={() => navigate(ROUTES.photo_upgrade)} />
					<BigButton text={t('photo.btns.personalization')} onClick={() => navigate(ROUTES.photo_personalization)} />
					<BigButton text={t('photo.btns.filters')} onClick={() => navigate(ROUTES.photo_filters)} />
					<BigButton text={t('photo.btns.my_profile')} onClick={() => navigate(ROUTES.profile)} />
					<BigButton text={t('photo.btns.donate')} onClick={() => navigate(ROUTES.balance)} />
					<BigButton text={t('photo.btns.localization')} onClick={() => navigate(ROUTES.localization)} />
					<BigButton text={t('photo.btns.help')} onClick={() => navigate(ROUTES.help)} />
				</div>
			</div>
		</WrapperLayout>
	);
}
