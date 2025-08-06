import type { PropsWithChildren } from 'react';

export default function WrapperLayout({ children }: PropsWithChildren) {
	return (
		<div className='w-[100vw] h-[100vh]'>
			<div className='py-[50px]'>
				<main className='flex flex-col justify-center items-center w-[372px] mx-auto'>{children}</main>
			</div>
		</div>
	);
}
