import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.scss";
import { toast } from "react-toastify";
import { clearCart } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const [person, setPerson] = useState({
		name: "",
		email: "",
		number: "",
		country: "",
		city: "",
	});

	const navigate = useNavigate()

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
		console.log(name, value);
	};

	const dispatch = useDispatch();

	const shippingInfo = [];
	const { cartBag, totalCartPrice } = useSelector((store) => store.products);

	const shippingCost = 50;

	const totalAmount = (totalCartPrice + Number(shippingCost)).toFixed(2);

	const handlePayment = (e) => {
		e.preventDefault();
		if (cartBag.length > 0) {
			if (
				person.name &&
				person.email &&
				person.number &&
				person.country &&
				person.city
			) {
				dispatch(clearCart());
				toast.success("Thanks For Purchasing Our Items", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});

				setPerson({ name: "", email: "", number: "", country: "", city: "" });
				navigate('/')
			}
		}
		else {
			toast.success("Please Order A Product", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	return (
		<Helmet title="Checkout">
			<section className="py-5">
				<Container>
					<Row>
						<Col lg="8" md="6">
							<h6 className="mb-4">Shipping Address</h6>
							<form className="checkout__form" onSubmit={handlePayment}>
								<div className="form__group">
									<input
										type="text"
										placeholder="Enter your name"
										id="name"
										name="name"
										required
										value={person.name}
										onChange={handleChange}
									/>
								</div>

								<div className="form__group">
									<input
										type="email"
										placeholder="Enter your email"
										required
										id="email"
										name="email"
										value={person.email}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Phone number"
										required
										id="number"
										name="number"
										value={person.number}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="Country"
										required
										id="country"
										name="country"
										value={person.country}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="City"
										required
										id="city"
										name="city"
										value={person.city}
										onChange={handleChange}
									/>
								</div>
								<button type="submit" className="payment__btn">
									Payment
								</button>
							</form>
						</Col>

						<Col lg="4" md="6">
							<div className="checkout__bill">
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Subtotal: <span>${totalCartPrice}</span>
								</h6>
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Shipping:
									<span>${shippingCost}</span>
								</h6>
								<div className="checkout__total">
									<h5 className="d-flex align-items-center justify-content-between">
										Total:
										<span>${totalAmount}</span>
									</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;
