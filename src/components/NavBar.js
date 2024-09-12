import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <div>
        <nav role="navigation" className="navbar">
        <NavLink to="/"></NavLink>
        <NavLink to="/products"></NavLink>
        <NavLink to="/products/:id"></NavLink>
        </nav>
    </div>

  )
}

export default NavBar