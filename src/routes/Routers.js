import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home to="/" />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<SingleProduct />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/order" element={<Order />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/*
				 */}
			</Routes>
		</Router>
	);
};

export default Routers;
