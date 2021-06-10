import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function PayPal(props) {
	const { store, actions } = useContext(Context);
	const paypal = useRef();

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
				},
				onError: err => {
					console.log(err);
					/* No se hizo la compra */
				}
			})
			.render(paypal.current);
	}, []);

	return (
		<div className="w-100 row border bg-white justify-content-center bg-white mb-5 p-5">
			<div ref={paypal} />
		</div>
	);
}
PayPal.propTypes = {
	numCoin: PropTypes.number
};
