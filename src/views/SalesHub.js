import React from "react";
import "./SalesHub.css"; // Import your CSS file for styles
import PreSales from "../components/common/preSales"; // Use exact casing

import OnboardingProcess from '../components/common/OnboardingProcess';
import ResourceLibrary from '../components/common/ResourceLibrary'; // Import the ResourceLibrary component
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const leftLogo = getImage('sales-hub/logo.webp'); // Left logo import
const rightLogo = getImage('sales-hub/mobi-logo.png'); // Right logo import
const presalesImage = getImage('sales-hub/pre-sales.webp'); // Pre-sales image import
const postsalesImage = getImage('sales-hub/post-confirmations.webp'); // Post-sales image import
const resourceImage = getImage('sales-hub/resources-process.webp'); // Resources image import


const SalesHub = () => {
  return (
    <div className="sales-hub">
      {/* Sticky Top Bar */}
      <div className="top-bar">
  <div className="top-bar-left">
    <a href="/">  {/* This makes the left logo clickable and redirects to the homepage */}
      <img src={leftLogo} alt="Left Logo" className="logo" />
    </a>
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
