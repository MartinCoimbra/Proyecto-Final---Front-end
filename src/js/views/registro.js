import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="card bg-dark text-center text-white">
				<img
					height="650px"
					src="https://i.pinimg.com/originals/d1/17/88/d11788e6dc8943bc0cd439b21549729d.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay desenfoque ">
					<h5 className="card-title mt-4 h2">Registro</h5>
					<p className="card-text">¡Es hora de aprender!</p>
					<div className="row justify-content-center form-group">
						{/* Email */}
						<div className="col-5">
							<p className="text-left">Email</p>
							<input
								onChange={actions.registroData}
								name="email"
								type="email"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
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
						<div className="col-5">
							<p className="text-left">Contraseña</p>
							<input
								onChange={actions.registroData}
								name="password"
								type="password"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
							<p className="text-left">Contraseña confirmacion</p>
							<input
								/* onChange={actions.registroData} */
								name="password2"
								type="password"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<div className="col-5">
							<p className="text-left">Nombre</p>
							<input
								onChange={actions.registroData}
								name="first_name"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
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
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">¡Cuentanos de ti!</label>
								<textarea
									onChange={actions.registroData}
									name="descripcion"
									className="form-control textArea"
									id="exampleFormControlTextarea1"
									rows="2"
								/>
							</div>
						</div>
					</div>
					<div className={store.registrado ? "d-block" : "d-none"}>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="h3 text-primary">¡Registro completado!</p>
							</div>
						</div>
					</div>
					<div className={store.registroFake ? "d-block" : "d-none"}>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="h3 text-danger">¡Complete todos los campos!</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<Link to="/">
							<button className="btn btn-secondary mr-3">Cancelar</button>
						</Link>
						<button
							onClick={() => {
								actions.postRegistro();
							}}
							className="btn btn-primary">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
