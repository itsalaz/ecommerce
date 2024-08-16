import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import ProductsHomepage from "./pages/ProductsHomepage"
import ProductDetails from "./pages/ProductDetails"
import Header from "./components/Header"
import Checkout from "./pages/Checkout"
import Shipping from "./pages/Shipping"
import { saveCartToLocalStorage, loadCartFromLocalStorage } from "./utility"



export default function App() {
  const [search, setSearch] = useState("")
  const [bagItems, setBagItems] = useState([])


  useEffect(() => {
    const storedCart = loadCartFromLocalStorage()
    setBagItems(storedCart)
  }, [])

  useEffect(() => {
    saveCartToLocalStorage(bagItems)
  }, [bagItems])

  

  const addToBag = (product) => {
    setBagItems((prevProducts) => {
      const existingProduct = prevProducts.find((item) => item.id === product.id)
      if (existingProduct) {
        return prevProducts.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      } else {
        return [...prevProducts, {...product, quantity: 1}]
      }
    })
  }


  

  return (
    <section className="">
      <Header 
      search = {search} 
      setSearch= {setSearch} 
      bagItems={bagItems} />
      <main>
        <Routes>
          <Route path="/" element= {<ProductsHomepage search={search}/>}/>
          <Route path="/products" element= {<ProductsHomepage search={search}/>}/>
          <Route path="/products/:id" element= {<ProductDetails addToBag={addToBag} />} />
          <Route path="/checkout" element={<Checkout bagItems={bagItems} /> } />
          <Route path="/shipping" element={<Shipping bagItems={bagItems} /> } /> 
        </Routes>
      </main>
    </section>
  )
}


