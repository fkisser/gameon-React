import React from "react";
import { MiniLoaderStyled } from "./loadersStyles";

const MiniLoader = () => {
	return (
		<MiniLoaderStyled>
			<div className="load1"></div>
			<div className="load2"></div>
			<div className="load3"></div>
		</MiniLoaderStyled>
	);
};

export default MiniLoader;
