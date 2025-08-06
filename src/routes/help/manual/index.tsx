import { ROUTES } from '../../../app/main';
import Document from '../../../components/document';
import Title from '../../../components/title';
import WrapperLayout from '../../../layouts/wrapper-layout';

import manualText from '../../../manual.txt?raw';

export default function ManualPage() {
	return (
		<WrapperLayout>
			<Title titleText='Инструкция' secondText='Как пользоваться сервисом за 1 минуту' route={ROUTES.help} />
			<Document title='Инструкция' text={manualText} />
		</WrapperLayout>
	);
}
