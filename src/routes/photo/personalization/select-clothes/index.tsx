import { useRef, useState, type ChangeEvent } from 'react';
import { ROUTES } from '../../../../app/main';
import Title from '../../../../components/title';
import Switch from '../../../../components/ui/switch';
import WrapperLayout from '../../../../layouts/wrapper-layout';
import ClothesCarousel from '../../../../components/clothes-carousel';
import { clothes } from './data';
import { useTranslation } from 'react-i18next';
import GreenButton from '../../../../components/ui/green-button';
import { uploadFile } from '../../../../utils/upload';
import { send } from '../../../../telegram';
import checkmarkSvg from '../../../../assets/checkmark.svg';
import MaskCanvas from '../../../../components/mask-canvas';

export default function SelectClothesPage() {
	const [gender, setGender] = useState('girl');
	const { t, i18n } = useTranslation();
	const [selectedCloth, setSelectedCloth] = useState<string | null>(null);
	const [selectedClothIndex, setSelectedClothIndex] = useState<number | null>(null);
	const [file, setFile] = useState<any>(null);
	const [photo, setPhoto] = useState<any>(null);
	const fileRef = useRef<HTMLInputElement | null>(null);

	function handleSelectPhoto() {
		fileRef.current?.click();
	}

	async function handleFileChange(e: ChangeEvent) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const f = e.target.files?.[0];
		if (f) {
			const link = await uploadFile(f, f.name);
			const url = URL.createObjectURL(f);
			setFile(url);
			setPhoto(link);
		}
		console.log('file uploaded');
	}

	async function handleDone(blob: Blob) {
		const f = new File([blob], 'mask.png', { type: 'image/png' });
		const link = await uploadFile(f, 'mask.png');
		console.log(link);
		send(null, { mask: link, photo: photo, gender: gender === 'girl' ? 'female' : 'male', outfit: selectedClothIndex });

		setPhoto(null);
		setFile(null);
		setSelectedCloth(null);
		setSelectedClothIndex(null);
		if (fileRef.current) fileRef.current.value = '';
	}

	return (
		<WrapperLayout>
			<Title titleText={t('photo.personalization.select_clothes.title')} secondText={t('photo.personalization.select_clothes.desc')} route={ROUTES.photo_personalization} />
			{file && photo ? (
				<div className='mt-[20px] flex flex-col gap-[15px]'>
					<MaskCanvas imageBlobUrl={file} onExportMask={handleDone} />
				</div>
			) : selectedCloth && selectedClothIndex ? (
				<>
					<div className='px-[10px]'>
						<img className='rounded-[var(--rounded)] my-[20px]' src={selectedCloth} />
					</div>
					<GreenButton
						textColor={file ? 'var(--brand-color-dark-text)' : 'white'}
						bgColor={file ? 'var(--brand-color-dark)' : 'var(--brand-color)'}
						image={file ? checkmarkSvg : undefined}
						onClick={handleSelectPhoto}
						text={file ? t('buttons.photo_selected') : t('buttons.select_photo')}
						fontSize={16}
					/>
				</>
			) : (
				<>
					<div className='mt-[20px]'>
						<Switch first={[t('switches.gender.girl'), 'girl']} second={[t('switches.gender.man'), 'man']} selectedValue={gender} setValue={setGender} padding={15} />
					</div>
					<div className='flex flex-col w-full gap-[20px]'>
						{clothes[gender as keyof typeof clothes].map((i, index) => (
							<ClothesCarousel setCloth={setSelectedCloth} setIndex={setSelectedClothIndex} key={index} title={i.title[i18n.language as 'ru' | 'saqa']} items={i.data} />
						))}
					</div>
				</>
			)}
			<input type='file' onChange={handleFileChange} ref={fileRef} accept='*/*' style={{ visibility: 'hidden' }} />
		</WrapperLayout>
	);
}
