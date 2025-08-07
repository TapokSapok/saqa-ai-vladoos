import { ROUTES } from '../../../app/main';
import AdsBanner from '../../../components/ads-banner';
import Title from '../../../components/title';
import ImageButton from '../../../components/ui/image-button';
import WrapperLayout from '../../../layouts/wrapper-layout';

import prs1Png from '../../../assets/personalization/presonalization-img1.png';
import prs2Png from '../../../assets/personalization/presonalization-img2.png';
import prs3Png from '../../../assets/personalization/presonalization-img3.png';
import prs4Png from '../../../assets/personalization/presonalization-img4.png';
import prs5Png from '../../../assets/personalization/presonalization-img5.png';
import prs6Png from '../../../assets/personalization/presonalization-img6.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PersonalizationPage() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.personalization.title')} secondText={t('photo.personalization.desc')} route={ROUTES.photo_home} />
				<div className='grid grid-cols-2 gap-[15px] py-[20px] ml-[5px] px-[10px]'>
					<ImageButton
						text={t('photo.personalization.btns.clothes')}
						image={prs1Png}
						imageH={90}
						imageW={90}
						onClick={() => navigate(ROUTES.photo_select_clothes + '?type=clothes')}
					/>
					<ImageButton text={t('photo.personalization.btns.hats')} image={prs2Png} imageH={90} imageW={90} onClick={() => navigate(ROUTES.photo_select_clothes + '?type=hats')} />
					<ImageButton
						text={t('photo.personalization.btns.hairstyles')}
						image={prs3Png}
						imageH={90}
						imageW={90}
						onClick={() => navigate(ROUTES.photo_select_clothes + '?type=hairstyles')}
					/>
					<ImageButton text={t('photo.personalization.btns.shoes')} image={prs4Png} imageH={90} imageW={90} onClick={() => navigate(ROUTES.photo_select_clothes + '?type=shoes')} />
					<ImageButton
						text={t('photo.personalization.btns.jewelry')}
						image={prs5Png}
						imageH={90}
						imageW={90}
						onClick={() => navigate(ROUTES.photo_select_clothes + '?type=jewelry')}
					/>
					<ImageButton
						text={t('photo.personalization.btns.makeup')}
						image={prs6Png}
						imageH={90}
						imageW={90}
						onClick={() => navigate(ROUTES.photo_select_clothes + '?type=makeup')}
					/>
				</div>
			</div>
		</WrapperLayout>
	);
}
