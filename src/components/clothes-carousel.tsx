import { useRef } from 'react';
import * as motion from 'motion/react-client';

export default function ClothesCarousel({ title, items }: { title: string; items: string[] }) {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<h1 className='text-[14px]! mt-[20px] mb-[10px] font-[800]'>{title}</h1>
			<motion.div ref={scrollRef} className='overflow-x-scroll whitespace-nowrap w-full' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
				<div className='flex flex-nowrap gap-[10px] w-max'>
					{items.map((src, idx) => (
						<div className='mt-[20px]'>
							<img key={idx} src={src} className='object-cover w-[150px] h-[270px] rounded-[var(--rounded)] hover:scale-[98%] transition-transform duration-200' alt='' />
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
