import * as motion from "motion/react-client";

export default function Name() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.2 }}
			className="title"
			transition={{
				duration: 2,
			}}
		>
			<h1>Johnny Black</h1>
		</motion.div>
	);
}
