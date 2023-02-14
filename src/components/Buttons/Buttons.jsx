import React from "react";
import { useDispatch } from "react-redux";
import { fetchSpecificCategory } from "../../features/products/productSlice";
import './buttons.scss'

export const Buttons = ({ category,index }) => {
	const dispatch = useDispatch();

	return (
		<main className="button__container mb-3">
			<div className="button__wrap">
				<button
					className={`mt-3 p-2`}
					onClick={() => {
                        dispatch(fetchSpecificCategory(category));
                        
					}}
				>
					{category}
				</button>
			</div>
		</main>
	);
};
