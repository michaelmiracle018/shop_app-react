import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cart.scss";
import emptyCartImage from "../assets/images/icon-empty.png";
import { clearCart } from "../features/products/productSlice";
import { openModal } from "../features/modal/modalSlice";
import Helmet from "../components/Helmet/Helmet";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
	const { cartBag, totalCartPrice } = useSelector((store) => store.products);
	const dispatch = useDispatch();
	//   console.log(totalCartPrice);

	if (cartBag.length < 1) {
		return (
		<Helmet title={`(${cartBag.length}) Cart Page`}>
			<div className="empty_wrap container my-5">
				<div className="empty_cart_wrap">
					<div className="empty_cart">
						<img src={emptyCartImage} alt="empty-cart" />
					</div>
					<div className="no_cart_text py-3">No Item Found Yet</div>
					<Link to="/shop">
						<button className="return_btn">Shop Products</button>
					</Link>
				</div>
				</div>
				</Helmet>
		);
	}

	return (
		<Helmet title={`(${cartBag.length}) Cart Page`}>
			<div className="container my-4">
				<section>
					{cartBag.map((cart) => {
						return <CartItem key={cart.id} {...cart} />;
					})}
				</section>

				<div className="footer">
					{/*<hr />
					<div className="total_cart">
						<h2>Total</h2>
						<h2>$ {totalCartPrice.toFixed(2)}</h2>
				</div>*/}
					<div className="action_btn">
						<div>
							<button
								className=" clear_btn"
								onClick={() => dispatch(openModal())}
							>
								Clear Cart
							</button>
						</div>
						<div>
							<Link to="/order">
								<button className=" clear_btn">Check Summary</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default Cart;
