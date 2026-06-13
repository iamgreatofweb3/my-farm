import "./Background.css"
import HeroBg from "./assets/farmer1.jpg"
import {AlignJustifyIcon, Factory, SunIcon} from "lucide-react"
import { use, useState } from "react"
import farmer from "./assets/farmer7.png"
export default function Hero () {
    return (
       
      < >
      <div className="heroBackground">
        <img src={HeroBg} alt="Hero background image" className="HeroBg mobile" />
        {/* <img src={farmer} alt="Hero background image" className="HeroBg desktop"  /> */}
        <div className="overlay"></div>
        <div className="header-container">
          <div className="left-header">
            <SunIcon className="headerIcon"/>
            <h3>Verdura Organica</h3>
          </div>
           {/* Space for the 2 diffrent flex divs */}
            <div className="rightHeader">
              <button ><AlignJustifyIcon className="rightIcon"/></button>
                  <ul className="dropDownContainer">
                  <a href="#story"><li>Our Story</li></a>
                  <a href="#products"><li>Products</li></a>
                  <a href="#sustainability"><li>Sustainability</li></a>
                  <a href="#partner"><li>Partner</li></a>
                  <a href="#contact"><li>Contact</li></a>
                <button className="button"><a href="#partner">Partner With Us</a></button>
                </ul>
            </div>
        </div>
        {/* hero section */}
        <section className="heroContainer">
          <div className="leftHero">
            <span className="spanText">[Fresh.Certified Organic. Local]</span>
            <h1>Grown With Care Delivered With Purpose.</h1>
            <p>We grow 100% organic vegetables that nourish people and the planet- from 
              our sustainable farms to your shelves.
            </p>
            <div className="buttonCnt">
              <div className="leftBtn">
                <button><a href="#partner">Partner With Us</a></button>
              </div>
              <div className="rightBtn">
                <button><a href="#products">Our Products</a></button>
              </div>
            </div>
          </div>
          <div className="rightHero">
          </div>




        </section>
      
      
      
      
      
      
      </div>
      </>
    )
}