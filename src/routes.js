import React from "react"
import { createBrowserRouter } from "react-router-dom"
import ProductsHomepage from "./pages/ProductsHomepage"
import ProductDetails from "./pages/ProductDetails"
import ReviewsList from "./pages/ReviewsList"


const routes = createBrowserRouter([
  {
      path: "/",
      element: <ProductsHomepage/>
  },
  {
      path: "/products",
      element: <ProductsHomepage />
  },
  {
      path: "/products/:id",
      element: <ProductDetails />
  },
  {
    path: "/products/:id/reviews",
    element: <ReviewsList />
}
  
]);

export default routes