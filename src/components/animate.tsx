import * as motion from 'motion/react-client';
import type { PropsWithChildren } from 'react';

export default function Animate({ children }: PropsWithChildren) {
	return (
		<motion.div initial={{ y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} viewport={{ once: true, amount: 1 }}>
			{children}
		</motion.div>
	);
}
