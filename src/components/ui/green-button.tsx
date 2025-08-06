export default function GreenButton({
	text,
	image,
	onClick,
	imgPos = 'left',
	fontSize = 14,
}: {
	text: string;
	image?: string;
	onClick: () => void;
	imgPos?: 'left' | 'right';
	fontSize?: number;
}) {
	return (
		<button
			className='flex py-[16px] justify-center bg-[var(--brand-color)] hover:bg-[var(--brand-color-muted)] w-[360px] h-[52px] rounded-[var(--rounded)] transition-all hover:transform hover:translate-y-[-5%] gap-[10px] text-[14px] leading-1 items-center'
			onClick={onClick}
		>
			{image && imgPos === 'left' && <img src={image} width={20} height={20} />}
			<p
				className='text-white font-[600]'
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{text}
			</p>
			{image && imgPos === 'right' && <img src={image} width={20} height={20} />}
		</button>
	);
}
