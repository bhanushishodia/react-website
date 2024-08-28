import React from "react";
import "./whatsapppricing.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import CountUp from "react-countup";
import bannerImage from "../assets/images/no-code-chat-bot.webp"; // Import image
import alInsanLogo from "../assets/images/1.png"; // Import images
import alMadinaLogo from "../assets/images/2.png";
import amokilLogo from "../assets/images/3.png";
import ivySmsLogo from "../assets/images/4.png";
import kinMarcheLogo from "../assets/images/5.png";
import northStarLogo from "../assets/images/6.png";
import checkIcon from "../assets/images/Check-icon.svg";
import { FaWhatsapp } from "react-icons/fa";
import { BsPersonAdd, BsPatchCheck } from "react-icons/bs";
const WhatsAppPricing = () => {
  const showContent = (contentId) => {
    document.getElementById("monthly-content").style.display =
      contentId === "monthly-content" ? "block" : "none";
    document.getElementById("yearly-content").style.display =
      contentId === "yearly-content" ? "block" : "none";
  };
  return (
    <div className="whatsapp-pricing-page">
      <section>
        <div className="container">
          <div className="row my-0 py-5 mx-md-0 mx-1">
            <div className="col-md-7 col-sm-12 my-auto text-lg-start text-center">
              

              <h1 className="pt-4 pb-20">
              Grow Your Leads and Sales on WhatsApp with the Right WhatsApp Business API</h1>

              <p className="partner_subheading pb-20">
              Handle all your Sales, Support, and Marketing conversations on WhatsApp with Anantya.
               Perfect for businesses across India!
              </p>

              <p> &nbsp; Design Custom Chatbots & Catalogs</p>
              <p> &nbsp; Run Bulk Campaigns & Click Ads </p>
              <p> &nbsp; Track Results with Advanced Analytics </p>
              <p> &nbsp; Automate Support & SMS Fallback </p>
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
                <form action="https://formspree.io/f/mdorezev" method="POST">
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

      <section className="banner_section">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img
                src={bannerImage}
                className="img-fluid"
                alt="No-code Chatbot"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto ps-md-5 ps-4 text-lg-start text-center">
              <div className="banner_text">
                <span>Bring your Brand to the Top Level</span>
                <h2 className="py-3">
                  Drive 3X Revenue with <br />
                  <span> WhatsApp Business API</span>
                </h2>
                <p>
                  Enhance your communication game & boost sales with the
                  WhatsApp Business API platform that automates marketing,
                  sales, support, and service.
                </p>
                <a
                  href="https://wa.link/zvhije"
                  className="btn me-2 bg-green text-white btn-color mt-20"
                >
                  <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                  Create your No-code Chatbot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="statics my-5" style={{ backgroundColor: "#e1fafe52" }}>
          <div className="container py-5">
            <div className="all-statics">
              <div className="row no-gutters my-auto">
                <div className="col-md-6 col-sm-12 align-items-center my-auto">
                  <h2>Enabling Purposeful Engagements across 1000+ brands</h2>
                  <div className="d-flex flex-wrap align-items-center mt-4">
                    <div className="logo-container mx-2">
                      <img
                        src={alInsanLogo}
                        className="anantya_logo"
                        alt="Al Insan"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={alMadinaLogo}
                        className="anantya_logo"
                        alt="Al Madina"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={amokilLogo}
                        className="anantya_logo"
                        alt="Amokil"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={ivySmsLogo}
                        className="anantya_logo"
                        alt="Ivy SMS"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={kinMarcheLogo}
                        className="anantya_logo"
                        alt="Kin Marche"
                      />
                    </div>
                    <div className="logo-container mx-2">
                      <img
                        src={northStarLogo}
                        className="anantya_logo"
                        alt="North Star"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 my-auto">
                  <section className="numbers style-6 mt-70">
                    <div className="content pb-100 brd-gray">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="number-card style-6">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={41}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                              Decreased Customer Acquisition Cost
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="number-card style-6">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={90}
                                duration={2.75}
                                suffix="X"
                              />
                            </h2>
                            <div className="text">
                              Increase in Customer Retention
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="number-card style-6 border-0">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={35}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                              Decreased Resolution Time
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="number-card style-6 border-0">
                            <h2 className="me-4 color-blue5">
                              <CountUp
                                start={0}
                                end={62}
                                duration={2.75}
                                suffix="%"
                              />
                            </h2>
                            <div className="text">
                              Increase Cross-Sell & Upsell
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
                    <p>Popular deal: 50% offer</p>
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
                          <span>Enterprise Grade Support</span>
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
                      <h2>Enterprise</h2>
                      <p>Suitable for 100,000+ Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>₹9,999/month</p>
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
                          <span>Custom Solutions</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Pricing</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Integrations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Dedicated Account Manager</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>24/7 Support</span>
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
                      <p>₹41,140/year</p>
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
                      <p>₹14,878/year</p>
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
                          <span>Standard & Premium Support</span>
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
                      <h2>Enterprise</h2>
                      <p>Suitable for 100,000+ Conversations per month</p>
                    </div>
                    <div className="price">
                      <p>₹99,990/year</p>
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
                          <span>Custom Solutions</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Pricing</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Custom Integrations</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>Dedicated Account Manager</span>
                        </li>
                        <li>
                          <span className="icon">
                            <img src={checkIcon} alt="Check icon" />
                          </span>
                          <span>24/7 Support</span>
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
      <section>
        <div className="container my-5">
          <div className="sales">
            <div className="row px-md-5">
              <div className="col-md-6 col-sm-12 text-lg-start text-center">
                <h4>
                  Get Additional Sessions as{" "}
                  <span className="highlight-2 text-center">Add-On</span>
                </h4>
                <p>
                  Enhance your anantya.ai experience with a dedicated Customer
                  Success Manager for seamless integration and personalized
                  support of our solution.
                </p>
                <a
                  href="https://wa.link/9rbekw"
                  className="btn me-2 bg-green text-white btn-color mt-20"
                >
                  <FaWhatsapp className="me-2 pe-2 border-end" />
                  Talk to Sales
                </a>
              </div>
              <div className="col-md-6 col-sm-12 border-left my-auto ps-md-5 text-lg-start text-center">
                <div className="titles">
                  <h5 className="card-title">
                    <BsPersonAdd style={{ color: "#50B9F7" }} />
                    &nbsp;&nbsp; Additional users{" "}
                    <span className="highlight-2 text-center">
                      {" "}
                      ₹752/ Month
                    </span>
                  </h5>
                  <p>
                    Add another team member on panel and get more done for just
                    ₹752/per month
                  </p>
                </div>
                <div className="titles">
                  <h5 className="card-title">
                    <BsPatchCheck style={{ color: "#50B9F7" }} />
                    &nbsp;&nbsp; Greentick{" "}
                    <span className="highlight-2 text-center">
                      {" "}
                      ₹2,423/ Month
                    </span>
                  </h5>
                  <p>
                    Boost customer trust on your WhatsApp Business account and
                    watch your business thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#50B9F7" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-lg-start text-center text-white">
              <h3>
                Enable direct communication with customers through Click-to-Chat
                Ads
              </h3>
            </div>
            <div className="col-md-6 col-sm-12 text-lg-end text-center my-auto">
              <a
                href="https://wa.link/vyno4q"
                target="_blank"
                rel="noopener noreferrer"
                className="start_button text-white btn-color me-2"
              >
                Start 7-day Free Trial
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

export default WhatsAppPricing;
