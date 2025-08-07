import { useState } from 'react';

export default function Switch({
	selectedValue,
	first,
	second,
	setValue,
	padding = 17,
}: {
	selectedValue: string;
	first: [string, string];
	second: [string, string];
	setValue: (val: (typeof first)[1] | (typeof second)[1]) => void;
	padding?: number;
}) {
	const [hoveredValue, setHoveredValue] = useState<string | null>(null);

	let translateX = '0%';

	if (selectedValue === first[1]) {
		if (hoveredValue === second[1]) {
			translateX = '10%';
		} else {
			translateX = '0%';
		}
	} else {
		if (hoveredValue === first[1]) {
			translateX = '90%';
		} else {
			translateX = '100%';
		}
	}

	return (
		<div className='relative w-[360px] rounded-[var(--rounded)] overflow-hidden border-[1px] border-solid border-[var(--border-color)] flex'>
			<button
				className='z-[1] leading-[21px] w-full relative text-[14px] font-[500] text-[var(--text-muted)]'
				onClick={() => setValue(first[1])}
				onMouseEnter={() => setHoveredValue(first[1])}
				onMouseLeave={() => setHoveredValue(null)}
				style={{
					color: selectedValue === first[1] ? 'white' : 'var(--text-muted)',
					fontWeight: selectedValue === first[1] ? '700' : '400',
					padding: `${padding}px`,
				}}
			>
				{first[0]}
			</button>
			<button
				className='z-[1] leading-[21px] w-full relative text-[14px] font-[500] text-[var(--text-muted)]'
				onClick={() => setValue(second[1])}
				onMouseEnter={() => setHoveredValue(second[1])}
				onMouseLeave={() => setHoveredValue(null)}
				style={{
					color: selectedValue === second[1] ? 'white' : 'var(--text-muted)',
					fontWeight: selectedValue === second[1] ? '700' : '400',
					padding: `${padding}px`,
				}}
			>
				{second[0]}
			</button>
			<div
				className='absolute z-0 top-0 h-full w-1/2 bg-[var(--brand-color)] transition-transform duration-300 rounded-[var(--rounded)]'
				style={{
					transform: `translateX(${translateX})`,
				}}
			></div>
		</div>
	);
}
