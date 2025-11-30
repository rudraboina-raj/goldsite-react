import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="btn">View</button>
      </Link>
    </div>
  );
}

export default ProductCard;
