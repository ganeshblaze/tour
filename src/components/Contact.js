import React from "react"
import Title from "../components/Title"
import styles from '../css/contact.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'




const Contactly = () => {

  const data = useStaticQuery(graphql`
    query {
      main : file(relativePath : { eq : "contactcover.jpeg"}){
        childImageSharp {
          fluid(maxWidth : 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`)


  return (
    <div className="container">
              <Img fluid={data.main.childImageSharp.fluid} alt="alt text" />
              <br/>
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
      <form action="https://formspree.io/xoqkenqj" method="POST" className={styles.form}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="example"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
    </div>

  )
}
export default Contactly;
