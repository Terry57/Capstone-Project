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
    <br/> 
    <div className="border"> 
    <img className="img-fluid" src="/buttons.jpg" alt="buttons"/>  
    </div>    
    <br/>   
        <div className="row">
      {data.allContentfulProduct.nodes.map((node, index) => (
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={ node.image.file.url } alt= { node.name }/> 
            <div className="card-body">
              <p className="card-text">{node.name}!</p>              
                <div className="btn-group">
                  <a href={node.name} className="myButton">View</a>                
                </div>                
              </div>           
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
