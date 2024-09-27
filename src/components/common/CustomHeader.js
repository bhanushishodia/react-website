import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.webp";
import "./CustomHeader.css"; // Ensure this file exists

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
      className="header d-lg-none d-sm-block d-md-none d-block"
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
                        <a className="nav-link" href="/">
                        WhatsApp Marketing 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                           WhatsApp Commerce 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          WhatsApp Support  
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                           WhatsApp Authentication
                       
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Ecommerce & Retail
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Healthcare
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Ed-Tech 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Banking & BFSI
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Media & Entertainment
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Food & Beverage
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Travel & Hospitality
                        </a>
                      </li>
                     
                    </>
                  )}
                  {openSubMenu === 1 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Live Agent Assistant
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        WhatsApp Broadcasting
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Reports & Analytics 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Automated ChatBot 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        
                        Catalog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        
                        Click to WhatsApp Ads 
                        </a>
                      </li>
                    </>
                  )}
                  {openSubMenu === 2 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Zapier
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Hubspot
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        WooCommerce
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Dialogflow
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        make.com
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Salesforce
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Pipedrive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Webhook
                        </a>
                      </li>
                  </>
                  )}
                  {openSubMenu === 3 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Blog 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        About Us 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Work With Us 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        
                          Contact 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Knowledge Center 

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Partner With Us 

                        </a>
                      </li>
                    </>
                  )}
                  {openSubMenu === 4 && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        WhatsApp Business API
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Instagram
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Google Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        
                        Viber
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Line

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                        Messenger

                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
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
                    className="btn btn-primary d-block"
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
