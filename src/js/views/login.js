import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card bg-dark text-center text-white">
			<div className="card-img-overlay desenfoque mt-5">
				<h5 className="card-title mt-4 h2">Iniciar sesión</h5>
				<p className="card-text">¡Es hora de aprender!</p>
				<div className="row justify-content-center form-group">
					{/* Email */}
					<div className="col-12 col-sm-5">
						<p className="text-left">Email</p>
						<input
							onChange={actions.loginData}
							name="email"
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="row justify-content-center form-group">
					{/* Email */}
					<div className="col-12 col-sm-5">
						<p className="text-left">Contraseña</p>
						<input
							onChange={actions.loginData}
							name="password"
							type="password"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<Link to="/recuperarpass">
							<a className="text-right d-block text-white ">Olvide mi password</a>
						</Link>
					</div>
				</div>
				<div className="row justify-content-center form-group">
					<button
						onClick={() => {
							if (store.loginData.email === "" || store.loginData.password === "") {
								Swal.fire({
									title: "¡Heeeey!",
									text: "Para poder loguearse tienes que ingresar tu correo y contraseña 🤓",
									icon: "warning",
									confirmButtonText: "Ok"
								});
							} else if (store.loginData.email != "" || store.loginData.password != "") {
								actions.login();
							} else {
								Swal.fire({
									title: "¡Ups!",
									text: "Ingrese un usuario vlaido 😣",
									icon: "error",
									confirmButtonText: "Ok"
								});
							}
						}}
						className="btn btn-primary mr-3">
						Aceptar
						{store.logeado == true ? <Redirect to="/" /> : ""}
					</button>

					<Link to="/">
						<button className="btn btn-secondary ">Cancelar</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
