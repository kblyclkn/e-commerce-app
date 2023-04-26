import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="whislist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="whislist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            className="img-fluid"
            src="images/watch.jpg"
            alt="product"
          />
          <img
            className="img-fluid"
            src="images/watch-1.jpg"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Çocuk kulaklıkları öğrenciler için 10 renk çeşidi ile.
          </h5>
          <ReactStars
            count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">2000 TL</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
