import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="footer">

      <div className="container contact-strip">
        <div className="row text-center text-md-start gy-5">

          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="icon-circle"><FaPhoneAlt /></div>
            <div>
              <h6>Call us</h6>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="icon-circle"><FaEnvelope /></div>
            <div>
              <h6>Write to us</h6>
              <p>info@carrent.com</p>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <div>
              <h6>Address</h6>
              <p>Chandigarh, India</p>
            </div>
          </div>

        </div>
      </div>

      <div className="container mt-5">
        <div className="row gy-4">

          <div className="col-md-4">
            <h2 className="logo">RENTALLY</h2>
            <p className="text-muted">
              Rent a car with ease and comfort across multiple cities. Premium cars at affordable prices.
            </p>

            <div className="socials">
              <span><FaWhatsapp /></span>
              <span><FaFacebookF /></span>
              <span><FaYoutube /></span>
            </div>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li>About</li>
              <li>Cars</li>
              <li>Car Types</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-5">
  <h5>Have a Query?</h5>
  <p className="text-muted">
    Need help choosing a car or booking? Send us your query and we’ll get back to you.
  </p>

  <div className="query-box">
    <input type="text" placeholder="Your question..." />
    <button>Send</button>
  </div>
</div>

        </div>

        <hr />

        <div className="text-center text-muted pb-3">
          © {new Date().getFullYear()} CarRent. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;