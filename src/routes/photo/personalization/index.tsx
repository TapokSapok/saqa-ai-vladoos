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

export default function PersonalizationPage() {
	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText='Персонализация образа' secondText='Меняйте стиль и образы на фото — быстро и весело!' route={ROUTES.photo_home} />
				<div className='grid grid-cols-2 gap-[15px] py-[20px] ml-[5px] px-[10px]'>
					<ImageButton text='Одежда' image={prs1Png} imageH={90} imageW={90} onClick={() => {}} />
					<ImageButton text='Головные уборы' image={prs2Png} imageH={90} imageW={90} onClick={() => {}} />
					<ImageButton text='Прически' image={prs3Png} imageH={90} imageW={90} onClick={() => {}} />
					<ImageButton text='Обувь' image={prs4Png} imageH={90} imageW={90} onClick={() => {}} />
					<ImageButton text='Украшения' image={prs5Png} imageH={90} imageW={90} onClick={() => {}} />
					<ImageButton text='Макияж' image={prs6Png} imageH={90} imageW={90} onClick={() => {}} />
				</div>
			</div>
		</WrapperLayout>
	);
}
