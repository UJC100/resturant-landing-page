import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
              <h1>Footer</h1>
              <span>          
        <FaFacebook size={25} />
        <FaYoutube size={25} />
        <FaLinkedin size={25} />
        <FaTwitter size={25} />
              </span>
      </div>
      <div>
        <p>Quality</p>
        <p>Share</p>
        <p>Help</p>
        <p>Carriers</p>
        <p>Work</p>
        <p>Testimonials</p>
      </div>
      <div>
        <p>+244-5333-7783</p>
        <p>hello@food.com</p>
        <p>press@food.com</p>
        <p>contact@food.com</p>
      </div>
      <div>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer