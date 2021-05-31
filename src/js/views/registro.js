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
					height="600px"
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
							<p className="text-left">Email address</p>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
							<p className="text-left">Username</p>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<div className="col-5">
							<p className="text-left">Password</p>
							<input
								type="password"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
							<p className="text-left">Password confirmacion</p>
							<input
								type="password"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<div className="col-5">
							<p className="text-left">Nombre</p>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="col-5">
							<p className="text-left">Apellido</p>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						{/* AQUI VA EL CAPTCHAT */}
					</div>
					<div className="row justify-content-center form-group">
						<Link to="/">
							<button className="btn btn-secondary mr-3">Cancelar</button>
						</Link>

						<button className="btn btn-primary">Aceptar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
