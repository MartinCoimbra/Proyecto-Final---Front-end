import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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

	const pauseA = () => {
		if (!pause) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(decreaseNum, 600);
		}
		setPause(prev => !prev);
	};

	/* Cuando llegue a 0 pausar */
	if (num == 0 || num < 0) {
		console.log("Pausa!");
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
			console.log(num2);
			if (num == 5) {
				setFondo("bg-danger");
			} else if (num == 3) {
				setFondo("bg-danger");
			} else if (num == 1) {
				setFondo("bg-danger");
			} else {
				setFondo("bg-white");
			}
		});
	}

	/* Cambio de color */

	return (
		<div className="container-fluid px-0 mx-0 mt-3">
			<div className="container desenfoque mt-5">
				<div className="row justify-content-between p-5">
					<div className="col-2">
						<button className="btn btn-danger">Salir</button>
					</div>
					<div className="col-8 text-center">
						<h1>Historia</h1>
					</div>
					<div className="col-2" />
					<div className="col-3">
						<p className="mt-3 p-2 bg-white">Puntos:</p>
						<p className="mt-3 p-2 bg-white">Partidas 1/5</p>
					</div>
					<div className="col-5 px-0 text-center">
						<img
							src="https://www.ecestaticos.com/image/clipping/af87059eaa01d0ce789779b415c78134/como-se-debe-ensenar-la-historia.jpg"
							className="figure-img img-fluid rounded w-75"
							alt="..."
						/>
					</div>
					<div className="col-3">
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
				<div className="row justify-content-center">
					<div className="col-6">
						<div className="cuadrodepregunta w-100 pt-2 pb-2 text-center">
							<p className="h4">¿Que paso el año 1882 en España?</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center pb-5 mt-2">
					<div className="col-3">
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
				</div>
				<div className="row justify-content-center pb-5 mt-2">
					<div className="col-5 d-flex justify-content-between">
						<button className="btn btn-primary">Opcion 1</button>
						<button className="btn btn-primary">Opcion 2</button>
						<button className="btn btn-primary">Opcion 3</button>
					</div>
				</div>
			</div>
		</div>
	);
};