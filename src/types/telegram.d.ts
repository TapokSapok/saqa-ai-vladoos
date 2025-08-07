export {};

declare global {
	interface TelegramWebApp {
		initData: string;
		initDataUnsafe: any;
		version: string;
		platform: string;
		colorScheme: string;
		isExpanded: boolean;
		isClosingConfirmationEnabled: boolean;
		themeParams: {
			bg_color?: string;
			text_color?: string;
			hint_color?: string;
			link_color?: string;
			button_color?: string;
			button_text_color?: string;
		};
		MainButton: {
			setText: (text: string) => void;
			onClick: (callback: () => void) => void;
			offClick: (callback: () => void) => void;
			show: () => void;
			hide: () => void;
			enable: () => void;
			disable: () => void;
			isVisible: boolean;
			isActive: boolean;
			setParams: (params: { text?: string; color?: string; text_color?: string; is_visible?: boolean; is_active?: boolean }) => void;
		};
		BackButton: {
			show: () => void;
			hide: () => void;
			onClick: (callback: () => void) => void;
			offClick: (callback: () => void) => void;
		};
		HapticFeedback: {
			impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
			notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
			selectionChanged: () => void;
		};
		sendData: (data: string) => void;
		close: () => void;
		expand: () => void;
		ready: () => void;
	}

	interface Window {
		Telegram: {
			WebApp: TelegramWebApp;
		};
	}
}
