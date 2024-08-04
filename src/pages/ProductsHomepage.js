import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function ProductsHomepage({search}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])


    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <main className="products-main">
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