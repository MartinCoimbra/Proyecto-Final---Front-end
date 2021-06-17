import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Juego = () => {
	const { store, actions } = useContext(Context);
	const [num, setNum] = useState(20);
	const [pause, setPause] = useState(false);
	let intervalRef = useRef();
	const decreaseNum = () => setNum(prev => prev - 1);
	const [num2, setNum2] = useState(0);
	const [fondo, setFondo] = useState("bg-white");
	/* Respuesta va a ser la posicion de la respuesta correcta */
	const [respuestaC, setRespuesta] = useState();
	const [resFV, setResFV] = useState("");
	const [position, setPosition] = useState(0);
	const [ver, setVer] = useState("d-none");
	const [disableBtn, setDisableBtn] = useState(false);
	const [btn1, setBtn1] = useState();
	const [btn2, setBtn2] = useState();
	const [btn3, setBtn3] = useState();
	const [puntos, setPuntos] = useState(0);
	const [home, setHome] = useState(false);

	/* Cuando llegue a 0 pausar */
	if (num == 0 || num < 0) {
		clearInterval(intervalRef.current);
	}
	useEffect(() => {
		setPause(false);
		intervalRef.current = setInterval(decreaseNum, 600);
		return () => clearInterval(intervalRef.current);
	}, []);
	if (num >= 0) {
		useEffect(() => {
			let numPositivo = 20 - num;
			setNum2(numPositivo);
			if (num == 5) {
				setFondo("bg-danger rounded");
			} else if (num == 3) {
				setFondo("bg-danger rounded");
			} else if (num == 1) {
				setFondo("bg-danger rounded");
			} else {
				setFondo("bg-white rounded");
			}
			if (num == 0) {
				respuestaInc();
			}
		});
	}
	/* pausa */
	const handleClick = () => {
		if (!pause) {
			clearInterval(intervalRef.current);
		}
	};
	/* Play al tiempo */
	const goTimer = () => {
		intervalRef.current = setInterval(decreaseNum, 1000);
	};

	/* hacer un random de 3 y que los cosos eligan cual es la respuesta correcta */
	const numAleatorio = () => {
		let respuestaCorrecta = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		setRespuesta(respuestaCorrecta);
		/* Validamos la respuesta y le damos valor al btn 1 */
		respuestaC == 1
			? setBtn1(store.preguntasYresp[position].respuesta[0].opcion_correcta)
			: respuestaC == 2
				? setBtn1(store.preguntasYresp[position].respuesta[0].opcion_b)
				: respuestaC == 3
					? setBtn1(store.preguntasYresp[position].respuesta[0].opcion_c)
					: "";
		/* Validamos la respuesta 2 le damos valor al btn 2 */
		respuestaC == 1
			? setBtn2(store.preguntasYresp[position].respuesta[0].opcion_c)
			: respuestaC == 3
				? setBtn2(store.preguntasYresp[position].respuesta[0].opcion_b)
				: respuestaC == 2
					? setBtn2(store.preguntasYresp[position].respuesta[0].opcion_correcta)
					: "";
		/* Validamos la respuesta 3 le damos valor al btn 3 */
		respuestaC == 1
			? setBtn3(store.preguntasYresp[position].respuesta[0].opcion_b)
			: respuestaC == 2
				? setBtn3(store.preguntasYresp[position].respuesta[0].opcion_c)
				: respuestaC == 3
					? setBtn3(store.preguntasYresp[position].respuesta[0].opcion_correcta)
					: "";
	};

	useEffect(() => {
		numAleatorio();
	}, []);

	const respuestaCorrectaVerific = resp => {
		if (store.preguntasYresp[position].respuesta[0].opcion_correcta === resp) {
			console.log("Tu respuesta es correcta");
			handleClick();
			setResFV("Correcta!");
			/* Le hacemos un cartel de correcto y mostrar btn siguiente */
		} else {
			/* Le hacemos parecer cartel de error y no le sumamos puntos */
			console.log("Incorrecta D:!");
			setResFV("Incorrecta D:!");
			setNum(0);
		}
		setVer("d-block");
		setDisableBtn(true);
	};

	const aumentarPuntos = () => {
		setPuntos(puntos + num);
	};

	const siguientePregunta = () => {
		let num = position + 1;
		if (position < 4) {
			setNum(20);
			numAleatorio();
			setPosition(num);
			setVer("d-none");
			setDisableBtn(false);
			goTimer();
		}
	};
	const respuestaInc = () => {
		setResFV("Incorrecta D:!");
		setNum(0);
		setVer("d-block");
		setDisableBtn(true);
	};
	/* Cada vez que pase a la siguiente pregunta en un btn siguiente incrementar el [0] por 1  */
	/* preguntasYresp[0] position */
	/* Al hacer click le mandamos el num de la resp que le hicimos click 
        y si concide el num por parametro a respuesttaC= num */
	return (
		<div className="container-fluid px-0 mx-0 mt-4">
			{store.logeado === false ? (
				<Redirect to="/" />
			) : (
				<div className="container fondojuego mt-5 rounded border">
					<div className="row justify-content-between p-5">
						<div className="col-3">
							<p className="mt-3 p-2 bg-white rounded">Puntos: {puntos}</p>
							<p className="mt-3 p-2 bg-white rounded">
								Partidas {position + 1}
								/5
							</p>

							<div className={store.coin >= 100 ? "d-block" : "d-none"}>
								<p className="text-white mb-0">100 Coin</p>
								<button
									onClick={() => {
										actions.putCoinComodin(100);
										handleClick();
										setDisableBtn(true);
										setResFV("Comodin 🔆");
										setVer("d-block");
									}}
									className="Ccoins">
									Respuesta correcta
								</button>
							</div>
							<div className={store.coin >= 50 ? "d-block" : "d-none"}>
								<p className="text-white mb-0">50 Coin</p>
								<button
									onClick={() => {
										/* Opcion B disable */
										actions.putCoinComodin(50);
										handleClick();
									}}
									className="Ccoins">
									Pausar tiempo
								</button>
							</div>
							<div className={store.coin >= 25 ? "d-block" : "d-none"}>
								<p className="text-white mb-0">25 Coin</p>
								<button
									onClick={() => {
										actions.putCoinComodin(24);
										setNum(20);
									}}
									className="Ccoins">
									Reset time
								</button>
							</div>
						</div>

						<div className="col-6 text-center text-white">
							<h1>{store.preguntasYresp[position].preguntado.nombre}</h1>
							<div className="col-10 px-0 text-center">
								<img
									src={store.preguntasYresp[position].foto_pregunta}
									className="figure-img img-fluid rounded w-75"
									alt="..."
								/>
							</div>

							<div className="col-10">
								<div className="cuadrodepregunta w-100 py-2 text-center mb-2">
									<p className="text-dark m-0">{store.preguntasYresp[position].preguntas}</p>
								</div>
							</div>

							<div className="col-10">
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped"
										style={{
											width: Math.floor(num2 * 100) / 20 + "%"
										}}
										role="progressbar"
										aria-valuenow="75"
										aria-valuemin="0"
										aria-valuemax={(20 * 100) / 20}
									/>
								</div>
							</div>

							<div className={ver}>
								<div className="col-10">
									<h3 className="text-white">Tu respuesta es: {resFV} </h3>
									<div className={position + 1 === 5 ? "d-none" : ""}>
										<button
											onClick={() => {
												aumentarPuntos();
												siguientePregunta();
											}}
											className="btn btn-success">
											Siguiente ✅
										</button>
									</div>
									<div className={position + 1 === 5 ? "d-block" : "d-none"}>
										<button
											onClick={() => {
												console.log("tus puntos sonnn:" + puntos);
												actions.putEditarPuntos(puntos);
												setHome(true);
											}}
											className="btn btn-success">
											Siguiente ✅{home == true ? <Redirect to="/top" /> : ""}
										</button>
									</div>
								</div>
							</div>
							<div className="col-10 align-self-center text-center ">
								{/* BOTON 1 */}
								<button
									disabled={disableBtn}
									onClick={() => {
										console.log("tu respuesta es" + btn1);
										respuestaCorrectaVerific(
											respuestaC == 1
												? store.preguntasYresp[position].respuesta[0].opcion_correcta
												: respuestaC == 2
													? store.preguntasYresp[position].respuesta[0].opcion_b
													: respuestaC == 3
														? store.preguntasYresp[position].respuesta[0].opcion_c
														: ""
										);
										handleClick;
									}}
									className="btn btn-primary border m-3">
									{respuestaC == 1
										? store.preguntasYresp[position].respuesta[0].opcion_correcta
										: respuestaC == 2
											? store.preguntasYresp[position].respuesta[0].opcion_b
											: respuestaC == 3
												? store.preguntasYresp[position].respuesta[0].opcion_c
												: ""}
								</button>
								{/* BOTON 2 */}
								<button
									disabled={disableBtn}
									onClick={() => {
										console.log("tu respuesta es" + btn2);
										respuestaCorrectaVerific(
											respuestaC == 1
												? store.preguntasYresp[position].respuesta[0].opcion_c
												: respuestaC == 3
													? store.preguntasYresp[position].respuesta[0].opcion_b
													: respuestaC == 2
														? store.preguntasYresp[position].respuesta[0].opcion_correcta
														: ""
										);
										handleClick;
									}}
									className="btn btn-primary border  mx-sm-3 m-3">
									{respuestaC == 1
										? store.preguntasYresp[position].respuesta[0].opcion_c
										: respuestaC == 3
											? store.preguntasYresp[position].respuesta[0].opcion_b
											: respuestaC == 2
												? store.preguntasYresp[position].respuesta[0].opcion_correcta
												: ""}
								</button>
								{/* BOTON 3 */}
								<button
									disabled={disableBtn}
									onClick={() => {
										console.log("tu respuesta es" + btn3);
										respuestaCorrectaVerific(
											respuestaC == 1
												? store.preguntasYresp[position].respuesta[0].opcion_b
												: respuestaC == 2
													? store.preguntasYresp[position].respuesta[0].opcion_c
													: respuestaC == 3
														? store.preguntasYresp[position].respuesta[0].opcion_correcta
														: ""
										);
										handleClick;
									}}
									className="btn btn-primary border m-3">
									{respuestaC == 1
										? store.preguntasYresp[position].respuesta[0].opcion_b
										: respuestaC == 2
											? store.preguntasYresp[position].respuesta[0].opcion_c
											: respuestaC == 3
												? store.preguntasYresp[position].respuesta[0].opcion_correcta
												: ""}
								</button>
							</div>
						</div>

						<div className="col-3">
							<button className="btn btn-danger">Salir</button>
							<div className={"mt-3 p-2 pb-3 d-flex justify-content-between " + fondo}>
								<p className="align-middle mt-3 pl-3 h4">Tiempo: </p>
								<p className="align-middle mt-3 px-0 h4 text-dark">{num} </p>
								<img
									className="w-25 pr-3 py-2"
									src="https://ayuda.mascaradelatex.com/hc/article_attachments/1500004826121/reloj.gif"
								/>{" "}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
