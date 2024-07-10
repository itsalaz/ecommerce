import React, {useEffect, useState} from "react"
import {useParams, Link } from "react-router-dom"

  export default function ProductDetails() {
    const {id} = useParams()
    console.log(id)
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
        <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {``}
          <article>
            <h3>{product.name}</h3>
            <Link to={`/reviews}`}>Read Reviews</Link>
          </article>
        </div>
      </div>
      </>
     )
  }
