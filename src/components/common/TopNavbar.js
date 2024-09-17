import React, { useState, useEffect } from "react";
import "./TopNavbar.css"; // Ensure you have a CSS file for styles
import Popup from "./Popup";

const TopNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // State to control the current index of visible blog link
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of blog links
  const blogLinks = [
    {
      href: "whatsapp-business-app-vs-whatsapp-business-api",
      text: "WhatsApp Business App vs WhatsApp Business API",
    },
    {
      href: "whatsapp-business-api-ultimate-guide",
      text: "WhatsApp Business API: Your Ultimate 2024 Guide",
    },
    {
      href: "whatsapp-free-entry-frequency-capping",
      text: "WhatsApp’s Free Entry Point and Frequency Capping in 2024",
    },
    {
      href: "change-in-whatsapp-international-authentication-pricing",
      text: "Telecom Revolt on International Authentication Messages",
    },
    {
      href: "whatsapp-broadcasting-ultimate-guide",
      text: "WhatsApp Broadcast: Your Complete Business Booster Guide",
    },
    {
      href: "meta-new-frequency-capping-update",
      text: "What will change after Meta’s new frequency capping update?",
    },
  ];

  // Effect to handle the automatic slide of links
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogLinks.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [blogLinks.length]);

  return (
    <div className="top-navbar d-none d-lg-block">
      <div className="container">
        <div className="content">
          <div className="row">
            {/* Left Side: Vertical Sliding Blog Links */}
            <div className="marquee-container col-lg-6 text-black text-lg-start text-md-start text-center">
              <div className="marquee-content">
                {/* Only show the current blog link */}
                <a
                  href={blogLinks[currentIndex].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blogLinks[currentIndex].text}
                </a>
              </div>
            </div>

            {/* Right Side: Navigation Links and Popup Button */}
            <div className="links col-lg-6 text-black text-lg-end text-md-center text-center">
              <a href="sms-fallback" target="_blank" rel="noopener noreferrer">
                SMS Fallback
              </a>{" "}
              |
              <a
                href="partner-with-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partner
              </a>{" "}
              |
              <a
                href="campaign-request-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>{" "}
              |
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  togglePopup(); // Trigger the popup
                }}
                className="btn-link" // Style it like a link
                style={{ textDecoration: "none", color: "black" }} // Optional inline styling if needed
              >
                Start a Free Trial
              </a>
              {showPopup && <Popup closePopup={togglePopup} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
