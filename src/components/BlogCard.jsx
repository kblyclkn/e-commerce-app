import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">25 Nisan, 2023</p>
          <h5 className="title">Güzel bir pazar sabahı rönesansı</h5>
          <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, placeat! Laboriosam rerum aliquid tempora quae magnam.</p>
          <Link className="button" to={"/"}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
