import { tg } from '../telegram';

export default function useSend() {
	function sendData(action: string, payload: any = {}) {
		const out = action && action !== 'null' ? { action, ...payload } : { ...payload };
		tg.sendData(JSON.stringify(out));
	}

	return sendData;
}
