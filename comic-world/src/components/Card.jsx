import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail, title }) {
	return (
		<Link to={`/${id}`}>
			<div className="card">
				<img src={thumbnail} alt="thumbnail" />
				<h1 className="card-name">{name}</h1>
				<h2 className="card-title">{title}</h2>
			</div>
			<div>
				<h1 className="card-name">{title}</h1>
			</div>
		</Link>
	);
}
