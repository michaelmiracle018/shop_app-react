import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/products/productSlice";
import { openModal } from "../features/modal/modalSlice";
import Helmet from "../components/Helmet/Helmet";
import "../styles/order.scss";
import { Link } from "react-router-dom";

const Order = () => {
	const { cartBag, totalCartPrice } = useSelector((store) => store.products);

	const dispatch = useDispatch();

	if (cartBag.length < 1) {
		return (
			<div className="container my-5">
				<h1>Your Order Cart is Empty!!!</h1>
				<h3>Add To Cart To Place An Order.</h3>
			</div>
		);
	}

	return (
		<Helmet title="Order Summary">
			<div>
				<section className="main_container_order">
					<div className="sub_container">
						<div className="all_content">
							<section className="btn_container">
								<div className="left_btn_content">
									<button>
										<span>Order /</span> Summary
									</button>
								</div>
							</section>
							<section className="table_container">
								<div className="table_sub_container">
									<div className="thin-line-wrap">
										<div className="line"></div>
									</div>
									<div className="table_content">
										<table>
											<thead>
												<tr className="table_header_wrap">
													<th>Product Image</th>
													<th>Title</th>
													<th>Unit Price</th>
													<th>In-Stock</th>
													<th>Quantity</th>
													<th>Total Price</th>
												</tr>
											</thead>
											{cartBag.map((cart) => {
												const { id, image, title, price, quantity, rating } =
													cart;

												return (
													<tbody key={cart.id}>
														<tr className="table_list_wrap">
															<td
																data-label="Product Image"
																className="item_img"
															>
																<img src={image} alt="" />
															</td>
															<td data-label="Title">
																{title.substring(0, 15)}
															</td>
															<td data-label="Unit Price">$ {price}</td>
															<td data-label="In-Stock">
																{rating.count - cart.quantity}
															</td>
															<td data-label="Quantity">{quantity}</td>
															<td data-label="Total Price">
																$ {price * quantity}
															</td>
															<td className="table_btn">
																<button
																	onClick={() => dispatch(removeItem(id))}
																>
																	remove
																</button>
															</td>
														</tr>
													</tbody>
												);
											})}
										</table>
										<section>
											<div className="footer">
												<hr />
												<div className="total_cart">
													<h2>Total</h2>
													<h2>$ {totalCartPrice.toFixed(2)}</h2>
												</div>
												<div className="action_btn">
													<div>
														<button
															className="btn clear_btn"
															onClick={() => dispatch(openModal())}
														>
															clear Order
														</button>
													</div>
													<div>
														<Link to='/checkout'>
															<button className="btn clear_btn">
																Proceed To Checkout
															</button>
														</Link>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
		</Helmet>
	);
};

export default Order;
