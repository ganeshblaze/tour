import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PlaceList from '../Places/PlaceList'

const getPlaces = graphql`
  query {
    places: allContentfulTour(filter:{node_locale:{eq:"en-US"}}) {
      edges {
        node {
          contentful_id
          node_locale
          name
          slug
          timeRequired
          timings
          entryFees
          featured
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`


const Placelry = () => {
    const {places} = useStaticQuery(getPlaces)
    console.log(places);
    return <PlaceList places={places}/>
}


export default Placelry;