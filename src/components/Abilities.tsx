import cpp from "../assets/images/logos/c.svg";
import cs from "../assets/images/logos/c--4.svg";
import css3 from "../assets/images/logos/css-3.svg";
import git from "../assets/images/logos/Git_logo.svg";
import html5 from "../assets/images/logos/html5.svg";
import java4 from "../assets/images/logos/java.svg";
import js from "../assets/images/logos/JavaScript-logo.svg";
import node from "../assets/images/logos/Node-js.svg";
import python from "../assets/images/logos/python.svg";
import react from "../assets/images/logos/react_logo.svg";
import sass from "../assets/images/logos/Sass_Logo_Color.svg";
import sql from "../assets/images/logos/sql.svg";
import vite from "../assets/images/logos/vite.svg";
import github from "../assets/images/logos/github-mark-white.svg";
import linkedIn from "../assets/images/logos/LinkedIn_icon.svg";
import * as motion from "motion/react-client";

export default function Abilities() {
	const logos = [
		cpp,
		cs,
		java4,
		python,
		html5,
		css3,
		sass,
		js,
		node,
		react,
		vite,
		sql,
		git,
		github,
		linkedIn,
	];
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			className="title"
			transition={{
				duration: 2,
			}}
		>
			<motion.h1 className="title">Abilities</motion.h1>
			<motion.h2 className="title">Technologies Known</motion.h2>
			{logos.map((logo) => (
				<motion.img
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.2 }}
					whileHover={{ scale: 1.8 }}
					src={logo}
					className="logo"
					alt={Object.keys({ logo })[0]}
				/>
			))}
		</motion.div>
	);
}
