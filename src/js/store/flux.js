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
			registroData: {},
			loginData: {},
			infoProfile: {} /* Info del usuario logueado */,
			registroFake: false
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
						}
					})
					.catch(error => console.log(error));
			},
			loginData: e => {
				/* Guardamos los datos del usuario que quiere hacer login */
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...dataCapt } });
			},
			registroData: e => {
				/* Guardamos los datos del usuario que se quiere registrar */
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ registroData: { ...getStore().registroData, ...dataCapt } });
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
						console.log("entre" + resp);
						setStore({ registrado: true });
					})
					.catch(error => {
						console.log(error);
						setStore({ registroFake: true });
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
			actionRemove: () => {
				localStorage.removeItem("token");
				setStore({ logeado: false });
				setStore({ infoProfile: {} });
			}
		}
	};
};

export default getState;
