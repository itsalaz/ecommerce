import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

  export default function ProductDetails({addToBag}) {
    const {id} = useParams()
    console.log(id)
    const [product, setProduct] = useState([])
    const [isProductInfoOpen, setIsProductInfoOpen] = useState(false)
    const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false)
   
    useEffect(() => {
      fetch(`/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data)
      })
      .catch(error => console.error("Error fetching product:", error))
    }, [id])
  
    if(!product) {
      return <h1>Product not found</h1>
    }



      return (
        <>
        <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToBag(product)}
    
          >Add To Bag</button>
          <br></br>

          <div className= "expandable-section">
            <div 
            className= "expandable-header" 
            onClick= {() => setIsProductInfoOpen(!isProductInfoOpen)}>
              <span>Details</span>
              <span>{isProductInfoOpen ? '-': '+'} </span>
            </div>
            {isProductInfoOpen && (
              <div className= "expandable-content">
                <p>Insert Info</p>
              </div>
            )}
          </div>

          <div className= "expandable-section">
            <div 
            className= "expandable-header" 
            onClick= {() => setIsShippingInfoOpen(!isShippingInfoOpen)}>
            <span>Shipping</span>
            <span>{isShippingInfoOpen ? '-': '+'} </span>
          </div>
          {isShippingInfoOpen && (
            <div className= "expandable-content">
              <p>Insert Shipping Details</p>
            </div>
          )}
          </div>
          </div>
        </div>
      </>
     )
  }