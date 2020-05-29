import React from 'react'
import { graphql } from 'gatsby';
import { FaMoneyBillWave, FaClock, FaTypo3 } from 'react-icons/fa';
import Img from "gatsby-image"
import styles from '../css/template.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const Template = ({ data }) => {
    const { name , timeRequired , timings , entryFees, description : {description},images } = data.place;
    const [...placeImages] = images
   
    return (
        <div className="container">
        <section className={styles.template}>
            <div className={styles.center}>
            <div className={styles.images}>
                {placeImages && placeImages.map((item,index) =>{
                    return <Img key = {index} fluid ={item.fluid} alt="single" className={styles.image}/>
                } )}
            </div>
            <h2>{name}</h2>
            <div className={styles.info}>
                <p>
                    <FaMoneyBillWave className={styles.icon}/> Entry Fees - {entryFees}
                </p>
                <p>
                    <FaClock className={styles.icon} />Time Required - {timeRequired} hours
                </p>
                {timings ?
                    <p>
                        <FaTypo3 className={styles.icon} /> Timings - {timings}
                    </p>:
                    <></>
                    }
            </div>
            <p className={styles.desc}>{description}</p>
            <AniLink fade to="/places" className="btn-primary">Back to tours</AniLink>
            </div>
        </section>
    </div>
    )
}

export const query = graphql `
query($slug : String){
    place : contentfulTour(slug:{eq: $slug}){
      node_locale
      name
      slug
      timings
      timeRequired
      entryFees
      description{
        description
      }
      images{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`





export default Template;