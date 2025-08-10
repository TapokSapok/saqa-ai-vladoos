export const tg = window.Telegram.WebApp;

export function send(action: string | null, payload: any = {}) {
	const out = action && action !== 'null' ? { action, ...payload } : { ...payload };
	tg.sendData(JSON.stringify(out));
}
