import { useTranslation } from 'react-i18next';
import logo1Png from '../assets/logo1.png';
import moneyPng from '../assets/money.png';
import { send } from '../telegram';

export default function MyBalance() {
	const { t } = useTranslation();
	return (
		<button
			className='relative hover:scale-[97%] my-[20px] rounded-[var(--rounded)] p-[23px] border-[1px] border-solid border-[var(--border-color)] w-full text-left'
			onClick={() => send('balance')}
		>
			<h1 className='text-[18px]! flex items-center leading-[21px]'>
				{t('balance.my_balance.title')} <img className='ml-[5px] w-[20px] h-[20px]' src={logo1Png} />
			</h1>
			<h2 className='text-[13px] leading-[16px]'>
				{t('balance.my_balance.desc1')}
				<br />
				{t('balance.my_balance.desc2')}
			</h2>
			<img className='absolute w-[90px] h-[70px] bottom-[0px] right-[15px]' src={moneyPng} />
		</button>
	);
}
