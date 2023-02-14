import React from "react";
import "./collection.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchProducts,
	fetchCategories,
	fetchLimit,
} from "../../features/products/productSlice";
import { useEffect, useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import Products from "../Products/Products";
import Loading from "../Loading/Loading";

const Collection = () => {
	const dispatch = useDispatch();
	const { products, isLoading, categories } = useSelector(
		(store) => store.products,
	);
	// console.log(products);

	// UseEffect For fetchProducts
	useEffect(() => {
		dispatch(fetchProducts("random"));
	}, []);

	// UseEffect For fetchCategories
	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	if (isLoading) {
		return (
			<main className="py-5">
				<Loading />
			</main>
		);
	}

	return (
		<section className="collection__container">
			<div className="collection__wrap">
				<div className="title ">
					<h3>COLLECTION</h3>
					<h1>Our Top Collection</h1>
				</div>

				<div className="category__wrap">
					<div className="category__content">
						{categories.map((category, index) => {
							return <Buttons key={index} category={category} index={index} />;
						})}
					</div>
				</div>
				<div>
					<div className="card__container pb-5">
						{products.map((product) => {
							return <Products key={product.id} product={product} />;
						})}
					</div>
					<div className="select_wrap my-4">
						<select
							className="select"
							onChange={(e) => {
								const limit = parseInt(
									e.target.options[e.target.options.selectedIndex].innerText,
								);
								dispatch(fetchLimit(limit));
							}}
						>
							<option value="0">select</option>
							<option value="20">20</option>
							<option value="16">16</option>
							<option value="12">12</option>
							<option value="8">8</option>
							<option value="4">4</option>
						</select>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collection;
