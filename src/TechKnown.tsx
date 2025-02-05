import cpp from "./assets/images/cplusplus.svg";
import cs from "./assets/images/csharp.svg";
import css3 from "./assets/images/css-3.svg";
import git from "./assets/images/Git_logo.svg";
import html5 from "./assets/images/html-5.svg";
import java4 from "./assets/images/java.svg";
import js from "./assets/images/JavaScript-logo.png";
import node from "./assets/images/Node-js.svg";
import python from "./assets/images/python.svg";
import react from "./assets/images/react_logo.svg";
import sass from "./assets/images/Sass_Logo_Color.svg";
import sql from "./assets/images/sql.svg";
import vite from "./assets/images/vite.svg";

import "./ss/app.css";

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
		git,
		sql,
		vite,
	];
	return (
		<>
			{logos.map((logo) => (
				<img src={logo} className="logo" alt={Object.keys({ logo })[0]} />
			))}
		</>
	);
}

export default TechKnown;
