import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container-fluid fondoTop">
			<div className="row h-75">
				<div className="col-12 px-0">
					<div id="carouselExampleIndicators" className="carousel slide" htmlData-ride="carousel">
						<ol className="carousel-indicators">
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="0" className="active" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="1" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="2" />
						</ol>
						<div className="carousel-inner h-100">
							<div className="carousel-item active h-100">
								<img
									src="https://www.itl.cat/pngfile/big/299-2991222_education-wallpaper-education-wallpaper-hd.jpg"
									className="d-block w-100 h-100"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block desenfoqueText">
									<h5 className="h3">¡ES HORA DE APRENDER!</h5>
									<p>
										Tan sólo tú y tú, hay que vencer al mejor, la mente tienes que elevar y no
										rendirte sin probar, el juego va a empezar.
									</p>
								</div>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://i.pinimg.com/originals/51/0e/3a/510e3a54ba009852022df4f585fc349e.jpg"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://wallpaperaccess.com/full/3129561.jpg"
									className="d-block w-100 h-100"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block desenfoqueText">
									<h5 className="h3">¡APRENDER SOBRE DEPORTES!</h5>
									<p>Juega, aprende y demuestra que eres un verdadero crack de los deportes.</p>
								</div>
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
				<div className="row my-4 fondoPerson justify-content-between">
					<div className="row col-3 ml-4">
						<div className="col-5 d-flex align-items-center">
							<button className="btn btn-primary bg-danger mt-3">Play!</button>
						</div>
						<div className="col-7">
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">Categorias</label>
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
					</div>
					<div className="col-6 d-flex align-items-center justify-content-center w-100">
						<h1>JUDYA</h1>
					</div>
					<div className="row col-3 d-flex align-items-center">
						<Link to="/postpreguntado">
							<button className="btn btn-primary bg-success mt-3">Publicar un preguntado</button>
						</Link>
					</div>
				</div>

				<div className="contenedor">
					<div className="row px-0 mx-0">
						{/* Mapeo de 5 preguntados aleatorio, Nota:Mapear segun la categoria seleccionada luego */}
						<div className="col-4 mb-3">
							<div className="card bg-dark imgS text-white">
								<img
									src="https://www.ecestaticos.com/image/clipping/af87059eaa01d0ce789779b415c78134/como-se-debe-ensenar-la-historia.jpg"
									className="card-img "
									alt="..."
								/>
								<div className="card-img-overlay desenfoque2">
									<h5 className="card-title info">Historia</h5>
									<p className="card-text info">
										bit lonxzczxczxcxcxx xxxxxxx xxxxxxxx dfs sdfsdf dfdfdger.
									</p>
									{/* LINK-s */}
									<div className="info">
										{/* AQUI Acuerdate de intercalar el id segun el que seleciono */}
										<Link to="/infopreguntado/1">
											<button className="btn btn-info mr-1">Ver más</button>
										</Link>
										<button className="btn btn-success">Play</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
