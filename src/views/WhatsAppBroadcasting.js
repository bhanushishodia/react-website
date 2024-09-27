// src/views/WhatsAppBroadcasting.js
import React from "react";
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import UseCasesSection from '../components/common/UseCasesSection';
import broadcastingImage from "../assets/images/broadcast-messages-to-unlimited.webp"; // Update this path as necessary
import scheduleMessagesIcon from "../assets/images/icons/schedule-messages.png";
import campaignManagementIcon from "../assets/images/icons/campaign-management.png";
import realTimeAnalyticsIcon from "../assets/images/icons/real-time-analytics.png";
import broadcastVideo from "../assets/videos/whatsapp-broadcasting-demo.mp4";
import ctaImage from '../assets/images/cta/Whatsapp-broadcasting-cta.webp';
import campaignImage from '../assets/images/create-personalised-campaigns.webp';
import marketingImage from '../assets/images/improve-marketing-campaign.webp';
import whatsappScannerImage from '../assets/images/wa.link_3dzezc.png';
const WhatsAppBroadcasting = () => {
  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
    </svg>
  );
  return (
    <div>
      <Helmet>
            <title>Whatsapp Broadcasting Software for Business | Anantya.ai</title>
            <meta name="keywords" content="Whatsapp Broadcasting,Whatsapp Broadcasting Software,whatsapp broadcast message,Whatsapp Broadcast,broadcast lists on whatsapp,Whatsapp Broadcast for business,whatsapp broadcasting service,Bulk Whatsapp Messaging,broadcast lists on whatsapp" />
            <meta name="robots" content="index,follow" />
            <meta 
                name="description" 
                content="Boost sales with WhatsApp Broadcasting software. Send messages effortlessly, convert customers, and increase engagement with our marketing tool." 
            />
            <meta property="og:title" content="Whatsapp Broadcasting Software for Business | Anantya.ai" />
            <meta property="og:type" content="article" />
            <meta 
                property="og:description" 
                content="Boost sales with WhatsApp Broadcasting software. Send messages effortlessly, convert customers, and increase engagement with our marketing tool." 
            />
            <meta property="og:url" content="https://anantya.ai/whatsapp-broadcasting" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://anantya.ai/assets/img/whatsapp-support/offer-support-at-scale-with.webp" />
            <link rel="canonical" href="https://anantya.ai/whatsapp-broadcasting" />
            <meta name="author" content="Anantya" />

            <script type="application/ld+json">
                {`
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
                    "areaServed": ["AE", "SA", "BH"],
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
                `}
            </script>

            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org/",
                  "@type": "WebPage",
                  "@id": "#WebPage",
                  "url": "https://anantya.ai/whatsapp-broadcasting",
                  "name": "Whatsapp Broadcasting Software for Business | Anantya.ai"
                }
                `}
            </script>

            <script type="application/ld+json">
                {`
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
                      "name": "Whatsapp Broadcasting Software for Business | Anantya.ai",
                      "item": "https://anantya.ai/whatsapp-broadcasting"
                    }
                  ]
                }
                `}
            </script>
        </Helmet>
      <div className="container py-5 mt-5">
        <div className="content ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black text-md-start text-center">
              <div className="info text-black">
                <h1 className="heading">
                  Engage Customers through Unlimited{" "}
                  <span>WhatsApp Broadcasting</span>
                </h1>
                <p className=" text-black pe-md-5">
                  Personalise and manage your campaigns to build strong customer
                  relationships & get better results. Import your contacts and
                  send WhatsApp broadcast messages with one click.
                </p>
                <div className="btns mt-40">
                  <a
                    href="book-a-demo"
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Free 7 Day Trial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow zoomIn" data-wow-delay="0.2s">
                <img
                  src={broadcastingImage}
                  className="img-fluid"
                  alt="whatsapp-broadcasting"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "zoomIn",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="process style-12" style={{ background: "#fff" }}>
        <div className="container">
          <div className="content py-5 border-1 border-bottom brd-light text-center">
            <div className="section-head text-center mb-40 style-5">
              <h2>
                <span>Connect, Automate,</span> & Streamline
              </h2>
            </div>
            <div className="content">
              <div className="row row-cols-1 row-cols-md-3 g-4 py-5 px-md-0 px-3">
                <div className="col">
                  <div className="features-card style-5 box-1 h-100">
                    <div className="icon">
                      <img src={scheduleMessagesIcon} alt="Schedule Messages" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Schedule Messages</h5>
                      <p className="text">
                        Plan and send out campaigns according to your schedule,
                        ensuring messages reach your audience at the right time
                        for maximum impact and engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-2 h-100">
                    <div className="icon">
                      <img
                        src={campaignManagementIcon}
                        alt="Campaign Management"
                      />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Campaign Management</h5>
                      <p className="text">
                        Make sales and marketing easier by organising and
                        tracking your campaigns. Improve results by keeping an
                        eye on how they're doing and making changes as needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-3 h-100">
                    <div className="icon">
                      <img
                        src={realTimeAnalyticsIcon}
                        alt="Real-Time Analytics"
                      />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Real-Time Analytics</h5>
                      <p className="text">
                        With Anantya.ai, you gain valuable insights into your
                        customers' preferences. By understanding their
                        behaviour, you can optimise your strategies and drive
                        revenue growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns">
                <a
                  className="btn me-2 bg-green text-white btn-color"
                  href="https://wa.link/vcbx6v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                  Send Unlimited WhatsApp Messages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process style-12">
         <div className="container">
               <h2 className="pb-4">
                <span>Create Targeted Broadcasting</span> Campaigns
              </h2>
            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            >
              <video
                preload="auto"
                loop
                playsInline
                muted
                autoPlay
                src={broadcastVideo}
                width="100%"
                height="auto"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  maxHeight: "38.25vw",
                  aspectRatio: "16/9",
                }}
                title="whatsapp-broadcasting-demo"
                data-lazyplay-target="video"
              />
            </div>
          </div>
       
      </section>
      <UseCasesSection />
      <section className="text-lg-start text-center pb-5">
      <div className="container">
        <a href="https://wa.link/vcbx6v" target="_blank" rel="noopener noreferrer">
          <img 
            src={ctaImage} 
            className="img-fluid" 
            alt="Whatsapp-broadcasting-cta" 
          />
        </a>
      </div>
    </section>
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 px-5">
            <img
              src={campaignImage}
              className="img-fluid"
              alt="create-personalised-campaigns"
            />
          </div>
          <div className="col-md-6 col-sm-12 px-5 my-auto text-lg-start text-center">
            <h2>Attract More Customers with <span>Personalised Campaigns</span></h2>
            <br />
            <ul>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>Automate campaigns to target specific groups for more sales.</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>Reach many people with broadcast campaigns and react to events like abandoned carts.</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>Boost loyalty and sales with one-time or repeating WhatsApp notifications.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              <span>Maximise ROI</span> by Improvised Marketing Campaign
            </h2>
            <br />
            <ul>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>
                  Analyse the impact and success of your WhatsApp campaigns with real-time visual dashboards
                </p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>
                  Monitor campaign conversions and their impact on your revenue
                </p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <CheckIcon />
                </small>
                <p>
                  Boost campaign effectiveness and refine customer experiences to increase ROI and conversions
                </p>
              </li>
            </ul>

            <a
              href="whatsapp-broadcasting-ultimate-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green text-white btn-color text-center mt-20"
            >
              Know More
            </a>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={marketingImage}
              className="img-fluid"
              alt="improve-marketing-campaign"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="clients style-5 pb-20 mt-5" style={{ backgroundColor: '#f3fbff' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
          <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
            <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <CheckIcon />
                      </div>
                      <div className="feature-text-2 text-start ps-2">Experience a personalized demo with us</div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <CheckIcon />
                      </div>
                      <div className="feature-text-2 text-start ps-2">Discover why 10,000+ businesses choose us</div>
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
                      <div className="feature-text-2 text-center">Experience Anantya.ai on Whatsapp</div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <img
                        src={whatsappScannerImage}
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
              Register for our Live Demo today and discover why Anantya.ai is the right choice for your business and get answers to all your WhatsApp-related questions.
            </p>
          </div>
        </div>
      </div>
      <hr className="line_breaker_2" />
    </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default WhatsAppBroadcasting;
