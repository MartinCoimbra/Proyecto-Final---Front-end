import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { PayPal } from "../component/paypal";

export function PayPalV() {
	const { store, actions } = useContext(Context);
	const [numCoin, setNumCoin] = useState(0);
	/*  */
	const [checkout, setCheckOut] = useState(false);
	return (
		<div className="container mt-2 pt-5">
			<div className="row justify-content-center mt-3 text-center">
				<div className="col-5 mt-5">
					<h1>PAYPAL</h1>
					<p>Ingrese la cantidad de coin que desea comprar</p>
					<p>
						Nota: cada coin equivale a 1 dolar <br />
						Cantidad de coin: {numCoin}
					</p>
					<input
						onChange={e => setNumCoin(e.target.value)}
						name="usd"
						type="number"
						className="form-control mb-3"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					{checkout ? (
						<PayPal numCoin={numCoin} />
					) : (
						<button
							onClick={() => {
								setCheckOut(true);
							}}
							className="btn btn-outline-primary mr-3 mt-4">
							PayPal
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
