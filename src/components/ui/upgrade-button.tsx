export default function UpgradeButton({ text, image, onClick, size }: { text: string; image: string; onClick: () => void; size: 'big' | 'small' }) {
	const sizes = {
		small: `w-[120px] h-[120px] object-contain mb-[15px] select-none pointer-events-none`,
		big: `w-[160px] h-[160px] object-contain mb-[15px] select-none pointer-events-none`,
	};

	return (
		<button
			className='flex flex-col justify-center items-center border-[1px] border-solid border-[var(--border-color)] rounded-[var(--rounded)] py-[35px] h-[219px]'
			onClick={onClick}
		>
			<div className='w-[130px] h-[130px] flex items-center justify-center'>
				<img src={image} className={sizes[size]} />
			</div>
			<p className='leading-[1.2] text-[14px] font-[600] text-[var(--text)]'>{text}</p>
		</button>
	);
}
