import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Acercade = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="container">
				<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleCaptions" data-slide-to="1" />
						<li data-target="#carouselExampleCaptions" data-slide-to="2" />
						<li data-target="#carouselExampleCaptions" data-slide-to="3" />
						<li data-target="#carouselExampleCaptions" data-slide-to="4" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								height="600px"
								src="https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Acerca de Nosotros</h5>
								<p>
									Somos una pagina que ofrece entrenamiento y aprendisaje al mismo tiempo. Como
									muchos, nosotros creemos en la utilización de los juegos para el aprendizaje que se
									ha utilizado siempre en las clases de idiomas para aprender y practicar exponentes
									lingüísticos, estrategias comunicativas, destrezas orales, etc, además de ayudarnos
									como herramienta para desarrollar el componente afectivo en las actividades
									grupales.
								</p>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	);
};
