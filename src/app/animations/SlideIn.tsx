import { motion } from "motion/react";
import type { ReactNode } from "react";

const SlideIn = ({
	children,
	direction,
}: { children: ReactNode; direction: "right" | "left" }) => {
	const Xdiraction = direction === "right" ? "500px" : "-500px";

	const variants = {
		initial: {
			translateX: Xdiraction,
			opacity: 0,
		},
		animate: {
			translateX: 0,
			opacity: 1,
			transition: {
				duration: 2,
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

export default SlideIn;
