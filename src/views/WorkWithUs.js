import React from "react";
import { Helmet } from 'react-helmet';
import "./workwithus.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import OpenPositions from "../components/common/OpenPositions"; // Import the new OpenPositions component
const WorkWithUs = () => {
  return (
    <>
    <Helmet>
    <title>Work with us | Join Anantya.ai for Exciting Opportunities</title>
    <meta name="robots" content="index,follow" />
    <meta
        name="description"
        content="Discover exciting career opportunities and work with Anantya AI, a leading WhatsApp service provider. Join our team and shape the future of communication."
    />
    <meta property="og:title" content="Work with us | Join Anantya.ai for Exciting Opportunities" />
    <meta property="og:type" content="article" />
    <meta
        property="og:description"
        content="Discover exciting career opportunities and work with Anantya AI, a leading WhatsApp service provider. Join our team and shape the future of communication."
    />
    <meta property="og:url" content="https://anantya.ai/work-with-us" />
    <meta property="og:site_name" content="anantya.ai" />
    <meta property="og:image" content="https://anantya.ai/assets/img/home/Home%20page%20Graphics.webp" />
    <link rel="canonical" href="https://anantya.ai/work-with-us" />
    <meta name="author" content="Anantya" />

    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://anantya.ai",
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Work with us",
                    "item": "https://anantya.ai/work-with-us",
                },
            ],
        })}
    </script>
    </Helmet>
    <div className="work-with-us-page">
      <div className="container">
        <div className="content pt-5 mt-md-0 mt-5">
          <div className="row align-items-center text-center">
            <h1>Anantya.ai</h1>
            <h5 className="py-2">
              Join Anantya.ai: Create, Work Together, and Empower!
            </h5>
            <p className="mb-20">⚡️Powered by Meta</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row_am features_section px-md-5 px-2 my-3">
          <div className="features_inner">
            <div className="section_title px-md-5 px-0">
              <h2 className="text-center mb-20">
                About <span>Us</span>
              </h2>
              <p className="px-md-5 px-4 text-justify pb-md-5">
                At Anantya.ai, we are dedicated to creating a world where small
                to medium-sized companies can grow their businesses smartly. Our
                ultimate goal is to assist businesses in connecting with their
                customers wherever they may be, particularly on messaging
                platforms, ensuring constant accessibility, personalization, and
                real-time engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Add more content or sections as needed */}
       {/* Use OpenPositions Component */}
    
       <OpenPositions />
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default WorkWithUs;
