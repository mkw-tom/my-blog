"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const Fadein = ({ children }: { children: ReactNode }) => {
	const variants = {
		initial: {
			// translateY: '100vh',
			opacity: 0,
		},
		animate: {
			// translateY: '0',
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	};

	return (
		<motion.div initial="initial" animate="animate" variants={variants}>
			{children}
		</motion.div>
	);
};

export default Fadein;
