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

    <h1><i className="fa fa-star-o" aria-hidden="true"></i> Vintage Political Buttons <i className="fa fa-star-o" aria-hidden="true"></i></h1>    
    <img class="img-fluid" src="buttons.jpg"/>  
    <br/>    

    <div class="container">
      <div class="row">
      {data.allContentfulProduct.nodes.map((node, index) => (
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src={ node.image.file.url } alt= { node.name }/> 
            <div class="card-body">
              <p class="card-text">{node.name}!</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href={node.name} class="myButton">View</a>                
                </div>
                <i className="fa fa-star" aria-hidden="true"></i>
                <br/>
              </div>
            </div>
          </div>
        </div>       
 
))} 
   </div>
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
