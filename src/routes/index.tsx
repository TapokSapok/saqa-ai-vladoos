import { useNavigate } from 'react-router-dom';
import GreenButton from '../components/ui/green-button';
import WrapperLayout from '../layouts/wrapper-layout';
import { ROUTES } from '../app/main';

import helloImagePng from '../assets/hello-image.png';
import imageBtnPng from '../assets/icons/image-btn.png';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<WrapperLayout>
			<div className='flex justify-center h-[337px]'>
				<img src={helloImagePng} width={333} height={333} className='h-[333px]' />
			</div>
			<div className='mt-[30px] mb-[55px]'>
				<h1 className='text-center font-bold! text-[18px]! p-0! m-0! leading-[21px]'>{t('home.title')}</h1>
				<h2 className='mt-[10px] text-[14px] max-w-[400px] leading-[17px]'>
					{t('home.desc1')} <span className='text-[var(--brand-color)]'>{t('home.desc2')}</span> {t('home.desc3')}
				</h2>
			</div>
			<div>
				<GreenButton text={t('home.button')} image={imageBtnPng} onClick={() => navigate(ROUTES.photo_home)} />
			</div>
		</WrapperLayout>
	);
}
