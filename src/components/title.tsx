import BackButton from './ui/back-button';

export default function Title({ route, titleText, secondText }: { route: string; titleText: string; secondText: string | React.ReactNode }) {
	return (
		<div className='flex gap-[10px] w-full'>
			<BackButton route={route} />
			<div>
				<h1 className='leading-[20px]'>{titleText}</h1>
				<h2 className='text-[13px] font-[400] mt-[5px] leading-[16px]'>{secondText}</h2>
			</div>
		</div>
	);
}
