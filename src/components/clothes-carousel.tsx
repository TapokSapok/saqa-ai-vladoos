import { useRef } from 'react';
import * as motion from 'motion/react-client';

export default function ClothesCarousel({
	title,
	items,
	setCloth,
	setIndex,
}: {
	title: string;
	items: [string, number][];
	setCloth: (cloth: string) => void;
	setIndex: (n: number) => void;
}) {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<h1 className='text-[14px]! mt-[20px] mb-[10px] font-[800]'>{title}</h1>
			<motion.div ref={scrollRef} className='overflow-x-scroll whitespace-nowrap w-full' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
				<div className='flex flex-nowrap gap-[10px] w-max'>
					{items.map((i, idx) => (
						<button
							className='mt-[20px]'
							onClick={() => {
								setCloth(i[0]);
								setIndex(i[1]);
							}}
						>
							<img key={idx} src={i[0]} className='object-cover w-[150px] h-[270px] rounded-[var(--rounded)] hover:scale-[98%] transition-transform duration-200' alt='' />
						</button>
					))}
				</div>
			</motion.div>
		</div>
	);
}
