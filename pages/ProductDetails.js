import React from "react"
import { useParams } from "react-router-dom"


export default function ProductDetails() {

  
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  )
}