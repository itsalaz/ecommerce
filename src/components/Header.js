import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import NavBar from './NavBar'



export default function Header({search, setSearch, bagItems}) {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleSearchChange(event) {
    setSearch(event)
  }


  const handleCheckout = () => {
    setIsDropdownOpen(false)
    navigate('/checkout')
  }

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen) 
  }



  return (
    <>
    <NavBar />
    <header className= "header">
      <span className= "header-logo">
        <Link to="/">
        <img src="../P2IMAGES/MP-LOGO-BLACK-01.png" alt="brand-logo"/>
        </Link>
      </span>
      <form className= "header-search" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearchChange}
        />
      </form>

      <button className='user-btn'>
      <Link to='/login'>
      <FontAwesomeIcon className='user-icon'icon={faUser} />
      </Link>
      </button>
      <button className='favorites-btn'>
      <Link to='/favorites'>
      <FontAwesomeIcon className='star-icon' icon={faStar} /> 
      </Link>
      </button>
      <span className= "header-bag" onClick={toggleDropdown}>
        BAG
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {bagItems.length > 0 ? (
              <>
              {bagItems.map((item, index) => (
                <div key={index} className="dropdown-item">
                  <img src={item.image} alt={item.name} className="dropdown-item-image" />
                  <div className="dropdown-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>{item.quantity}</p>
                  </div>
                </div>
              ))}
              <button className="checkout-button" onClick={handleCheckout}>Proceed To Checkout</button>
              </>
            ) : (
              <p>Your bag is empty</p>
            )}
          </div>
        )}
        </span>
    </header>
    </>
  )
}