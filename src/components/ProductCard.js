import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  return (
    <>
    <li className= "card">
    <Link to={`/products/${product.id}`} className="no-underline" >
    <div className="product-image">
      <img src={product.image} alt={product.name} className="product-image"/>
    </div>
    <div className="product-card-details">
      <div className= "product-card-name">
      <h1>{product.name}</h1>
      </div>
      <p>${product.price}</p>
    </div>
    </Link>
    </li>
  </>
  )
}