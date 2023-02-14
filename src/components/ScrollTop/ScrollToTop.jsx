import React from "react";
import { FaAngleUp } from "react-icons/fa";
import "./scrollToTop.scss";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
		return () => window.addEventListener('scroll', null)
	});

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="top-to-btn">
			{showTopBtn && (
				<FaAngleUp className="icon-position icon-style" onClick={goToTop} />
			)}
		</div>
	);
};
export default ScrollToTop;
