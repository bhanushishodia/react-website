// src/components/common/Header.js
import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import "./TopNavbar.css"; // Assuming you have a CSS file for styles
import TopNavbar from "./TopNavbar"; // Adjust the path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { getImage } from '../../utils/getImage'; // Correct path to utility

// Fetching images dynamically using getImage function
const logo = getImage("logo.webp");
const whatsappMarketingIcon = getImage("icons/whatsapp-marketing.png");
const whatsappCommerceIcon = getImage("icons/whatsapp-commerce.png");
const whatsappSupportIcon = getImage("icons/whatsapp-support.png");
const whatsappAuthenticationIcon = getImage("icons/whatsapp-authentication.png");
const ecommerceRetailIcon = getImage("icons/ecommerce-&-retail.png");
const healthcareIcon = getImage("icons/healthcare.png");
const edTechIcon = getImage("icons/ed-tech.png");
const bankingBFSIIcon = getImage("icons/banking-&-BFS.png");
const mediaEntertainmentIcon = getImage("icons/media-&-entertainment.png");
const foodBeverageIcon = getImage("icons/food-&-beverage.png");
const travelHospitalityIcon = getImage("icons/travel-&-hospitalit.png");
const liveAgentAssistantIcon = getImage("icons/live-agent-assistant.png");
const whatsappBroadcastingIcon = getImage("icons/whatsapp-broadcasting.png");
const reportsAnalyticsIcon = getImage("icons/reports-&-analytics.png");
const automatedChatBotIcon = getImage("icons/automated-chatbot.png");
const catalogIcon = getImage("icons/catalog.png");
const clickToWhatsAppAdsIcon = getImage("icons/click-to-whatsapp-ads.png");
const blogIcon = getImage("icons/blog.png");
const contactIcon = getImage("icons/contact-us.png");
const knowledgeCenterIcon = getImage("icons/knowledge-center.png");
const partnerWithUsIcon = getImage("icons/partner-with-us.png");
const aboutUsIcon = getImage("icons/about-us.png");
const workWithUsIcon = getImage("icons/work-with-us.png");
const whatsappBusinessIcon = getImage("icons/whatapp.png");
const instagramIcon = getImage("icons/instagram.png");
const googleMessagesIcon = getImage("icons/googlemessage.png");
const viberIcon = getImage("icons/viber.png");
const lineIcon = getImage("icons/line.png");
const messengerIcon = getImage("icons/messanger.png");
const weChatIcon = getImage("icons/wechat.png");
const zapierIcon = getImage("icons/zapier.png");
const hubspotIcon = getImage("icons/hubspot.png");
const woocommerceIcon = getImage("icons/woocommerce.png");
const dialogflowIcon = getImage("icons/dialogueflow.png");
const makeIcon = getImage("icons/make.png");
const salesforceIcon = getImage("icons/salesforce.png");
const pipedriveIcon = getImage("icons/pipedrive.png");
const webhookIcon = getImage("icons/webhook.png");

function Header() {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

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
  