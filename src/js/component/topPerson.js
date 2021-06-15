import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function Topperson(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="w-100 row fondoTopC2 mx-0 px-0 py-3 mb-2">
			<div className="col-3">
				<img className="w-75 rounded rounded-circle" src={props.urlfoto} />
			</div>
			<div className="col-6 d-flex text-light align-items-center">
				<h3 className="h2">
					{props.nombre + " "} {props.apellido}{" "}
				</h3>
			</div>
			<div className="col-3 d-flex align-items-center">
				<h3 className="text-danger h1">{props.puntos} 💎</h3>
			</div>
		</div>
	);
}
Topperson.propTypes = {
	nombre: PropTypes.string,
	apellido: PropTypes.string,
	urlfoto: PropTypes.string,
	puntos: PropTypes.number
};
