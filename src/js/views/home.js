import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cards } from "../component/card";
import Swal from "sweetalert2";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center container-fluid px-0">
			<div>
				<img
					src="https://github.com/MartinCoimbra/MartinCoimbra/blob/main/fondojudiaO.jpg?raw=true"
					className="d-block w-100 slider px-0 mx-0"
					alt="..."
				/>
			</div>

			<div className="container">
				<div className="row mb-4 mt-1 bg-eblue text-white flex-column flex-sm-row align-items-center justify-content-between py-2">
					<div className="col-10 col-sm-4">
						<div className="form-group m-0">
							<select
								onChange={actions.filtradoTrue}
								className="form-control"
								name="categoria"
								id="examplesFormControlSelect1">
								<option value="0">Todos</option>

								{store.categorias.map(element => (
									<option key={element.value} value={element.id}>
										{element.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="col-10 my-3 my-sm-0 col-sm-3">
						<Link
							onClick={() => {
								let numTotal = store.preguntados.length;
								let numAleatorio = Math.floor(Math.random() * (numTotal - 1 + 1) + 1);
								actions.getPreguntasYresp(numAleatorio);
							}}
							to={store.logeado == true ? "/cuentaregresiva" : "/login"}
							className="btn btn-primary border m-0 w-100 text-white">
							Play!
						</Link>
					</div>
					<div className="col-10 col-sm-4">
						<Link
							onClick={() => {
								store.logeado == false
									? Swal.fire({
											title: "¡Hey!",
											text: "¡Para publicar un preguntado tienes que loguearte!",
											icon: "info",
											confirmButtonText: "Ok"
									  })
									: "";
							}}
							className="btn btn-primary m-0 border w-100"
							to={store.logeado == true ? "/postpreguntado" : "/login"}>
							Publicar un preguntado
						</Link>
					</div>
				</div>

				<div className="contenedor">
					<div className="row  flex-sm-row justify-content-center px-0 mx-0">
						{/* Mapeo de 5 preguntados. aleatorio, Nota:Mapear segun la categoria seleccionada luego */}
						{store.preguntados.map((element, i) => {
							return (
								<Cards
									key={element.id}
									id={element.id}
									nombre={element.nombre}
									img={element.url_foto}
									descripcion={element.descripcion}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
