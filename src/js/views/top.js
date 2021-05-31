import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Top = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0 mx-0 mt-5">
			<h1 className="text-center my-3">Top</h1>
			<div className="container">
				<div className="contenedorTop">
					{/* Aqui mapeamos el top */}
					<div className="w-100 row desenfoque mb-2">
						<div className="col-3">
							<img
								className="w-75"
								src="https://image.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58482.jpg"
							/>
						</div>
						<div className="col-6 d-flex align-items-center">
							<h3 className="h2">Martin Coimbra</h3>
						</div>
						<div className="col-3 d-flex align-items-center">
							<h3 className="text-danger h1">2000 💎</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
