import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../dist/css/app.min.css";
import TechKnown from "./components/TechKnown";
import Name from "./components/Name";
import Subtitle from "./components/Subtitle";
import Background from "./components/Background";
import QRCode from "./components/QRCode";
import NavBar from "./components/Nav";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" />
					<Route path="/qrcode" />
				</Routes>
			</BrowserRouter>

			<NavBar />
			<Name />
			<Subtitle />
			<TechKnown />
			<QRCode />
			<Background />
		</>
	);
}

export default App;
