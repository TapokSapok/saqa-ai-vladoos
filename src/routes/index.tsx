import { useNavigate } from 'react-router-dom';
import GreenButton from '../components/ui/green-button';
import WrapperLayout from '../layouts/wrapper-layout';
import { ROUTES } from '../app/main';

import helloImagePng from '../assets/hello-image.png';
import imageBtnPng from '../assets/icons/image-btn.png';

export default function HomePage() {
	const navigate = useNavigate();

	return (
		<WrapperLayout>
			<div className='flex justify-center h-[337px]'>
				<img src={helloImagePng} width={333} height={333} className='h-[333px]' />
			</div>
			<div className='mt-[30px] mb-[55px]'>
				<h1 className='text-center font-bold! text-[18px]! p-0! m-0! leading-[21px]'>Привет!</h1>
				<h2 className='mt-[10px] text-[14px] max-w-[400px] leading-[17px]'>
					Saqa AI — Твоя <span className='text-[var(--brand-color)]'>персональная</span> фотостудия в телефоне
				</h2>
			</div>
			<div>
				<GreenButton text='Создать фото' image={imageBtnPng} onClick={() => navigate(ROUTES.photo_home)} />
			</div>
		</WrapperLayout>
	);
}
