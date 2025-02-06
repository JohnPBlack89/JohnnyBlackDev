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
import jb from "../assets/images/logos/JBLogo.svg";
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
		sql,
		git,
		github,
		linkedIn,
		jb,
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
