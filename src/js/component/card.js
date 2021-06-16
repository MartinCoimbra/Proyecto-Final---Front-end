import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function Cards(props) {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState(props.id);
	return (
		<div className="col-9 col-sm-6 col-md-4 mb-3">
			<div className="card bg-dark imgS text-white">
				<img src={props.img} className="card-img preguntadoMapH" alt="..." />

				<div className="card-img-overlay desenfoque2">
					<h5 className="card-title info bg-dark">{props.nombre}</h5>
					{/* LINK-s */}
					<div className="info">
						{/* Evento on click, al apretar ver mas fecht de ese preguntado ESPECIFICO */}
						<Link
							onClick={() => {
								actions.verpreguntadoE(id);
								actions.getComentariosDelPreguntado(id);
							}}
							to={"/infopreguntado/" + props.id}>
							<button className="btn btn-info mr-1">Ver más</button>
						</Link>
						<Link
							onClick={() => {
								store.logeado == false
									? Swal.fire({
											title: "¡Hey!",
											text: "¡Para jugar un preguntado tienes que loguearte!",
											icon: "info",
											confirmButtonText: "Ok"
									  })
									: actions.getPreguntasYresp(id);
							}}
							to={store.logeado == true ? "/cuentaregresiva" : "/login"}
							className="btn btn-success">
							Play
						</Link>
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
