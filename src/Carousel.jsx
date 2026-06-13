import "./Carousel.css"
import img1 from "./assets/farm-produce1.jpg"
import img2 from "./assets/farm-produce2.jpg"
import img3 from "./assets/farm-produce3.jpg"
import img4 from "./assets/farm-produce4.jpg"
import img5 from "./assets/farmer5.jpg"
import img6 from "./assets/farmer3.jpg"
import img7 from "./assets/farmer2.jpg"
export default function Carousel () {
    return (
        <>
        <div className="carouselContainer">
            <div className="carousel">
                <img src={img1} alt="" />
            </div>
            <div className="carousel">
                <img src={img2} alt="" />
            </div>
            <div className="carousel">
                <img src={img3} alt="" />
            </div>
            <div className="carousel">
                <img src={img4} alt="" />
            </div>
            <div className="carousel">
                <img src={img5} alt="" />
            </div>
            <div className="carousel">
                <img src={img6} alt="" />
            </div>
            <div className="carousel">
                <img src={img7} alt="" />
            </div>
        </div>
        <div className="recordContainer">
            <div className="record">
                <h1>100%</h1>
                <span>Certified Organic</span>
            </div>
            <div className="record">
                <h1>50+ Acres</h1>
                <span>Sustainable Farmland</span>
            </div>
            <div className="record">
                <h1>30+ Stores</h1>
                <span>Supplied Nationwide</span>
            </div>
            <div className="record">
                <h1>24/7</h1>
                <span>Cold-chain Logistics</span>
            </div>
        </div>
        </>
    )
}