import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark paleta5 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Preguntados</span>
			</Link>
			<div className="ml-auto text-white">
				<Link className="text-decoration-none" to="/">
					<span className="mr-3 text-white">Inicio</span>
				</Link>
				<Link className="text-decoration-none" to="/login">
					<span className="mr-3 text-white">Login</span>
				</Link>
				<Link className="text-decoration-none" to="/registro">
					<span className="mr-3 text-white">Registro</span>
				</Link>
				<Link className="text-decoration-none" to="/acercade">
					<span className="mr-3 text-white">Acerca de</span>
				</Link>
				<Link className="text-decoration-none" to="/top">
					<span className="mr-3 text-white">Top</span>
				</Link>
			</div>
		</nav>
	);
};
