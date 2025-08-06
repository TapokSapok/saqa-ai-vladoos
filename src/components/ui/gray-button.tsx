export default function GrayButton({ text, image, onClick }: { text: string; image?: string; onClick: () => void }) {
	return (
		<button
			className='flex py-[16px] justify-center bg-[#F3F5F6] hover:bg-[#eaeaea] w-[360px] h-[52px] rounded-[var(--rounded)] transition-all hover:transform hover:translate-y-[-5%] gap-[10px] text-[14px]'
			onClick={onClick}
		>
			{image && <img src={image} width={20} height={20} />}
			<p className='text-[var(--text-muted)] font-[600]'>{text}</p>
		</button>
	);
}
