import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Sabiasque = () => {
	const { store, actions } = useContext(Context);

	return (
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
						src="https://e.rpp-noticias.io/xlarge/2018/10/08/531753_690363.jpg"
						className="d-block w-100 sslider px-0 mx-0"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block desenfoqueText">
						<h5 className="h3">¿Sabias que?</h5>
						<p>
							El cerebro almacena la información como un CD, no como un casete. Responder a la pregunta de
							cómo almacenar información, si en forma continua o discreta, es fácil para los ingenieros.
							... El ADN almacena información en forma discreta en forma de secuencia de nucleótidos
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						height="600px"
						src="https://cdn.ticbeat.com/src/uploads/2017/11/tecnicas-aprender-rapido-810x540.jpg"
						className="d-block w-100 sslider px-0 mx-0"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block desenfoqueText">
						<h5 className="h3">¿Por que es tan importante estudiar?</h5>
						<p>
							Es importante porque quien estudia adquiere conocimientos. El conocimiento es lo único que
							puede ayudarte a desarrollar tus capacidades completamente. Es importante porque saber cosas
							y entender las razones por las que son o suceden así es lo que te permite cuestionarlas y
							traer progreso a toda la humanidad.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						height="600px"
						src="https://www.revistamoi.com/wp-content/uploads/2016/07/mejora-tu-memoria-con-ejercicio.jpg"
						className="d-block w-100 sslider px-0 mx-0"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block desenfoqueText">
						<h5 className="h3">¿Sabias que?</h5>
						<p>
							Memorizar paisajes, poesías o canciones a lo largo del tiempo, es una forma muy efectiva de
							hacer que tu cerebro sea más receptivo a la memoria. No es necesario tratar de memorizar
							libros enteros, comienza con cosas del día a día: trata de memorizar siempre los teléfonos
							importantes en lugar de tenerlos en tu celular.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						height="600px"
						src="http://blogs.upn.edu.pe/carreras-para-adultos-que-trabajan/wp-content/uploads/sites/15/2018/06/upn_blog_wa_creativid_12-jun.jpg"
						className="d-block w-100 sslider"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block desenfoqueText">
						<h5 className="h3">Se Creativo!!!</h5>
						<p>
							La Mente Creativa es rebelde, ésa es su principal característica. No da nada por sentado, no
							se fundamenta en presunciones ni moldes establecidos. La Mente Creativa asume que todo puede
							ser completado, superado, mejorado, que nada está definido y todo es perfectible.
						</p>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
