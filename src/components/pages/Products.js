import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

function Products() {
  return (
    <div>
      <h2 style={{ padding: 20 }}>Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
