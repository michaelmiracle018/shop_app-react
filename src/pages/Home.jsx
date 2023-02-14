import React from "react";
import Hero from "../components/Hero/Hero";
import Collection from "../components/Collection/collection";
import Arrival from "../components/Arrival/Arrival";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Helmet from "../components/Helmet/Helmet";

const Home = () => {
	return (
		<Helmet title="Home">
			<div>
				<Hero />
				<Arrival />
				<Statistics />
				<Blog />
			</div>
		</Helmet>
	);
};

export default Home;
