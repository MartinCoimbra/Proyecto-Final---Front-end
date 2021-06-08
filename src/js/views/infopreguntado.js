import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Infopreguntado = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		console.log(store.preguntadoEs[0]);
	});
	return (
		<div className="container-fluid fondoTop px-0 mx-0 mt-5">
			<div className="container bg-light rounded p-3 mt-5 mb-3">
				<div className="row mb-5">
					<div className="col-6">
						<figure className="figure">
							<img
								src={store.preguntadoEs[0].url_foto}
								className="figure-img img-fluid rounded"
								alt="..."
							/>
						</figure>
					</div>
					<div className="col-6">
						<h1 className="text-center">{store.preguntadoEs[0].nombre}</h1>
						<p>
							{store.preguntadoEs[0].descripcion} <br />
							Categoria:
							{/* {store.preguntadoEspecifico.categoria.name} */}
						</p>
					</div>
					<div className="col-6">
						<Link to="/">
							<button className="btn btn-outline-primary">Volver</button>
						</Link>
					</div>
					<div className="col-6 text-center text-warning h2">
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
					</div>
				</div>
				<div className="container contenedorTop width2">
					{/* Aqui va el map de los comentarios */}
					<div className="w-100 row border bg-white mb-2">
						<div className="col-2 d-flex align-items-center justify-content-center">
							<img
								className="w-75"
								src="https://image.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58482.jpg"
							/>
						</div>
						<div className="col-8  w-100 py-3">
							<div className="border p-3">
								<h4 className="text-info">Martin Coimbra</h4>
								<p className="pl-3">Me gusto mucho!</p>
								<div className="col-12 text-warning text-right px-0 h4">
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star-half-alt" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-3 border width2 p-4">
					<h4>¡Cuentanos que opinas sobre este post!</h4>
					<div className="form-group ">
						<label htmlFor="exampleFormControlTextarea1">¡Tu comentario es importante!</label>
						<textarea className="form-control textArea" id="exampleFormControlTextarea1" rows="4" />
					</div>
					<div className="w-100 text-right">
						<button className="btn btn-success">Comentar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
