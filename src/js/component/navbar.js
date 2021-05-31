import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Preguntados</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<span className="mr-3">Inicio</span>
				</Link>
				<Link to="/login">
					<span className="mr-3">Login</span>
				</Link>
				<Link to="/registro">
					<span className="mr-3">Registro</span>
				</Link>
				<Link to="/">
					<span className="mr-3">Blog</span>
				</Link>
				<Link to="/">
					<span className="mr-3">Top</span>
				</Link>
			</div>
		</nav>
	);
};
