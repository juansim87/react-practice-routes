import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export const App = () => {
	return (
		<div className="app-container">
			<main className="main">
				<h1>React Routes Practice</h1>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</main>
		</div>
	);
};
