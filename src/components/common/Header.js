// src/components/common/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./TopNavbar.css"; // Assuming you have a CSS file for styles
import TopNavbar from "./TopNavbar"; // Adjust the path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Corrected paths for assets
import logo from "../../assets/images/logo.webp";
import whatsappMarketingIcon from "../../assets/images/icons/whatsapp-marketing.png";
import whatsappCommerceIcon from "../../assets/images/icons/whatsapp-commerce.png";
import whatsappSupportIcon from "../../assets/images/icons/whatsapp-support.png";
import whatsappAuthenticationIcon from "../../assets/images/icons/whatsapp-authentication.png";
import ecommerceRetailIcon from "../../assets/images/icons/ecommerce-&-retail.png";
import healthcareIcon from "../../assets/images/icons/healthcare.png";
import edTechIcon from "../../assets/images/icons/ed-tech.png";
import bankingBFSIIcon from "../../assets/images/icons/banking-&-BFS.png";
import mediaEntertainmentIcon from "../../assets/images/icons/media-&-entertainment.png";
import foodBeverageIcon from "../../assets/images/icons/food-&-beverage.png";
import travelHospitalityIcon from "../../assets/images/icons/travel-&-hospitalit.png";
import liveAgentAssistantIcon from "../../assets/images/icons/live-agent-assistant.png";
import whatsappBroadcastingIcon from "../../assets/images/icons/whatsapp-broadcasting.png";
import reportsAnalyticsIcon from "../../assets/images/icons/reports-&-analytics.png";
import automatedChatBotIcon from "../../assets/images/icons/automated-chatbot.png";
import catalogIcon from "../../assets/images/icons/catalog.png";
import clickToWhatsAppAdsIcon from "../../assets/images/icons/click-to-whatsapp-ads.png";
import blogIcon from "../../assets/images/icons/blog.png";
import contactIcon from "../../assets/images/icons/contact-us.png";
import knowledgeCenterIcon from "../../assets/images/icons/knowledge-center.png";
import partnerWithUsIcon from "../../assets/images/icons/partner-with-us.png";
import aboutUsIcon from "../../assets/images/icons/about-us.png";
import workWithUsIcon from "../../assets/images/icons/work-with-us.png";
import whatsappBusinessIcon from "../../assets/images/icons/whatapp.png";
import instagramIcon from "../../assets/images/icons/instagram.png";
import googleMessagesIcon from "../../assets/images/icons/googlemessage.png";
import viberIcon from "../../assets/images/icons/viber.png";
import lineIcon from "../../assets/images/icons/line.png";
import messengerIcon from "../../assets/images/icons/messanger.png";
import weChatIcon from "../../assets/images/icons/wechat.png";
import zapierIcon from "../../assets/images/icons/zapier.png";
import hubspotIcon from "../../assets/images/icons/hubspot.png";
import woocommerceIcon from "../../assets/images/icons/woocommerce.png";
import dialogflowIcon from "../../assets/images/icons/dialogueflow.png";
import makeIcon from "../../assets/images/icons/make.png";
import salesforceIcon from "../../assets/images/icons/salesforce.png";
import pipedriveIcon from "../../assets/images/icons/pipedrive.png";
import webhookIcon from "../../assets/images/icons/webhook.png";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <TopNavbar />
      <header className="header d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo on the left */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>

          {/* Menu options centered */}
          <nav className="menu ms-auto d-none d-lg-block">
            <ul className="d-flex justify-content-center">
              {/* Solution dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="solutionDropdown"
                  role="button"
                >
                  {" "}
                  Solution
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-columns"
                  aria-labelledby="solutionDropdown"
                >
                  <div className="row">
                    <div className="col-6">
                      <span class="ps-md-4 font-weight-bold  custom-divider">
                        Use Case
                      </span>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/whatsapp-marketing"
                        >
                          <img
                            src={whatsappMarketingIcon}
                            alt="WhatsApp Marketing"
                          />{" "}
                          WhatsApp Marketing
                        </Link>{" "}
                        <span className="subline">
                          Increase clicks, leads, and sales with improved
                          engagement.
                        </span>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/whatsapp-commerce">
                          <img
                            src={whatsappCommerceIcon}
                            alt="WhatsApp Commerce"
                          />{" "}
                          WhatsApp Commerce{" "}
                        </Link>{" "}
                        <span className="subline">
                          {" "}
                          Boost your sales 5X through the power of instant
                          messaging.
                        </span>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/whatsapp-support">
                          <img
                            src={whatsappSupportIcon}
                            alt="WhatsApp Support"
                          />{" "}
                          WhatsApp Support{" "}
                        </Link>
                        <span className="subline">
                          Build stronger customer loyalty with a streamlined
                          solution.
                        </span>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/whatsapp-authentication"
                        >
                          <img
                            src={whatsappAuthenticationIcon}
                            alt="WhatsApp Authentication"
                          />{" "}
                          WhatsApp Authentication{" "}
                        </Link>
                        <span className="subline">
                          Verify user identity at every login step using
                          WhatsApp OTP
                        </span>
                      </li>
                    </div>
                    <div className="col-6">
                      <span class="ps-md-4 font-weight-bold custom-divider">
                        Industry
                      </span>
                      <li>
                        <a className="dropdown-item" href="/ecommerce-industry">
                          <img
                            src={ecommerceRetailIcon}
                            alt="Ecommerce & Retail"
                          />{" "}
                          Ecommerce & Retail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/healthcare-industry">
                          <img src={healthcareIcon} alt="Healthcare" />{" "}
                          Healthcare
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/edtech-industry">
                          <img src={edTechIcon} alt="Ed-Tech" /> Ed-Tech
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/banking-industry">
                          <img src={bankingBFSIIcon} alt="Banking & BFSI" />{" "}
                          Banking & BFSI
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/media-entertainment-industry"
                        >
                          <img
                            src={mediaEntertainmentIcon}
                            alt="Media & Entertainment"
                          />{" "}
                          Media & Entertainment
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/food-and-beverage-industry">
                          <img src={foodBeverageIcon} alt="Food & Beverage" />{" "}
                          Food & Beverage
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/travel-and-hospitality-industry">
                          <img
                            src={travelHospitalityIcon}
                            alt="Travel & Hospitality"
                          />{" "}
                          Travel & Hospitality
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Features dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="featuresDropdown"
                  role="button"
                >
                  Features
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-columns"
                  aria-labelledby="featuresDropdown"
                >
                  {" "}
                  <span class="ps-md-4 font-weight-bold custom-divider pe-md-0">
                    {" "}
                    Features
                  </span>
                  <li>
                    <a className="dropdown-item" href="/live-agent-support">
                      <img
                        src={liveAgentAssistantIcon}
                        alt="Live Agent Assistant"
                      />{" "}
                      Live Agent Assistant
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/whatsapp-broadcasting">
                      <img
                        src={whatsappBroadcastingIcon}
                        alt="WhatsApp Broadcasting"
                      />{" "}
                      WhatsApp Broadcasting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/reports-and-analytics">
                      <img
                        src={reportsAnalyticsIcon}
                        alt="Reports & Analytics"
                      />{" "}
                      Reports & Analytics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/automated-chatbot">
                      <img src={automatedChatBotIcon} alt="Automated ChatBot" />{" "}
                      Automated ChatBot
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/whatsapp-catalog">
                      <img src={catalogIcon} alt="Catalog" /> Catalog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/click-to-whatsapp-ads">
                      <img
                        src={clickToWhatsAppAdsIcon}
                        alt="Click to WhatsApp Ads"
                      />{" "}
                      Click to WhatsApp Ads
                    </a>
                  </li>
                </ul>
              </li>

              {/* Integration dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="integrationDropdown"
                  role="button"
                >
                  Integration
                </a>
                <ul
                  className="dropdown-menu  custom-dropdown dropdown-menu-columns"
                  aria-labelledby="integrationDropdown"
                >
                  <div className="d-flex justify-content-between">
                    <span className="ps-md-4 font-weight-bold custom-divider pe-md-0">
                      Channels
                    </span>
                    <span className="ps-md-4 font-weight-bold custom-divider ps-md-0">
                      Integration
                    </span>
                  </div>
                  <div className="row px-0 ">
  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <li>
          <a className="dropdown-item" href="/whatsapp-business-api">
            <img src={whatsappBusinessIcon} alt="WhatsApp Business API" className="icon" />
            WhatsApp Business API
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/instagram">
            <img src={instagramIcon} alt="Instagram" className="icon" />
            Instagram
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/google-business-messages">
            <img src={googleMessagesIcon} alt="Google Messages" className="icon" />
            Google Messages
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/viber">
            <img src={viberIcon} alt="Viber" className="icon" />
            Viber
          </a>
        </li>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <li>
          <a className="dropdown-item" href="/integrations/line">
            <img src={lineIcon} alt="Line" className="icon" />
            Line
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/facebook-messenger">
            <img src={messengerIcon} alt="Messenger" className="icon" />
            Messenger
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/wechat">
            <img src={weChatIcon} alt="WeChat" className="icon" />
            WeChat
          </a>
        </li>
      </div>
    </div>
  </div>

  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <li>
          <a className="dropdown-item" href="/integrations/zapier">
            <img src={zapierIcon} alt="Zapier" className="icon" />
            Zapier
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/hubspot">
            <img src={hubspotIcon} alt="Hubspot" className="icon" />
            Hubspot
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/woocommerce">
            <img src={woocommerceIcon} alt="WooCommerce" className="icon" />
            WooCommerce
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/dialogflow">
            <img src={dialogflowIcon} alt="Dialogflow" className="icon" />
            Dialogflow
          </a>
        </li>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <li>
          <a className="dropdown-item" href="/integrations/make">
            <img src={makeIcon} alt="Make.com" className="icon" />
            make.com
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/salesforce">
            <img src={salesforceIcon} alt="Salesforce" className="icon" />
            Salesforce
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/pipedrive">
            <img src={pipedriveIcon} alt="Pipedrive" className="icon" />
            Pipedrive
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/integrations/webhook">
            <img src={webhookIcon} alt="Webhook" className="icon" />
            Webhook
          </a>
        </li>
      </div>
    </div>
  </div>
                    </div>
                    <div className="div-block-277 mb-0">
  <a className="internalpage_link" href="/integration">
    View More Integration
    <i className="fas fa-long-arrow-right ms-2 color-blue7"></i>
  </a>
</div>



                </ul>
              </li>

              {/* Resources dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="resourcesDropdown"
                  role="button"
                >
                  Resources
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-columns"
                  aria-labelledby="resourcesDropdown"
                >
                  {" "}
                  <span class="ps-md-4 font-weight-bold custom-divider">
                    {" "}
                    Resources
                  </span>
                  <div className="row">
                    <div className="col-6">
                      <li>
                        <a className="dropdown-item" href="/blog">
                          <img src={blogIcon} alt="Blog" /> Blog
                          <span class="subline">Explore our latest articles,<br/>
                          updates, and insights.</span>
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/about">
                          <img src={aboutUsIcon} alt="About Us" /> About Us
                          <span class="subline">Discover our mission, <br/> values and the
                                                        story </span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/work-with-us">
                          <img src={workWithUsIcon} alt="Work With Us" /> Work
                          With Us
                          <span class="subline">Explore current
                                                        job <br/> openings </span>
                        </a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li>
                        <a className="dropdown-item" href="/contact">
                          <img src={contactIcon} alt="Contact" /> Contact
                          <span class="subline">Get in touch for inquiries, <br/> or
                                                        support.</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/knowledge-center">
                          <img
                            src={knowledgeCenterIcon}
                            alt="Knowledge Center"
                          />{" "}
                          Knowledge Center
                          <span class="subline">Access guides, <br/> and informative content.
                                                    </span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/partner-with-us">
                          <img src={partnerWithUsIcon} alt="Partner With Us" />{" "}
                          Partner With Us
                          <span class="subline">Learn about our <br/> partnership
                                                        programs.</span>
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Button on the right */}
          <div className="button">
             <a
      href="https://calendly.com/info-w0m/30min?month=2024-02"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Book a Demo
    </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
  