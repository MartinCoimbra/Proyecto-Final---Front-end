import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export const Error404 = () => {
	const { store, actions } = useContext(Context);

	return (
		<img
			src="https://github.com/Niukeitor/imagenesPF/blob/main/404.png?raw=true"
			className="high-100% width-100%"
			alt="..."
		/>
	);
};
