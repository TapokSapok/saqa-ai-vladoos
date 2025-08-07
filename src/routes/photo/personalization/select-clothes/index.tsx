import { useState } from 'react';
import { ROUTES } from '../../../../app/main';
import Title from '../../../../components/title';
import Switch from '../../../../components/ui/switch';
import WrapperLayout from '../../../../layouts/wrapper-layout';
import ClothesCarousel from '../../../../components/clothes-carousel';
import { clothes } from './data';
import { useTranslation } from 'react-i18next';

export default function SelectClothesPage() {
	const [gender, setGender] = useState('girl');
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<Title titleText={t('photo.personalization.select_clothes.title')} secondText={t('photo.personalization.select_clothes.desc')} route={ROUTES.photo_personalization} />
			<div className='mt-[20px]'>
				<Switch first={[t('switches.gender.girl'), 'girl']} second={[t('switches.gender.man'), 'man']} selectedValue={gender} setValue={setGender} padding={15} />
			</div>
			<div className='flex flex-col w-full gap-[20px]'>
				{clothes[gender as keyof typeof clothes].map(i => (
					<ClothesCarousel key={i.title} title={i.title} items={i.data} />
				))}
			</div>
		</WrapperLayout>
	);
}
