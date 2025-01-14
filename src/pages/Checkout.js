import React from "react"
import { Link } from 'react-router-dom'


export default function Checkout({ bagItems}) {
  
  const total = bagItems.reduce((total, item) => total + item.price * item.quantity, 0)


  return (
    <div className="checkout-container-left">
      <div className="checkout">
      { bagItems.map((item, index) => (
        <div key={index} className='checkout-items'>
          <img src={item.image} alt={item.name} className='checkout-item-images'/>
          <div className='checkout-item-details'>
          <h3>{item.name}</h3>
          <p>${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      </div>
      <div className='checkout-container-right'>
      <div className="checkout-total">
        <h3>Subtotal: ${total}</h3>
        <h3>Free Shipping</h3>
        <p>Sales tax calculated at checkout </p>
        <h2>Total: ${total}</h2>
        <button>CHECKOUT AS GUEST</button>
        <button>SIGN IN FOR FASTER CHECKOUT</button>
        <Link to ='/shipping'>
        <button className="checkout-button">Order</button>
        </Link>
      </div>
      </div>
      </div>
  )
}