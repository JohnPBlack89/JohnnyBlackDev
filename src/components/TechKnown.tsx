import cpp from "../assets/images/cplusplus.svg";
import cs from "../assets/images/csharp.svg";
import css3 from "../assets/images/css-3.svg";
import git from "../assets/images/Git_logo.svg";
import html5 from "../assets/images/html-5.svg";
import java4 from "../assets/images/java.svg";
import js from "../assets/images/JavaScript-logo.png";
import node from "../assets/images/Node-js.svg";
import python from "../assets/images/python.svg";
import react from "../assets/images/react_logo.svg";
import sass from "../assets/images/Sass_Logo_Color.svg";
import sql from "../assets/images/sql.svg";
import vite from "../assets/images/vite.svg";
import github from "../assets/images/github-mark-white.svg";
import * as motion from "motion/react-client";

function TechKnown() {
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
		git,
		github,
		sql,
	];
	return (
		<>
			{logos.map((logo) => (
				<motion.img
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 1 }}
					transition={{ duration: 1.2 }}
					whileHover={{ scale: 1.8, rotate: 0 }}
					src={logo}
					className="logo"
					alt={Object.keys({ logo })[0]}
				/>
			))}
		</>
	);
}

export default TechKnown;
