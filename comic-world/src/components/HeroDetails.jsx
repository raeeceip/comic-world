import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";

import { fetchHero } from "../libs/utils";

export default function HeroDetails() {
	let { id } = useParams();

	const [hero, setHero] = useState();

	let name;
	let description;
	let thumbnailPath;
	let thumbnailExtension;
	let thumbnailUrl;
	let series;

	useEffect(() => {
		fetchHero(id)
			.then((data) => setHero(data))
			.catch((err) => console.error(err));
	}, []);

	if (hero) {
		name = hero.data.results[0].name;
		description = hero.data.results[0].description;
		thumbnailPath = hero.data.results[0].thumbnail.path;
		thumbnailExtension = hero.data.results[0].thumbnail.extension;
		thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
		series = hero.data.results[0].series.items;
	}

	if (!hero)
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

	return (
		<div className="container large">
			<div className="hero__details-container">
				<img src={thumbnailUrl} alt="hero image full size" />
				<div className="hero__details">
					<h4>Name</h4>
					<p>{name}</p>
					{description ? (
						<>
							<h4>Description</h4>
							<p>{description}</p>
						</>
					) : null}
					<div className="hero__series">
						<h4>Appears in:</h4>
						<ul>
							{series
								? series.map((title) => (
										<li key={Math.random() * 1000}>{title.name}</li>
								  ))
								: null}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
