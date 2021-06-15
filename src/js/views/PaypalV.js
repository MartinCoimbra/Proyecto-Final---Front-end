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
		<div className="container-fluid fondopaypal w-100 py-5">
			<div className="container py-5 my-5 ">
				<div className="row justify-content-center my-5 py-5 text-center">
					<div className="col-5 my-5 py-5 text-white fondoperfil tipografia">
						<img
							src="https://github.com/Niukeitor/imagenesPF/blob/main/paypal-logo-4.png?raw=true"
							width="250px"
							className="mb-4"
						/>
						<p className="h5">Ingrese la cantidad de coin que desea comprar</p>
						<p className="h5">
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
								className="btn btn-outline-dark mr-3 mt-4">
								Pagar
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
