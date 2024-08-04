import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'



export default function Header({search, setSearch, bagItems}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleSearchChange(event) {
    setSearch(event)
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
        <img src="./P2IMAGES/3 PALMS CREST.png" alt="brand-logo"/>
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
                    <label>
                      Quantity:
                      <input type="number" value={item.quantity} min="1"/>
                    </label>
                  </div>
                </div>
              ))}
              <button className="checkout-button">Proceed To Checkout</button>
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

