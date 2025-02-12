import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./ss/index.scss";
import QRCode from "./components/QRCode";
import NavBar from "./components/Nav";
import Home from "./components/Home";
import Background from "./components/Background";
import Abilities from "./components/Abilities";
import Experience from "./components/Experience";

export default function App() {
	return (
		<>
			<NavBar />
			<Background />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/qrcode" element={<QRCode />} />
					<Route path="/abilities" element={<Abilities />} />
					<Route path="/experience" element={<Experience />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
