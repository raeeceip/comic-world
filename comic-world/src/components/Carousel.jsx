import React from "react";
import Slider from "react-slick";

export default function Carousel({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="carousel">
			<Slider {...settings}>{children}</Slider>
		</div>
	);
}
