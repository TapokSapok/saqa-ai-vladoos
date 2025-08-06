import { ROUTES } from '../../../app/main';
import Document from '../../../components/document';
import Title from '../../../components/title';
import WrapperLayout from '../../../layouts/wrapper-layout';

import privacyPolicyText from '../../../privacy-policy.txt?raw';

export default function PrivacyPolicyPage() {
	return (
		<WrapperLayout>
			<Title titleText='Политика конфиденциальности' secondText='Просто о защите твоих данных' route={ROUTES.help} />
			<Document title='Политика конфиденциальности' text={privacyPolicyText} />
		</WrapperLayout>
	);
}
