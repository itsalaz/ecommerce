import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import ProductDetails from "./pages/ProductDetails"


const routes = [
{
    path: "/",
    element: <Home />,
  },
  {
    path: "productpage",
    element: <ProductPage/>,
  },
  {
    path: "productdetails",
    element: <ProductDetails/>,
  }
]

export default routes;