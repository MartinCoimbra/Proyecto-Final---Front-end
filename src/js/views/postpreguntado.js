import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Postpreguntado = () => {
	const { store, actions } = useContext(Context);
	const [siguiente, setSiguiente] = useState(0);
	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="container mt-5 fondonew">
				<div className="row justify-content-center">
					<div className="col-8 text-center">
						<p className="h1">¡Publiquemos un preguntado!</p>
					</div>
				</div>
			</div>
			<div className={siguiente == 0 ? "container py-2 fondonew" : "d-none"}>
				{/* PONER SELECT CPARA SABER DE QUE CATEGORIA QUIERE QUE SEA */}
				<div className="row justify-content-center my-2">
					<div className="col-9">
						<p className="text-left h4">¿Sobre que trata tu preguntado?</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-3">
						<div className="form-group">
							<p className="text-left">Categoria de la tematica</p>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Geografia</option>
								<option>Matematica</option>
								<option>Historia</option>
								<option>Programacion</option>
							</select>
						</div>
					</div>
					<div className="col-3">
						<p className="text-left">Nombre de la tematica:</p>
						<input
							type="name"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-3">
						<p className="text-left">url de portada:</p>
						<input
							type="urlFoto"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-7">
						<p className="text-left">¡Cuentanos sobre esta tematica!</p>
						<div className="form-group ">
							<textarea className="form-control textArea" id="exampleFormControlTextarea1" rows="4" />
						</div>
					</div>
				</div>
				<div className="row justify-content-end mb-3">
					<button
						onClick={() => {
							setSiguiente(1);
						}}
						className="btn btn-success mr-5">
						Siguiente ✅
					</button>
				</div>
			</div>

			<div
				className={
					siguiente == 1 || siguiente == 2 || siguiente == 3 || siguiente == 4 || siguiente == 5
						? "d-block"
						: "d-none"
				}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p className="h3">¿Cuales van a ser tus preguntas?</p>
						</div>
					</div>
				</div>
			</div>
			<div className={siguiente == 1 ? "d-block" : "d-none"}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-9">
							<p className="text-left h4">Pregunta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-end mb-3">
						<button
							onClick={() => {
								setSiguiente(2);
							}}
							className="btn btn-success mr-5">
							Siguiente ✅
						</button>
					</div>
				</div>
			</div>
			<div className={siguiente == 2 ? "d-block" : "d-none"}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-9">
							<p className="text-left h4">Pregunta 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-end mb-3">
						<button
							onClick={() => {
								setSiguiente(3);
							}}
							className="btn btn-success mr-5">
							Siguiente ✅
						</button>
					</div>
				</div>
			</div>
			<div className={siguiente == 3 ? "d-block" : "d-none"}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-9">
							<p className="text-left h4">Pregunta 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-end mb-3">
						<button
							onClick={() => {
								setSiguiente(4);
							}}
							className="btn btn-success mr-5">
							Siguiente ✅
						</button>
					</div>
				</div>
			</div>
			<div className={siguiente == 4 ? "d-block" : "d-none"}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-9">
							<p className="text-left h4">Pregunta 4:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-end mb-3">
						<button
							onClick={() => {
								setSiguiente(5);
							}}
							className="btn btn-success mr-5">
							Siguiente ✅
						</button>
					</div>
				</div>
			</div>
			<div className={siguiente == 5 ? "d-block" : "d-none"}>
				<div className="container fondonew py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-9">
							<p className="text-left h4">Pregunta 5:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 2:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Opcion 3:</p>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-end mb-3">
						<button
							onClick={() => {
								setSiguiente(6);
							}}
							className="btn btn-success mr-5">
							Siguiente ✅
						</button>
					</div>
				</div>
			</div>
			<div className={siguiente == 6 ? "d-block" : "d-none"}>
				<div className="container mt-3 mb-3">
					<div className="row justify-content-center">
						<div className="col-5 text-center">
							<button className="btn btn-success p-4">
								<p className="h4">¡Publicar mi preguntado!</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
