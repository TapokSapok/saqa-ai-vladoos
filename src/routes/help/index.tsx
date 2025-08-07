import { ROUTES } from '../../app/main';
import Title from '../../components/title';
import HelpButton from '../../components/ui/help-button';
import WrapperLayout from '../../layouts/wrapper-layout';

import manualPng from '../../assets/manual.png';
import supportIconPng from '../../assets/support-icon.png';
import politikaPng from '../../assets/politika.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function HelpPage() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<Title titleText={t('help.title')} secondText={t('help.desc')} route={ROUTES.photo_home} />
			<div className='flex flex-col gap-[10px] mt-[25px] w-[95%]'>
				<div className='flex w-full gap-[10px]'>
					<HelpButton text={t('help.manual.title')} image={manualPng} onClick={() => navigate(ROUTES.manual)} />
					<HelpButton text={t('help.support')} image={supportIconPng} onClick={() => (window.location.href = ROUTES.support_tg)} />
				</div>
				<HelpButton text={t('help.privacy_policy.title')} image={politikaPng} onClick={() => navigate(ROUTES.privacy_policy)} />
			</div>
		</WrapperLayout>
	);
}
