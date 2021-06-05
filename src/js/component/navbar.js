import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark paleta5 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">JUDYA</span>
			</Link>
			<div className={store.logeado == false ? "d-block ml-auto" : "d-none"}>
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
				<Link className="text-decoration-none" to="/sabiasque">
					<span className="mr-3 text-white">Curiosidades</span>
				</Link>
			</div>
			<div className={store.logeado == false ? "d-none" : "d-block ml-auto"}>
				<Link to="/perfil" className="btn btn-outline-success ml-4">
					Perfil
				</Link>

				<Link to="/" onClick={actions.actionRemove} className="btn btn-outline-danger ml-4 float-right">
					Cerrar sesión
				</Link>
			</div>
		</nav>
	);
};
