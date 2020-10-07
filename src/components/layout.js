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
<p>header hi</p>
            </Header>
            <br/>
            {children}
            <br/>
            <h3><Link to="about">About</Link>    *  <Link to="/">Home</Link></h3>
        </div>
        </CartContextProvider>
    )
  }