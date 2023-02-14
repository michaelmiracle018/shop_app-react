import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logoNav from "../../assets/images/logo-design.png";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { links } from "../../assets/helper";

const Nav = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const linksNav = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	});

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (
	// 			document.body.scrollTop > 50 ||
	// 			document.documentElement.scrollTop > 50
	// 		) {
	// 			linksNav.current.classList.add("header__shrink");
	// 		} else {
	// 			linksNav.current.classList.remove("header__shrink");
	// 		}
	// 	});

	// 	return () => window.removeEventListener("scroll", null);
	// }, []);

	return (
		<>
			<main >
				<nav>
					<div className="nav-center">
						<div className="nav-header">
							<img src={logoNav} className="logo" alt="logo" />
							<button
								className="nav-toggle"
								onClick={() => setShowLinks(!showLinks)}
							>
								{showLinks ? <FaTimes /> : <FaBars />}
							</button>
						</div>

						<div className="links-container" ref={linksContainerRef}>
							<ul className="links" ref={linksRef}>
								{links.map((link) => {
									const { id, url, text } = link;
									return (
										<li key={id}>
											<NavLink
												className={({ isActive }) => {
													return (isActive ? "active__link" : "");
												}}
												to={url}
											>
												{text}
											</NavLink>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</nav>
			</main>
		</>
	);
};

export default Nav;
