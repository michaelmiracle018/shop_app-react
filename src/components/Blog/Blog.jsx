import React from "react";
import "./blog.scss";
import blog_1 from "../../assets/images/blog-1.png";
import blog_2 from "../../assets/images/blog-2.png";
import blog_3 from "../../assets/images/blog-3.png";

const Blog = () => {
	return (
		<section className="section blog">
			<div className="title">
				<h3>BLOGS</h3>
				<h2>Latest News</h2>
			</div>

			<div className="blog__item container py-5">
				<div className="single__item container ">
					<div className="top">
						<img src={blog_1} alt="" />
					</div>
					<div className="bottom">
						<h3>Trendy</h3>
						<h4>
							Lorem Ispum is a placeholder text commomly used as a free text.
						</h4>
						<span>10 January 2021</span>
					</div>
				</div>
				<div className="single__item">
					<div className="top">
						<img src={blog_2} alt="" />
					</div>
					<div className="bottom">
						<h3>Trendy</h3>
						<h4>
							Lorem Ispum is a placeholder text commomly used as a free text.
						</h4>
						<span>10 January 2021</span>
					</div>
				</div>
				<div className="single__item">
					<div className="top">
						<img src={blog_3} alt="" />
					</div>
					<div className="bottom">
						<h3>Trendy</h3>
						<h4>
							Lorem Ispum is a placeholder text commomly used as a free text.
						</h4>
						<span>10 January 2021</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
