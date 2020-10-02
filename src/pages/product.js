import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { firestore } from  "../../firebase.js"
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
            <h2 className="animate__animated animate__bounce">{product.name} - ${product.price.toFixed(2)}</h2>
            
            <AddToCart item={ {sku: product.sku, price: product.price, name: product.name} }></AddToCart>

            <img src={product.image.file.url} alt={product.name} className="img-thumbnail" />
            <p>
                {product.description.description}
            </p>



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
    
