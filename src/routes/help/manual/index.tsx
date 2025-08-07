import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../../app/main';
import Document from '../../../components/document';
import Title from '../../../components/title';
import WrapperLayout from '../../../layouts/wrapper-layout';

import manualText from '../../../manual.txt?raw';

export default function ManualPage() {
	const { t } = useTranslation();
	return (
		<WrapperLayout>
			<Title titleText={t('help.manual.title')} secondText={t('help.manual.desc')} route={ROUTES.help} />
			<Document title={t('help.manual.title')} text={manualText} />
		</WrapperLayout>
	);
}
