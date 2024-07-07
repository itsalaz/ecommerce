import React from "react"


export default function ProductItem({product}) {

  return (
    <li className="product-item">
      <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      </Link>
    </li>
    
  )
}