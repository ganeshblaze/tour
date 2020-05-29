import React from 'react'
import Navbarl from '../components/Navbar'
import Footerl from '../components/Footer'
import Places from '../components/Places/Places'
import Banners from "../components/Banner"
import SimpleHero from "../components/SimpleHero"



const Placyes = () => {
    return (
        <div>
            <Navbarl/>
            <SimpleHero>
                <Banners
                      title="EXPLORE PLACES"
                        >
         </Banners>
                    </SimpleHero>
                    <br/>
            <Places/>
            <Footerl/>
        </div>
    )
}

export default Placyes;