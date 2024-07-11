import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import NavBar from "../components/NavBar"

  export default function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
  
    useEffect(() => {
      fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data)
      })
      .catch(error => console.error("Error fetching product:", error))
    }, [])
  
    if(!product) {
      return <h1>Product not found</h1>
    }

 

      return (
        <>
        <NavBar />
        <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/products/${id}/reviews`}>Read Reviews</Link>
          </div>
          </div>
      </>
     )
  }
