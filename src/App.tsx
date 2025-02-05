import reactLogo from "./assets/images/react_logo.svg";
import cppLogo from "./assets/images/cpp_logo.png";
import gitLogo from "./assets/images/Git_logo.svg";

import "./ss/app.css";

function App() {
	return (
		<>
			<div>
				<img src={cppLogo} className="logo" alt="C++ logo" />
				<img src={reactLogo} className="logo" alt="React logo" />
				<img src={gitLogo} className="logo" alt="Git logo" />
			</div>
		</>
	);
}

export default App;
