import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Comentario } from "../component/comentario";

export const Infopreguntado = () => {
	const { store, actions } = useContext(Context);
	const [cant, setCant] = useState(0);
	const [startA, setStartA] = useState("");
	/* startActive */
	return (
		<div className="container-fluid fondoTop px-0 mx-0 mt-5">
			<div className="container bg-light rounded p-3 mt-5 mb-3">
				<div className="row mb-5">
					<div className="col-12 col-md-6">
						<img src={store.preguntadoEs[0].url_foto} className="rounded w-100 infoimgH mb-2" alt="..." />
					</div>
					<div className="col-12 col-md-6">
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
					<div className="col-12 col-md-6 text-center text-warning h2 ">
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
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
					<div className="w-100 text-right h5 h2-sm">
						<div className=" d-flex mr-4">
							<i
								onClick={() => {
									actions.calificacionData(1);
									setCant(1);
								}}
								className={
									cant == 1 || cant == 2 || cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart1 startActive"
										: "fas fa-star start hoverStart1"
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(2);
									setCant(2);
								}}
								className={
									+cant == 2 || cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart2 startActive"
										: "fas fa-star start hoverStart2 "
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(3);
									setCant(3);
								}}
								className={
									cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart3  startActive"
										: "fas fa-star start hoverStart3 "
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(4);
									setCant(4);
								}}
								className={
									cant == 4 || cant == 5
										? "fas fa-star start hoverStart4 startActive"
										: "fas fa-star start hoverStart4"
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(5);
									setCant(5);
								}}
								className={
									cant == 5
										? "fas fa-star start hoverStart5 startActive"
										: "fas fa-star start hoverStart5 "
								}
							/>
						</div>
						<div>
							<Link to={store.logeado == true ? "" : "/login"}>
								<button
									onClick={() => {
										actions.postComentario();
									}}
									className="btn btn-success">
									Comentar
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
