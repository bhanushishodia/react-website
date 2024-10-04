// src/views/WhatsAppSupport.js
import React from "react";
import CountUp from "react-countup";  
import './WhatsappSupport.css';
import { Helmet } from 'react-helmet';
import pdfFile from '../assets/pdf/Usecase-WhatsApp-Support.pdf';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const whatsAppSupportImage = getImage('offer-support-at-scale-with.webp'); // Adjust the path as per your project structure
const automateSalesImage = getImage('automate-sales-with-whatsApp-chatbot.webp'); // Adjust the path as per your project structure
const multipleHumanLiveChatImage = getImage('multiple-human-live-chat.webp'); // Adjust the path as per your project structure
const supportIcon = getImage('icons/24_7-support.png'); // Adjust the path as per your project structure
const reliableServiceIcon = getImage('icons/Reliable-service.png'); // Adjust the path as per your project structure
const securityIcon = getImage('icons/fortified-security.png'); // Adjust the path as per your project structure
const boostSupportImage = getImage('boost-your-support-teams-efficiency.webp'); // Adjust path as needed


const WhatsAppSupport = () => {
const submitFormAndOpenPDF = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform form submission (assuming you have a form with the id 'marketing')
    document.getElementById("marketing").submit();

    // Open PDF in a new tab	
      	
  window.open(pdfFile, "_blank");
  };

  return (
    <div>
      <Helmet>
      {/* Title and Meta Tags */}
      <title>Customer Support Chatbot by Anantya.ai | Chatbot Solutions</title>
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Enhance customer support with Anantya.ai's WhatsApp chatbot. Offer 24/7 assistance, resolve issues quickly, and improve customer satisfaction."
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Customer Support Chatbot by Anantya.ai | Chatbot Solutions" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Enhance customer support with Anantya.ai's WhatsApp chatbot. Offer 24/7 assistance, resolve issues quickly, and improve customer satisfaction."
      />
      <meta property="og:url" content="https://anantya.ai/whatsapp-support" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/whatsapp-support/offer-support-at-scale-with.webp" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://anantya.ai/whatsapp-support" />

      {/* Author */}
      <meta name="author" content="Anantya" />

      {/* JSON-LD Schema for Organization */}
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

      {/* JSON-LD Schema for WebPage */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/whatsapp-support",
            "name": "Customer Support Chatbot by Anantya.ai | Chatbot Solutions"
          }
        `}
      </script>

      {/* JSON-LD Schema for BreadcrumbList */}
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
                "name": "Customer Support Chatbot by Anantya.ai | Chatbot Solutions",
                "item": "https://anantya.ai/whatsapp-support"
              }
            ]
          }
        `}
      </script>
      </Helmet>
      <div className="container mt-5">
        <div className="content py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-md-start text-center">
              <div className=" text-black pe-md-4">
                {/* <small className="mb-20 title_small"> whatsapp-marketing</small> */}
                <h1 className="heading">Offer Support at Scale with WhatsApp Business API</h1>
                
                <ul style={{ marginLeft: "0px" }}>
                  <li className="text-start">
                    Drive 24x7 support with automated Chatbots
                  </li>
                  <li className="text-start mt-2">
                    Manage Multiple agents on one WhatsApp Business Number.
                  </li>
                </ul>
                <div className="d-flex align-items-center mt-10 youtube">
                  <p className="me-5">
                    ⚡️Powered by Official WhatsApp Business API
                  </p>
                </div>
                <div className="btns mt-10">
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    className="btn me-2 bg-green text-white btn-color"
                  >
                    <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                    Book a Demo
                  </a>
                  <a href="/contact" className="btn login_button">
                    Sign Up for Free
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-md-0 mt-4">
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
                  src={whatsAppSupportImage}
                  className="img-fluid"
                  alt="Offer Support at Scale with WhatsApp Business API"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="numbers style-6 mt-70">
        <div className="container py-5">
          <div className="content pb-100 brd-gray">
            <div className="row">
              <div className="col-lg-4">
                <div className="number-card style-6">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={29} duration={2.75} suffix="%" />
                  </h2>
                  <div className="text">
                    Faster response to customer queries
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="number-card style-6">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={60} duration={2.75} suffix="X" />
                  </h2>
                  <div className="text">
                  Improvement in one time resolution
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="number-card style-6 border-0">
                  <h2 className="me-4 color-blue5">
                    <CountUp start={0} end={70} duration={2.75} suffix="%" />
                  </h2>
                  <div className="text">
                  Queries resolved without any agent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 rd sectiuon */}
      <section
        style={{
          background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
              <h2>
                Automate Sales with <span>WhatsApp Chatbot</span>
              </h2>
              <br />
              <p className="text-justify">
                The WhatsApp chatbot works like a round-the-clock sales helper.
                It shares info about products and services, and users can easily
                buy them by clicking a link to your website.
              </p>
              <br />
              <p className="text-justify">
                The chatbot also helps users find products, gives
                recommendations, and assists with the checkout process.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={automateSalesImage}
                className="img-fluid"
                alt="automate-sales-with-whatsApp-chatbot"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 3 rd sectiuon */}
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={multipleHumanLiveChatImage}
                className="img-fluid"
                alt="multiple-human-live-chat"
              />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
              <h2>
                Multiple Human <span>Live Chat</span>
              </h2>
              <br />
              <p className="text-justify">
                Let several team members support live chats using the same
                WhatsApp Business Number.
              </p>
              <br />
              <p className="text-justify">
                Sort chats smartly with tags, campaigns, and attributes for
                better agent chat routing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="process style-12" style={{ background: "#fff" }}>
        <div className="container">
          <div className="content py-5">
            <div className="section-head text-center mb-40 style-5">
              <h2 className="fs-2">
                Stay Connected with Customers on <br />
                <span>WhatsApp Business API</span> Anytime
              </h2>
            </div>
            <div className="content">
              <div className="row row-cols-1 row-cols-md-3 g-4 py-5 px-md-0 px-3">
                <div className="col">
                  <div className="features-card style-5 box-1 h-100">
                    <div className="icon">
                      <img src={supportIcon} alt="24-7" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">24/7 Support</h5>
                      <p className="text">
                        A friendly welcome message is a great way to say hello
                        to users and give them a positive first experience when
                        they connect with your platform. Just set up a message
                        that gets sent when new customers reach out to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-2 h-100">
                    <div className="icon">
                      <img src={reliableServiceIcon} alt="services" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Reliable Service</h5>
                      <p className="text">
                        Don't lose customers who contact you after working
                        hours. If a user messages you outside these hours, your
                        WhatsApp Chatbot will automatically reply, assuring them
                        that the business will reach out to them later.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-card style-5 box-3 h-100">
                    <div className="icon">
                      <img src={securityIcon} alt="cyber-security" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Fortified Security</h5>
                      <p className="text">
                        WhatsApp Template Messages are pre-set messages that you
                        can use repeatedly to communicate with your audience
                        after they have opted in to receive messages from you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <DownloadEbookSection
        title="Discover how to Improve Customer Loyalty with a Single Solution"
        description="Download the e-book to enable a customer-centric technique to provide exceptional service, resulting in loyal customers who drive revenue."
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal3"
      />
      <div
        className="modal fade"
        id="myModal3"
        tabIndex="-1"
        aria-labelledby="myModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel2">
                Download Ebook
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Your modal content for the second ebook */}
  
             
                {/* Your modal content for the first ebook */}
                <form
                  action="https://formspree.io/f/mdorezev"
                  className="py-2 px-md-5 px-4"
                  method="post"
                  id="marketing"
                  onSubmit={submitFormAndOpenPDF}
                >
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email Address *"
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number (optional)"
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Name of Organisation"
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="url"
                        name="url"
                        className="form-control"
                        placeholder="Website URL"
                        required
                      />
                    </div>
                    <div className="col-lg-12 text-center mt-3">
                      <input
                        type="submit"
                        value="Send Your Request"
                        className="btn w-50 bg-green text-white cursor-pointer"
                      />
                    </div>
                  </div>
                </form>
             

            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
              <h2>
                Boost Your Support Team's <span>Efficiency!</span>
              </h2>
              <br />
              <p className="text-justify">
                Speed up response times by automating your FAQs. Customize
                automatic replies for faster solutions and happier customers.
              </p>
              <br />
              <p className="text-justify">
                Effortlessly Address Customer Inquiries with Automated Sending
                of Images, Files, and Videos.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={boostSupportImage}
                className="img-fluid"
                alt="boost-your-support-team"
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default WhatsAppSupport;
