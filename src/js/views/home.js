import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cards } from "../component/card";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container-fluid fondoTop">
			<div className="row h-75">
				<div className="col-12 px-0 pt-2">
					<div id="carouselExampleIndicators" className="carousel slide mt-5" htmlData-ride="carousel">
						<ol className="carousel-indicators">
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="0" className="active" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="1" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="2" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="3" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="4" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="5" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="6" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="7" />
						</ol>
						<div className="carousel-inner h-100">
							<div className="carousel-item active slider">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/arte.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/ciencia.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/ciencias%20sociales.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/deportes.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/entretenimiento.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/geografia.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/mates.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/programacion.gif?raw=true"
									className="d-block w-100 slider"
									alt="..."
								/>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row my-4 bg-dark text-white flex-column flex-sm-row align-items-center justify-content-between">
					<h1 className="w-100 m-0">JUDYA</h1>
					{/* col-md */}

					<div className="col-10 col-sm-4">
						<div className="form-group m-0">
							<select
								onChange={actions.filtradoTrue}
								className="form-control"
								name="categoria"
								id="examplesFormControlSelect1">
								{store.categorias.map(element => (
									<option key={element.value} value={element.id}>
										{element.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="col-10 my-3 my-sm-0 col-sm-3">
						<button className="btn bg-danger w-100 text-white">Play!</button>
					</div>
					<div className="col-10 col-sm-4 mb-3">
						<Link
							className="btn btn-danger w-100"
							to={store.logeado == true ? "/postpreguntado" : "/login"}>
							Publicar un preguntado
						</Link>
					</div>
				</div>

				<div className="contenedor">
					<div className="row  flex-sm-row justify-content-center px-0 mx-0">
						{/* Mapeo de 5 preguntados. aleatorio, Nota:Mapear segun la categoria seleccionada luego */}
						{store.preguntados.map((element, i) => {
							return (
								<Cards
									key={element.id}
									id={element.id}
									nombre={element.nombre}
									img={element.url_foto}
									descripcion={element.descripcion}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
