import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-items">
				<NavLink to="/" className="navbar-item">
					Home
				</NavLink>
				<NavLink to="/about" className="navbar-item">
					About
				</NavLink>
			</div>
		</nav>
	);
};
