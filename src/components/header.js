import React, { useContext } from "react"
import { Link } from "@reach/router"
import { CartContext } from "../../shopping.js"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"



export default function Header() {
 
    const { itemCount } = useContext(CartContext)
    
 
    
    return (
        <>
         <Helmet>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Helmet>
        <StaticQuery
            query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `}
            render={data => (
            <header>   
                <div className="header">       
                <h1><i className="fa fa-star-o" aria-hidden="true"></i> {data.site.siteMetadata.title} <i className="fa fa-star-o" aria-hidden="true"></i></h1>             
            
                <ul class="nav justify-content-center myButton3">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home     </Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link active" to="about">About              </Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link active" to="checkout">Check Out</Link>
                </li> 
                </ul>
                <div className="list7">  
                    <i  className="fa fa-star" aria-hidden="true"></i>               {itemCount === 0 &&
                        <strong>You to could own a piece of history.</strong>
                    }
                    {itemCount > 0 &&
                        <strong>You have {itemCount} item(s) in your cart!</strong>
                    }
                    <i  className="fa fa-star" aria-hidden="true"></i>
                    </div>     
                </div>                              
            </header>
            )}
        />
     
        </>
    )
}