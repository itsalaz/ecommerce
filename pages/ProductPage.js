import React from "react"
import ProductItem from "../components/ProductItem"

export default function ProductPage() {

  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {products.map(product => {
          <ProductItem key={product.id} product={product} />
        })}
      </ul>
    </div>
    
  )
}