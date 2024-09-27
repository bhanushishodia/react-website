import React from "react";
import "./SalesHub.css"; // Import your CSS file for styles
import PreSales from "../components/common/PreSales";
import leftLogo from '../assets/images/sales-hub/logo.webp'; // Left logo import
import rightLogo from '../assets/images/sales-hub/mobi-logo.png'; // Right logo import
import presalesImage from '../assets/images/sales-hub/pre-sales.webp'; // Right logo import
import postsalesImage from '../assets/images/sales-hub/post-confirmations.webp'; // Right logo import
import resourceImage from '../assets/images/sales-hub/resources-process.webp'; // Right logo import
import OnboardingProcess from '../components/common/OnboardingProcess';
import ResourceLibrary from '../components/common/ResourceLibrary'; // Import the ResourceLibrary component

const SalesHub = () => {
  return (
    <div className="sales-hub">
      {/* Sticky Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src={leftLogo} alt="Left Logo" className="logo" />
        </div>
        <div className="top-bar-right">
          <img src={rightLogo} alt="Right Logo" className="logo" />
        </div>
      </div>

      {/* Main Container with Sidebar and Content */}
      <div className="main-container">
        <div className="sidebar">
          <h5 className="mb-20">Pre Sales</h5>
          <ul>
            <li><a href="#section1">1. Intro mail content</a></li>
            <li><a href="#section2">2. Product Demo</a></li>
            <li><a href="#section3">3. Use-case Discussion</a></li>
            <li><a href="#section4">4. Negotiations</a></li>
            <li><a href="#section5">5. Confirmation</a></li>
          </ul>

          <h5 className="mb-10 mt-10">Post Confirmations</h5>
          <ul>
            <li><a href="#section6">1. Agreement/ Payment</a></li>
            <li><a href="#section7">2. Onboarding mail</a></li>
            <li><a href="#section8">3. Onboarding Initiation</a></li>
            <li><a href="#section9">4. Onboarding Meeting</a></li>
            <li><a href="#section10">5. Credential Mail</a></li>
            <li><a href="#section11">6. Training & Setup</a></li>
            <li><a href="#section12">7. Support Handover</a></li>
            <li><a href="#section13">8. Resources</a></li>
          
          </ul>
        </div>

        <div className="content">
            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}
            >
              <img
                src={resourceImage}
                className="img-fluid"
                alt="double-up-on-security"
              />
            </div>
            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}
            > 
            <h2 className="px-5">Mastering the Sales Journey: Essential Steps and Strategies</h2>
              <img
                src={presalesImage}
                className="img-fluid"
                alt="presales"
              />
            </div>
            <PreSales />


            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}
            > 
            <h2 className="px-5">Embarkation Station: Your Client's Journey Begins Here</h2>
              <img
                src={postsalesImage}
                className="img-fluid"
                alt="presales"
              />
            </div>
       

          {/* Post Confirmations Content Sections */}
       

          {/* Onboarding Process Component */}
          <OnboardingProcess />
          <ResourceLibrary />
        </div>
      </div>
    </div>
  ); 
};

export default SalesHub;
