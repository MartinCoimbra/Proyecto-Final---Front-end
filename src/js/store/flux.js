import { number, string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			logeado: false,
			registrado: false,
			filtrado: false,
			registroData: {},
			loginData: {},
			infoProfile: {} /* Info del usuario logueado */,
			registroFake: false,
			dataPreguntado: {},
			categorias: [{}],
			preguntados: [{}],
			preguntadoEs: [{}],
			catFiltrada: 0,
			comentarioData: {},
			comentariosDelPreguntado: [
				{
					id: 1,
					comentario: "",
					calificacion: 4,
					preguntados: 1,
					preguntado: {
						id: 1,
						nombre: "",
						descripcion: "",
						calificacion: 0,
						url_foto: "hg"
					},
					usuario: {
						id: 1,
						username: "",
						first_name: "",
						last_name: "",
						email: "",
						password: "",
						puntos: 0,
						descripcion: "s",
						urlfoto: "hg"
					}
				}
			],
			preguntasYresp: {},
			top: [{}],
			coin: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			login: () => {
				const dataEnviar = getStore().loginData;
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(dataEnviar) //Convertimos la data a JSON
				})
					.then(resp => resp.json())
					.then(resp => {
						/* Guardamos el token en el localStorage */
						localStorage.setItem("token", resp.token);
						if (resp.token !== undefined) {
							setStore({ logeado: true });
							setStore({ infoProfile: resp.user });
							/* getActions().getCoin() */
						}
					})
					.catch(error => console.log(error));
			},
			loginData: e => {
				/* Guardamos los datos del usuario que quiere hacer login */
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...dataCapt } });
			},
			preguntadoData: e => {
				if (e.target.name == "categoria") {
					let categorianew = parseInt(e.target.value);
					let dataCapt = { [e.target.name]: categorianew };
					setStore({ dataPreguntado: { ...getStore().dataPreguntado, ...dataCapt } });
				} else {
					let dataCapt = { [e.target.name]: e.target.value };
					setStore({ dataPreguntado: { ...getStore().dataPreguntado, ...dataCapt } });
				}
			},
			registroData: e => {
				/* Guardamos los datos del usuario que se quiere registrar */
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ registroData: { ...getStore().registroData, ...dataCapt } });
				if (e.target.name === "email" || e.target.name === "password") {
					let dataCapt = { [e.target.name]: e.target.value };
					setStore({ loginData: { ...getStore().loginData, ...dataCapt } });
				}
			},
			postRegistro: () => {
				const dataEnviar = getStore().registroData;
				fetch(process.env.BACKEND_URL + "/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(dataEnviar)
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ registrado: true });
					})
					.catch(error => {
						console.log(error);
						setStore({ registroFake: true });
					});
			},
			postPreguntado: () => {
				const dataEnviar = getStore().dataPreguntado;
				fetch(process.env.BACKEND_URL + "/preguntado", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(dataEnviar)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						getActions().getPreguntado();
					})
					.catch(error => {
						console.log(error + "Necesita estar login para post un preguntado");
					});
			},
			putEditar: newDataUser => {
				console.log(newDataUser);
				fetch(process.env.BACKEND_URL + "/editardatos", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(newDataUser)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ infoProfile: resp });
					})
					.catch(error => {
						console.log(error);
					});
			},
			getCategorias: () => {
				fetch(process.env.BACKEND_URL + "/categorias", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ categorias: resp });
					})
					.catch(error => console.log(error));
			},
			getPreguntado: () => {
				let preguntados;
				/* Para filtrar por cat tenes que editar la condicional de "/:id" */
				getStore().filtrado == false
					? (preguntados = "/preguntados")
					: (preguntados = "/preguntados/categoria/" + getStore().catFiltrada);

				getStore().filtrado == true ? console.log("filtrado") : console.log("NO");

				fetch(process.env.BACKEND_URL + preguntados, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ preguntados: resp });
					})
					.catch(error => console.log(error));
			},
			filtradoTrue: e => {
				setStore({ filtrado: true });
				setStore({ catFiltrada: e.target.value });
				getActions().getPreguntado();
			},
			verpreguntadoE: id => {
				console.log(id);
				fetch(process.env.BACKEND_URL + "/preguntadoE/" + id, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ preguntadoEs: resp });
						console.log(resp);
					})
					.catch(error => console.log(error));
			},
			comentarioData: e => {
				/* Guardamos datos del comentario */
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ comentarioData: { ...getStore().comentarioData, ...dataCapt } });
			},
			calificacionData: num => {
				/* Guardamos datos del comentario */
				let dataCapt = { calificacion: num };
				setStore({ comentarioData: { ...getStore().comentarioData, ...dataCapt } });
			},
			postComentario: () => {
				/*  comentarioData*/
				let numPreguntado = getStore().preguntadoEs[0].id;
				const dataEnviar = getStore().comentarioData;
				fetch(process.env.BACKEND_URL + "/preguntado/" + numPreguntado + "/comentario", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(dataEnviar)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
					})
					.catch(error => {
						console.log(error + "Necesita estar login para comentar");
					});
			},
			getComentariosDelPreguntado: id => {
				console.log("Comentarios del preguntado:" + id);
				fetch(process.env.BACKEND_URL + "/preguntado/" + id + "/comentario", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ comentariosDelPreguntado: resp });
					})
					.catch(error => console.log(error));
			},
			getPreguntasYresp: id => {
				console.log("el id es" + id);
				fetch(process.env.BACKEND_URL + "/preguntado/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ preguntasYresp: resp });
					})
					.catch(error => console.log(error));
			},
			getTop: () => {
				fetch(process.env.BACKEND_URL + "/top", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ top: resp });
					})
					.catch(error => console.log(error));
			},
			postCoin: () => {
				/* postCoin */
				fetch(process.env.BACKEND_URL + "/postCoin ", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						getActions().getCoin();
					})
					.catch(error => console.log(error));
			},
			getCoin: () => {
				/* /coin */
				fetch(process.env.BACKEND_URL + "/coin ", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ coin: resp[0].coins });
					})
					.catch(error => console.log(error));
			},
			putEditarPuntos: numPuntos => {
				let newPoin = getStore().infoProfile.puntos + numPuntos;
				console.log("Tus puntos en total eran:" + getStore().infoProfile.puntos + "--" + newPoin);
				let jsona = { puntos: newPoin };
				fetch(process.env.BACKEND_URL + "/editardatos", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(jsona)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						getActions().getTop();
					})
					.catch(error => {
						console.log(error);
					});
			},
			putCoinComodin: num => {
				let coinsTotal = { coins: getStore().coin - num };
				/* postCoin */
				console.log(coinsTotal);
				if (getStore().coin - num == 0) {
					coinsTotal = 1;
				}

				fetch(process.env.BACKEND_URL + "/coin", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(coinsTotal)
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().getCoin();
					})
					.catch(error => console.log(error));
			},
			actionRemove: () => {
				localStorage.removeItem("token");
				setStore({ logeado: false });
				setStore({ infoProfile: {} });
			}
		}
	};
};

export default getState;
