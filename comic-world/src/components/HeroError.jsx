import React from "react";

export default function HeroError() {
	return (
		<div className="container large">
			<h1>
				This hero does not have a current comic iteration , and most likely
				appeared in:
			</h1>
			<ul>
				<li>Movies</li>
				<li>TV Shows</li>
				<li>Video Games</li>
				<li>And so on</li>
			</ul>

			<h2>Try another hero</h2>
		</div>
	);
}
