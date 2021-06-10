import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Topperson } from "../component/topPerson";

export const Top = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0 mx-0 mt-5">
			<img className="w-100" src="https://github.com/MartinCoimbra/MartinCoimbra/blob/main/top.gif?raw=true" />
			<div className="containerfluid pt-5 fondoTop">
				<div className="container">
					<div className="contenedorTop fondoTop">
						{/* Aqui mapeamos el top */}
						{store.top.map((element, i) => {
							return (
								<Topperson
									key={i}
									nombre={element.first_name}
									apellido={element.last_name}
									urlfoto={element.urlfoto}
									puntos={element.puntos}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
