import logo1Png from '../assets/logo1.png';
import moneyPng from '../assets/money.png';

export default function MyBalance() {
	return (
		<button className='relative my-[20px] rounded-[var(--rounded)] p-[23px] border-[1px] border-solid border-[var(--border-color)] w-full text-left'>
			<h1 className='text-[18px]! flex items-center leading-[21px]'>
				Мой баланс <img className='ml-[5px] w-[20px] h-[20px]' src={logo1Png} />
			</h1>
			<h2 className='text-[13px] leading-[16px]'>
				Баланс работает в фото и<br />
				видео — твори без границ.
			</h2>
			<img className='absolute w-[90px] h-[70px] bottom-[0px] right-[15px]' src={moneyPng} />
		</button>
	);
}
