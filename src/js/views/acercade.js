import React, { useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Acercade = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleCaptions" data-slide-to="1" />
					<li data-target="#carouselExampleCaptions" data-slide-to="2" />
					<li data-target="#carouselExampleCaptions" data-slide-to="3" />
					<li data-target="#carouselExampleCaptions" data-slide-to="4" />
				</ol>
				<div className="carousel-inner h-100">
					<div className="carousel-item active">
						<img
							src="https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg"
							alt="..."
							className="d-block w-100 sslider"
						/>
						<div className="carousel-caption  desenfoqueText">
							<h5 className="h3">Sobre nosotros</h5>
							<p>
								Somos una página que ofrece entretenimiento y aprendizaje al mismo tiempo. Como muchos,
								nosotros creemos en la utilización de los juegos para el aprendizaje que se ha utilizado
								siempre en las clases de idiomas para aprender y practicar exponentes lingüísticos,
								estrategias comunicativas, destrezas orales, etc, además de ayudarnos como herramienta
								para desarrollar el componente afectivo en las actividades grupales.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							height="600px"
							src="https://wallpapercave.com/wp/wp5448905.jpg"
							className="d-block w-100 sslider"
							alt="..."
						/>
						<div className="carousel-caption  desenfoqueText">
							<h5 className="h3">Como jugar</h5>
							<p>
								Para poder jugar primero que nada tienes que estar registrado y logueado, luego ir al
								inicio y seleccionar play en la categoría que te gustaría jugar (Deportes, Historia,
								Geográfia, Matemáticas, etc). Al entrar en la categoría vas a poder jugar al instante,
								responde bien las preguntas en menos del tiempo indicado y ganaras puntos (los puntos
								que ganes se basan en los segundos que te queden al responder correctamente, de lo
								contrario no sumaras puntos).
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							height="600px"
							src="https://i.pinimg.com/originals/84/bb/bf/84bbbf2145216e3c8f6ba2939329c6b6.jpg"
							className="d-block w-100 sslider"
							alt="..."
						/>
						<div className="carousel-caption  desenfoqueText">
							<h5 className="h3">Top semanal</h5>
							<p>
								Que es el top semanal? El top semanal es un método de competición entre todos los
								jugadores en el que podrán ganar buenas recomenzás. Quieres ganar? pues es hora de
								estudiar y responder correctamente en el menos tiempo posible, así podras ganar muchos
								mas puntos y ser el primero en el top semanal. Los primeros 5 ganaran recomenzás de
								hasta 1000 coins, si leíste bien 1000 coins 😲, una locura no? pero deja te contamos que
								si todo funciona según lo planeado, podremos poner en el futuro un top mensual en el que
								podras ganar hasta 20000 coins 🤯.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							height="600px"
							src="https://i1.wp.com/criptotendencia.com/wp-content/uploads/2020/07/Qui%C3%A9n-est%C3%A1-detr%C3%A1s-del-ataque-contra-Twitter.jpg?fit=1200%2C800&ssl=1"
							className="d-block w-100 sslider"
							alt="..."
						/>
						<div className="carousel-caption  desenfoqueText">
							<h5 className="h3">¿Quien esta detrás?</h5>
							<p>
								Si te preguntas o te has preguntado quien o quienes están detrás de este proyecto, aquí
								te vamos a responder. Somos 3 chicos que estudiamos en 4Geeks Academy en donde
								aprendimos todo lo que teníamos que saber sobre desarrollo de aplicaciones web. Como
								proyecto final nos toco trabajar en una aplicación web sobre algo que nos interesara a
								nosotros. Cuando se eligieron los grupos, el nuestro era el más pequeño en
								participantes, pero eso no nos puso trabas en el camino, ya que como grupo trabajamos
								exelentes. La idea del proyecto surgió después de 2 horas de planteamientos de ideas
								hasta que dimos justo en lo indicado. Ya que tenemos un participante apasionado por los
								videojuegos eso nos dio una ventaja a la hora de desarrollar la aplicación. También otra
								de las ventajas fue tener un participante con buen desempeño en la programación. Y por
								ultimo una gran ventaja la hora de trabajar con otro idioma como el ingles, tenemos una
								compañera que desataca en esa área. Como ven nuestro proyecto fue saliendo de a poco
								pero con un gran trabajo colaborativo.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							height="600px"
							src="https://store-images.s-microsoft.com/image/apps.3862.13561912577062334.e86dd888-b0d2-4afe-9e86-ad735f80c450.8656a0f2-3e75-4d31-8fb5-7ead1c2e6692?mode=scale&q=90&h=1080&w=1920&format=jpg"
							className="d-block w-100 sslider"
							alt="..."
						/>
						<div className="carousel-caption  desenfoqueText">
							<h5 className="h3">Coins</h5>
							<p>
								Compra coins para obtener ventajas a la hora de responder una pregunta dificil, o que no
								puedas responder rapido por los nervios. Para comprar coins tienes que ir al apartado
								(mas coins) ahi encontraras un formulario donde te pedira la cantidad de coins que
								quieras comprar, luego de confirmada la cantidad de coins que quieras comprar,
								automaticamente te enviara a un formulario de paypal para ingresar tu cuenta y confirmar
								el pago. Finalizado el pago puedes ir a tu perfil y comprobar que tus coins estan ahi ya
								para que los utilices. Tambien puedes reclamar tus primeros coins en tu perfil, debajo
								de tus coins podras encontrar un boton (Reclamar coins). Usa tus primeros coins para
								probar y disfrutar en cualquiera de los juegos disponibles.
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
		</div>
	);
};
