import React from "react";
import "./hero.scss";
import roundLogo from "../../assets/svg/Ellipse 6.svg";
import woman from "../../assets/images/woman-in-cart.png";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero__container">
			<div className="hero__sub-container">
				<div className="hero__left">
					<p>Limited Time Only For Buyers</p>
					<h2 className="my-3">Great Products</h2>
					<h4>Get The Best Available Products</h4>
					<Link to='/shop'>
						<button className="">Explore more</button>
					</Link>
				</div>
				<div className="hero__right pt-3">
					<img src={roundLogo} alt="roundLogo" className="round__img" />
					<picture>
						<img src={woman} alt="" />
					</picture>
				</div>
			</div>
		</div>
	);
};

export default Hero;
