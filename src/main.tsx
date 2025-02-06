import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../dist/css/index.min.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
