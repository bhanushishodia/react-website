// src/views/channels/WhatsAppBusinessAPI.js
import React from 'react';
import './Channels.css'; // Import any specific CSS if needed
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import metaLogo from "../../assets/images/meta-logo.png"; // Import the image
import whatsappBusinessImage from '../../assets/images/grow-your-business-with-whatsapp.webp';
import LogoCarousel from "../../components/common/LogoCarousel";
import marketingImage from '../../assets/images/whatsapp-marketing-2.webp';
import ChooseUsSection from '../../components/common/ChooseUsSection';
import downloadEbookImg from '../../assets/images/download-ebook.png'; // 
import whatsappBusinessApiImg from '../../assets/images/cta/whatsapp-business-api.webp'; 
const WhatsAppBusinessAPI = () => {
  return (
    <div className="channel-page">
      <div className="container">
        <div className="content py-md-4 py-0">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-30 text-lg-start text-center">
              <div className="info text-black">
                <h1 className="pe-5 mb-20">
                  Grow Your Business With WhatsApp Business API
                </h1>

                <ul className="mt-30">
                  <li>Broadcast Promotional Offers to Unlimited Users</li>
                  <li>Sell your Products on WhatsApp using Catalogues</li>
                  <li>Automate Messages via Integrations</li>
                  <li>Enable Multi-Agent Live Chat for Customer Support</li>
                  <li>Build Chatbots & Solve for 24 x 7 Support & Engagement</li>
                </ul>

                <div className="d-flex align-items-center mt-30 youtube">
                  <p className="me-5">
                    Powered by{' '}
                    <a
                      href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&amp;platforms=whatsapp&amp;id=4336810659772608&amp;section=overview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={metaLogo}
                        className="img-fluid meta ps-2"
                        alt="Meta Logo"
                      />
                    </a>
                  </p>
                </div>

                <div className="btns mt-30">
                  <button
                    className="btn me-2 bg-green text-white btn-color"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                    Try Anantya.ai
                  </button>
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn login_button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="wow zoomIn"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationDelay: '0.2s',
                  animationName: 'zoomIn',
                }}
              >
                <img
                  src={whatsappBusinessImage}
                  className="img-fluid"
                  alt="whatsapp-business-api"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* section2 */}
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
      {/* section2 */}
      <section className="about style-4">
      <div className="content sec-content">
        <div className="container py-5">
          <div className="section-head style-4 text-center">
            <small className="title_small">Better Note Management</small>
            <h2 className="mb-30">
              <span>Automate Your Chats</span> with <br /> WhatsApp Business API
            </h2>
          </div>
          <div className="row align-items-center justify-content-between py-4">
            <div className="col-lg-6 order-2 order-lg-0">
              <div className="info">
                <div className="faq style-3 style-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          WhatsApp for Marketing
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Expand your reach and acquire fresh users effortlessly.
                          Engage with your targeted audience with WhatsApp broadcasts,
                          timely notifications, and build meaningful connections to
                          turn prospects into loyal customers.
                          <a className="mt-10 internalpage_link" href="whatsapp-marketing.html">
                            Explore WhatsApp Marketing{' '}
                            <i className="fal fa-long-arrow-right ms-2 color-blue7"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          WhatsApp for Support
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Don't keep your customers waiting! Help them with quick answers
                          to their essential inquiries, such as order status, delivery updates,
                          payment reminders, and beyond with WhatsApp Support.
                          Ensure customer satisfaction for better retention.
                          <br />
                          <a className="mt-10 internalpage_link" href="whatsapp-support.html">
                            Explore WhatsApp Support{' '}
                            <i className="fal fa-long-arrow-right ms-2 color-blue7"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          WhatsApp for Commerce
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Sell products online with WhatsApp Catalogs and cart.
                          Smartly turn browsers into buyers with tailored recommendations
                          that appeal to their styles, preferences, and budgets.
                          <br />
                          <a className="mt-10 internalpage_link" href="whatsapp-commerce.html">
                            Explore WhatsApp Commerce{' '}
                            <i className="fal fa-long-arrow-right ms-2 color-blue7"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          WhatsApp for Authentication
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Verify user identity at every login step using OTPs,
                          including registration, recovery, and integrity validation.
                          Build trust with customers by sending OTP messages on WhatsApp
                          using your dedicated number.
                          <a className="mt-10 internalpage_link" href="whatsapp-authentication.html">
                            Explore WhatsApp Authentication{' '}
                            <i className="fal fa-long-arrow-right ms-2 color-blue7"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="img mb-30 mb-lg-0">
                <img src={marketingImage} className='img-fluid' alt="automated-chatbot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <ChooseUsSection />
       <section>
            <div className="container py-5">
                <div 
                    className="row py-md-4 py-4 Certification about_api mx-md-0 mx-2" 
                    style={{background: 'linear-gradient(to left bottom,#f3fbff, #FFF7FC )', borderRadius: '15px'}}
                >
                    <div className="col-md-9 col-sm-12 my-auto px-5 py-md-0 py-2 text-lg-start text-center">
                        <h2 className="fs-3">Become an Anantya.ai Partner</h2>
                        <p className="text-justify pt-10"> 
                            Sell What's Already Winning!
                            Tap Into The Power Of Selling What's In High Demand! Find new ways to grow, boost your presence in the market, and expand strategically for overall growth.
                        </p>
                        <a 
                            href="partner-with-us.html" 
                            className="btn bg-green text-white mt-3" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Partner with us
                        </a>
                    </div>
                    <div className="col-md-3 px-1 col-sm-12 text-justify my-auto text-center">
                        <div className="box_citc py-1 mx-auto">
                            <img 
                                src={downloadEbookImg} 
                                className="img-fluid w-lg-100 w-75" 
                                alt="Download Ebook" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <a href="https://wa.link/75kqsm" target="_blank" rel="noopener noreferrer">
                <img 
                    src={whatsappBusinessApiImg} 
                    className="img-fluid" 
                    alt="Call to action on the home page" 
                />
            </a>
        </div>
        <section className="services py-5 mb-40 style-1">
            <div className="container">
                <div className="section-head mb-60 text-center">
                    <h2 className="wow fadeInUp">
                        Top Notch <span className="fw-normal">Features</span>
                    </h2>
                    <p className="mt-20 wow fadeInUp">
                        The Anantya.ai platform provides all the newest features from WhatsApp Business API
                        to help you excel <br /> in marketing and customer support on WhatsApp.
                    </p>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-box mb-4 wow fadeInUp" data-wow-delay="0">
                                <h5 className="custom-divider">
                                    <a href="whatsapp-broadcasting.html">Broadcasting & Automation</a>
                                </h5>
                                <div className="info">
                                    <ul className="text">
                                        <li>Real time Campaign Analytics</li>
                                        <li>Template Message Approval Dashboard</li>
                                        <li>Omnichannel Campaigns</li>
                                        <li>Run Click to WhatsApp Ads</li>
                                        <li>Auto Segregation</li>
                                        <li>Build Catalogs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box mb-4 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="custom-divider">
                                    <a href="whatsapp-support.html">Customer Support</a>
                                </h5>
                                <div className="info">
                                    <ul className="text">
                                        <li>Multi-Human Chat Support</li>
                                        <li>Drag & Drop Chatbot Builder</li>
                                        <li>Shared Team Inbox</li>
                                        <li>Smart Agent Routing</li>
                                        <li>Import Contacts via CSV</li>
                                        <li>Message Scheduling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box mb-4 wow fadeInUp" data-wow-delay="0.4s">
                                <h5 className="custom-divider">
                                    <a href="integration.html">CRM & Integrations</a>
                                </h5>
                                <div className="info">
                                    <ul className="text">
                                        <li>Add Tags & Attributes</li>
                                        <li>Import & Export Contacts</li>
                                        <li>100+ Integrations</li>
                                        <li>Zapier & Pabbly Integrations</li>
                                        <li>Hubspot, Salesforce & more CRM Integrations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default WhatsAppBusinessAPI;
