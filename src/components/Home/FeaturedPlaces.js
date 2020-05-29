import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styles from '../../css/items.module.css'
import Title from '../Title'
import AniLink from "gatsby-plugin-transition-link"
import Place from '../Places/Place'




const getFeaturedPlaces = graphql`
query{
    featuredPlaces : allContentfulTour(filter:{node_locale:{eq:"en-US"}}){
      edges{
        node{
          contentful_id
          node_locale
          name
          slug
          timeRequired
          timings
          entryFees
          featured
          images{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturePlaces = () => {


    const response = useStaticQuery(getFeaturedPlaces)
    const places = response.featuredPlaces.edges
    console.log(places)

    return(
        <section className={styles.places}>
            <Title title="featured" subtitle="places"/>
            <div className={styles.center}>
                {places.map(({node}) => {
                    return <Place key={node.contentful_id} place={node} />
                })}
            </div>
            <AniLink fade to="/places" className="btn-primary">
                all places
            </AniLink>
        </section>
    )
}

export default FeaturePlaces;