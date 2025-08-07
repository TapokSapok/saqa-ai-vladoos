import { useState } from 'react';

import coinPng from '../assets/coin.png';
import { useTranslation } from 'react-i18next';
import { send } from '../telegram';

export default function FilterCarousel({ title, images, desc, filter }: { images: string[]; title: string; desc?: string; filter: string }) {
	const [isHovered, setIsHovered] = useState(false);
	const { t } = useTranslation();

	return (
		<div className='relative rounded-[var(--rounded)] h-[235px] w-[175px] cursor-default' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div
				className='w-full h-full rounded-[var(--rounded)]'
				style={{
					backgroundImage: `url(${images[0]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center 0%',
					filter: isHovered ? 'blur(4px)' : 'none',
				}}
			/>
			<div
				className='absolute select-none w-[80%] bottom-[70px] left-[50%] translate-x-[-50%] p-[10px] text-[white] text-[12px] text-center leading-[1.4]'
				style={{
					scale: isHovered ? 1 : 1.2,
					opacity: isHovered ? 1 : 0,
				}}
			>
				{desc}
			</div>

			<button
				className='absolute flex items-center gap-[7px] py-[5px] px-[15px] leading-[24px] text-[12px] font-[500] rounded-[8px] bottom-[15px] left-[50%] translate-x-[-50%] text-nowrap'
				style={{
					background: isHovered ? 'var(--brand-color)' : 'rgba(255,255,255,0.9)',
					color: isHovered ? 'white' : 'black',
					paddingRight: isHovered ? '25px' : undefined,
				}}
				onClick={() => send('generate_photo', { filter })}
			>
				{isHovered ? `${t('buttons.generate')} - 1` : title}
				{isHovered && <img className='w-[18px] h-[18px]' src={coinPng} />}
			</button>
		</div>
	);
}
