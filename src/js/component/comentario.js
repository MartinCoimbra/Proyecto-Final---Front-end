import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function Comentario(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="w-100 row border bg-white mb-2">
			<div className="col-2 d-flex align-items-center justify-content-center">
				<img className="w-75" src={store.comentariosDelPreguntado[props.posicion].usuario.urlfoto} />
			</div>
			<div className="col-8  w-100 py-3">
				<div className="border p-3">
					<h4 className="text-info">
						{store.comentariosDelPreguntado[props.posicion].usuario.first_name + " "}
						{store.comentariosDelPreguntado[props.posicion].usuario.last_name}
					</h4>
					<p className="pl-3">{store.comentariosDelPreguntado[props.posicion].comentario}</p>
					<div className="col-12 text-warning text-right px-0 h4">
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star-half-alt" />
					</div>
				</div>
			</div>
		</div>
	);
}
Comentario.propTypes = {
	posicion: PropTypes.number
};
