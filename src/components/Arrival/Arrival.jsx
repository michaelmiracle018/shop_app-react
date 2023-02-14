import React from "react";
import "./arrival.scss";
import poster_1 from "../../assets/images/poster-1.png";
import poster_2 from "../../assets/images/poster-2.png";
import poster_3 from "../../assets/images/poster-3.png";

const Arrival = () => {
	return (
		<section className="arrival__container">
			<div className="arrival__sub-container">
				<div className="title">
					<h3>NEW ARRIVAL</h3>
				</div>
				<div className="new__arrival container">
					<div className="single__item single__item-1">
						<img src={poster_1} alt="" />
						<h3>
							2021 Trends <br />
							Women’s Smart Skirt
						</h3>
					</div>
					<div className="single__item single__item-2">
						<img src={poster_2} alt="" />
						<h3>
							2021 Trends <br />
							Women’s Smart Skirt
						</h3>
					</div>
					<div className="single__item single__item-3">
						<img src={poster_3} alt="" />
						<h3>
							2021 Trends <br />
							Women’s Smart Shirt <br />
							<span>Discover More:</span>
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Arrival;
