import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Registro } from "./views/registro";
import { Recuperarpass } from "./views/recuperarpass";
import { Acercade } from "./views/acercade";
import { Postpreguntado } from "./views/postpreguntado";
import { Top } from "./views/top";
import { Infopreguntado } from "./views/infopreguntado";
import { Juego } from "./views/juego";
import { Sabiasque } from "./views/sabiasque";
import { ScrollToTop } from "./component/ScrollToTop";
import { Error404 } from "./views/error404";

/* Privadas */
import { Perfil } from "./views/perfil";
import injectContext from "./store/appContext";
import { Editardatos } from "./views/editardatos";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cuentaregresiva } from "./views/cuentaRegresiva";
import { PayPal } from "./component/paypal";
import { PayPalV } from "./views/PaypalV";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Route exact path="/ScrollToTop">
					<ScrollToTop />
				</Route>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/registro">
						<Registro />
					</Route>
					<Route exact path="/recuperarpass">
						<Recuperarpass />
					</Route>
					<Route exact path="/acercade">
						<Acercade />
					</Route>
					<Route exact path="/top">
						<Top />
					</Route>
					<Route exact path="/infopreguntado/:id">
						<Infopreguntado />
					</Route>
					<Route exact path="/perfil">
						<Perfil />
					</Route>
					<Route exact path="/juego">
						<Juego />
					</Route>
					<Route exact path="/postpreguntado">
						<Postpreguntado />
					</Route>
					<Route exact path="/sabiasque">
						<Sabiasque />
					</Route>
					<Route exact path="/editardatos">
						<Editardatos />
					</Route>
					<Route exact path="/cuentaregresiva">
						<Cuentaregresiva />
					</Route>
					<Route exact path="/paypal">
						<PayPalV />
					</Route>
					<Route>
						<Error404 />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
