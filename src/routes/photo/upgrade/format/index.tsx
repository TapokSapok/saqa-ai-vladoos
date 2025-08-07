import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import ImageButton from '../../../../components/ui/image-button';
import { useTheme } from '../../../../hooks/use-theme';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import format1LightPng from '../../../../assets/format/format1-light.png';
import format2LightPng from '../../../../assets/format/format2-light.png';
import format3LightPng from '../../../../assets/format/format3-light.png';
import format4LightPng from '../../../../assets/format/format4-light.png';
import format5LightPng from '../../../../assets/format/format5-light.png';
import format6LightPng from '../../../../assets/format/format6-light.png';
import format7LightPng from '../../../../assets/format/format7-light.png';
import format8LightPng from '../../../../assets/format/format8-light.png';
import format9LightPng from '../../../../assets/format/format9-light.png';

import format1Png from '../../../../assets/format/format1.png';
import format2Png from '../../../../assets/format/format2.png';
import format3Png from '../../../../assets/format/format3.png';
import format4Png from '../../../../assets/format/format4.png';
import format5Png from '../../../../assets/format/format5.png';
import format6Png from '../../../../assets/format/format6.png';
import format7Png from '../../../../assets/format/format7.png';
import format8Png from '../../../../assets/format/format8.png';
import format9Png from '../../../../assets/format/format9.png';
import { useTranslation } from 'react-i18next';

export default function FormatPage() {
	const { theme } = useTheme();
	const { t } = useTranslation();

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div className='w-[98%]'>
				<Title titleText={t('photo.upgrade.format.title')} secondText={t('photo.upgrade.format.desc')} route={ROUTES.photo_upgrade} />
				<div className='grid grid-cols-2 gap-[10px] pt-[30px] ml-[5px]'>
					<ImageButton text='1 x 1' image={theme === 'light' ? format1LightPng : format1Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='2 x 3' image={theme === 'light' ? format2LightPng : format2Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='3 x 2' image={theme === 'light' ? format3LightPng : format3Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='3 x 4' image={theme === 'light' ? format4LightPng : format4Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='4 x 3' image={theme === 'light' ? format5LightPng : format5Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='4 x 5' image={theme === 'light' ? format6LightPng : format6Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='5 x 4' image={theme === 'light' ? format7LightPng : format7Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='9 x 16' image={theme === 'light' ? format8LightPng : format8Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
					<ImageButton text='16 x 9' image={theme === 'light' ? format9LightPng : format9Png} onClick={() => {}} itemsCenter={true} padding={0} gap={15} />
				</div>
			</div>
		</WrapperLayout>
	);
}
