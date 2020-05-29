import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"    
import styles from "../../css/about.module.css"
import Img from "gatsby-image"


const About = () => {

    const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "maxresdefault.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <section className={styles.about}>
      <Title title="about" subtitle="Mangalore" />
      <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
              <div className={styles.imgContainer}>
              <Img fluid={data.main.childImageSharp.fluid} alt="alt text" />

              </div>
          </article>
          <article className={styles.aboutInfo}>
          <h4>The chief port of Karnataka</h4>
          <p>
          Mangalore, officially known as Mangaluru, is the chief port city of the Indian state of Karnataka. It is located between the Arabian Sea and the Western Ghats mountain range about 352 km (219 mi) west of Bangalore, the state capital. Mangalore is the state's only city to have all four modes of transport—air, road, rail and sea. </p>
        
          <a href="https://en.wikipedia.org/wiki/Mangalore" className="btn-primary" target="_blank" rel="noopener noreferrer">
            read more
          </a>
        </article>
      </div>
          </section>
  )
}
export default About