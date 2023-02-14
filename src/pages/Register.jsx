import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/login.scss";
import { registerUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
	// Auth for Login

	// Register User
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();
	const handleRegister = (e) => {
		e.preventDefault();
		console.log("hello");
		console.table(name, email, number, confirmPassword, password);
		dispatch(registerUser({ name, email, number, confirmPassword, password }));
	};

	return (
		<Helmet title="Register Account">
			<div>
				<main className="main">
					<div className="login__container">
						<section className="login__wrapper">
							<div className="heading">
								<h1 className="text text-large">Sign Up</h1>
								<p className="text text-normal">
									Already A User?{" "}
									<span>
										<Link to="/login" className="text text-links">
											Login in
										</Link>
									</span>
								</p>
							</div>
							<form name="signin" className="form" onSubmit={handleRegister}>
								<div className="input-control">
									<label htmlFor="email" className="input-label" hidden>
										Email Address
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="input-field"
										placeholder="Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<label htmlFor="email" className="input-label" hidden>
										Email Address
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="input-field"
										placeholder="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<label htmlFor="email" className="input-label" hidden>
										Email Address
									</label>
									<input
										type="number"
										name="email"
										id="email"
										className="input-field"
										placeholder="Number"
										value={number}
										onChange={(e) => setNumber(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<label htmlFor="email" className="input-label" hidden>
										Email Address
									</label>
									<input
										type="password"
										name="email"
										id="email"
										className="input-field"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<label htmlFor="password" className="input-label" hidden>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className="input-field"
										placeholder="Confirm Password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<input
										type="submit"
										name="submit"
										className="input-submit"
										value="Sign Up"
									/>
								</div>
							</form>
							<div className="striped">
								<span className="striped-line"></span>
								<span className="striped-text">Or</span>
								<span className="striped-line"></span>
							</div>
							<div className="method">
								<div className="method-control">
									<a href="#" className="method-action">
										<i className="ion ion-logo-google"></i>
										<span>Sign in with Google</span>
									</a>
								</div>
								<div className="method-control">
									<a href="#" className="method-action">
										<i className="ion ion-logo-facebook"></i>
										<span>Sign in with Facebook</span>
									</a>
								</div>
								<div className="method-control">
									<a href="#" className="method-action">
										<i className="ion ion-logo-apple"></i>
										<span>Sign in with Apple</span>
									</a>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
		</Helmet>
	);
};

export default Login;
