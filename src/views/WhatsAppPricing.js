import React from "react";
import { Helmet } from "react-helmet";
import "./whatsapppricing.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LogoCarousel2 from "../components/common/LogoCarousel2";
import ScrollableSection from "../components/common/ScrollableSection";
import CountUp from "react-countup";
import { getImage } from "../utils/getImage"; // Adjust the path as needed
const logo = getImage("logo.webp");
const metaLogo = getImage("meta-logo.png"); // Import the image
// Fetching images dynamically using the getImage function
const checkIcon = getImage("Check-icon.svg");
const instantSetup = getImage("icons/instant-whatsapp-setup.png");
const noHiddenCharges = getImage("icons/no-extra-hidden-charges.png");
const customerSupport = getImage("icons/24-7-customer-support.png");
const smsFallback = getImage("/whatsapp-pricing/sms-fallback.png");
const whatsappChatbot = getImage("/whatsapp-pricing/whatsapp-chatbot.png");
const whatsappMarketing = getImage("/whatsapp-pricing/whatsapp-marketing.png");
const WhatsAppPricing = () => {
  const showContent = (contentId) => {
    document.getElementById("monthly-content").style.display =
      contentId === "monthly-content" ? "block" : "none";
    document.getElementById("yearly-content").style.display =
      contentId === "yearly-content" ? "block" : "none";
  };
  window.addEventListener("scroll", function () {
    stickyForm();
});

function stickyForm() {
    var form = document.getElementById("myStickyForm");

    if (!form) {
        console.error("Form with ID 'myStickyForm' not found.");
        return; // Exit the function if the form doesn't exist
    }

    // Check if the window width is greater than 768 pixels
    if (window.innerWidth <= 768) {
        form.style.position = "static"; // Reset position if on mobile/tablet
        return; // Exit the function early for smaller screens
    }

    var lastSection = document.getElementById("lastSection");
    var container = form.closest(".container");

    if (!container) {
        console.error("Container for form not found.");
        return; // Exit if the container is not found
    }

    var formTop = form.getBoundingClientRect().top;
    var lastSectionTop = lastSection.getBoundingClientRect().top;
    var containerRight = container.getBoundingClientRect().right;
    var formHeight = form.offsetHeight;

    if (formTop <= 20 && lastSectionTop - formHeight > 20) {
        form.style.position = "fixed";
        form.style.top = "20px";
        form.style.right = window.innerWidth - containerRight + "px";
        form.style.left = "auto";
    } else {
        form.style.position = "static";
    }

    if (lastSectionTop - formHeight <= 20) {
        form.style.position = "absolute";
        form.style.top = lastSectionTop - formHeight + "px";
    }
}


  return (
    <>
     <Helmet>
      <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/whatsapp-pricing" />
      <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/whatsapp-pricing" />
      <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/whatsapp-pricing" />
      <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/whatsapp-pricing" />
      <link rel="alternate" hreflang="en-in" href="https://anantya.ai/whatsapp-pricing" />
      <link rel="alternate" hreflang="en" href="https://anantya.ai/whatsapp-pricing" />

      <title>WhatsApp API Pricing in India | Affordable Business Solutions</title>
      <meta name="robots" content="index,follow" />
      <meta name="title" content="WhatsApp API Pricing in India | Affordable Business Solutions" />
      <meta name="description" content="Affordable WhatsApp pricing plans in India by Anantya.aI. Get the best rates for WhatsApp Business API, chatbots, and more to enhance customer communication." />
      <meta name="keywords" content="whatsapp api pricing, whatsapp business api pricing, whatsapp business pricing, whatsapp business api cost, pricing for whatsapp business api, whatsapp for business pricing, whatsapp api pricing india, whatsapp api cost, whatsapp business cost, whatsapp business api price, whatsapp api charges, whatsapp business api pricing india, pricing for whatsapp business api, whatsapp pricing api" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content="WhatsApp API Pricing in India | Affordable Business Solutions" />
      <meta property="og:description" content="Affordable WhatsApp pricing plans in India by Anantya.aI. Get the best rates for WhatsApp Business API, chatbots, and more to enhance customer communication." />
      <meta property="og:url" content="https://anantya.ai/whatsapp-pricing" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/partner-program-homepage.webp" />
      <link rel="canonical" href="https://anantya.ai/whatsapp-pricing" />
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
          "url": "https://anantya.ai/whatsapp-pricing",
          "name": "WhatsApp API Pricing in India | Affordable Business Solutions"
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://anantya.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "WhatsApp API Pricing in India | Affordable Business Solutions",
              "item": "https://anantya.ai/whatsapp-pricing"
            }
          ]
        })}
      </script>
    </Helmet>

      <div className="whatsapp-pricing-page py-md-2 py-4">
        <section>
          <div className="container">
            <div className="row my-0 py-5 mx-md-0 mx-1">
              <div className="col-md-7 col-sm-12 my-auto text-lg-start text-center">
                <div>
                  {/* Use the logo image */}
                  <a href="/">
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </a>

                  {/* Use the metaLogo image */}
                  <div class="d-flex align-items-center">
                    <span class="ms-md-1 ms-5 ps-md-0 ps-4">
                      Powered by
                      <img
                        src={metaLogo}
                        alt="Meta Logo"
                        style={{ width: "100px", height: "auto" }}
                      />
                    </span>
                  </div>
                </div>

                <h2 className="pb-4 pe-md-5">
                  Grow Your Leads and Sales on WhatsApp with the Right{" "}
                  <span>WhatsApp Business API</span>
                </h2>

                <p className="partner_subheading pb-20 pe-md-5 me-md-5">
                  Handle all your Sales, Support, and Marketing conversations on
                  WhatsApp with Anantya.
                  <b> Perfect for businesses across India!</b>
                </p>

                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                    >
                      <path
                        d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                        fill="#54cdeb"
                      ></path>
                    </svg>{" "}
                    &nbsp;Design Custom Chatbots &amp; Catalogs
                  </span>{" "}
                  &nbsp;{" "}
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                    >
                      <path
                        d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                        fill="#54cdeb"
                      ></path>
                    </svg>{" "}
                    &nbsp;Run Bulk Campaigns &amp; Click Ads
                  </span>
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                    >
                      <path
                        d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                        fill="#54cdeb"
                      ></path>
                    </svg>{" "}
                    &nbsp;Track Results with Advanced Analytics
                  </span>
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                    >
                      <path
                        d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                        fill="#54cdeb"
                      ></path>
                    </svg>{" "}
                    &nbsp; Automate Support &amp; SMS Fallback
                  </span>
                </p>
              </div>

              <div
                className="col-md-5 col-sm-12 pt-md-0 pt-5"
                id="myStickyForm"
              >
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
                  <h3 className="text-center mb-3">Book a Demo Call</h3>
                  <form
                    action="https://formspree.io/f/mdorezev"
                    method="POST"
                    id="myStickyForm"
                  >
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control bg-light mb-3"
                      id="name"
                      placeholder="Name"
                    />

                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light mb-3"
                      id="email"
                      placeholder="Your Email id*"
                    />

                    <label htmlFor="phone"></label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control bg-light mb-3"
                      id="phone"
                      placeholder="Phone Number*"
                    />

                    <label htmlFor="messages"></label>
                    <input
                      type="text"
                      name="message"
                      className="form-control bg-light mb-3"
                      id="messages"
                      placeholder="Name of Organisation"
                    />

                    <label htmlFor="url"></label>
                    <input
                      type="url"
                      name="url"
                      className="form-control bg-light mb-3"
                      id="url"
                      placeholder="Website URL"
                    />

                    <div className="mt-3 mx-auto text-center">
                      <input
                        type="submit"
                        className="px-5 py-2 button_partner w-50 btn bg-green text-white btn-colo"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ad">
          <div className="container py-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4 className="text-start pb-3">
                Your Complete WhatsApp Platform:
              </h4>
              <div className="row row-cols-1 row-cols-md-3 g-3 pb-5 px-md-0 px-3">
                <div className="col">
                  <div className="features-cards style-5 box-1 h-100">
                    <img
                      src={whatsappMarketing}
                      alt="WhatsApp Marketing"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="card-content ">
                      <h5 className="card-title">WhatsApp Marketing</h5>
                      <p className="card-text">
                        Promote products, share offers, and notifications, run
                        click-to- WhatsApp ads, and send reminders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-cards style-5 box-1 h-100">
                    <img
                      src={whatsappChatbot}
                      alt="WhatsApp Chatbot"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="card-content ">
                      <h5 className="card-title">WhatsApp Chatbot</h5>
                      <p className="card-text">
                        Offer your customers chatbots, showcase your products
                        through WhatsApp catalog, and automate all your key
                        tasks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-cards style-5 box-1 h-100">
                    <img
                      src={smsFallback}
                      alt="SMS Fallback"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="card-content">
                      <h5 className="card-title">SMS Fallback</h5>
                      <p className="card-text">
                        Manage all your queries efficiently using a single
                        multi-agent panel, for faster and better customer
                        support with Anantya.ai.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollableSection />
            </div>
            <div className="col-6"></div>
          </div>
        </section>
        <section>
          <div
            className="statics my-5"
            style={{ backgroundColor: "#e1fafe52" }}
          >
            <div className="container pb-5">
              <div className="all-statics mt-3">
                <div className="row no-gutters my-auto py-3 px-3 ">
                  <div className="col-md-6 col-sm-12 align-items-center my-auto">
                    <h2>
                      Trusted by 100+ brands across <span>India</span>
                    </h2>
                    <div className="d-flex flex-wrap align-items-center mt-4">
                      <LogoCarousel2 />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 my-auto mt-md-0 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="banner_section container text-start py-">
          <div className=" wp-pricing-img pb-5 row ">
            <h2 className=" pb-4 px-md-0 px-5">
              Connect, Engage and <br /> <span>Sell through WhatsApp</span>
            </h2>
            <section className="numbers style-6 mt-70 col-lg-6 col-sm-12  px-md-0 px-5">
              <div className="content pb-100 brd-gray">
                <div className="row">
                  <div className="col-lg-6">
                    <div className=" card_statices  style-6">
                      <h2 className="me-4 color-blue5">
                        <CountUp start={0} end={5} duration={2.75} suffix="X" />
                      </h2>
                      <div className="text">Growth in Lead Generation</div>
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
                      <div className="text">Boost in Engagement</div>
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
                      <div className="text">Faster Resolution Time</div>
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
                      <div className="text">Boost in Cart Recovery</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="numbers style-6 mt-70 col-6"></section>
          </div>
        </section>

        <section
          className="last-section"
          id="lastSection"
          style={{ backgroundColor: "#e1fafe52" }}
        >
          <div class="container py-3 text-center">
            <header class="pricing">
              <h1 className="fw-bold pt-4">
                Are you Ready to Transform your Customer Service with AI?
              </h1>

              <h4>Choose the plan that fits your needs.</h4>
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
                    <div className="pricing-card h-100">
                      <div className="pricing-title">
                        <h2>Basic </h2>
                        <p>
                          1000 Free Service <br />
                          Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>
                          {" "}
                          <del>₹1599/month</del> ₹ 899/month
                        </p>
                        <a href="https://wa.link/oh6rlv" className="price-btn">
                          Start Now →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Onboarding Setup</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Facebook Business Verification</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Basic Messaging Templates</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Campaign Messaging</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Welcome and Away Messages</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Quick Replies</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Basic and Carousel Messages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <div className="popular-head">
                      <p className="pt-2 fw-bold">Diwali Offer: 50% OFF 🏷️ </p>
                    </div>
                    <div className="pricing-card">
                      <div className="pricing-title">
                        <h2>Standard </h2>
                        <p>
                          1000 Free Service <br />
                          Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>
                          {" "}
                          <del>₹6999/month</del> ₹ 3,499/month
                        </p>
                        <a href="https://wa.link/dyt969" className="price-btn">
                          Start Now →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span> All features in Basic Plan</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Unlimited Message Templates</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>5+1 Agents Support</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Chatbot & Cart Catalogue</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Reports and Labels</span>
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
                            <span>Leads Management System (LMS)</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>WhatsApp Flows Setup</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Click-to-WhatsApp (CTWA) Integration</span>
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
                    <div className="pricing-card h-100">
                      <div className="pricing-title">
                        <h2>Enterprise</h2>
                        <p>
                          1000 Free Service <br /> Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>Custom Pricing </p>
                        <a href="https://wa.link/0wphve" className="price-btn">
                          Talk With Team →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span> As per your requirements and usecases</span>
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
                    <div className="pricing-card h-100">
                      <div className="pricing-title">
                        <h2>Basic </h2>
                        <p>
                          1000 Free Service <br /> Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>
                          {" "}
                          <del>₹19,999/month</del> ₹ 9,999/year
                        </p>
                        <a href="https://wa.link/oh6rlv" className="price-btn">
                          Start Now →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Onboarding Setup</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Facebook Business Verification</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Basic Messaging Templates</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Campaign Messaging</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Welcome and Away Messages</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Quick Replies</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Basic and Carousel Messages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <div className="popular-head ">
                      <p className="pt-2 fw-bold">Diwali Offer: 50% OFF 🏷️ </p>
                    </div>
                    <div className="pricing-card">
                      <div className="pricing-title">
                        <h2>Standard </h2>
                        <p>
                          1000 Free Service <br />
                          Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>
                          {" "}
                          <del>₹ 79,999/month</del>₹ 39,999/year
                        </p>
                        <a href="https://wa.link/dyt969" className="price-btn">
                          Start Now →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span> All features in Basic Plan</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Unlimited Message Templates</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>5+1 Agents Support</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Chatbot & Cart Catalogue</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Reports and Labels</span>
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
                            <span>Leads Management System (LMS)</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>WhatsApp Flows Setup</span>
                          </li>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span>Click-to-WhatsApp (CTWA) Integration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 wow fadeInUp"
                    style={{ paddingTop: "60px" }}
                    data-wow-delay="0.4s"
                  >
                    <div className="pricing-card h-100">
                      <div className="pricing-title">
                        <h2>Enterprise</h2>
                        <p>
                          1000 Free Service <br /> Conversations/month
                        </p>
                      </div>
                      <div className="price">
                        <p>Custom Pricing</p>
                        <a href="https://wa.link/0wphve" className="price-btn">
                          Talk With Team →
                        </a>
                      </div>
                      <div className="pricing-info text-left">
                        <ul>
                          <li>
                            <span className="icon">
                              <img src={checkIcon} alt="Check icon" />
                            </span>
                            <span> As per your requirements and usecases</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container text-center my-5">
          <div class="col-md-12 mb-5">
            <div class="get_demo">
              <h3>
                Start your free trial and get expert WhatsApp support now!
              </h3>
              <a
                href="#myStickyForm"
                type="button"
                className="btn me-2 btn btn-primary text-white btn-color mt-2"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
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
        <section
          style={{
            background:
              "linear-gradient(to top, #fff 0%, #edf4fe 74%, #e7f1ff 100%)",
          }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-7 col-sm-12 text-lg-start text-center text-white">
                <h2>
                  Boost Your Customer Conversations on WhatsApp with{" "}
                  <span> Anantya.ai!</span>
                </h2>
              </div>
              <div className="col-md-5 col-sm-12 text-lg-end text-center my-auto">
                <a
                  href="#myStickyForm"
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
