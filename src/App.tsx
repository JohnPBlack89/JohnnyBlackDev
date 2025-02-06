import "../dist/css/app.min.css";
import TechKnown from "./components/TechKnown";
import Name from "./components/Name";
import Subtitle from "./components/Subtitle";
import Background from "./components/Background";
import QRCode from "./components/QRCode";

function App() {
	return (
		<>
			<Name />
			<Subtitle />
			<TechKnown />
			<QRCode />
			<Background />
		</>
	);
}

export default App;
