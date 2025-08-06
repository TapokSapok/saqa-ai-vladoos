import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../app/main';
import AdsBanner from '../../components/ads-banner';
import BigButton from '../../components/ui/big-button';
import WrapperLayout from '../../layouts/wrapper-layout';
import Title from '../../components/title';

export default function PhotoHomePage() {
	const navigate = useNavigate();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText='Центр управления фото' secondText='Все инструменты для твоих фото — в одном месте.' route={ROUTES.home} />
				<div className='grid grid-cols-2 gap-[10px] mt-[30px]'>
					<BigButton text='Создать персонажа' onClick={() => navigate(ROUTES.photo_create_character)} />
					<BigButton text='Фото-мастерская' onClick={() => navigate(ROUTES.photo_upgrade)} />
					<BigButton text='Гардероб' onClick={() => navigate(ROUTES.photo_personalization)} />
					<BigButton text='Фильтры' onClick={() => navigate(ROUTES.photo_create_character)} />
					<BigButton text='Мой профиль' onClick={() => navigate(ROUTES.profile)} />
					<BigButton text='Купить генерации' onClick={() => navigate(ROUTES.balance)} />
					<BigButton text='Язык интерфейса' onClick={() => navigate(ROUTES.photo_create_character)} />
					<BigButton text='Помощь' onClick={() => navigate(ROUTES.help)} />
				</div>
			</div>
		</WrapperLayout>
	);
}
