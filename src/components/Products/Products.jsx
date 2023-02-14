import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./products.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/products/productSlice";
import { fetchSpecificCategory } from "../../features/products/productSlice";



const Products = ({ product }) => {
	const { id, image, title, price, category } = product;
	const dispatch = useDispatch();
	const { products } = useSelector((store) => store.products);

	const productItem = products.find((prod) => prod.id === product.id);



	const handleAddToCart = () => {
		dispatch(
			addToCart(product),
		);
	};

	return (
		<main className="container ">
			<div className="product_item">
				<div className="product_img ">
					<Link to={`/shop/${product.id}`} onClick={() => {
						dispatch(fetchSpecificCategory(category))
					}} >
						<img src={image} alt="" className="mt-4" />
					</Link>
				</div>
				<button className="shop_btn" onClick={() => handleAddToCart(id)}>
					<FaCartPlus className="cart_btn" />
				</button>
			</div>
			<footer className="product__footer px-2">
				<h5>{title.substring(0, 15)}...</h5>
				<h5>${price}</h5>
			</footer>
		</main>
	);
};

export default Products;
