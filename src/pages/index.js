import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SimpleHero from "../components/SimpleHero"
import Banners from "../components/Banner"
import About from "../components/Home/About"
import Tips from '../components/Home/Tips'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import FeaturedPlace from '../components/Home/FeaturedPlaces'
// import { Link } from "gatsby"

const Home = () => {
    return (
        <div>
                <Navbar/>
                <SimpleHero>
                <Banners
                      title="MANGALORE"
                      info="The chief port city of Karnataka"  
                        >
                        <AniLink paintDrip hex='#AEECEE' to='/places' className="btn-white">Explore places</AniLink>    
                    </Banners>
                    </SimpleHero>
                    <About/>
                    <Tips/>
                    <FeaturedPlace/>
                <Footer/>
        </div>
    )
}


export default Home;