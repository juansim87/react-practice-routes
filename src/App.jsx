import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NavBar } from "./components/NavBar";

export const App = () => {
	return (
		<div className="app-container">
			<main className="main">
      <NavBar/>
				<h1>React Routes Practice</h1>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</main>
		</div>
	);
};
