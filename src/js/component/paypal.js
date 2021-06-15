import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";

export function PayPal(props) {
	const [numCoins, setNumCoins] = useState(parseInt(props.numCoin));
	const { store, actionss } = useContext(Context);
	const [irPerfil, setIrperfil] = useState(false);
	const [errorrr, setError] = useState(false);
	const paypal = useRef();

	const putCoint = num => {
		let numCoinAnterior = store.coin;
		const dataCoin = { coins: num + numCoinAnterior };
		fetch(process.env.BACKEND_URL + "/coin", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token")
			},
			body: JSON.stringify(dataCoin)
		})
			.then(resp => resp.json())
			.then(resp => {
				console.log(resp);
				setIrperfil(true);
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "Cool looking table",
								amount: {
									currency_code: "USD",
									value: props.numCoin
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();

					console.log(order);
					/* Se hizo la compra */
					if (order.status === "COMPLETED") {
						putCoint(numCoins);
					}
				},
				onError: err => {
					console.log(err);
					/* No se hizo la compra */
					setError(true);
				}
			})
			.render(paypal.current);
	}, []);

	return (
		<div className="w-100 row border bg-white justify-content-center bg-white mb-5 p-5">
			<div ref={paypal} />
			{errorrr == true ? <p className="h2 text-danger">Fallo la transaccion❗😥</p> : ""}
			{irPerfil == true ? <Redirect to="/" /> : ""}
		</div>
	);
}
PayPal.propTypes = {
	numCoin: PropTypes.number
};
