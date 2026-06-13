import "./product.css"
import img1 from "./assets/carrot.jpg"
import img2 from "./assets/tomatoe.jpg"
import img3 from "./assets/vegetable.jpg"
import img4 from "./assets/image.png"
export default function Product() {
    return (
        <>
        <section id="products">
            <h4>. Our Products</h4>
            <h1>Our Harvest-Pure Fresh Organic</h1>
            <div className="productContainer">
                <div className="fruit">
                    <img src={img1} alt="" />
                </div>
                <div className="fruit">
                    <img src={img2} alt="" />
                </div>
                <div className="fruit">
                    <img src={img3} alt="" />
                </div>
                <div className="fruit">
                    <img src={img4} alt="" />
                </div>
            </div>
                <button className="Buttons"><a href="#">View our Catalog</a></button>



        </section>
        </>
    )
}