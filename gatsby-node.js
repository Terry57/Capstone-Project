const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const product = path.resolve(`src/templates/product.js`)
  
    return graphql(`
    {
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
    }
    
                `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulProduct.nodes.forEach((node) => {       
        createPage({
            path: node.name,
            component: product,
            context: {
                slug: node.name
            }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
  }