import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="container paleta1 mt-5">
				<div className="row pt-4 pr-4 pl-4 mb-0 pb-0">
					<div className="col-3">
						<figure className="figure">
							<img
								src="https://image.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58482.jpg"
								className="figure-img img-fluid rounded rounded-circle"
								alt="..."
							/>
						</figure>
					</div>
					<div className="col-9 d-flex align-items-start flex-column">
						<h1>Martin Coimbra</h1>
						<div className="row m-auto w-100">
							<div className="col-8 border bg-white comentMarcado p-3">
								<p className="p-0 m-0">Me gusta muchisimo el café ☕</p>
							</div>
							<div className="col-1 d-flex align-self-end">
								<a className="d-inline">Editar</a>
							</div>
							<div className="col-3 d-flex align-self-end">
								<button className="btn btn-success">¡VAMOS A JUGAR!</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-3 px-0 mx-0 text-center">
						<p className="h3 ml-5 text-danger">Coin: 400 💎</p>
					</div>
					<div className="col-9 mb-3">
						<p className="h4">Tus estadisticas</p>
						<div className="bg-white estadistica comentMarcado d-flex p-3">
							{/* Map de estadistias o de ultimas partidas */}
							<div className="align-self-end h-100 bg-warning px-2  mx-2">Geografia</div>
							<div className="align-self-end h-50 bg-success  px-2 mx-2">Matematica</div>
							<div className="align-self-end h-75 bg-danger  px-2 mx-2">Historia</div>
							<div className="align-self-end h-75 bg-info  px-2 mx-2">Entretenimiento</div>
							<div className="align-self-end h-100 bg-warning px-2  mx-2">Geografia</div>
							<div className="align-self-end h-50 bg-success  px-2 mx-2">Matematica</div>
							<div className="align-self-end h-75 bg-danger  px-2 mx-2">Historia</div>
							<div className="align-self-end h-75 bg-info  px-2 mx-2">Entretenimiento</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
