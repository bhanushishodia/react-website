import React from "react";
import "./Footer.css";
import facebook from "../../assets/images/fb.png";
import instagram from "../../assets/images/insta.jpg";
import linkedin from "../../assets/images/linkdin.png";
import youtube from "../../assets/images/youtube.webp";
import logo from "../../assets/images/logo.webp";
import bestCustomerSupport from "../../assets/images/best-customer-support-2024.png";
import highestRated from "../../assets/images/highest-rated-winter-2024.png";

function Footer() {
  return (
    <footer className="style-11">
      <div className="container px-0">
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
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/affiliate-program">Become an Affiliate</a>
                    </li>
                    <li>
                      <a href="/partner-with-us">Become a Partner</a>
                    </li>
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
                <h6>Top Features</h6>
                <ul>
                  <li>
                    <a href="/live-agent-assistant">Live Agent Assistant</a>
                  </li>
                  <li>
                    <a href="/whatsapp-broadcasting">WhatsApp Broadcasting</a>
                  </li>
                  <li>
                    <a href="/reports-analytics">Reports & Analytics</a>
                  </li>
                  <li>
                    <a href="/automated-chatbot">Automated ChatBot</a>
                  </li>
                  <li>
                    <a href="/whatsapp-catalog">Catalog</a>
                  </li>
                  <li>
                    <a href="/click-to-whatsapp-ads">Click to WhatsApp Ads</a>
                  </li>
                  <li>
                    <a href="/sms-fallback">SMS Fallback</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Industry</h6>
                <ul>
                  <li>
                    <a href="/ecommerce-retail">Ecommerce & Retail</a>
                  </li>
                  <li>
                    <a href="/healthcare">Healthcare</a>
                  </li>
                  <li>
                    <a href="/ed-tech">Ed-Tech</a>
                  </li>
                  <li>
                    <a href="/banking-industry">Banking & BFSI</a>
                  </li>
                  <li>
                    <a href="/industry/media-entertainment">Media & Entertainment</a>
                  </li>
                  <li>
                    <a href="/industry/food-beverage">Food & Beverage</a>
                  </li>
                  <li>
                    <a href="/industry/travel-hospitality">Travel & Hospitality</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Use Case</h6>
                <ul>
                  <li>
                    <a href="/use-case/whatsapp-marketing">WhatsApp Marketing</a>
                  </li>
                  <li>
                    <a href="/use-case/whatsapp-commerce">WhatsApp Commerce</a>
                  </li>
                  <li>
                    <a href="/use-case/whatsapp-support">WhatsApp Support</a>
                  </li>
                  <li>
                    <a href="/use-case/whatsapp-authentication">WhatsApp Authentication</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="row text-md-start py-4">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Channels</h6>
                <ul>
                  <li>
                    <a href="/features/whatsapp-business-api">WhatsApp Business API</a>
                  </li>
                  <li>
                    <a href="/features/messenger">Messenger</a>
                  </li>
                  <li>
                    <a href="/features/instagram">Instagram</a>
                  </li>
                  <li>
                    <a href="/features/google-business">Google Business</a>
                  </li>
                  <li>
                    <a href="/features/messages">Messages</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="links-item">
                <h6>Integration</h6>
                <ul>
                  <li>
                    <a href="/features/hubspot">HubSpot</a>
                  </li>
                  <li>
                    <a href="/features/zapier">Zapier</a>
                  </li>
                  <li>
                    <a href="/features/webhook">Webhook</a>
                  </li>
                  <li>
                    <a href="/features/salesforce">Salesforce</a>
                  </li>
                  <li>
                    <a href="/features/woocommerce">WooCommerce</a>
                  </li>
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
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="/knowledge-center">Knowledge Center</a>
                  </li>
                  <li>
                    <a href="/get-started">Get Started @ $99</a>
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
                    P/162 Building No. 3, 6th floor - 608 Wadi An Niyabiyah St - Al Nahyan - E25 - Abu Dhabi - United Arab Emirates
                  </li>
                  <li>
                    <a href="tel:+971565480273">+971 56 548 0273</a>
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
                <a href="/" className="text-black">
                  anantya.ai
                </a>{" "}
                Inc. All rights reserved
              </span>
            </div>

            <div className="col-md-3 social-icons text-md-end text-center">
              <a
                href="https://www.facebook.com/anantyaai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/anantya.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/anantya-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC0e_H2FWWljLVd8ECR8kzIQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
          {/* Additional Links */}
          <div className="row  py-1">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-md-flex text-center mt-1 p-3 justify-content-between align-items-center my-2 my-md-0">
            <a href="/whatsapp-pricing" target="_blank">
              <small>WhatsApp Pricing</small>
            </a>
            <a href="/privacy-policy" target="_blank">
              <small>Privacy Policy</small>
            </a>
            <a href="/terms-conditions" target="_blank">
              <small>Terms & Conditions</small>
            </a>
            <a href="/refund-policy" target="_blank">
              <small>Refund Policy</small>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
