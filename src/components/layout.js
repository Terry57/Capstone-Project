import React from "react"
import "./layout.scss"
import { CartContextProvider } from "../../shopping.js"
import Header from "./header.js"
import { Link } from "@reach/router"

export default function Layout({children}) {
    return (
        <CartContextProvider>
        <div class="container">
            <Header>
            </Header>
            <br/>
            {children}
            <br/>
            <h3><Link to="about" class="myButton2">About</Link> <i className="fa fa-star-o" aria-hidden="true"></i> <Link to="/" class="myButton2">Home</Link></h3>
        </div>
        </CartContextProvider>
    )
  }