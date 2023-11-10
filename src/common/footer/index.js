import React from "react";
// import {Image} from "react"
import Logo from "../../images/navbar/logo_Horizontal.jpg";
import logo from "./logo.png"
import "./index.css";
import SocialFlow from "./SocialFlow";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      
       <div className="footer-image">
         <div>
        <img src={logo} alt="Loading.." className="footerlogo" />
        </div>
       <div className="footer-links-number-container">
       
         <div className="footer-contact-quicklinks">
           <div className="footer-heading">Need Help</div>
           <div className="footer-content">Call Us:</div>
           <div className="footer-content">+91 8895889632, +91 8895889513</div>
           <div className="footer-content">Email at:</div>
           <div className="footer-content">mio2022[at]investodisha[dot]org</div>
         </div>
         <div className="footer-contact-quicklinks">
           <div className="footer-heading">Quick Links</div>
           <a href="http://www.msmeodisha.gov.in/" style={{ textDecoration: "none" }}> <div className="footer-content">MSME</div></a>
           <a href="https://startupodisha.gov.in/" style={{ textDecoration: "none" }}> <div className="footer-content">Startup Odisha</div></a>
           <a href="https://investodisha.gov.in/" style={{ textDecoration: "none" }}><div className="footer-content">Invest Odisha</div></a>
           <a href="http://www.odisha.gov.in/" style={{ textDecoration: "none" }}><div className="footer-content">Government of Odisha</div></a>
           <a href="https://odishatourism.gov.in/" style={{ textDecoration: "none" }}><div className="footer-content">Odisha Tourism</div></a>
         </div>
       </div>
       <div className="footer-copyright">Invest Odisha © 2022, All Rights Reserved</div>
    </div>

    );
  }
}

export default Footer;
