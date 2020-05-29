const path = require("path")

exports.createPages = async ({ graphql ,actions }) => {
const { createPage } = actions

const { data } = await graphql(`
    query {
        places : allContentfulTour(filter:{node_locale:{eq:"en-US"}}){
          edges{
            node{
              slug
              node_locale
            }
          }
        }
      }     
    `)
    

data.places.edges.forEach(({node}) => {
    createPage({
        path : `places/${node.slug}`,
        component : path.resolve("./src/templates/place-template.js"),
        context : {
            slug : node.slug
        }
    })
})

}
 