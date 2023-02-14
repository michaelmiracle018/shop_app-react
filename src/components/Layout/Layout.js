import React from "react";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "../ScrollTop/ScrollToTop";

const Layout = () => {
	return (
		<div>
			<div>
				<Routes />
			</div>
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Layout;
