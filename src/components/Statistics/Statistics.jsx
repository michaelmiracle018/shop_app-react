import React from "react";
import "./statistics.scss";
import { GiCheckMark } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCurrencyDollar, BsFillPersonFill } from "react-icons/bs";
// import { TbTruckDelivery } from "react-icons/tb";



const Statistics = () => {
	return (
		<section className="section statistics">
			<div className="title">
				<h3>Our Statistics</h3>
			</div>

			<div className="stat__wrap container">
				<div className="stat__item">
					<div className="icon">
						<GiCheckMark />
					</div>
					<h3>Easy Order System</h3>
					<p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
				</div>
				<div className="stat__item">
					<div className="icon">
						<TbTruckDelivery />
					</div>
					<h3>On Time Delievery</h3>
					<p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
				</div>
				<div className="stat__item">
					<div className="icon">
						<BsCurrencyDollar />
					</div>
					<h3>Money Back Gaurantee</h3>
					<p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
				</div>
				<div className="stat__item">
					<div className="icon">
						<BsFillPersonFill />
					</div>
					<h3>24/7 Customer Support</h3>
					<p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
