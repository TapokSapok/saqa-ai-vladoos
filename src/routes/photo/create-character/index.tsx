import { useTheme } from '../../../hooks/use-theme';
import WrapperLayout from '../../../layouts/wrapper-layout';
import { ROUTES } from '../../../app/main';
import GreenButton from '../../../components/ui/green-button';
import GrayButton from '../../../components/ui/gray-button';
import Title from '../../../components/title';

import agentLightPng from '../../../assets/agent-light.png';
import agentPng from '../../../assets/agent.png';

import imgSvg from '../../../assets/img.svg';
import imgLightSvg from '../../../assets/img-light.svg';
import { useTranslation } from 'react-i18next';
import { send } from '../../../telegram';

export default function CreateCharacterPage() {
	const { theme } = useTheme();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='relative w-[360px] h-[360px] mb-[20px]'>
				<div className='absolute top-[15px] left-[10px] py-[12px] px-[15px] bg-[var(--bg-gray-2)] flex items-center rounded-[var(--rounded)] gap-[5px]'>
					<img src={theme === 'light' ? imgSvg : imgLightSvg} />
					<h1 className='text-[14px]! leading-1'>{t('photo.create_character.photo_count')}</h1>
				</div>
				<img className='rounded-[var(--rounded)]' src={theme === 'light' ? agentLightPng : agentPng} width={360} height={360} />
			</div>
			<Title titleText={t('photo.create_character.title')} secondText={t('photo.create_character.desc')} route={ROUTES.photo_home} />
			<div className='mt-[30px] flex flex-col gap-[15px]'>
				<GreenButton text={t('photo.create_character.btns.create')} onClick={() => send('create_agent')} />
				<GrayButton text={t('photo.create_character.btns.change')} onClick={() => send('change_agent')} />
			</div>
		</WrapperLayout>
	);
}
