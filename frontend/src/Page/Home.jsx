import PopsHeading from "../Compontens/PopsHeading"
import Timer from "../Compontens/Timer"
import Catagres from "../Compontens/Catagres"
import '../CssCompontens/Home.css'
import Monthly from "../Compontens/Monthly"
import OurProdates from "../Compontens/OurProdates"
// import Prodaseliste from '../Assets/Prodaseliste'
// import { useState } from "react"
const Home = ({handleClick}) => {
    return (
        <div>
            <PopsHeading />
            <Timer duration={5 * 24 * 60 * 60 * 1000} handleClick={handleClick}/>
            <Catagres />
            <Monthly />
            <OurProdates />
        </div>
    )
}

export default Home