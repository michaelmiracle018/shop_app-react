import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
	// Auth for Login
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const handleLogin = (e) => {
		e.preventDefault();
		console.table(email, password);
		dispatch(loginUser({ email, password }));
	};

	return (
		<Helmet title="Login Account">
			<div>
				<main className="main">
					<div className="login__container">
						<section className="login__wrapper">
							<div className="heading">
								<h1 className="text text-large">Sign In</h1>
								<p className="text text-normal">
									New user?{" "}
									<span>
										<Link to="/register" className="text text-links">
											Create an account
										</Link>
									</span>
								</p>
							</div>

							<form name="signin" className="form" onSubmit={handleLogin}>
								<div className="input-control">
									<label htmlFor="email" className="input-label" hidden>
										Email Address
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="input-field"
										placeholder="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
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
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="input-control">
									<input
										type="submit"
										name="submit"
										className="input-submit"
										value="Sign In"
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
