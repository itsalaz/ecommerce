import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  return (
    <>
    <Link to={`/products/${product.id}`}>
    <div className="product-image">
      <img src={product.image} alt={product.name} className="product-image"/>
    </div>
    <div className="product-card-details">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
    </Link>
  </>
  )
}