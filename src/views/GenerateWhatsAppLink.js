// src/components/GenerateWhatsAppLinkContent.js

import React from 'react';
import './GenerateWhatsAppLink.css'; // Assuming you have a CSS file for styling

import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import WhatsAppLinkGenerator from '../components/common/WhatsAppLinkGenerator';
import LogoCarousel from "../components/common/LogoCarousel";
import { getImage } from '../utils/getImage'; // Adjust the path to your utility function

// Fetching images dynamically using the getImage function
const whatsappImage = getImage('whatsapp-link-generator.webp'); // Import the image
const step1Image = getImage('walink-generator-step-1.webp'); // Import Step 1 image
const step2Image = getImage('walink-generator-step-2.webp'); // Import Step 2 image
const step3Image = getImage('walink-generator-step-3.webp'); // Import Step 3 image


const GenerateWhatsAppLink = () => {
  // Function to handle button click and scroll to the form
  const scrollToForm = () => {
    document.getElementById('myForm').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className="container py-5 my-5">
      <div className="row">
        <div className=" info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-md-start">
          <span className='scrollAnimationSection_1'>Free WhatsApp Link Generator</span>
          <h1 className="heading pt-3">WhatsApp Link Generator: Create a link for your business</h1>
          <p className="py-3">
            Bridge the gap between business and its customers and capture leads by generating WhatsApp links with Anantya.ai.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="btn me-md-2 bg-green text-white btn-color"
          >
            Create a WhatsApp Link
          </button>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <img
            src={whatsappImage} // Use the imported image
            className="img-fluid"
            alt="Generate WhatsApp URL"
          />
        </div>
      </div>
    </div>
    <div className="text-center pt-5">
        <h2 className="logo_heading">Trusted by leading brands globally</h2>
        <LogoCarousel />
        <p
          className="color-666 line_breaker text-center mt-5 wow fadeInDown"
          style={{ visibility: "visible", animationName: "fadeInDown" }}
        >
          Generate leads, create help tickets, and chat across channels{" "}
          <a
            href="https://wa.link/hd4mvx"
            className="color-000 fw-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now
          </a>
        </p>
      </div>

     <div className="container text-md-start py-5">
    <h2 className="pb-3 text-center fw-light">Generate a link with 3 simple steps</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Step 1 */}
      <div className="col">
        <div className="walink-card h-100">
          <img src={step1Image} className="img-fluid w-75" alt="Step 1" />
          <h6>Step 1</h6>
          <p>Enter your country code and your WhatsApp business number.</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="col">
        <div className="walink-card h-100">
          <img src={step2Image} className="img-fluid w-75" alt="Step 2" />
          <h6>Step 2</h6>
          <p>Type the welcome message you wish to send your customer.</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="col">
        <div className="walink-card h-100">
          <img src={step3Image} className="img-fluid w-75" alt="Step 3" />
          <h6>Step 3</h6>
          <p>
            Click on the “Create a WhatsApp chat link” button, and you are ready to go, it’s that easy!
          </p>
        </div>
      </div>
    </div>
     </div>
     <WhatsAppLinkGenerator />
     <div className="container py-5 px-md-5 mx-md-5 p-5 text-md-start m-5">
            <h2 className="fw-light">Why Generate WhatsApp Links for Your Business?</h2>

            <h6 className="py-2">Strategize Marketing with the WA Link</h6>
            <p>
                Connect your business socially and plan marketing effectively. Drive your customers directly from social media apps to WhatsApp with a WA link.
            </p>

            <h6 className="py-2">Increase Sales</h6>
            <p>
                Boost sales with WhatsApp! Create an easy way for your customers to browse your catalog and make purchases directly from WhatsApp, no need to visit multiple links or websites.
            </p>

            <h6 className="py-2">Make an Instant Communication</h6>
            <p>
                WhatsApp Chat links let you offer instant support, send greeting wishes to new users, and help customers instantly, by making their experience seamless.
            </p>
        </div>
     <ScrollToTopButton />
     <WhatsAppWidget />
     

  </>
  );
};

export default GenerateWhatsAppLink;
