import React from "react";

import { useState } from "react";

import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";
import Carousel from "./Carousel";

import { fetchHeros, fetchComics } from "../libs/utils";
import { comment } from "postcss";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
	const [heroes, setHeroes] = useState([]);
	const [comics, setComics] = useState([]);
	const [error, setError] = useState();

	let cards;

	const handleClick = async (e, args) => {
		e.preventDefault();
		if (args === "") return;

		try {
			return await fetchHeros(args);
		} catch (err) {
			return err;
		}
	};

	if (heroes) {
		cards = heroes.map((hero) => (
			<Card
				name={hero.name}
				key={hero.id}
				id={hero.id}
				thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
			/>
		));
	}
	/*
	if (comics) {
		cards = comics.map((comic) => (
			<Card
				name={comic.title}
				key={comic.id}
				id={comic.id}
				thumbnail={`${comic.thumbnail.path}/${IMG_FANTASTIC}.${comic.thumbnail.extension}`}
			/>
		));
	}
	*/

	return (
		<Container>
			<div className="title">
				<h1>Find Any Marvel Comic Here</h1>
			</div>
			<SearchBar
				handleClick={handleClick}
				setComics={setHeroes}
				setError={setError}
			/>
			<div>
				<Grid>{cards ? cards : error}</Grid>
			</div>
		</Container>
	);
}
