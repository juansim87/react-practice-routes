import { Link, Outlet } from "react-router-dom";

export const UserDetails = () => {
	return (
		<div>
			<nav>
				<Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>{" "}
				| <Link to="projects">Proyectos</Link>
			</nav>
			<Outlet />
		</div>
	);
};
