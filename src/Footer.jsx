import "./Footer.css"
// export default function Footer() {
//     return (
//         <>
//         <footer>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro incidunt laborum?
//         </footer>
//         </>
//     )
// }


// import "./Newsletter.css";
import {
//   Facebook,
//   Instagram,
//   Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <section className="newsletter">
      <div className="newsletter-top">
        <h1>
          Subscribe to our
          <br />
          Newsletter
        </h1>

        <div className="newsletter-form">
          <input type="email" placeholder="Your e-mail..." />
          <button>Get in touch</button>
        </div>
      </div>

      <div className="newsletter-bottom">
        {/* Logo */}
        <div className="logo-box">
          <div className="logo-icon">*</div>
          <span>Verdura Organica</span>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <a href="/">Solutions</a>
            <a href="/">How it works</a>
            <a href="/">Pricing</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="/">About</a>
            <a href="/">Our Mission</a>
            <a href="/">Contact</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="/">Blog</a>
            <a href="/">Help Center</a>
            <a href="/">Support</a>
          </div>
        </div>

        {/* Socials */}
        <div className="socials">
          <button>
            {/* <Facebook size={18} /> */}
            Follow us on Facebook
          </button>

          <button>
            {/* <Instagram size={18} /> */}
            Follow us on Instagram
          </button>

          <button>
            {/* <Linkedin size={18} /> */}
            Follow us on LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}