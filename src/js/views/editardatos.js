import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Editardatos = () => {
	const { store, actions } = useContext(Context);

	/* Antes de editar validar si existe el mail */
	const [email, setEmail] = useState(store.infoProfile.email);
	const [first_name, setFirst_name] = useState(store.infoProfile.first_name);
	const [last_name, setLast_name] = useState(store.infoProfile.last_name);
	const [password, setPassword] = useState(store.infoProfile.password);
	const [urlfoto, setUrlfoto] = useState(store.infoProfile.urlfoto);
	const [descripcion, setDescripcion] = useState(store.infoProfile.descripcion);
	/* store.infoProfile.username */

	useEffect(() => {
		setDataNew({
			email: email,
			first_name: first_name,
			last_name: last_name,
			password: password,
			urlfoto: urlfoto,
			descripcion: descripcion,
			username: store.infoProfile.username
		});
	});
	const [newDataUser, setDataNew] = useState({
		email: email,
		first_name: first_name,
		last_name: last_name,
		password: password,
		urlfoto: urlfoto,
		descripcion: descripcion,
		username: store.infoProfile.username
	});
	return (
		<div className="container-fluid  px-0 mx-0 mt-5">
			<div className="card bg-dark text-center text-white">
				<img
					height="650px"
					src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2016/10/photo-editing-WP.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title mt-4 h2">Edita tus datos</h5>
					<div className="row justify-content-center form-group">
						<div className="col-3">
							<p className="text-left">Nombre</p>
							<input
								onChange={e => setFirst_name(e.target.value)}
								name="first_name"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
								value={first_name}
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Apellido</p>
							<input
								onChange={e => setLast_name(e.target.value)}
								name="last_name"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
								value={last_name}
							/>
						</div>
						{/* AQUI VA EL CAPTCHAT */}
					</div>
					<div className="row justify-content-center form-group">
						{/* Email */}
						<div className="col-3">
							<p className="text-left">Email</p>
							<input
								onChange={e => setEmail(e.target.value)}
								name="email"
								type="email"
								className="form-control"
								aria-describedby="emailHelp"
								value={email}
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Url Foto</p>
							<input
								onChange={e => setUrlfoto(e.target.value)}
								name="urlfoto"
								type="urlfoto"
								className="form-control"
								aria-describedby="emailHelp"
								value={urlfoto}
							/>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<div className="col-3">
							<p className="text-left">Contraseña</p>
							<input
								onChange={e => setPassword(e.target.value)}
								name="password"
								type="password"
								className="form-control"
								aria-describedby="emailHelp"
								value={password}
							/>
						</div>
						<div className="col-3">
							<p className="text-left">Contraseña</p>
							<input
								onChange={e => setPassword(e.target.value)}
								name="password"
								type="password"
								className="form-control"
								aria-describedby="emailHelp"
								value={password}
							/>
						</div>
					</div>

					<div className="row justify-content-center form-group">
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">¡Cuentanos de ti!</label>
								<textarea
									onChange={e => setDescripcion(e.target.value)}
									name="descripcion"
									className="form-control textArea"
									id="exampleFormControlTextarea1"
									rows="2"
									value={descripcion}
								/>
							</div>
						</div>
					</div>
					<div className={store.registrado ? "d-block" : "d-none"}>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="h3 text-primary">¡Registro completado!</p>
							</div>
						</div>
					</div>
					<div className={store.registroFake ? "d-block" : "d-none"}>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="h3 text-danger">¡Complete todos los campos!</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center form-group">
						<Link to="/perfil">
							<button className="btn btn-secondary mr-3">Cancelar</button>
						</Link>
						<Link
							to="/perfil"
							onClick={() => {
								actions.putEditar(newDataUser);
							}}
							className="naranja">
							Editar
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
