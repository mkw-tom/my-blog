"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const InfinityScroll = ({
	children,
	direction,
}: { children: ReactNode; direction: "right" | "left" }) => {
	const [start, end] =
		direction === "right" ? ["0%", "-100%"] : ["-100%", "100%"];
	const variants = {
		initial: {
			translate: start,
		},
		animate: {
			translateX: end,
			transition: {
				// biome-ignore lint/style/useNumberNamespace: <explanation>
				repeat: Infinity,
				duration: 15,
				ease: "linear",
			},
		},
	};
	return (
		<motion.div initial="initial" animate="animate" variants={variants}>
			{children}
		</motion.div>
	);
};

export default InfinityScroll;
