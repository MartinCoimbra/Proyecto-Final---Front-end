import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Registro } from "./views/registro";
import { Recuperarpass } from "./views/recuperarpass";
import { Acercade } from "./views/acercade";
import { Top } from "./views/top";
import { Infopreguntado } from "./views/infopreguntado";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
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
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
