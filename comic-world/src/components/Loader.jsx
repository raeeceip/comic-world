import React from "react";
import { useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="hero_loader">
			<Puff
				height="80"
				width="80"
				radisu={1}
				color=" rgb(69, 126, 249)"
				ariaLabel="puff-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<h1>Fetching Hero</h1>
		</div>
	);
};
export default Loader;
