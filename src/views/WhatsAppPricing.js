import React from "react";
import { Helmet } from 'react-helmet';
import "./whatsapppricing.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import CountUp from "react-countup";

import sebiLogo from '../assets/images/sebi.png';
import harmanhouseLogo from '../assets/images/harmanhouse.png';
import gulfUniversityLogo from '../assets/images/gulf-university.png';
import orangeLogo from '../assets/images/orange.png';
import suzukiLogo from '../assets/images/suzuki.png';
import fullmarksLogo from '../assets/images/fullmarks.png';
import checkIcon from "../assets/images/Check-icon.svg";
import instantSetup from '../assets/images/icons/instant-whatsapp-setup.png';
import noHiddenCharges from '../assets/images/icons/no-extra-hidden-charges.png';
import customerSupport from '../assets/images/icons/24-7-customer-support.png';
import whatsappMarketing from '../assets/images/whatsapp-marketing-home-page.webp';
import chatbotImage from '../assets/images/create-whatsapp-chatbots-easily.webp';
import liveAgentImage from '../assets/images/supercharge-your-teams-productivity.webp';
const WhatsAppPricing = () => {
  const showContent = (contentId) => {
    document.getElementById("monthly-content").style.display =
      contentId === "monthly-content" ? "block" : "none";
    document.getElementById("yearly-content").style.display =
      contentId === "yearly-content" ? "block" : "none";
  };
  return (
    <>
     <Helmet>
      {/* Title and Meta Tags */}
      <title>WhatsApp API Pricing in India | Affordable Business Solutions</title>
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Affordable WhatsApp pricing plans in India by Anantya.aI. Get the best rates for WhatsApp Business API, chatbots, and more to enhance customer communication."
      />
      <meta
        name="keywords"
        content="whatsapp api pricing, whatsapp business api pricing, whatsapp business pricing, whatsapp business api cost, pricing for whatsapp business api, whatsapp for business pricing, whatsapp api pricing india, whatsapp api cost, whatsapp business cost, whatsapp business api price, whatsapp api charges, whatsapp business api pricing india, pricing for whatsapp business api, whatsapp pricing api"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content="WhatsApp API Pricing in India | Affordable Business Solutions" />
      <meta
        property="og:description"
        content="Affordable WhatsApp pricing plans in India by Anantya.aI. Get the best rates for WhatsApp Business API, chatbots, and more to enhance customer communication."
      />
      <meta property="og:url" content="https://anantya.ai/whatsapp-pricing" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/no-code-chat-bot.webp" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://anantya.ai/whatsapp-pricing" />

      {/* Author */}
      <meta name="author" content="Anantya" />

      {/* JSON-LD Schema for Organization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "anantya.ai",
            "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
            "url": "https://anantya.ai",
            "logo": "https://anantya.ai/assets/img/logo.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971565480273",
              "contactType": "sales",
              "areaServed": ["IN"],
              "availableLanguage": ["en"]
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

      {/* JSON-LD Schema for BreadcrumbList */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://anantya.ai/"
            }, {
              "@type": "ListItem", 
              "position": 2, 
              "name": "WhatsApp API Pricing in India | Affordable Business Solutions",
              "item": "https://anantya.ai/whatsapp-pricing"  
            }]
          }
        `}
      </script>
    </Helmet>


    <div className="whatsapp-pricing-page py-md-2 py-4">
      <section>
        <div className="container">
          <div className="row my-0 py-5 mx-md-0 mx-1">
            <div className="col-md-7 col-sm-12 my-auto text-lg-start text-center">
              

              <h2 className="pb-4">
              Grow Your Leads and Sales on WhatsApp with the Right <span>WhatsApp Business API</span></h2>

              <p className="partner_subheading pb-20">
              Handle all your Sales, Support, and Marketing conversations on WhatsApp with Anantya.
               <b> Perfect for businesses across India!</b>
              </p>

              <p><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                        <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                    </svg> &nbsp;Design Custom Chatbots &amp; Catalogs</span> &nbsp; </p>
                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                        <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                    </svg> &nbsp;Run Bulk Campaigns &amp; Click Ads</span></p>
                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                        <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                    </svg> &nbsp;Track Results with Advanced Analytics</span></p>
                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                        <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                    </svg> &nbsp; Automate Support &amp; SMS Fallback</span></p>
            </div>

            <div className="col-md-5 col-sm-12 pt-md-0 pt-5" id="myForm">
              <div
                className="py-4 col-12 px-md-5 px-4"
                style={{
                  border: "3px solid #5dc4eb",
                  borderTopRightRadius: "40px",
                  borderTopLeftRadius: "40px",
                  background: "#fff",
                  boxShadow: "0 34px 54px 0 rgba(0, 0, 0, .1)",
                  overflow: "hidden",
                  borderRadius: "30px",
                }}
              >
                <h3 className="text-center">Book a Demo Call</h3>
                <form action="https://formspree.io/f/mdorezev" method="POST" id="myForm">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="Name"
                    className="form-control bg-light"
                    id="name"
                    placeholder="Name"
                  />

                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-light"
                    id="email"
                    placeholder="Your Email id*"
                  />

                  <label htmlFor="phone"></label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control bg-light"
                    id="phone"
                    placeholder="Phone Number*"
                  />

                  <label htmlFor="messages"></label>
                  <input
                    type="text"
                    name="message"
                    className="form-control bg-light"
                    id="messages"
                    placeholder="Name of Organisation"
                  />

                  <label htmlFor="url"></label>
                  <input
                    type="url"
                    name="url"
                    className="form-control bg-light"
                    id="url"
                    placeholder="Website URL"
                  />

                  <div className="mt-3 mx-auto text-center">
                    <input
                      type="submit"
                      className="px-5 py-2 button_partner"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     

      <section>
        <div className="statics my-5" style={{ backgroundColor: "#e1fafe52" }}>
          <div className="container pb-5">
            <div className="all-statics mt-3">
              <div className="row no-gutters my-auto py-3 px-3 ">
                <div className="col-md-6 col-sm-12 align-items-center my-auto">
                  <h2>Trusted by 100+ brands across <span>India</span></h2>
                  <div className="d-flex flex-wrap align-items-center mt-4">
                    <div className="logo-container mx-2">
                      <img
                        src={sebiLogo}
                        className="anantya_logo"
                        alt="sebi-logo"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={harmanhouseLogo}
                        className="anantya_logo"
                        alt="harmanhouse-logo"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={gulfUniversityLogo}
                        className="anantya_logo"
                        alt="glfuniversity-logo"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={orangeLogo}
                        className="anantya_logo"
                        alt="ornage-logo"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={suzukiLogo}
                        className="anantya_logo"
                        alt="suzuki-logo"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={fullmarksLogo}
                        className="anantya_logo"
                        alt="fullmarks-logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                  <section className="numbers style-6 mt-70">
                    <div className="content pb-100 brd-gray">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className=" card_statices  style-6">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={5}
                                duration={2.75}
                                suffix="X"
                              />
                            </h2>
                            <div className="text">
                            Growth in Lead Generation
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card_statices style-6">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={90}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                            Boost in Engagement
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div className="card_statices style-6 ">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={35}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                            Faster Resolution Time
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div className="card_statices style-6 ">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={60}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                            Boost in Cart Recovery
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner_section">
      <div className="container wp-pricing-img pb-5">
        <h2 className="text-center pb-4">
          Complete WhatsApp Platform: <br /> <span>Everything You Need in One Place</span>
        </h2>

        <div className="row px-md-4">
          <div className="col-lg-6 col-md-6 col-sm-12  pe-md-4 text-md-start text-center">
            <div className="banner_text">
              <h2 className="py-3">
                WhatsApp <span>Marketing</span>
              </h2>
              <p className="pb-2">
                Connect with your target audience instantly through WhatsApp broadcasting. Share offers, product tips, and reminders to engage customers at scale. Anantya.ai helps you reach a wide and diverse audience.
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Custom Templates with Buttons
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Targeted Audience Segmentation
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-.1.3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Powerful Analytics
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={whatsappMarketing} className="img-fluid" alt="Start your WhatsApp Marketing Journey With Anantya.ai" />
          </div>
        </div>

        <div className="row py-5 px-md-4">
          <div className="col-lg-6 col-md-6 my-auto">
            <img src={chatbotImage} className="img-fluid" alt="create-whatsapp-chatbots-easily" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  text-md-start text-center ps-md-5">
            <div className="banner_text">
              <h2 className="py-3">
                WhatsApp Chatbots, <span>Automation, and Catalogs</span>
              </h2>
              <p className="pb-2">
                Engage customers instantly with chatbots, automate key tasks, and showcase your products with the WhatsApp Catalog. Anantya offers an intuitive drag-and-drop chatbot builder to qualify leads, solve queries, book appointments, and more. Streamline your customer journey and drive growth.
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Drag-and-Drop Chatbot Builder
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-.1.3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Trigger-Based Workflows
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-.1.3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Developer APIs for Automation
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="row px-md-4">
          <div className="col-lg-6 col-md-6 col-sm-12 pe-md-5  text-md-start text-center">
            <div className="banner_text">
              <h2 className="py-3">
                Streamlined Multi-Agent <span>Customer Support</span>
              </h2>
              <p className="pb-2">
                Enhance your customer service with Anantya. Handle multiple inquiries simultaneously for faster and better support.
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-.1.3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Support Large Customer Bases
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Team Management & Productivity Tools
                </span>
              </p>
              <p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                    <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-.1.3z" fill="#54cdeb"></path>
                  </svg>
                  &nbsp;Multi-Agent Dashboard
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={liveAgentImage} className="img-fluid" alt="Live Agent Productivity" />
          </div>
        </div>
      </div>
    </section>

    <div class="container text-center mb-5">
  <div class="col-md-12 mb-5">
    <div class="get_demo">
      <h3>Start your free trial and get expert WhatsApp support now!</h3>
      <a
          href="#myForm"
          type="button"
          className="btn me-2 btn btn-primary text-white btn-color mt-2"
        >
          Start Free Trial
        </a>
    </div>
  </div>
    </div>

      <section style={{ backgroundColor: "#e1fafe52" }}>
        <div class="container py-3 text-center">
          <header class="pricing">
            <h2 class="pt-3">
              Get Amazing Features at a Price that makes sense
            </h2>
            <h4>Reasonable Pricing with zero setup fee</h4>
          </header>
        </div>
      </section>

      <section
        className="pricing style-8"
        style={{ backgroundColor: "#e1fafe52" }}
      >
        <div className="pricing-head wow fadeInUp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="section-head style-8 text-white text-md-start text-center">
                  <h6>Our Plans</h6>
                  <h3 className="text-white">Minimalist Plans</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="pricing-tabsHead text-center">
                  <div className="price-radios">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="monthly-input"
                        value="option1"
                        defaultChecked
                        onClick={() => showContent("monthly-content")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="monthly-input"
                      >
                        Monthly
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="yearly-input"
                        value="option2"
                        onClick={() => showContent("yearly-content")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="yearly-input"
                      >
                        Yearly
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-body" style={{ backgroundColor: "#f0eff5" }}>
          <div className="container pb-5">
            <div id="monthly-content" className="monthly-content">
              <div className="row">
                <div
                  className="col-lg-4 wow fadeInUp"
                  style={{ paddingTop: "60px" }}
                >
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Growth</h2>
                      <p>Suitable for up to 10,000 Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>₹4,095/month</p>
                      <a href="https://wa.link/wunhez" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Whatsapp</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Unlimited Live Conversations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Unlimited Labels & Templates</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>5 Agent Login</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Send Bulk Broadcasts</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Detailed broadcast analytics</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img
                              src={checkIcon}
                              style={{ width: "100%" }}
                              alt="Check icon"
                            />
                          </span>
                          <span>
                            WhatsApp Shared Team Inbox with quick replies, agent
                            assignment, labels and more
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>
                            Chat automation (Welcome Message, Away Message,
                            Keyword auto replies) Basic simple Bot
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Basic simple Bot</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>FBM, API Approval & Setup Guide</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Support</span>
                          <ul className="ps-md-5 ps-4">
                            <li>Docs, Videos and FAQ</li>
                            <li>Email & WhatsApp Support</li>
                            <li>Hand held Onboarding & Setup</li>
                          </ul>
                        </li>
                      </ul>
                      <small className="pt-20">
                        Apart from free Service conversations, (Pay as per
                        conversation charges here)
                      </small>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ visibility: "visible", animationDelay: "0.2s" }}
                >
                  <div className="popular-head">
                    <p className="popular-head">Popular deal: 50% offer</p>
                  </div>
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Pro</h2>
                      <p>Suitable for up to 100,000 Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>₹7,439/month</p>
                      <a href="https://wa.link/1drkvc" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <p className="primary_color">
                        Everything available in Growth +
                      </p>
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Whatsapp, Facebook, Instagram</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>10 Agents Logins</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Advance Analytics and reporting</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Advance Chat bot with API Integration</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>
                            3rd party (Zoho, Salesforce, Shopify, etc)
                            integrations
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>API & Webhooks</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Campaign Scheduler</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Round Robin Assignment</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Automated Workflow</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Roles & Permissions</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Satisfaction Survey</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Downloads Reports</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Support</span>
                    
                          <ul className="ps-md-5 ps-4">
                            <li>Docs, Videos and FAQ</li>
                            <li>Email & WhatsApp Support</li>
                            <li>Hand held Onboarding & Setup</li>
                            <li>Growth consultation</li>
                            <li>Bot Building Assistance</li>
                          </ul>
                        </li>
                      </ul>
                      <small className="pt-20">
                        Apart from free Service conversations, (Pay as per
                        conversation charges here)
                      </small>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{ paddingTop: "60px" }}
                >
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Custom
                      </h2>
                      <p>Suitable for 100,000+ Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>Custom Pricing </p>
                      <a href="https://wa.link/lt8ah2" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <p className="primary_color">
                        Everything available in Pro +
                      </p>
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> All Channels</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Greentick</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>2FA Secured Login</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>5% discount on Anantya conversation Rate Card</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Domain</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Ip Whitelisting</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Fallback message through SMS</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Faster Message Delivery Speed</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Special customizations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Special integrations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Chat bot Complex Journey</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Unlimited Agents</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>  Customer Success Manager</span>
                        </li>
                      </ul>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="yearly-content"
              className="yearly-content"
              style={{ display: "none" }}
            >
              <div className="row">
                <div
                  className="col-lg-4 wow fadeInUp"
                  style={{ paddingTop: "60px" }}
                >
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Growth</h2>
                      <p>Suitable for up to 10,000 Conversations per month</p>
                    </div>
                    <div className="price">
                      <p> ₹40,959/ year</p>
                      <a href="https://wa.link/wunhez" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Whatsapp</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Unlimited Live Conversations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Unlimited Labels & Templates</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>5 Agent Login</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Send Bulk Broadcasts</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Detailed broadcast analytics</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img
                              src={checkIcon}
                              style={{ width: "100%" }}
                              alt="Check icon"
                            />
                          </span>
                          <span>
                            WhatsApp Shared Team Inbox with quick replies, agent
                            assignment, labels and more
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>
                            Chat automation (Welcome Message, Away Message,
                            Keyword auto replies) Basic simple Bot
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Basic simple Bot</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>FBM, API Approval & Setup Guide</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Support</span>
                          <ul className="ps-md-5 ps-4">
                            <li>Docs, Videos and FAQ</li>
                            <li>Email & WhatsApp Support</li>
                            <li>Hand held Onboarding & Setup</li>
                          </ul>
                        </li>
                      </ul>
                      <small className="pt-20">
                        Apart from free Service conversations, (Pay as per
                        conversation charges here)
                      </small>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ visibility: "visible", animationDelay: "0.2s" }}
                >
                  <div className="popular-head">
                    <p>Popular deal: 50% offer</p>
                  </div>
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Pro</h2>
                      <p>Suitable for up to 100,000 Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>₹74,395/year</p>
                      <a href="https://wa.link/1drkvc" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <p className="primary_color">
                        Everything available in Growth +
                      </p>
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Whatsapp, Facebook, Instagram</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>10 Agents Logins</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Advance Analytics and reporting</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Advance Chat bot with API Integration</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="icon" style={{ flexShrink: 0 }}>
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>
                            3rd party (Zoho, Salesforce, Shopify, etc)
                            integrations
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>API & Webhooks</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Campaign Scheduler</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Round Robin Assignment</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Automated Workflow</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Roles & Permissions</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Satisfaction Survey</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Downloads Reports</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Support</span>
                         
                        <ul class="ps-md-5 ps-5">
                          <li>Docs, Videos and FAQ</li>
                          <li>Email & WhatsApp Support</li>
                          <li>Hand held Onboarding & Setup </li>
                          <li>Growth consultation</li>
                          <li>Bot Building Assistance</li>
                        </ul>
                        </li>
                      </ul>
                      <small className="pt-20">
                        Apart from free Service conversations, (Pay as per
                        conversation charges here)
                      </small>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 wow fadeInUp"
                  style={{ paddingTop: "60px" }}
                  data-wow-delay="0.4s"
                >
                  <div className="pricing-card">
                    <div className="pricing-title">
                      <h2>Custom</h2>
                      <p>Suitable for 100,000+ Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>Custom Pricing</p>
                      <a href="https://wa.link/9jqzsi" className="price-btn">
                        Choose Plan →
                      </a>
                    </div>
                    <div className="pricing-info text-left">
                      <p className="primary_color">
                        Everything available in Pro +
                      </p>
                      <ul>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> All Channels</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Greentick</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>2FA Secured Login</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>5% discount on Anantya conversation Rate Card</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Domain</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Ip Whitelisting</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Fallback message through SMS</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Faster Message Delivery Speed</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Special customizations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Special integrations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Chat bot Complex Journey</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Unlimited Agents</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span> Customer Success Manager</span>
                        </li>
                      </ul>
                      <small className="pt-20">
                        Apart from free Service conversations, (Pay as per
                        conversation charges here)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bx3">
      <div className="container pb-4">
        <h2 className="text-center pb-3">
          Why Choose <span>Anantya.ai?</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-5 px-md-0 px-3 pt-4 text-lg-start text-center">
          <div className="col">
            <div className="wp-pricing-card">
              <img
                src={instantSetup}
                className="img-fluid w-25 pe-2"
                alt="whatsapp-setup"
              />
              <h4>
                <span>Instant</span> WhatsApp Setup
              </h4>
            </div>
          </div>

          <div className="col">
            <div className="wp-pricing-card">
              <img
                src={noHiddenCharges}
                className="img-fluid w-25 pe-2"
                alt="no-extra-hidden-charges"
              />
              <h4>
                <span>No</span> Extra Hidden Charges
              </h4>
            </div>
          </div>

          <div className="col">
            <div className="wp-pricing-card">
              <img
                src={customerSupport}
                className="img-fluid w-25 pe-2"
                alt="customer-support"
              />
              <h4>
                <span>24*7</span> Customer Support
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section style={{ background: "linear-gradient(to top, #fff 0%, #edf4fe 74%, #e7f1ff 100%)" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-7 col-sm-12 text-lg-start text-center text-white">
        <h2>
          Boost Your Customer Conversations on WhatsApp with <span> Anantya.ai!</span>
        </h2>
      </div>
      <div className="col-md-5 col-sm-12 text-lg-end text-center my-auto">
        <a
          href="#myForm"
          type="button"
          className="btn me-2 bg-green text-white btn-color mt-20"
        >
          Request a Call Back
        </a>
      </div>
    </div>
  </div>
     </section>

      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default WhatsAppPricing;
