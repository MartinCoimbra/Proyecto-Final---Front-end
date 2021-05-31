import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Recuperarpass = () => {
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
					<h5 className="card-title mt-4 h2">Recuperar password</h5>
					<div className="row justify-content-center form-group">
						<div className="col-5">
							<p className="text-left">Email address</p>
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
							<Link to="/">
								<button className="btn btn-secondary mr-3">Cancelar</button>
							</Link>

							<button className="btn btn-primary">Aceptar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
