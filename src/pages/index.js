import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function Home({data}) {
  return (
    <>
    <Layout>
    <Helmet>
      <title>Terry's Capstone Project</title>
      <meta name="description" content="Building a Capstone website" />
    </Helmet>
    <h1>Hello</h1>
    <img src="buttons.jpg"/>
    <div class="row">
    {data.allContentfulProduct.nodes.map((node, index) => (
    <div class="card">
       <img class="card-img-top" src={ node.image.file.url } alt= { node.product }/> 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{node.product}.</p>
    <a href={node.product} class="btn btn-primary">View</a>
  </div>
</div>
))} 
  
</div>
    </Layout>

   </>
   )
}
export const query = graphql`
query MyQuery {
  allContentfulProduct {
    nodes {
      name
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
}`
