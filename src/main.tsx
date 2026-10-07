import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/big-shoulders-display/800";
import "@fontsource/big-shoulders-display/900";
import "@fontsource/doto/900";
import "@fontsource/atkinson-hyperlegible/400";
import "@fontsource/atkinson-hyperlegible/700";
import "./Styling/global/global.scss";
import App from "./App.tsx";

import "./Styling/global/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
