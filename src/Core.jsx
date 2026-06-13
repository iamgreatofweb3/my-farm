import "./Core.css"
import img1 from "./assets/irrigation.jpg"
import img2 from "./assets/organic-seed.jpg"
import {Dice5Icon, SunIcon} from "lucide-react"
export default function Core() {
    return(
        <>       
        <div className="coreContainer">
            <div className="leftText">
                <h4>. Core Values</h4>
                <h1>Our Promise To The Planet.</h1>
            </div>
            <div className="rightText">
                <p> From the moment we plant a seed to the day
                it reaches your table, every step we take honors the Earth-Protecting
                soil health,conserving water,nuturing biodiversity,and reducing
                emissions for a greener tomorrow.</p>
            </div>
        </div>
        <div className="sustainContainer" id="sustainability">
            <div className="sustainBox textbox">
                <Dice5Icon className="icons"/>
                <h3>Organic Seeds Only</h3>
                <p>
                    Ev use electricity as a power source,which 
                    can be generated from renemwable energies/sources. 
                    Our solutions help reducing greenhouse gas emissions 
                    in the transportation Sector.
                </p>

            </div>
            <div className="sustainBox">
                <img src={img2} alt="" />
            </div>
            <div className="sustainBox textbox">
                <SunIcon className="icons"/>
                <h3>Eco-Irrigation </h3>
                <p>
                    Solar panels convert sunlight into 
                    eletricity.Photoactive(PV) cells on these panels
                    capture the energy from the sun and converts it into 
                    electrical power.
                </p>
            </div>
            <div className="sustainBox">
                <img src={img1} alt="" />
            </div>
        </div>
        <div className="markupText">
            <h3>Our dedication to organic farming 
                is cultivating a future where food nourishes both people and the planet.
            </h3>
        </div>
            <button className="touchBtn"><a href="#">Get in Touch</a></button>
        </>
    )
}