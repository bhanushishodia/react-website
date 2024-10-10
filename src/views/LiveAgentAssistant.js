// src/views/LiveAgentAssistant.js
import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const productivityImage = getImage('supercharge-your-teams-productivity.webp');
const noCardIcon = getImage('No-card-icon.svg');
const helpAgent = getImage('help-agents-create-better-customer.webp');
const ctaImage = getImage('cta/home-pagecta.jpg'); // Adjust the path as needed
const manageConversationsImage = getImage('cta/manage-conversations-more-easily.webp');
const whatsappScannerImg = getImage('wa.link_3dzezc.png');
const agentIcon = getImage('icons/track-agent-performance.png'); // Adjust the path as per your project structure
const organizeServiceIcon = getImage('icons/organize-teams.png'); // Adjust the path as per your project structure
const manageIcon = getImage('icons/manage-contacts.png'); // Adjust the path as per your project structure

const LiveAgentAssistant = () => {
  return (  
    <div>     
      <Helmet>
  <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/live-agent-support" />
  <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/live-agent-support" />
  <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/live-agent-support" />
  <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/live-agent-support" />
  <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/live-agent-support" />
  <link rel="alternate" hrefLang="en" href="https://anantya.ai/live-agent-support" />

  <title>Live Agent Support on Whatsapp | Assistant for Customer Service</title>
  <meta name="robots" content="index,follow" />
  <meta name="title" content="Live Agent Support on Whatsapp | Assistant for Customer Service" />
  <meta name="description" content="Enhance your customer service with Anantya's Whatsapp live agent support. Get real-time assistance and advanced features for exceptional service." />
  <meta name="keywords" content="live agent support, live agent assistant, live chat integration" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_AE" />
  <meta property="og:locale" content="en_SA" />
  <meta property="og:locale" content="en_BH" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:title" content="Live Agent Support on Whatsapp | Assistant for Customer Service" />
  <meta property="og:description" content="Enhance your customer service with Anantya's Whatsapp live agent support. Get real-time assistance and advanced features for exceptional service." />
  <meta property="og:url" content="https://anantya.ai/live-agent-support" />
  <meta property="og:site_name" content="anantya.ai" />
  <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/supercharge-your-teams-productivity.webp" />
  <link rel="canonical" href="https://anantya.ai/live-agent-support" />
  <meta name="author" content="Anantya" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Anantya.ai",
      "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
      "url": "https://anantya.ai/",
      "logo": "https://ik.imagekit.io/cloy701fl/images/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971565480273",
        "contactType": "sales",
        "areaServed": ["AE", "SA", "BH", "IN"],
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/anantyaai",
        "https://www.instagram.com/anantya.ai",
        "https://www.youtube.com/@Anantyaai",
        "https://www.linkedin.com/company/anantya-ai",
        "https://www.pinterest.com/anantyaai"
      ]
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "@id": "#WebPage",
      "url": "https://anantya.ai/live-agent-support",
      "name": "Live Agent Support on Whatsapp | Assistant for Customer Service"
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Homepage",
          "item": "https://anantya.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Live Agent Support",
          "item": "https://anantya.ai/live-agent-support"
        }
      ]
    })}
  </script>
</Helmet>

     <div className="container py-5 mt-5"> 
      <div className="content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20 text-md-start text-center">
            <div className=" text-black pe-md-4">
              <h1 className='heading'>Supercharge your Team's Productivity with WhatsApp</h1>
              <p className="mt-1 text-black pe-md-5">
                With the WhatsApp Business API, provide Live Chat across multiple devices using the same phone number, to handle customer support, boost sales, and grow your business on WhatsApp.
              </p>
            
              <p className="mt-20">
                <img src={noCardIcon} className="img-fluid me-2" alt="credit-card" /> No credit card required
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wow zoomIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}>
              <img src={productivityImage} className="img-fluid" alt="Supercharge Your Team's Productivity with Anantya.ai" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="process style-12" style={{ background: "#fff" }}>
        <div className="container">
          <div className="content py-5">
            <div className="section-head text-center mb-40 style-5">
              <h2 className="fs-2">
              Deliver <span> Exceptional Customer Experiences </span> <br/>
              with a Unified Customer View
              </h2>
            </div>
            <div className="content">
              <div className="row row-cols-1 row-cols-md-3 g-4 py-5 px-md-0 px-3">
                <div className="col">
                  <div className="features-card style-5 box-1 h-100">
                    <div className="icon">
                      <img src={agentIcon} alt="24-7" />
                    </div>  
                    <div className="info">
                      <h5 className="card-title">Track Agent Performance </h5>
                      <p className="text"> Track agent response times, customer ratings, 
                  resolution rates, chat volume, and provide feedback and training for improvement.
                               
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-2 h-100">
                    <div className="icon">
                      <img src={organizeServiceIcon} alt="services" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Organize Teams</h5>
                      <p className="text">Create teams for sales, support, or different shifts
                        to provide specialised help and organize work effectively. 
                                                
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-3 h-100">
                    <div className="icon">
                      <img src={manageIcon} alt="cyber-security" />
                    </div>
                    <div className="info">
                      <h5 className="card-title"> Manage Contacts</h5>
                      <p className="text">
                      You can manage contact lists easily, add new numbers,
                      and import/export CSV files as needed.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section>
            <div className="container py-5">
                <div className="row">
                
                    <div className="col-md-6 col-sm-12 my-auto px-5">
                        <img 
                            src={helpAgent} 
                            className="img-fluid" 
                            alt="Help agents create better customer connections" 
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 my-auto px-5  text-lg-start text-center">
                        <h2>
                            Help agents create better <span>customer connections</span>
                        </h2>
                        <br />
                        <p className="text-justify">
                            Allow agents to handle questions on over 30 messaging channels from one place.
                            Use smart routing and workflows to automatically send chats to agents with the right skills and availability.
                        </p>
                       
                        <p className="text-justify">
                            Use pre-written responses to reply quicker and save agent time for more complicated problems.
                        </p>
                    </div>
                </div>
            </div>
    </section>
    <div className="container pb-5">
            <a href="https://wa.link/tfscb7" target="_blank" rel="noopener noreferrer">
                <img 
                    src={ctaImage} 
                    className="img-fluid" 
                    alt="Call to action on the home page" 
                />
            </a>
    </div>
    <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
                        <h2>Manage conversations more easily with <span>Live Agent Support </span>
                        </h2><br />

                        <ul>
                            <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                                    </svg>
                                </small>
                                <p>View contact lists, input new numbers for additional contacts, 
                                    and import/export CSV files.</p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                                    </svg>
                                </small>
                                <p>Categorise contacts with tags to distinguish groups like VIPs
                                    and enhance reporting insights.</p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                                    </svg>
                                </small>
                                <p>Create user teams designated for sales, support, or day and night shifts.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12 my-auto px-5">
                        <img 
                            src={manageConversationsImage} 
                            className="img-fluid" 
                            alt="Manage conversations more easily" 
                        />
                    </div>
                </div>
            </div>
    </section>
    <section className="clients style-5 pb-20" style={{ backgroundColor: '#f3fbff' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
          <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
            <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 18 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Experience a personalized demo with us
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 18 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Discover why 10,000+ businesses choose us
                      </div>
                    </li>
                  </ul>
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green text-white btn-color text-center mt-10"
                  >
                    Book A Live Demo
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1 text-center">
                      <div className="feature-text-2 text-center">
                        Experience Anantya.ai on WhatsApp
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <img
                        src={whatsappScannerImg}
                        className="img-fluid w-50 mx-auto"
                        alt="whatsapp-scaner-img"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="style-5 col my-auto ps-md-5 text-lg-start text-center">
            <h2 className="mb-20 ">
              Experience Anantya.ai <br />
              <span>in Action!</span>
            </h2>
            <p>
              Register for our Live Demo today and discover why Anantya.ai is the right choice for
              your business and get answers to all your WhatsApp-related questions.
            </p>
          </div>
        </div>
      </div>
      <hr className="line_breaker_2 " />
    </section>
     <ScrollToTopButton />
      <WhatsAppWidget />    
    </div>
  );
};

export default LiveAgentAssistant;
