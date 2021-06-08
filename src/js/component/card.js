import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cards(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-4 mb-3">
			<div className="card bg-dark imgS text-white">
				<img src={props.img} className="card-img " alt="..." />
				<div className="card-img-overlay desenfoque2">
					<h5 className="card-title info">{props.nombre}</h5>
					<p className="card-text info">{props.descripcion}</p>
					{/* LINK-s */}
					<div className="info">
						{/* AQUI Acuerdate de intercalar el id segun el que seleciono */}
						<Link to={"/infopreguntado/" + props.id}>
							<button className="btn btn-info mr-1">Ver más</button>
						</Link>
						<button className="btn btn-success">Play</button>
					</div>
				</div>
			</div>
		</div>
	);
}
Cards.propTypes = {
	id: PropTypes.number,
	nombre: PropTypes.string,
	img: PropTypes.string,
	descripcion: PropTypes.string
};
