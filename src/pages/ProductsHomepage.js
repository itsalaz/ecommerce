import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import "./ProductsHomepage.css"

function ProductsHomepage() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleSearchChange(query) {
    setSearch(query)
  }


  return (
    <>
      <main className="products-main">
        <h1 className="home-header">Home Page</h1>
        <form className="home-search" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search products..."
            value={search}
            onSearchChange= {handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <ul className="products-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default ProductsHomepage