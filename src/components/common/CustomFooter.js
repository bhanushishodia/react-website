import React from "react";
import "./Footer.css";
import { getImage } from '../../utils/getImage';  // Correct path to utility
const facebook = getImage('fb.png');
const instagram = getImage('insta.jpg');
const linkedin = getImage('linkdin.png');
const youtube = getImage('youtube.webp');
const logo = getImage('logo.webp');
const bestCustomerSupport = getImage('best-customer-support-2024.png');
const highestRated = getImage('highest-rated-winter-2024.png');

function CustomFooter() {
  return (
    <footer className="style-11">
      <div className="container">
        {/* Footer Links */}
        <div className="foot-links">
          {/* Lower row */}
          <div className="row text-md-start py-5">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-logo">
                <a href="/homepage">
                  <img
                    src={logo}
                    className="img-fluid w-75"
                    alt="footer-logo"
                  />
                </a>
                <div className="links-item">
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/affiliate-program">Become an Affiliate</a></li>
                    <li><a href="/partner-with-us">Become a Partner</a></li>
                  </ul>
                </div>
              </div>
              <div className="d-flex text-md-start text-center pt-20">
                <a
                  href="https://www.softwaresuggest.com/anantya-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={bestCustomerSupport}
                    className="img-fluid w-50"
                    alt="Best Customer Support 2024"
                  />
                </a>
                <a
                  href="https://www.softwaresuggest.com/anantya-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={highestRated}
                    className="img-fluid w-50"
                    alt="Highest Rated Winter 2024"
                  />
                </a>
              </div>
            </div>
             <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Industry</h6>
                <ul>
                  <li><a href="/ecommerce-industry">Ecommerce & Retail</a></li>
                  <li><a href="/healthcare-industry">Healthcare</a></li>
                  <li><a href="/edtech-industry">Ed-Tech</a></li>
                  <li><a href="/banking-industry">Banking & BFSI</a></li>
                  <li><a href="/media-entertainment-industry">Media & Entertainment</a></li>
                  <li><a href="/food-and-beverage-industry">Food & Beverage</a></li>
                  <li><a href="/travel-and-hospitality-industry">Travel & Hospitality</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Resources</h6>
                <ul>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/knowledge-center">Knowledge Center</a>
                  </li>
                  <li>
                    <a href="/campaign-request-demo">Get Started @ $99</a>
                  </li>
                  <li>
                    <a href="/work-with-us">Work with Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Address</h6>
                <ul>
                  <li>
                    752-753, JMD Megapolis, Sector 48, Gurugram, Haryana 122001, India
                  </li>
                  <li>
                    <a href="tel:+917987886387">+91-79878 86387</a>
                  </li>
                  <li>
                    <a href="mailto:info@anantya.ai">info@anantya.ai</a>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>

        {/* Footer line */}
        <div className="footerline">
          <div className="row justify-content-between align-items-center pt-3">
            <div className="col-md-5 text-md-start text-center my-auto">
              <span>
                Copyright © 2024{" "}
                <a href="/" className="text-black">anantya.ai</a> Inc. All rights reserved
              </span>
            </div>

            <div className="col-md-3 social-icons text-md-end text-center">
              <a href="https://www.facebook.com/anantyaai" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/anantya.ai/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/anantya-ai/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.youtube.com/@Anantyaai" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="row py-1">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-md-flex text-center mt-1 p-3 justify-content-between align-items-center my-2 my-md-0">
            <a href="/whatsapp-pricing" target="_blank"><small>WhatsApp Pricing</small></a>
            <a href="/privacy-policy" target="_blank"><small>Privacy Policy</small></a>
            <a href="/terms-conditions" target="_blank"><small>Terms & Conditions</small></a>
            <a href="/refund-policy" target="_blank"><small>Refund Policy</small></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
