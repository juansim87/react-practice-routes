import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NavBar } from "./components/NavBar";
import { UserProfile } from "./components/UserProfile";
import { UserDetails } from "./components/UserDetails";
import { UserSettings } from "./components/UserSettings";
import { UserProjects } from "./components/UserProjects";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
	return (
		<div className="app-container">
			<main className="main">
				<NavBar />
				<h1>React Routes Practice</h1>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route element={<PrivateRoute/>}>
						<Route path="/user" element={<UserDetails />}>
							<Route path="profile" element={<UserProfile />} />
							<Route path="settings" element={<UserSettings />} />
							<Route path="projects" element={<UserProjects />} />
						</Route>
					</Route>
				</Routes>
			</main>
		</div>
	);
};
