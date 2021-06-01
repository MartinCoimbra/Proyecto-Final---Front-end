import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center container-fluid mt-5 pt-2">
		<div className="row">
			<div className="col-12 px-0">
				<div id="carouselExampleIndicators" className="carousel slide" htmlData-ride="carousel">
					<ol className="carousel-indicators">
						<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="0" className="active" />
						<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="1" />
						<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								height="600px"
								src="https://juegosmesaparados.com/wp-content/uploads/2020/03/Juegos-de-mesa-de-preguntas-y-respuestas.jpg"
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="https://static.wixstatic.com/media/94a51f_dcacaad8108d45129e8ac56b9b955a8b~mv2.png/v1/fit/w_511%2Ch_292%2Cal_c/file.png"
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg"
								className="d-block w-100"
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
			<div className="row my-4 desenfoque justify-content-between">
				<div className="row col-3 ml-4">
					<div className="col-5 d-flex align-items-center">
						<button className="btn btn-primary bg-danger">Play!</button>
					</div>
					<div className="col-7">
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect1">Categorias</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Geografia</option>
								<option>Matematica</option>
								<option>Historia</option>
								<option>Programacion</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-6 d-flex align-items-center justify-content-center w-100">
					<h1> Preguntados</h1>
				</div>
				<div className="row col-3 d-flex align-items-center">
					<Link to="/postpreguntado">
						<button className="btn btn-primary bg-success">Publicar un preguntado</button>
					</Link>
				</div>
			</div>

			<div className="contenedor">
				{/* Mapeo de 5 preguntados aleatorio, Nota:Mapear segun la categoria seleccionada luego */}
				<div className="row">
					<div className="col-4  mb-3">
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
