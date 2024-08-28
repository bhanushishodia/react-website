import React from 'react';
import './TopNavbar.css'; // Assuming you have a CSS file for styles

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-12 text-black text-lg-end text-md-center text-center">
              <div className="links">
                <a
                  href="https://calendly.com/info-w0m/30min?month=2024-02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a> |
                <a
                  href="sms-fallback"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SMS Fallback
                </a> |
                <a
                  href="partner-with-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner
                </a> |
                <a
                  href="campaign-request-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
