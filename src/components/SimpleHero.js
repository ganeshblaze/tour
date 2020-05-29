import React from 'react'
import '../components/layout.css'

const SimpleHero = ( { children }) => {
    return <header className="defaultHero">{children}</header>
}


export default SimpleHero;