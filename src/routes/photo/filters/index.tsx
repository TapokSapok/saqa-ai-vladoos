import { useState } from 'react';
import { ROUTES } from '../../../app/main';
import Title from '../../../components/title';
import Switch from '../../../components/ui/switch';
import WrapperLayout from '../../../layouts/wrapper-layout';
import FilterCarousel from '../../../components/filter-carousel';
import { filters } from './data';
import { useTranslation } from 'react-i18next';

export default function FiltersPage() {
	const [gender, setGender] = useState('girl');
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<Title titleText={t('photo.filters.title')} secondText={t('photo.filters.desc')} route={ROUTES.photo_home} />
			<div className='mt-[20px]'>
				<Switch first={[t('switches.gender.girl'), 'girl']} second={[t('switches.gender.man'), 'man']} selectedValue={gender} setValue={setGender} padding={15} />
			</div>
			<div className='mt-[20px] grid grid-cols-2 gap-[15px]'>
				{filters[gender as keyof typeof filters].map((i, index) => (
					<FilterCarousel key={index} title={i.title} images={i.data} desc={i.desc} filter={i.filter} />
				))}
			</div>
		</WrapperLayout>
	);
}
