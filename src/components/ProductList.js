import React from "react"
import ProductCard from "./ProductCard"

export default function ProductList({products}) {

  return (
    <ul className="cards">
      {products.map((product) => {
        <ProductCard key={product.id} product={product} />
      })}
    </ul>
  )
}