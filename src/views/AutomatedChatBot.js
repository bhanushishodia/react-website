// src/views/AutomatedChatBot.js
import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import createChatbotsImg from '../assets/images/create-whatsapp-chatbots-easily.webp';
import logicalFlowsImg from '../assets/images/icons/logical-flows.png';
import saveTimeImg from '../assets/images/icons/save-time.png';
import automateIntegrationImg from '../assets/images/icons/automate-integration.png';
import businessOperationImg from '../assets/images/respond-to-customer-and-prospect-whatsapp.webp';
import callToActionImg from '../assets/images/cta/automated-chatbot.webp'; // Adjust path if necessary
import automateResponsesImg from '../assets/images/automate-responses-to-sales.webp'; // Adjust path if necessary
import whatsappImage from '../assets/images/wa.link_3dzezc.png'; 
const AutomatedChatBot = () => {
  return (
    <div>
    
      <Helmet>
        {/* Title and Meta Tags */}
        <title>Whatsapp Chatbot for Business | No-Code Chatbot Builder</title>
        <meta
          name="keywords"
          content="Whatsapp Chatbot for Business,Whatsapp Automation Chatbot,whatsapp auto reply chatbot,Whatsapp Chatbot,Chatbot in Whatsapp,Whatsapp Bot,whatsapp auto reply chatbot"
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Build Whatsapp Chatbot within a few minutes from Anantya.ai's no-code chatbot builder. You can automate chat between customers & Organisations."
        />
        <meta
          property="og:title"
          content="Whatsapp Chatbot for Business | No-Code Chatbot Builder"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Build Whatsapp Chatbot within a few minutes from Anantya.ai's no-code chatbot builder. You can automate chat between customers & Organisations."
        />
        <meta
          property="og:url"
          content="https://anantya.ai/automated-chatbot"
        />
        <meta property="og:site_name" content="anantya.ai" />
        <meta
          property="og:image"
          content="https://anantya.ai/assets/img/whatsapp-support/offer-support-at-scale-with.webp"
        />
        <link
          rel="canonical"
          href="https://anantya.ai/automated-chatbot"
        />
        <meta name="author" content="Anantya" />

        {/* JSON-LD Schema for Organization */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Anantya.ai",
          "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
          "url": "https://anantya.ai/",
          "logo": "https://anantya.ai/assets/img/logo.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971565480273",
            "contactType": "sales",
            "areaServed": ["AE","SA","BH"],
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.facebook.com/anantyaai",
            "https://www.instagram.com/anantya.ai",
            "https://www.youtube.com/@Anantyaai",
            "https://www.linkedin.com/company/anantya-ai",
            "https://www.pinterest.com/anantyaai"
          ]
        }
        `}</script>

        {/* JSON-LD Schema for WebPage */}
        <script type="application/ld+json">{`
        {         
          "@context": "https://schema.org/",         
          "@type": "WebPage",         
          "@id": "#WebPage",         
          "url": "https://anantya.ai/automated-chatbot",          
          "name": "Whatsapp Chatbot for Business | No-Code Chatbot Builder"
        }
        `}</script>

        {/* JSON-LD Schema for BreadcrumbList */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://anantya.ai"
          },  
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Whatsapp Chatbot for Business | No-Code Chatbot Builder",
            "item": "https://anantya.ai/automated-chatbot"
          }]
        }
        `}</script>
      </Helmet>



       <div className="container py-5 mt-5">
      <div className="content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20">
            <div className=" text-black pe-md-4 text-lg-start text-center">
              <h1 className='heading'>
                Automate up to 96% Queries with <span>WhatsApp Chatbots</span>
              </h1>
              <p className="mt-20 text-black">
                Automate sales and support with a no-coding WhatsApp chatbot you can build and launch in minutes using an intuitive drag-and-drop interface.
              </p>
              <div className="btns mt-30">
                <a href="book-a-demo" className="btn login_button">
                  Start Free 7 Day Trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="wow zoomIn"
              style={{ animationDelay: '0.2s', animationName: 'zoomIn' }}
            >
              <img src={createChatbotsImg} className="img-fluid" alt="create-whatsapp-chatbots-easily" />
            </div>
          </div>
        </div>
      </div>
       </div>
       <section style={{ background: '#fff' }}>
      <div className="container">
        <div className="content py-5 text-center">
       
            <h2 className='pb-4'>
              Create Chatbots for <span>24/7 Support</span> <br/> & Engagement
            </h2> 
     
          <div className="content">
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 px-md-0 px-3">
              <div className="col">
                <a href="contact" className="features-card style-5 box-1 h-100">
                  <div className="icon">
                    <img src={logicalFlowsImg} alt="logical-flows" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Logical Flows</h5>
                    <p className="text">
                      Design chatbots with intuitive logical pathways to guide users through various processes seamlessly.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact" className="features-card style-5 box-2 h-100">
                  <div className="icon">
                    <img src={saveTimeImg} alt="save-time" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Save Time</h5>
                    <p className="text">
                      Allow chatbots to efficiently handle routine inquiries, freeing up valuable time for your team.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact" className="features-card style-5 box-3 h-100">
                  <div className="icon">
                    <img src={automateIntegrationImg} alt="automate-integration" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Automate Integration</h5>
                    <p className="text">
                      Seamlessly connect Anantya.ai with your preferred third-party tools for streamlined automation.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
       </section>
    
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={businessOperationImg}
              className="img-fluid"
              alt="Keep your business open 24*7*365 with Automated Chatbot"
            />
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-lg-start text-center">
            <h2>Seamlessly Operate Business <span>Process 24/7</span></h2><br />
            <p className="text-justify">
              Save time by automating responses to common sales or support questions.
              Automation helps capture more leads and connect with more contacts.
            </p>
            <p className="text-justify">
              Seamless integration with popular tools like Google Sheets, HubSpot, and
              Zapier, ready to use.
            </p><br />
          </div>
        </div>
      </div>
      <div className="container py-5">
      <a href="/campaign-request-demo" target="_blank" rel="noopener noreferrer">
        <img
          src={callToActionImg}
          className="img-fluid"
          alt="Call to action on the home page"
        />
      </a>
      </div>
   
    <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              <span>Automate responses</span> to sales and support messages
            </h2>
            <br />
            <p className="text-justify">
              Easily create conversation flows to help customers with tasks like booking appointments, generating leads, registering new students, collecting documents, and more.
            </p>
            <br />
            <p className="text-justify">
              Create and deploy a smart WhatsApp chatbot in minutes with no coding required using an intuitive drag-and-drop flow builder interface.
            </p>
            <br />
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={automateResponsesImg}
              className="img-fluid"
              alt="Automate responses to sales and support messages"
            />
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: '#f3fbff' }} className="clients style-5 pb-20">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
          <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
            <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
              <div className="col">
                <div className="cta-card new text-center">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1 h-100">
                      <div className="html-embed-27 cta w-embed">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 18 14"
                          fill="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                            fill="currentcolor"
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
                          fill="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                            fill="currentcolor"
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
                        src={whatsappImage}
                        className="img-fluid w-50 mx-auto"
                        alt="WhatsApp Scanner"
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
              Register for our Live Demo today and discover why Anantya.ai is the right choice for your business and get answers to all your WhatsApp-related questions.
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

export default AutomatedChatBot;
