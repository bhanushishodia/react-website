import React from "react";
import "./SMSFallback.css";

import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import CountUp from "react-countup";
import { Helmet } from 'react-helmet';
import { getImage } from "../utils/getImage"; // Adjust the path as needed
  // Using getImage to dynamically import images
  const whatsappFallbackImage = getImage("whatsapp-fallback-sms-home-page.webp");
  const forgeReliableConnectionsImage = getImage("forge-reliable-connections.webp");
  const whyImplementFallbackSMSImage = getImage("why-implement-whatsapp-fallback-sms.webp");
  const maximizeMessageDeliveryImg = getImage("icons/maxumize-message-delivery.png");
  const optimizeCostsAndResourcesImg = getImage("icons/optimize-costs-and.png");
  const ensureReliableConnectionImg = getImage("icons/AnAensure-reliable.png");
  const completeReachImg = getImage("icons/complete-reach.png");

const SMSFallback = () => {
 
  return (
    <div>
      <div>
      <Helmet>
        <title>Whatsapp SMS Fallback | Fallback SMS Service | Anantya.ai</title>
        <meta name="keywords" content="SMS Fallback, sms fallback, fallback sms, text message fallback, whatsapp fallback sms" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Enhance Customer Service with SMS Fallback - fallback sms is a reliable backup for internet-based channels. Signup now." />
        <meta property="og:title" content="Whatsapp SMS Fallback | Fallback SMS Service | Anantya.ai" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Enhance Customer Service with SMS Fallback - fallback sms is a reliable backup for internet-based channels. Signup now." />
        <meta property="og:url" content="https://anantya.ai/sms-fallback" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://anantya.ai/assets/img/whatsapp-fallback-sms-home-page.webp" />
        <link rel="canonical" href="https://anantya.ai/sms-fallback" />
        <meta name="author" content="Anantya.ai" />
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Fallback SMS",
                "item": "https://anantya.ai/sms-fallback"
              }
            ]
          })}
        </script>
      </Helmet>
      </div>
     
      <div className="container  py-5 my-4">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-black mt-30 text-md-start text-center">
            <div className="info text-black">
              <h1 className="heading">Enhance Engagement with SMS Fallback Feature</h1>
              <p className="mt-20 text-black pe-md-5">
                Anantya.ai ensures messages are received, whether through
                WhatsApp or reliable fallback SMS.
              </p>

              <div className="btns mt-4">
                <a
                  href="https://calendly.com/info-w0m/30min?month=2024-02"
                  target="_blank"
                  rel="noopener noreferrer" // Add rel for security reasons
                  className="btn login_button"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            >
              <img
                src={whatsappFallbackImage}
                className="img-fluid"
                alt="Enhance Engagement with SMS Fallback"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="numbers py-5">
        <div className="container px-0">
          <div className="content">
            <div className="row">
              <div className="col-lg-3">
                <div className="number-card">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={29} duration={2.75} suffix="%" />
                  </h2>
                  <div className="text">Reduction in Response Time</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="number-card">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={60} duration={2.75} suffix="X" />
                  </h2>
                  <div className="text">
                    Surge in One-Time Query Resolutions
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="number-card">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={70} duration={2.75} suffix="%" />
                  </h2>
                  <div className="text">Queries Without Involving an Agent</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="number-card border-0">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={18} duration={2.75} suffix="%" />
                  </h2>
                  <div className="text">Boost in CSAT Scores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
        }}
      >
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto px-5">
              <img
                src={forgeReliableConnectionsImage}
                className="img-fluid"
                alt="Forge Reliable Connections"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5">
              <h2 className="text-lg-start text-center">
                Forge Reliable Connections Beyond WhatsApp with Fallback SMS
              </h2>
              <ul>
                <li className="d-flex align-items-center mb-2 mt-20 text-start">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p>
                    Break the barriers between WhatsApp and non-WhatsApp users.
                    Craft tailored messages for each user segment, enhancing
                    personalized interactions.
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2 text-start">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p>
                    Fine-tune your broadcast strategy for optimal results.
                    Ensure messages are received, whether through WhatsApp or
                    reliable fallback SMS.
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2 text-start">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p>
                    Expand your audience and stimulate higher user interaction.
                    Diversify your approach to cater to different user
                    preferences, maximizing engagement.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto text-start">
              <h2 className="text-md-start text-center">Why Implement WhatsApp Fallback SMS?</h2>
              <ul>
                <li className="d-flex align-items-center mb-2 mt-20">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg 
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p className="">
                    Find users without WhatsApp and send messages through SMS.
                    Ensure no missed opportunities or incomplete communication.
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p>
                    Streamline messaging for both WhatsApp and SMS. Cut costs by
                    efficiently connecting with users through fallback SMS.
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                        fill="#448AFF"
                      />
                    </svg>
                  </small>
                  <p>
                    Deliver messages consistently to build trust. Establish a
                    reliable connection that goes beyond individual messaging
                    platforms.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={whyImplementFallbackSMSImage}
                className="img-fluid"
                alt="Why Implement WhatsApp Fallback SMS"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services  bg-gray2">
        <div className="services-content">
          <div className="container pt-5">
            <div className=" row row-cols-1 row-cols-md-4 g-4  px-md-0 px-3 ">
              <div className="col">
                <div
                  className="service-card wow fadeInUp h-100"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="img-icon">
                    <img
                      src={maximizeMessageDeliveryImg}
                      alt="Maximize Message Delivery"
                    />
                  </div>
                  <h3>
                    Maximize <br /> Message Delivery
                  </h3>
                  <p>
                    Identify users without WhatsApp accounts and seamlessly
                    reach them via SMS.
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="service-card wow fadeInUp h-100"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img-icon">
                    <img
                      src={optimizeCostsAndResourcesImg}
                      alt="Optimize Costs and Resources"
                    />
                  </div>
                  <h3>
                    Optimize Costs <br /> and Resources
                  </h3>
                  <p>
                    Reduce the cost of exclusive WhatsApp campaigns by
                    efficiently connecting with users through fallback SMS.
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="service-card wow fadeInUp h-100"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img-icon">
                    <img
                      src={ensureReliableConnectionImg}
                      alt="Ensure Reliable Connections"
                    />
                  </div>
                  <h3>
                    Ensure Reliable <br /> Connections
                  </h3>
                  <p>
                    Establish a reliable connection that transcends the
                    limitations of individual messaging platforms.
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="service-card wow fadeInUp h-100"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img-icon">
                    <img
                      src={completeReachImg}
                      alt="Complete Reach Across User Base"
                    />
                  </div>
                  <h3>
                    Complete Reach <br /> Across User Base
                  </h3>
                  <p>
                    Ensure messages reach all users, regardless of their
                    WhatsApp status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div
            className="con-info wow fadeInDown text-black"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <h4 className="pb-2">
              Take Your WhatsApp Engagement to the Next Level!
            </h4>
            <p>
              Implement Anantya.ai's WhatsApp Fallback SMS feature today and
              revolutionize your customer engagement strategy.
            </p>
            <div className="btns mt-20">
              <a href="https://wa.link/i5f21m" className="btn login_button">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default SMSFallback;
