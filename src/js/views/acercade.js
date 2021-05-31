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
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								height="600px"
								src="https://wellaggio.com/wp-content/uploads/2018/06/Wellaggio-diseno-web-valencia-Co%CC%81mo-disen%CC%83ar-la-pa%CC%81gina-%E2%80%9Csobre-nosotros%E2%80%9D-en-la-web-de-mi-empresa.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Acerca de</h5>
								<p>
									Some representative placeholder content for the first slide. Some representative
									placeholder content for the first slide. Some representative placeholder content for
									the first slide. Some representative placeholder content for the first slide.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="https://www.caracteristicas.co/wp-content/uploads/2017/03/cerebro-e1565716723530.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">¿Sabias que?</h5>
								<p>
									Some representative placeholder content for the second slide. Some representative
									placeholder content for the second slide. Some representative placeholder content
									for the second slide. Some representative placeholder content for the second slide.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="https://cdn.ticbeat.com/src/uploads/2017/11/tecnicas-aprender-rapido-810x540.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
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
