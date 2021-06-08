import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Comentario } from "../component/comentario";

export const Infopreguntado = () => {
	const { store, actions } = useContext(Context);

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
							{/* {store.preguntadoEs[0].categoria.name} */}
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
					{store.comentariosDelPreguntado.map((element, i) => {
						return <Comentario key={i} posicion={i} />;
					})}
				</div>
				<div className="container mt-3 border width2 p-4">
					<h4>¡Cuentanos que opinas sobre este post!</h4>
					<div className="form-group ">
						<label htmlFor="exampleFormControlTextarea1">¡Tu comentario es importante!</label>
						<textarea
							onChange={actions.comentarioData}
							name="comentario"
							className="form-control textArea"
							id="exampleFormControlTextarea1"
							rows="4"
						/>
					</div>
					<div className="w-100 text-right text-warning">
						<div className=" d-flex mr-4">
							<i
								onClick={() => {
									actions.calificacionData(1);
								}}
								className="fas fa-star"
							/>
							<i
								onClick={() => {
									actions.calificacionData(2);
								}}
								className="fas fa-star"
							/>
							<i
								onClick={() => {
									actions.calificacionData(3);
								}}
								className="fas fa-star"
							/>
							<i
								onClick={() => {
									actions.calificacionData(4);
								}}
								className="fas fa-star"
							/>
							<i
								onClick={() => {
									actions.calificacionData(5);
								}}
								className="fas fa-star"
							/>
						</div>
						<div>
							<button
								onClick={() => {
									actions.postComentario();
								}}
								className="btn btn-success">
								Comentar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
