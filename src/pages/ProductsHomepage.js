import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductList from "../components/ProductList"
import Search from "../components/Search"
import NavBar from "../components/NavBar"

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

  function handleSearchChange(searchQuery) {
    setSearch(searchQuery)
  }

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <NavBar />
      <main className="products-main">
        <h1 className="home-header">Products Page</h1>
        <form className="home-search" onSubmit={handleSubmit}>
          <Search search={search} onSearchChange ={handleSearchChange} />
          <button type="submit" className="search-button">Search</button>
        </form>
        <ul className="product-list">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </main>
      
    </>
  );
}

export default ProductsHomepage