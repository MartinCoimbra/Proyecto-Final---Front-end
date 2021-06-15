import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Postpreguntado = () => {
	const { store, actions } = useContext(Context);
	const [siguiente, setSiguiente] = useState(0);
	const [home, setHome] = useState(false);

	/* Abria que cambiarlo value por id */
	/* const handleChange = event => {
		console.log(`Seleccionaste ${event.target.value}`);
	}; */
	return (
		<div className="container-fluid my-5 fondoperfil px-0 mx-0 mt-5">
			<div className="container mt-5 mb-2">
				<div className="row justify-content-center">
					<div className="col-8 text-center mt-5">
						<p className="h1">¡Publiquemos un preguntado!</p>
					</div>
				</div>
			</div>
			<div className={siguiente == 0 ? "container py-2 mb-4 fondoPerson" : "d-none"}>
				{/* PONER SELECT CPARA SABER DE QUE CATEGORIA QUIERE QUE SEA */}
				<div className="row justify-content-center my-2">
					<div className="col-9">
						<p className="text-left h4">¿Sobre que trata tu preguntado?</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
						<div className="form-group">
							<p className="text-left">Categoria de la tematica</p>
							<select
								onChange={actions.preguntadoData}
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
					<div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
						<p className="text-left">Nombre de la tematica:</p>
						<input
							onChange={actions.preguntadoData}
							name="nombre"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
						<p className="text-left">URL de la portada:</p>
						<input
							onChange={actions.preguntadoData}
							name="url_foto"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-md-12 col-lg-7 col-xl-7">
						<p className="text-left">¡Cuentanos sobre esta tematica!</p>
						<div className="form-group ">
							<textarea
								onChange={actions.preguntadoData}
								name="descripcion"
								className="form-control textArea"
								id="exampleFormControlTextarea1"
								rows="4"
							/>
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
				<div className="container py-4">
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p className="h3">¿Cuales van a ser tus preguntas?</p>
						</div>
					</div>
				</div>
			</div>
			<div className={siguiente == 1 ? "d-block" : "d-none"}>
				<div className="container my-5 fondoPerson py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-12 col-md-9">
							<p className="text-left h4">Pregunta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="pregunta"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 mt-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={actions.preguntadoData}
								name="url_foto_pregunta"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_correcta"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_b"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_c"
								type="text"
								className="form-control"
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
				<div className="container my-5 fondoPerson py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-12 col-md-9">
							<p className="text-left h4">Pregunta 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="pregunta2"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 mt-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={actions.preguntadoData}
								name="url_foto_pregunta2"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_correcta2"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_b2"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_c2"
								type="text"
								className="form-control"
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
				<div className="container my-5 fondoPerson py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-12 col-md-9">
							<p className="text-left h4">Pregunta 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="pregunta3"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 mt-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={actions.preguntadoData}
								name="url_foto_pregunta3"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_correcta3"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_b3"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_c3"
								type="text"
								className="form-control"
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
				<div className="container my-5 fondoPerson py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-12 col-md-9">
							<p className="text-left h4">Pregunta 4:</p>
							<input
								onChange={actions.preguntadoData}
								name="pregunta4"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 mt-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={actions.preguntadoData}
								name="url_foto_pregunta4"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_correcta4"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_b4"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_c4"
								type="text"
								className="form-control"
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
				<div className="container my-5 fondoPerson py-4">
					<div className="row justify-content-center mb-3">
						<div className="col-12 col-md-9">
							<p className="text-left h4">Pregunta 5:</p>
							<input
								onChange={actions.preguntadoData}
								name="pregunta5"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 mt-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={actions.preguntadoData}
								name="url_foto_pregunta5"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Respuesta correcta 1:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_correcta5"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 2:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_b5"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-12 col-md-9 col-lg-3 col-xl-3">
							<p className="text-left">Opcion 3:</p>
							<input
								onChange={actions.preguntadoData}
								name="opcion_c5"
								type="text"
								className="form-control"
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
				<div className="container my-5 mb-3">
					<div className="row justify-content-center">
						<div className="col-9 col-md-5 col-lg-5 col-xl-5 text-center">
							<button
								onClick={() => {
									actions.postPreguntado();
									setHome(true);
								}}
								className="btn btn-success p-4">
								<p className="h4">¡Publicar mi preguntado!</p>
								{home == true ? <Redirect to="/" /> : ""}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
