import reactLogo from "./assets/images/react_logo.svg";
import cppLogo from "./assets/images/cpp_logo.png";
import gitLogo from "./assets/images/Git_logo.svg";
import "./ss/app.css";
const logos = [cppLogo, reactLogo, gitLogo];

function TechKnown() {
	return (
		<>
			{logos.map((logo) => (
				<img src={logo} className="logo" alt={logo.toLowerCase()} />
			))}
		</>
	);
}

export default TechKnown;
