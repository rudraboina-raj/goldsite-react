import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
