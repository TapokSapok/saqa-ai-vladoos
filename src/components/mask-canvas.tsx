import { useEffect, useRef, useState } from 'react';
import GreenButton from './ui/green-button';
import { t } from 'i18next';
import brushPng from '../assets/icons/brush.png';
import eraserPng from '../assets/icons/eraser.png';

const brushColor = 'rgba(0, 255, 200, 1)';

type Props = {
	imageBlobUrl: string;
	onExportMask: (blob: Blob) => void;
};

type Point = {
	x: number;
	y: number;
};

export default function MaskCanvas({ imageBlobUrl, onExportMask }: Props) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const isDrawing = useRef(false);
	const points = useRef<Point[]>([]);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [brushSize, setBrushSize] = useState(40);
	const [hand, setHand] = useState<'brush' | 'erase'>('brush');

	const [ready, setReady] = useState(false);

	useEffect(() => {
		const img = imageRef.current;
		const canvas = canvasRef.current;

		if (!img || !canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			setReady(true);
		};
	}, [imageBlobUrl]);

	const getPos = (e: React.MouseEvent | React.TouchEvent): Point => {
		const canvas = canvasRef.current!;
		const rect = canvas.getBoundingClientRect();

		if ('touches' in e) {
			const touch = e.touches[0];
			return {
				x: touch.clientX - rect.left,
				y: touch.clientY - rect.top,
			};
		} else {
			return {
				x: e.nativeEvent.offsetX,
				y: e.nativeEvent.offsetY,
			};
		}
	};

	const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
		e.preventDefault();
		isDrawing.current = true;
		points.current = [getPos(e)];
	};

	const draw = (e: React.MouseEvent | React.TouchEvent) => {
		if (!isDrawing.current) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const pos = getPos(e);
		points.current.push(pos);

		if (points.current.length < 2) return;

		if (hand === 'brush') {
			ctx.globalCompositeOperation = 'source-over';
			ctx.strokeStyle = brushColor;
		} else if (hand === 'erase') {
			ctx.globalCompositeOperation = 'destination-out';
			ctx.strokeStyle = 'rgba(0,0,0,1)';
		}

		ctx.strokeStyle = brushColor;
		ctx.lineWidth = brushSize;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.beginPath();
		ctx.moveTo(points.current[0].x, points.current[0].y);
		for (let i = 1; i < points.current.length; i++) {
			ctx.lineTo(points.current[i].x, points.current[i].y);
		}
		ctx.stroke();
	};

	const stopDraw = () => {
		isDrawing.current = false;
		points.current = [];
	};

	const exportMask = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const maskCanvas = document.createElement('canvas');
		const maskCtx = maskCanvas.getContext('2d');
		if (!maskCtx) return;

		maskCanvas.width = canvas.width;
		maskCanvas.height = canvas.height;

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			const alpha = data[i + 3];
			const isMarked = alpha > 0;
			data[i] = data[i + 1] = data[i + 2] = isMarked ? 255 : 0;
			data[i + 3] = 255;
		}

		maskCtx.putImageData(imageData, 0, 0);
		maskCanvas.toBlob(blob => {
			if (blob) onExportMask(blob);
		}, 'image/png');
	};

	return (
		<div className=' flex flex-col gap-[15px] justify-center items-center '>
			<div className='flex gap-[15px] w-full'>
				<button
					className='bg-[var(--bg-inverted)] w-[50px] h-[50px] flex items-center justify-center rounded-[var(--rounded)] border-2 border-solid'
					onClick={() => setHand('brush')}
					style={{
						borderColor: hand === 'brush' ? 'var(--brand-color)' : 'var(--bg-gray-1)',
					}}
				>
					<img src={brushPng} />
				</button>
				<button
					className='bg-[var(--bg-inverted)] w-[50px] h-[50px] flex items-center justify-center rounded-[var(--rounded)] border-2 border-solid'
					onClick={() => setHand('erase')}
					style={{ borderColor: hand === 'erase' ? 'var(--brand-color)' : 'var(--bg-gray-1)' }}
				>
					<img src={eraserPng} />
				</button>
			</div>
			<div className='relative border-2 border-solid border-[var(--border-color)] rounded-[15px]'>
				<img className='rounded-[15px] object-cover block w-[360px] h-[490px]' ref={imageRef} src={imageBlobUrl} alt='original' />
				<canvas
					ref={canvasRef}
					className='absolute top-0 left-0 rounded-[15px]'
					style={{ touchAction: 'none', opacity: '40%' }}
					onMouseDown={startDraw}
					onMouseMove={draw}
					onMouseUp={stopDraw}
					onMouseLeave={stopDraw}
					onTouchStart={startDraw}
					onTouchMove={draw}
					onTouchEnd={stopDraw}
				/>
			</div>
			{ready && <GreenButton onClick={exportMask} text={`${t('buttons.done')}`} fontSize={16} />}
		</div>
	);
}
