import React from 'react'
import links from '../constants/links'
import socialicons from '../constants/social'
import styles from '../css/footer.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// import { Link } from 'gatsby'





const Footerl = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return(
                        <AniLink paintDrip hex='#AEECEE' key={index} to={item.path}>
                            {item.text}
                        </AniLink>
                    )
                })}
                
            </div>
            <div className={styles.icons}>
                {socialicons.map((item,index ) => {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a> 

                    )
                } )}
            </div>
            <div className={styles.copyright}>
                copyright &copy; {new Date().getFullYear()} All rights Reserved
            </div>
        </footer>
    )
}

export default Footerl;