import React from "react";
import products from "../data/products.json";

export default function Products() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
