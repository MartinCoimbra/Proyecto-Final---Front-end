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
								<h5 className="h3">Sobre nosotros</h5>
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
						<div className="carousel-item">
							<img
								height="600px"
								src="https://cdn.ticbeat.com/src/uploads/2017/11/tecnicas-aprender-rapido-810x540.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Como jugar</h5>
								<p>
									Para poder jugar primero que nada tienes que estar registrado y logeado, luego ir al
									inicio y seleccionar play en la categoria que te gustaria jugar (Deportes, Historia,
									Geografia, Matematicas,etc). Al entrar en la categoria vas a poder jugar al
									instante, responde bien las preguntas en menos del tiempo indicado y ganaras puntos
									(los puntos que ganes se basan en los segundos que te queden al responder
									correctamente, de lo contrario no sumaras puntos).
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="https://www.revistamoi.com/wp-content/uploads/2016/07/mejora-tu-memoria-con-ejercicio.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Top semanal</h5>
								<p>
									Que es el top semanal? El top semanal es un metodo de competicion entre todos los
									usuario. Quieres ganar buenas recompenzas? pues es hora de estudiar y responder
									correctamente en el menos tiempo posible, asi podras ganar mas puntos en menos
									tiempo y ser el primero en el top semanal. Los primeros 5 ganaran recompenzas como
									por ejemplo 1000 coins, si leiste bien 1000 coins 😲, una locura no? pero deja te
									contamos que si todo funciona segun lo planeado, podremos meter un top mensual en el
									que podras ganar hasta 20000 coins 🤯.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								height="600px"
								src="http://blogs.upn.edu.pe/carreras-para-adultos-que-trabajan/wp-content/uploads/sites/15/2018/06/upn_blog_wa_creativid_12-jun.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block desenfoqueText">
								<h5 className="h3">Quien esta detras</h5>
								<p>
									Si te preguntas o te has preguntado quien o quienes estan detras de este proyecto,
									aqui te vamos a responder. Somos 3 chicos que estudiamos en 4Geeks Academy en donde
									aprendimos todo lo que teniamos que saber sobre desarrollo de aplicaciones web. Como
									proyecto final nos toco trabajar en una aplicacion web sobre algo que nos interesara
									a nosotros. Cuando se eligieron los grupos el nuestro era el mas pequeño en
									participantes, pero eso no nos puso trabas en el camino ya que como grupo trabajamos
									exelentes. La idea del proyecto surgio despues de 2 horas de planteamientos de
									ideas, dimos justo en lo indicado ya que tenemos un participante apacionado por los
									videojuegos y eso nos dio una ventaja a la hora de desarrollar la aplicacion.
									Tambien otra de las ventajas fue tener un participante que programa desde hace mucho
									tiempo y
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
