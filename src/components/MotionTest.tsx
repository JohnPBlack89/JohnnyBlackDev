import * as motion from "motion/react-client";
import cpp from "../assets/images/cplusplus.svg";

export default function MotionTest() {
	return (
		<>
			<div></div>
			<motion.img
				initial={{ scale: 0 }}
				whileHover={{ scale: 1.2, rotate: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{ duration: 1 }}
				src={cpp}
				className="logo"
			/>
		</>
	);
}

/**
 * ==============   Styles   ================
 */
