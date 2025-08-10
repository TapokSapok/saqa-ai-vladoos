export default function BigButton({ text, onClick }: { text: string; onClick: () => void }) {
	return (
		<button
			className='text-[var(--text)] w-full font-[600] text-center text-[14px] border-[1px] border-solid border-[var(--border-color)] rounded-[var(--rounded)] h-[89px] leading-[19px] hover:scale-[98%] hover:bg-[var(--bg-gray-1)] active:translate-y-[-4px]'
			onClick={onClick}
		>
			{text}
		</button>
	);
}
