import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/use-theme';

import backSvg from '../../assets/back.svg';
import backLightSvg from '../../assets/back-light.svg';

export default function BackButton({ route }: { route: string }) {
	const navigate = useNavigate();
	const { theme } = useTheme();

	return (
		<button className='min-w-[30px] w-[30px] min-h-[30px] h-[30px] bg-[var(--bg-gray-1)] rounded-[7px] flex items-center justify-center' onClick={() => navigate(route)}>
			<img src={theme === 'light' ? backSvg : backLightSvg} />
		</button>
	);
}
