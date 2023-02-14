import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillYoutube,
} from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.scss"

const Footer = () => {
	return (
		<section className="footer__container py-5">
			<div className="footer__sub-container container my-3">
				<div className="about__us-wrap">
					<h3>About Us</h3>
					<p className="text w-75">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
						ipsam.
					</p>
					<div className="footer__icons-wrap">
						<a href="#">
							<BsFacebook />
						</a>
						<a href="#">
							<AiFillTwitterCircle />
						</a>
						<a href="#">
							<AiFillInstagram />
						</a>
						<a href="#">
							<AiFillYoutube />
						</a>
					</div>
					<span className="text mt-1">copyright 2023</span>
				</div>

				<div className="footer__products">
					<h3 className="head__text">Product</h3>
					<ul className="text">
						<li>Download </li>
						<li>Pricing</li>
						<li>Locations</li>
						<li>Server</li>
						<li>Countries</li>
					</ul>
				</div>
				<div className="footer__category">
					<h3 className="head__text">Category</h3>
					<ul className="text">
						<li>Men</li>
						<li>Women</li>
						<li>Best Seller</li>
						<li>Electronics</li>
						<li>New Arrivals</li>
					</ul>
				</div>
				<div className="footer__account">
					<h3 className="head__text">My Account</h3>
					<ul className="text">
						<li>My Account</li>
						<li>Discount</li>
						<li>Returns</li>
						<li>Order History</li>
						<li>Order Tracking</li>
					</ul>
				</div>
				<div className="footer__contact">
					<h3 className="head__text">Contact Us</h3>
					<div className="d-flex gap-2">
						<span>
							<BiLocationPlus />
						</span>
						<h4>Teshie Accra Ghana</h4>
					</div>
					<div className="d-flex gap-2">
						<span>
							<FaEnvelope />
						</span>
						<h4>mike@gmail.com</h4>
					</div>
					<div className="d-flex gap-2">
						<span>
							<FaPhone />
						</span>
						<h4>+000005637337</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
