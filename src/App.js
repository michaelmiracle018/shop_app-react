import React from "react";
import Layout from "./components/Layout/Layout";
import { calculateTotals } from "./features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "./components/Modal/Modal";

const App = () => {
	const { cartBag } = useSelector((store) => store.products);
	const { isOpen } = useSelector((store) => store.modal);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartBag]);
	return (
		<div>
			{isOpen && <Modal />}
			<Layout />
			<ToastContainer />
		</div>
	);
};

export default App;
