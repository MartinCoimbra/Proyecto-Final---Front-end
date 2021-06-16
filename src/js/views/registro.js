import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [passValidacion2, setPassValidacion2] = useState();
	const [contra, setContra] = useState(false);
	return (
		<div className="card bg-dark text-center text-white">
			<div className="card-img-overlay mt-5">
				<h5 className="card-title h2">Registro</h5>
				<p className="card-text">¡Es hora de aprender!</p>
				<div className="row justify-content-center form-group">
					{/* Email */}
					<div className="col-12 col-sm-5">
						<p className="text-left">Email</p>
						<input
							onChange={actions.registroData}
							name="email"
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-12 col-sm-5">
						<p className="text-left">Username</p>
						<input
							onChange={actions.registroData}
							name="username"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="row justify-content-center form-group">
					<div className="col-12 col-sm-5">
						<p className="text-left">Contraseña</p>
						<input
							onChange={actions.registroData}
							name="password"
							type="password"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-12 col-sm-5">
						<p className="text-left">Confirme Contraseña</p>
						<input
							onChange={e => setPassValidacion2(e.target.value)}
							name="password2"
							type="password"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="row justify-content-center form-group">
					<div className="col-12 col-sm-5">
						<p className="text-left">Nombre</p>
						<input
							onChange={actions.registroData}
							name="first_name"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-12 col-sm-5">
						<p className="text-left">Apellido</p>
						<input
							onChange={actions.registroData}
							name="last_name"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					{/* AQUI VA EL CAPTCHAT */}
				</div>
				<div className="row justify-content-center form-group">
					<div className="col-12 col-sm-5">
						<p className="text-left">Url foto</p>
						<input
							onChange={actions.registroData}
							name="urlfoto"
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="col-12 col-sm-5">
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">¡Cuentanos de ti!</label>
							<textarea
								onChange={actions.registroData}
								name="descripcion"
								className="form-control textArea"
							/>
						</div>
					</div>
				</div>
				<div className="row justify-content-center form-group">
					<button
						onClick={() => {
							if (
								store.registroData.username === "" ||
								store.registroData.password === "" ||
								store.registroData.email === "" ||
								store.registroData.first_name === "" ||
								store.registroData.last_name === "" ||
								store.registroData.urlfoto === "" ||
								store.registroData.descripcion === ""
							) {
								Swal.fire({
									title: "¡Ups!",
									text: "❌ Complete los campos faltantes ❌",
									icon: "error",
									confirmButtonText: "Ok"
								});
							} else if (store.registroData.email.includes("@") === false) {
								Swal.fire({
									title: "¡Ups!",
									text: "❌ Ingrese un correo valido ❌",
									icon: "error",
									confirmButtonText: "Ok"
								});
							} else if (passValidacion2 != store.registroData.password) {
								Swal.fire({
									title: "¡Ups!",
									text: "Las contraseñas no son iguales 😣",
									icon: "error",
									confirmButtonText: "Ok"
								});
							} else if (passValidacion2 === store.registroData.password) {
								if (store.registroData.password.length <= 7) {
									Swal.fire({
										title: "¡Ups!",
										text: "La contraseña es muy corta 😅 Nota: minmo 8 caracteres",
										icon: "warning",
										confirmButtonText: "Ok"
									});
								}
							} else {
								actions.postRegistro();
							}
						}}
						className="btn btn-primary mr-3">
						Aceptar
					</button>

					<Link to="/">
						<button className="btn btn-secondary ">Cancelar</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
