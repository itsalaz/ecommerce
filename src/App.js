import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import ProductsHomepage from "./pages/ProductsHomepage"
import ProductDetails from "./pages/ProductDetails"
import ReviewsList from "./pages/ReviewsList"
import Header from "./components/Header"
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
    setBagItems((prevProducts) => [...prevProducts, product])
    
  }


  return (
    <section className="">
      <Header search = {search} setSearch= {setSearch} bagItems={bagItems} />
      <main>
        <Routes>
          <Route path="/" element= {<ProductsHomepage search={search}/>}/>
          <Route path="/products" element= {<ProductsHomepage search={search}/>}/>
          <Route path="/products/:id" element= {<ProductDetails addToBag={addToBag} />} />
          <Route path="/products/:id/checkout" element= {Checkout} />
          <Route path="/reviews" element= {<ReviewsList />} />
        </Routes>
      </main>
    </section>
  )
}