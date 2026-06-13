import Background from "./Background.jsx"
import Carousel from "./Carousel.jsx"
import Story from "./Story.jsx"
import Product from "./product.jsx"
import Core from "./Core.jsx"
import FaqSection  from "./FaqSection.jsx"
import Partner from "./partner.jsx"
import Footer from "./Footer.jsx"
import FooterSection from "./FooterSection.jsx"
import {AlignRightIcon, Import} from "lucide-react"
export default function App() {
  return (
    <>
    <Background/>
    <Story/>
    <Carousel/>    
    <Product/>
    <Core/>
    <FaqSection/>
    <Partner/>
    {/* <Footer/> */}
    <FooterSection/>
    </>
  )
}