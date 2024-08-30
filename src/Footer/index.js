import React from 'react';
import './index.css';
// import logo from "../images/logo.png";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
   return (
       <footer className="footer">
        <div className="App">
           <div className="footer-content">
               <div className="footer-logo-section">
                   {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
               </div>
               <div className="footer-links">
                   <div className="footer-column">
                       <h3>Partnership</h3>
                       <ul>
                           <li>Websites</li>
                           <li>Branding</li>
                       </ul>
                   </div>
                   <div className="footer-column">
                       <h3>About</h3>
                       <ul>
                           <li>Our Projects</li>
                           <li>Careers</li>
                       </ul>
                   </div>
                   <div className="footer-column">
                       <h3>Support</h3>
                       <ul>
                           <li>Support Request</li>
                           <li>Contact</li>
                       </ul>
                   </div>
                   <div className="footer-column">
                       <h3>Connect</h3>
                       <div className="social-icons">
                           <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                           <a href="#" aria-label="Twitter"><FaTwitter /></a>
                           <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                           <a href="#" aria-label="YouTube"><FaYoutube /></a>
                       </div>
                   </div>
               </div>
           </div>
           </div>
       </footer>
   );
}

export default Footer;