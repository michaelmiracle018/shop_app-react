import React from "react";
import "./cartItem.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
	increaseCart,
	decreaseCart,
	removeItem,
} from "../../features/products/productSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ image, id, price, title, quantity }) => {
	const dispatch = useDispatch();

	return (
		<section className="cart_section container">
			<div>
				<article className="cart_item">
					<img src={image} alt="item.name" />
					<div>
						<h4>{title}</h4>

						<h4 className="item_price">${price * quantity}</h4>
						<button
							className="remove_btn"
							onClick={() => {
								dispatch(removeItem(id));
							}}
						>
							remove
						</button>
					</div>
					<div>
						<button
							className="icon_btn"
							onClick={() => {
								dispatch(increaseCart(id));
							}}
						>
							<FaPlus />
						</button>
						<p className="amount">{quantity}</p>
						<button
							className="icon_btn"
							onClick={() => {
								if (quantity === 1) {
									dispatch(removeItem(id));
									return;
								}
								dispatch(decreaseCart(id));
							}}
						>
							<FaMinus />
						</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default CartItem;
