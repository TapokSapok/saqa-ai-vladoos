import { ROUTES } from '../../../../app/main';
import AdsBanner from '../../../../components/ads-banner';
import Title from '../../../../components/title';
import GreenButton from '../../../../components/ui/green-button';
import WrapperLayout from '../../../../layouts/wrapper-layout';

import coinPng from '../../../../assets/coin.png';
import { useTranslation } from 'react-i18next';
import { useRef, useState, type ChangeEvent } from 'react';

import checkmarkSvg from '../../../../assets/checkmark.svg';
import { uploadFile } from '../../../../utils/upload';
import MaskCanvas from '../../../../components/mask-canvas';
import { send } from '../../../../telegram';
import { useNavigate } from 'react-router-dom';

export default function DeleteObjectPage() {
	const { t } = useTranslation();
	const fileRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<any>(null);
	const [photo, setPhoto] = useState<any>(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const navigate = useNavigate();

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
			console.log(link);
		}
	}

	async function handleDone(blob: Blob) {
		const f = new File([blob], 'mask.png', { type: 'image/png' });
		const link = await uploadFile(f, 'mask.png');
		console.log(link);
		send('erase_object', { mask: link, photo: photo });
		navigate(ROUTES.photo_upgrade);
	}

	return (
		<WrapperLayout>
			<div className='mb-[20px]'>
				<AdsBanner />
			</div>
			<div>
				<Title titleText={t('photo.upgrade.delete_object.title')} secondText={t('photo.upgrade.delete_object.desc')} route={ROUTES.photo_upgrade} />
				{!file || !isProcessing ? (
					<div className='mt-[20px] flex flex-col gap-[15px]'>
						<GreenButton
							textColor={file ? 'var(--brand-color-dark-text)' : 'white'}
							bgColor={file ? 'var(--brand-color-dark)' : 'var(--brand-color)'}
							image={file ? checkmarkSvg : undefined}
							onClick={handleSelectPhoto}
							text={file ? t('buttons.photo_selected') : t('buttons.select_photo')}
							fontSize={16}
						/>
						<GreenButton onClick={() => setIsProcessing(true)} text={`${t('buttons.generate')} - 2`} imgPos='right' image={coinPng} fontSize={16} />
					</div>
				) : (
					<div className='mt-[45px] flex flex-col gap-[15px]'>
						<MaskCanvas imageBlobUrl={file} onExportMask={handleDone} />
					</div>
				)}
			</div>
			<input type='file' onChange={handleFileChange} ref={fileRef} accept='*/*' style={{ visibility: 'hidden' }} />
		</WrapperLayout>
	);
}
