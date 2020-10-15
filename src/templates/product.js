import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import AddToCart from "../components/add-to-cart.js"
import Layout from "../components/layout"

export default function Product({data}) {
  const product = data.contentfulProduct
 

  return (
    <>
      <Helmet bodyAttributes={ { class: `product-page ${product.sku}` } }>
        <title>{product.name} | Political Buttons</title>
        <meta name="description" value="American Prestige"/>
      </Helmet>
      <Layout>
      <div className="container">
        <div className="header">
            <h1>{product.name} - ${product.price.toFixed(2)}</h1> 
            </div> 
                 
            <img src={product.image.file.url} alt={product.name} className="img-thumbnail" />

            <br/>
            <p>
                {product.description.description}
            </p>           
            <AddToCart item={ {sku: product.sku, price: product.price, name: product.name} }></AddToCart>        
           
            </div>
        </Layout>
      </>
    )
}

export const query = graphql`
query productQuery($slug: String!) {
    contentfulProduct(name: {eq: $slug}) {
          name,
          price
          sku
          image {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    `
    
