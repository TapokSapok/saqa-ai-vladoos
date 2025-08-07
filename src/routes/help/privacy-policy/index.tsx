import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../../app/main';
import Document from '../../../components/document';
import Title from '../../../components/title';
import WrapperLayout from '../../../layouts/wrapper-layout';

import privacyPolicyText from '../../../privacy-policy.txt?raw';

export default function PrivacyPolicyPage() {
	const { t } = useTranslation();
	return (
		<WrapperLayout>
			<Title titleText={t('help.privacy_policy.title')} secondText={t('help.privacy_policy.desc')} route={ROUTES.help} />
			<Document title={t('help.privacy_policy.title')} text={privacyPolicyText} />
		</WrapperLayout>
	);
}
