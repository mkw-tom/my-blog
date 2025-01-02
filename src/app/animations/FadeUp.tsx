"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const FadeUp = ({ children }: { children: ReactNode }) => {
	const variants = {
		initial: {
			opacity: 0,
			translateY: "20vh",
		},
		animate: {
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 2,
				deley: 0.5,
				ease: [0, 0, 0, 1],
			},
		},
	};
	return (
		<motion.div initial="initial" animate="animate" variants={variants}>
			{children}
		</motion.div>
	);
};

export default FadeUp;
