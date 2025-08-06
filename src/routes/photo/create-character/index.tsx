import { useTheme } from '../../../hooks/use-theme';
import WrapperLayout from '../../../layouts/wrapper-layout';
import imgSvg from '../../../assets/img.svg';
import { ROUTES } from '../../../app/main';
import GreenButton from '../../../components/ui/green-button';
import GrayButton from '../../../components/ui/gray-button';
import Title from '../../../components/title';

import agentLightPng from '../../../assets/agent-light.png';
import agentPng from '../../../assets/agent.png';

export default function CreateCharacterPage() {
	const { theme } = useTheme();

	return (
		<WrapperLayout>
			<div className='relative w-[360px] h-[360px] mb-[20px]'>
				<div className='absolute top-[15px] left-[10px] py-[12px] px-[15px] bg-white flex items-center rounded-[var(--rounded)] gap-[5px]'>
					<img src={imgSvg} />
					<h1 className='text-[14px]! leading-1'>25 фотографий</h1>
				</div>
				<img className='rounded-[var(--rounded)]' src={theme === 'light' ? agentLightPng : agentPng} width={360} height={360} />
			</div>
			<Title titleText='Создание персонажа' secondText='Отправьте 25 фото с вашим лицом. Можно по несколько в одном сообщении.' route={ROUTES.photo_home} />
			<div className='mt-[30px] flex flex-col gap-[15px]'>
				<GreenButton text='Создать персонажа' onClick={() => {}} />
				<GrayButton text='Сменить персонажа' onClick={() => {}} />
			</div>
		</WrapperLayout>
	);
}
