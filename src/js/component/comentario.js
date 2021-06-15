import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function Comentario(props) {
	const { store, actions } = useContext(Context);
	const [calificacion, setCalificacion] = useState(store.comentariosDelPreguntado[props.posicion].calificacion);

	return (
		<div className="w-100 row border bg-white mx-0 px-0 mb-2">
			<div className="col-2 d-flex align-items-center justify-content-center">
				<img className="w-75" src={store.comentariosDelPreguntado[props.posicion].usuario.urlfoto} />
			</div>
			<div className="col-10 w-100 py-3">
				<div className="border p-3">
					<h4 className="text-info">
						{store.comentariosDelPreguntado[props.posicion].usuario.first_name + " "}
						{store.comentariosDelPreguntado[props.posicion].usuario.last_name}
					</h4>
					<p className="pl-3">{store.comentariosDelPreguntado[props.posicion].comentario}</p>
					<div className="col-12 text-right px-0 mb-0 mt-1 h4">
						<i
							className={
								calificacion === 1 ||
								calificacion === 2 ||
								calificacion === 3 ||
								calificacion === 4 ||
								calificacion === 5
									? "fas fa-star startActive"
									: "fas fa-star"
							}
						/>
						<i
							className={
								calificacion === 2 || calificacion === 3 || calificacion === 4 || calificacion === 5
									? "fas fa-star startActive"
									: "fas fa-star"
							}
						/>
						<i
							className={
								calificacion === 3 || calificacion === 4 || calificacion === 5
									? "fas fa-star startActive"
									: "fas fa-star"
							}
						/>
						<i
							className={
								calificacion === 4 || calificacion === 5 ? "fas fa-star startActive" : "fas fa-star"
							}
						/>
						<i className={calificacion === 5 ? "fas fa-star startActive" : "fas fa-star"} />
					</div>
				</div>
			</div>
		</div>
	);
}
Comentario.propTypes = {
	posicion: PropTypes.number
};
