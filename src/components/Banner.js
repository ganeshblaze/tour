import React from 'react'
import styles from '../css/banner.module.css'

const Banners = ({ title, info, children}) => {
    return (
        <div className={styles.banner}>
            <h1>{title}</h1>
            <h2>{info}</h2>
            {children}
        </div>
    )
}

export default Banners;