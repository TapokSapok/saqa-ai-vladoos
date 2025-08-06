import { useNavigate } from 'react-router-dom';
import backSvg from '../../assets/back.svg';

export default function BackButton({ route }: { route: string }) {
	const navigate = useNavigate();

	return (
		<button className='min-w-[30px] w-[30px] min-h-[30px] h-[30px] bg-[#F3F5F6] rounded-[7px] flex items-center justify-center' onClick={() => navigate(route)}>
			<img src={backSvg} />
		</button>
	);
}
