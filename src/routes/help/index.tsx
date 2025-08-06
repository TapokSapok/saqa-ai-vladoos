import { ROUTES } from '../../app/main';
import Title from '../../components/title';
import HelpButton from '../../components/ui/help-button';
import WrapperLayout from '../../layouts/wrapper-layout';

import manualPng from '../../assets/manual.png';
import supportIconPng from '../../assets/support-icon.png';
import politikaPng from '../../assets/politika.png';

export default function HelpPage() {
	return (
		<WrapperLayout>
			<Title titleText='Рекомендации и помощь' secondText='Поддержка всегда рядом — советы, помощь и ответы на вопросы.' route={ROUTES.photo_home} />
			<div className='flex flex-col gap-[10px] mt-[25px] w-[95%]'>
				<div className='flex w-full gap-[10px]'>
					<HelpButton text='Инструкция' image={manualPng} onClick={() => {}} />
					<HelpButton text='Тех.Поддержка' image={supportIconPng} onClick={() => {}} />
				</div>
				<HelpButton text='Политика конфиденциальности' image={politikaPng} onClick={() => {}} />
			</div>
		</WrapperLayout>
	);
}
