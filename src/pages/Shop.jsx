import React from "react";
import { carousel } from "../assets/helper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../styles/shop.scss";
import Collection from "../components/Collection/collection";
import Helmet from "../components/Helmet/Helmet";

const Shop = () => {
	return (
		<Helmet title="Shop">
			<div className="shop__container">
				<div className="shop__sub-container">
					<article className="carousel__section">
						<Splide
							options={{
								perPage: 1,
								arrows: true,
								pagination: true,
								drag: "free",
							}}
							className="splide__arrows splide__arrows--ltr"
						>
							{carousel.map((item) => {
								const { id, image } = item;
								return (
									<SplideSlide key={id}>
										<div className="image__carousel mb-4">
											<img src={image} alt="hero" />
										</div>
									</SplideSlide>
								);
							})}
						</Splide>
					</article>
					<section className="shop__products py-5">
						<div className="shop__product-wrap">
							<Collection />
						</div>
					</section>
				</div>
			</div>
		</Helmet>
	);
};

export default Shop;
