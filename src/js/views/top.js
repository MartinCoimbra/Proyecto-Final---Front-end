import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Top = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0 mx-0 mt-5">
			{/* https://github.com/MartinCoimbra/MartinCoimbra/blob/main/top.gif?raw=true */}
			<img className="w-100" src="https://github.com/MartinCoimbra/MartinCoimbra/blob/main/top.gif?raw=true" />
			<div className="containerfluid pt-5 fondoTop">
				<div className="container">
					<div className="contenedorTop fondoTop">
						{/* Aqui mapeamos el top */}
						<div className="w-100 row fondoPerson mx-0 px-0 py-3 mb-2">
							<div className="col-3">
								<img
									className="w-75 rounded rounded-circle"
									src="https://image.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58482.jpg"
								/>
							</div>
							<div className="col-6 d-flex text-light align-items-center">
								<h3 className="h2">Martin Coimbra</h3>
							</div>
							<div className="col-3 d-flex align-items-center">
								<h3 className="text-danger h1">2000 💎</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
