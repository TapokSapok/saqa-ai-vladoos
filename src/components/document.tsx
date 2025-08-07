import documentSvg from '../assets/document.svg';
import documentLightSvg from '../assets/document-light.svg';
import { useTheme } from '../hooks/use-theme';

export default function Document({ title, text }: { title: string; text: string }) {
	const { theme } = useTheme();

	return (
		<div className='p-[22px] rounded-[var(--rounded)] border-[1px] border-solid border-[var(--border-color)] mt-[25px] flex flex-col gap-[15px]'>
			<div className='flex gap-[10px]'>
				<img src={theme === 'light' ? documentSvg : documentLightSvg} />
				<h1 className=' font-[800]! text-[14px]!'>{title}</h1>
			</div>
			<h2 dangerouslySetInnerHTML={{ __html: text }} className='text-[12px]' />
		</div>
	);
}
