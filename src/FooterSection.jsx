import "./FooterSection.css"
import Img1 from "./assets/ig.png"
import img2 from "./assets/facebook-icon.png"
import img3 from "./assets/twitter.jpg"
import {SunIcon,} from "lucide-react"
export default function FooterSection() {
    return(
        <>
        <div className="footerSection" id="contact">
            <div className="footerTop">
                <div className="leftFooter">
                    <h1>Subscribe to our <br />Newsletter</h1>
                </div>
                <div className="rightFooter">
                    <input type="text" className="emailBox" placeholder="Your e-mail..." />
                    <button className="submitBtn"><a href="#">Get in touch</a></button>

                </div>
            </div>
            <div className="footerBottom">
                <div className="leftIcon">
                        <SunIcon className="icon"/> <h3>Verdura Organica</h3>
                </div>
                <div className="socialArea">
                    <div className="Platform">
                        <h3>Platform</h3>
                        <h5><a href="/">Solutions</a></h5>
                        <h5><a href="/">How it works</a></h5>
                        <h5><a href="/">Pricing</a></h5>
                    </div>

                    <div className="Company">
                        <h3>Company</h3>
                        <h5><a href="/">About</a></h5>
                        <h5><a href="/">Our Mission</a></h5>
                        <h5><a href="/">Contact</a></h5>
                    </div>

                    <div className="Resources">
                        <h3>Resources</h3>
                        <h5><a href="/">Blog</a></h5>
                        <h5><a href="/">Help</a></h5>
                        <h5><a href="/">Support</a></h5>
                    </div>
                </div>
                <div className="socials">
                    <button>
                        <img src= {img2} alt="" />
                        <a href="https://www.facebook.com/CreatewithGreat"target="_blank">Follow Us on Facebook...</a>
                    </button>
                    <button>
                        <img src= {Img1} alt="" />
                        <a href="https://www.Instagram.com/ikechukwuchiemerie822"  target="_blank">Follow Us on Instagram...</a>
                    </button>
                    <button>
                        <img src= {img3} alt="" />
                        <a href="https://www.X.com/@ChiemerieI99402"  target="_blank">Follow Us on X...</a>

                    </button>




                </div>
            </div>




        </div>
        
        </>
    )
}