export default function ImageButton({
	text,
	image,
	onClick,
	imageW,
	imageH,
	itemsCenter = false,
	padding = 15,
	gap = 10,
}: {
	text: string;
	image: string;
	onClick: () => void;
	imageW?: number;
	imageH?: number;
	itemsCenter?: boolean;
	padding?: number;
	gap?: number;
}) {
	return (
		<button
			className={`hover:scale-[98%] hover:bg-[var(--bg-gray-1)] flex flex-col items-center border-[1px] border-solid border-[var(--border-color)] rounded-[var(--rounded)]  min-h-[160px] h-[100%] ${
				itemsCenter ? 'justify-center' : ''
			}`}
			style={{
				padding: `${padding}px`,
				gap: `${gap}px`,
			}}
			onClick={onClick}
		>
			<img className='select-none pointer-events-none' src={image} width={imageW} height={imageH} />
			<p className='leading-[1.2] text-[14px] font-[600] text-[var(--text)]'>{text}</p>
		</button>
	);
}
