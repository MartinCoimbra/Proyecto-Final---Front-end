import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Cuentaregresiva = () => {
	const { store, actions } = useContext(Context);
	/* re direct a /juego cuando el contados sea 0 */
	const [num, setNum] = useState(5);
	const [pause, setPause] = useState(false);
	let intervalRef = useRef();

	const decreaseNum = () => setNum(prev => prev - 1);
	useEffect(() => {
		setPause(false);
		intervalRef.current = setInterval(decreaseNum, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	if (num === 0) {
		clearInterval(intervalRef.current);
	}

	return (
		<div className="container-fluid text-center px-0 mx-0 mt-5">
			{store.logeado === false ? <Redirect to="/" /> : ""}
			<div className="row justify-content-center py-5">
				<div className="col-5 my-5">
					<h2 className="text-white text-center display-3">¿ESTAS LIST@?</h2>
					<p className="my-5 p-5 display-1"> {num} </p>
					{num == 0 ? <Redirect to="/juego" /> : ""}
				</div>
			</div>
		</div>
	);
};
