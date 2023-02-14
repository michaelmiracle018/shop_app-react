import React from "react";
import { Link, useParams } from "react-router-dom";
import "./relatedProducts.scss";
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpecificCategory } from "../../features/products/productSlice";
import { useEffect } from "react";

const RelatedProducts = ({ specificCategory, addToCart }) => {
	const { id, image, title, price, category } = specificCategory;

	const dispatch = useDispatch();

	const { relatedCategory } = useSelector((store) => store.products);
	const productItem = relatedCategory.find(
		(prod) => prod.id === specificCategory.id,
	);

	const handleAddToCart = (id) => {
		dispatch(addToCart(specificCategory));
	};

	return (
        <main>
            
			<div className="related__product-item ">
				<div className="related__product-img ">
					<Link
						to={`/shop/${id}`}
						onClick={() => {
							dispatch(fetchSpecificCategory(category));
						}}
					>
						<img src={image} alt={title} className="mt-4" />
					</Link>
				</div>
				<button className="shop_btn" onClick={() => handleAddToCart(id)}>
					<FaCartPlus className="cart_btn" />
				</button>
			</div>
			<footer className="product__footer px-2 mb-5">
				<h5>{title.substring(0, 15)}...</h5>
				<h5>${price}</h5>
			</footer>
		</main>
	);
};

export default RelatedProducts;
