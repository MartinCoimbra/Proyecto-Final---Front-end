import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0 mx-0 mt-5 mt-sm-1">
			{store.logeado === false ? <Redirect to="/" /> : ""}

			<div className="container fondoperfil rounded my-5 py-3">
				<div className="row pt-4 pr-4 pl-4 mb-0 pb-0 justify-content-center justify-content-md-between">
					<div className="col-12 col-md-5 col-xl-3 ">
						<img
							src={store.infoProfile.urlfoto}
							className="rounded rounded-circle imgPersonPerfil w-100"
							alt="..."
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-8 d-flex align-items-start flex-column">
						<h3>
							{store.infoProfile.first_name + " "}
							{store.infoProfile.last_name}
						</h3>
						<div className="row m-auto w-100">
							<div className="col-12 col-md-10 col-lg-8 mt-3 border border-info bg-white comentMarcado p-3">
								<p className="p-0 m-0 ">{store.infoProfile.descripcion} ☕</p>
							</div>
							<div className="col-4 col-md-1 my-3 mt-md-0 d-flex align-self-end">
								<Link to="/editardatos">
									<p className="d-inline text-white">Editar</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-end col-md-1">
						<Link to="/">
							<button className="btn btn-outline-dark mr-3">Volver</button>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex d-lg-block col-md-3 px-0 mx-0 text-center">
						<p className="h3 d-flex d-md-block ml-5 text-danger">
							Coins: {store.coin}{" "}
							<img
								src="https://github.com/Niukeitor/imagenesPF/blob/main/monedita.png?raw=true"
								width="35px"
								className="mx-3"
							/>
						</p>
						<div className={store.coin > 0 ? "d-none" : "d-flex d-md-block float-left float-lg-none"}>
							<button
								onClick={() => {
									actions.postCoin();
								}}
								className="btn btn-success">
								Reclamar coin🟡
							</button>
						</div>
					</div>
					<div className="d-none d-lg-block col-md-9 mb-3">
						<p className="h4">Tus estadisticas</p>
						<div className="bg-white estadistica comentMarcado d-flex p-3">
							{/* Map de estadistias o de ultimas partidas */}
							<div className="align-self-end h-100 bg-warning px-2  mx-2">Geografia</div>
							<div className="align-self-end h-50 bg-success  px-2 mx-2">Matematica</div>
							<div className="align-self-end h-75 bg-danger  px-2 mx-2">Historia</div>
							<div className="align-self-end h-75 bg-info  px-2 mx-2">Entretenimiento</div>
							<div className="align-self-end h-100 bg-warning px-2  mx-2">Geografia</div>
							<div className="align-self-end h-50 bg-success  px-2 mx-2">Matematica</div>
							<div className="align-self-end h-75 bg-danger  px-2 mx-2">Historia</div>
							<div className="align-self-end h-75 bg-info  px-2 mx-2">Entretenimiento</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
