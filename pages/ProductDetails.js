import React from "react"
import { useParams } from "react-router-dom"


export default function ProductDetails({product}) {
  function handleAddToCartClick() {
    console.log("clicked item", item)
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !product.isInCart,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json()
    })
    .then((updatedProduct) => {
      onUpdateProduct(updatedProduct)
    })
    .catch((error) => {
      console.error("Error updating item:", error)
    })
  }
  
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button className={product.isInCart ? "Added To Cart" : "Add To Cart"}
          onClick={handleAddToCartClick}>
            {product.isInCart ? "In Cart" : "Add To Cart"}Add To Cart
        </button>
      </div>
    </div>
  )
}