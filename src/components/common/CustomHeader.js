import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomHeader.css"; // Ensure this file exists
import { getImage } from '../../utils/getImage'; // Correct path to utility
const logo = getImage('logo.webp');
function CustomHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // State to track the open submenu
  const [showSubMenu, setShowSubMenu] = useState(false); // State to track if the submenu is visible

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowSubMenu(false); // Hide submenu when closing main menu
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index); // Toggle submenu open/close
    setShowSubMenu(true); // Show submenu when toggling
  };

  const goBackToMainMenu = () => {
    setShowSubMenu(false); // Hide submenu and show main menu
    setOpenSubMenu(null); // Reset the open submenu
  };

  return (
    <header
      className="header d-lg-none d-sm-block d-md-none d-block custom_header"
      style={{
        position: "fixed",
        top: "0",
        padding: "0 15px", // Added padding of 0px top and bottom, 15px left and right
        width: "100%",
        zIndex: "1000",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Toggle button for offcanvas menu (only shown on small screens) */}
        <button
          className="navbar-toggler navbar-toggler-icon d-lg-none"
          type="button"
          onClick={toggleNav}
          aria-controls="offcanvasNavbar"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ marginLeft: "10px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo on the right */}
        <div className="logo text-end" style={{ marginRight: "10px" }}>
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* Offcanvas Navbar (only shown on small screens) */}
        <div
          className={`offcanvas offcanvas-start d-lg-none d-sm-block d-md-none d-block ${
            isNavOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className={`offcanvas-header ${showSubMenu ? "d-none" : ""}`}>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset me-2"
              onClick={toggleNav}
              aria-label="Close"
            ></button>
          </div>
          <div
            className={`offcanvas-body ${showSubMenu ? "submenu-open" : ""}`}
          >
            {showSubMenu ? (
              <div>
                <button
                  type="button"
                  className="btn btn-primary mb-0"
                  onClick={goBackToMainMenu}
                >
                  &larr; Back
                </button>
                <ul className="navbar-nav border-top"> 
                  {openSubMenu === 0 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-marketing">
                        WhatsApp Marketing 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-commerce">
                           WhatsApp Commerce 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-support">
                          WhatsApp Support  
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-authentication">
                           WhatsApp Authentication
                       
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/ecommerce-industry">
                        Ecommerce & Retail
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/healthcare-industry">
                        Healthcare
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/edtech-industry">
                        Ed-Tech 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/banking-industry">
                        Banking & BFSI
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/media-entertainment-industry">
                        Media & Entertainment
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/food-and-beverage-industry">
                        Food & Beverage
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/travel-and-hospitality-industry">
                        Travel & Hospitality
                        </a>
                      </li>
                     
                    </>
                  )}
                  {openSubMenu === 1 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/live-agent-support">
                        Live Agent Assistant
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-broadcasting">
                        WhatsApp Broadcasting
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/reports-and-analytics">
                        Reports & Analytics 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/automated-chatbot">
                        Automated ChatBot 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-catalog">
                        
                        Catalog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/click-to-whatsapp-ads">
                        
                        Click to WhatsApp Ads 
                        </a>
                      </li>
                    </>
                  )}
                  {openSubMenu === 2 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/zapier">
                        Zapier
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/hubspot">
                        Hubspot
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/woocommerce">
                        WooCommerce
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/dialogflow">
                        Dialogflow
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/make">
                        make.com
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/salesforce">
                        Salesforce
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/pipedrive">
                        Pipedrive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/webhook">
                        Webhook
                        </a>
                      </li>
                  </>
                  )}
                  {openSubMenu === 3 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/blog">
                        Blog 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                        About Us 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/work-with-us">
                        Work With Us 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">
                        
                          Contact 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/knowledge-center">
                        Knowledge Center 

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/partner-with-us">
                        Partner With Us 

                        </a>
                      </li>
                    </>
                  )}
                  {openSubMenu === 4 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/whatsapp-business-api">
                        WhatsApp Business API
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/instagram">
                        Instagram
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/google-business-messages">
                        Google Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/viber">
                        
                        Viber
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/line">
                        Line

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/facebook-messenger">
                        Messenger

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/integrations/wechat">
                        WeChat

                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => toggleSubMenu(0)}
                    >
                      Solution
                    </a>
                    <span className="nav-next" onClick={() => toggleSubMenu(0)}>
                      <span></span>
                    </span>
                  </div>
              
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => toggleSubMenu(1)}
                    >
                      Features
                    </a>
                    <span className="nav-next" onClick={() => toggleSubMenu(1)}>
                      <span></span>
                    </span>
                  </div>
                 
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => toggleSubMenu(2)}
                    >
                      Integration
                    </a>
                    <span className="nav-next" onClick={() => toggleSubMenu(2)}>
                      <span></span>
                    </span>
                  </div>
                 
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => toggleSubMenu(3)}
                    >
                      Resources
                    </a>
                    <span className="nav-next" onClick={() => toggleSubMenu(3)}>
                      <span></span>
                    </span>
                  </div>
                
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => toggleSubMenu(4)}
                    >
                     Channels
                    </a>
                    <span className="nav-next" onClick={() => toggleSubMenu(4)}>
                      <span></span>
                    </span>
                  </div>
                
                </li>
                <li className="text-start mt-3">
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn login_button d-block"
                  >
                    Book a Demo
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomHeader;
