export default function HelpButton({ text, image, onClick }: { text: string; image: string; onClick: () => void }) {
	return (
		<button
			className={`flex flex-col items-center border-[1px] border-solid border-[var(--border-color)] rounded-[var(--rounded)] w-full h-[100%] justify-center p-[20px] gap-[20px] bg-[var(--bg-muted)]`}
			onClick={onClick}
		>
			<img className='w-[130px] h-[130px] select-none pointer-events-none' src={image} />
			<p className='leading-[1.2] text-[14px] font-[600] text-[var(--text)]'>{text}</p>
		</button>
	);
}
