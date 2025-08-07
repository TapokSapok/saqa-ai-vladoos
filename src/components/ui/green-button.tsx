export default function GreenButton({
	text,
	image,
	onClick,
	imgPos = 'left',
	fontSize = 14,
	bgColor = 'var(--brand-color)',
	textColor = 'white',
	disabled = false,
}: {
	text: string;
	image?: string;
	onClick: () => void;
	imgPos?: 'left' | 'right';
	fontSize?: number;
	bgColor?: string;
	textColor?: string;
	disabled?: boolean;
}) {
	return (
		<button
			className='flex py-[16px] justify-center hover:bg-[var(--brand-color-muted)] w-[360px] h-[52px] rounded-[var(--rounded)] transition-all hover:transform hover:translate-y-[-5%] gap-[10px] text-[14px] leading-1 items-center disabled:opacity-50 disabled:pointer-events-none'
			onClick={onClick}
			disabled={disabled}
			style={{
				background: bgColor,
			}}
		>
			{image && imgPos === 'left' && <img src={image} width={20} height={20} />}
			<p
				className='font-[600]'
				style={{
					fontSize: `${fontSize}px`,
					color: textColor,
				}}
			>
				{text}
			</p>
			{image && imgPos === 'right' && <img src={image} width={20} height={20} />}
		</button>
	);
}
