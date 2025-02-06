import * as motion from "motion/react-client";

export default function Subtitle() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.8, rotate: 0 }}
			className="logo"
			transition={{
				duration: 2,
			}}
		>
			<h2>Your Next Engineer</h2>
		</motion.div>
	);
}
