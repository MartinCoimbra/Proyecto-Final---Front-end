import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="card bg-dark text-center text-white">
				<img
					height="600px"
					src="https://i.pinimg.com/originals/d1/17/88/d11788e6dc8943bc0cd439b21549729d.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay desenfoque ">
					<h5 className="card-title mt-4 h2">Iniciar sesión</h5>
					<p className="card-text">¡Es hora de aprender!</p>
					<div className="row justify-content-center form-group">
						{/* Email */}
						<div className="col-12 col-sm-5">
							<p className="text-left">Email</p>
							<input
								onChange={actions.loginData}
								name="email"
								type="text"
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
								<a className="text-right d-block">Olvide mi password</a>
							</Link>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<Link to="/">
							<button className="btn btn-secondary mr-3">Cancelar</button>
						</Link>

						<button
							onClick={() => {
								actions.login();
							}}
							className="btn btn-primary">
							Aceptar
							{store.logeado == true ? <Redirect to="/" /> : ""}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
