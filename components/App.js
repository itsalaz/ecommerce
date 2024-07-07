import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react"
import NavBar from "./NavBar"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import ProductDetails from "./pages/ProductDetails"


export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path= "/products" component={ProductPage} />
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
    
  )
}