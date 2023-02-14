import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/singleProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct } from "../features/products/productSlice";
import { addToCart } from "../features/products/productSlice";
// import RelatedProducts from "../components/UI/RelatedProducts";
import Helmet from "../components/Helmet/Helmet";
import Loading from "../components/Loading/Loading";
import RelatedProduct from "../components/RelatedProducts/RelatedProduct";

const SingleProduct = () => {
	const { id } = useParams();

	const { singleProduct, isLoading, relatedCategory } = useSelector(
		(store) => store.products,
	);
	// console.log(relatedCategory);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleProduct(parseInt(id)));
	}, [id]);

	const handleAddToCart = (id) => {
		dispatch(addToCart(singleProduct));
	};

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<Helmet title={`${singleProduct.title.substring(0,17)}.../${id}`}>
			<main className=" single_product_section my-5 py-5">
				<div className="single_item container ">
					<div className="single_item_img">
						<img src={singleProduct.image} alt="" />
					</div>
					<div className="single_product_info mt-5 ">
						<h1>{singleProduct.title}</h1>
						<h4>price : $ {singleProduct.price}</h4>
						<h3>Some Info About Product :</h3>
						<p>{singleProduct.description}</p>
						<div className="single_item_btn">
							<Link to="/shop">
								<button>Back To Product</button>
							</Link>
							<button onClick={() => handleAddToCart(id)}>Add To Cart</button>
						</div>
					</div>
				</div>

				<div className="similar_product">
					<h1 className="pt-5 text-center">Similar Products</h1>
					<div className="card__container  container  pb-5 ">
						{relatedCategory.map((item) => {
							return (
								<RelatedProduct
									key={item.id}
									specificCategory={item}
									addToCart={addToCart}
								/>
							);
						})}
					</div>
				</div>
			</main>
		</Helmet>
	);
};

export default SingleProduct;
