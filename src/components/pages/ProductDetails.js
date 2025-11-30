import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
