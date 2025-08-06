export default function BigButton({ text, onClick }: { text: string; onClick: () => void }) {
	return (
		<button
			className='text-[var(--text)] w-full font-[600] text-center text-[14px] py-[35px] border-[1px] border-solid border-[var(--border-color)] rounded-[var(--rounded)] h-[89px] leading-1'
			onClick={onClick}
		>
			{text}
		</button>
	);
}
