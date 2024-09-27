// src/views/Healthcare.js
import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LogoCarousel from "../components/common/LogoCarousel";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import FAQSection from "../components/common/FAQSection";
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from "../assets/images/download-ebook.png"; // Adjust path as needed
import customerPulseImg from "../assets/images/keep-your-finger-on-your-customer’s.webp"; // Adjust the path as needed
import defaultImage from "../assets/images/build-own-whatsapp-chatbot.webp";
import hoverImage1 from "../assets/images/help-patients-on-any.webp";
import hoverImage2 from "../assets/images/build-own-whatsapp-chatbot.webp";
import whatsappScannerImg from "../assets/images/wa.link_3dzezc.png";
import "./EcommerceRetail.css"; // Import your CSS file if needed
import automateAppointmentImg from "../assets/images/automate-appointment-schedules.webp"; // Adjust the path if necessary
import promoteTestPackagesImg from "../assets/images/promote-test-packages.webp"; // Adjust the path if necessary
import pdfFile from '../assets/pdf/Healthcare-Usecase-Updated.pdf';

const Healthcare = () => {
const submitFormAndOpenPDF = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform form submission (assuming you have a form with the id 'marketing')
    document.getElementById("marketing").submit();

    // Open PDF in a new tab	
      	
  window.open(pdfFile, "_blank");
  };
  const homeFAQs = [
    {
      question:
        "Q1: Are there any limitations or restrictions for using WhatsApp Business API in healthcare?",
      answer:
        "A: Yes, WhatsApp has certain guidelines and policies that businesses must adhere to while using WhatsApp Business API. These include restrictions on sending promotional content, complying with opt-in/opt-out regulations, and respecting user privacy.",
    },
    {
      question:
        "Q2: Is WhatsApp Business API secure for handling patient data?",
      answer: 
        "A: Yes, WhatsApp Business API is designed with security and privacy in mind. It offers end-to-end encryption for messages, ensuring that patient data and communications remain secure."
      ,
    },
    {
      question:
        " Q3: How can WhatsApp Business API benefit the healthcare industry?",
      answer:
        "A: WhatsApp Business API offers several benefits for the healthcare industry. It enables seamless communication between healthcare providers and patients, facilitates appointment scheduling, provides real-time updates and reminders, offers personalized support, and enhances overall patient engagement and satisfaction.",
    },
    // Add more FAQs here if needed
  ];

  const [hoveredCard, setHoveredCard] = useState("card1"); // Default to 'card1'
  // Map card state to image
  const getImageSrc = () => {
    switch (hoveredCard) {
      case "card1":
        return hoverImage1;
      case "card2":
        return hoverImage2;
      default:
        return defaultImage;
    }
  };
  return (
    <div>
        <Helmet>
            <title>Whatsapp Chatbot for Healthcare: Transform Communication with WhatsApp</title>
            <meta name="keywords" content="whatsapp chatbot for healthcare,Whatsapp for Healthcare,Whatsapp Business API for healthcare,whatsapp business for healthcare,conversational ai in healthcare,conversational ai for healthcare,healthcare ai chatbot" />
            <meta name="robots" content="index,follow" />
            <meta name="description" content="Improve patient communication and healthcare services using Anantya AI's WhatsApp Chatbot Services. Secure, reliable, and efficient communication for the healthcare industry." />
            <meta property="og:title" content="Whatsapp Chatbot for Healthcare: Transform Communication with WhatsApp" />
            <meta property="og:type" content="article" />
            <meta property="og:description" content="Improve patient communication and healthcare services using Anantya AI's WhatsApp Chatbot Services. Secure, reliable, and efficient communication for the healthcare industry." />
            <meta property="og:url" content="https://anantya.ai/healthcare-industry" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://anantya.ai/assets/img/health/keep-your-finger-on-your-customer%E2%80%99s.webp" />
            <link rel="canonical" href="https://anantya.ai/healthcare-industry" />
            <meta name="author" content="Anantya" />

            <script type="application/ld+json">
                {JSON.stringify({
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
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "name": "Whatsapp Chatbot for Healthcare: Transform Communication with WhatsApp",
                            "description": "Improve patient communication and healthcare services using Anantya AI's WhatsApp Chatbot Services. Secure, reliable, and efficient communication for the healthcare industry."
                        },
                        {
                            "@type": "WebSite",
                            "name": "Anantya",
                            "alternateName": "anantya.ai",
                            "url": "https://anantya.ai/"
                        }
                    ]
                })}
            </script>

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
                            "name": "Healthcare",
                            "item": "https://anantya.ai/healthcare-industry"
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Are There Any Limitations Or Restrictions For Using WhatsApp Business API In Healthcare?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, WhatsApp has certain guidelines and policies that businesses must adhere to while using WhatsApp Business API. These include restrictions on sending promotional content, complying with opt-in/opt-out regulations, and respecting user privacy."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is WhatsApp Business API Secure For Handling Patient Data?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, WhatsApp Business API is designed with security and privacy in mind. It offers end-to-end encryption for messages, ensuring that patient data and communications remain secure."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How Can WhatsApp Business API Benefit The Healthcare Industry?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "WhatsApp Business API offers several benefits for the healthcare industry. It enables seamless communication between healthcare providers and patients, facilitates appointment scheduling, provides real-time updates and reminders, offers personalized support, and enhances overall patient engagement and satisfaction."
                            }
                        }
                    ]
                })}
            </script>
        </Helmet>
      <div className="container py-5 mt-5">
        <div className="content ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className="info text-black pe-md-5">
                <h1 className="heading">
                  Keep Your Finger on your Customer’s Pulse with Anantya.ai
                </h1>
                <p className="mt-20 text-black pe-md-5">
                  Make Lead Generation, Patient Onboarding, Appointment
                  Scheduling, and Test Booking Effortless With <br /> WhatsApp
                  Business API.
                </p>
                <div className="btns mt-40">
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
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
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "zoomIn",
                }}
              >
                <img
                  src={customerPulseImg}
                  className="img-fluid"
                  alt="Keep your finger on your customer’s pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="logo_heading">
          Top HealthCare Brands Growing with WhatsApp
        </h2>
        <LogoCarousel />
        <p
          className="color-666 line_breaker text-center mt-4 wow fadeInDown"
          style={{ visibility: "visible", animationName: "fadeInDown" }}
        >
          If Your Business Isn't on WhatsApp Yet, Now's the Time!
          <a
            href="https://wa.link/x2stoz"
            className="color-000 fw-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Today
          </a>
        </p>
      </div>
      <section
        style={{
          background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
        }}
      >
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 pe-md-5 text-lg-start text-center">
              <h2>Help patients on any channel with a single platform</h2>
              <h6 className="text-justify pt-10">
                Make scheduling appointments, sending reminders, and
                notifications automatic. Make it easy to book consultations,
                check-ups, and other appointments.
              </h6>
              <br />
              <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3 pt-10">
                <div className="col">
                  <div
                    className="ecom-card text-center"
                    onMouseEnter={() => setHoveredCard("card1")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">Provide 24 x 7 Support</h4>
                      <p>
                        Be 24 x 7 available to your customers at all phases of
                        their health & wellness journey
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="ecom-card text-center"
                    onMouseEnter={() => setHoveredCard("card2")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">Build Own WhatsApp Chatbot</h4>
                      <p>
                        Automate your conversations with WhatsApp Chatbot for
                        better engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="image-container">
                <img
                  src={getImageSrc()}
                  className="img-fluid"
                  alt="Display View"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={automateAppointmentImg}
                className="img-fluid"
                alt="Automate appointment schedules, reminders and notifications"
              />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
              <h2>
                <span>Automate</span> Appointment Schedules, Reminders, and
                Notifications
              </h2>
              <br />
              <p className="text-justify">
                Increase patient attendance by sending appointment reminders on
                WhatsApp automatically. This easy action can cut down on missed
                appointments and make patient care better.
              </p>
            
              <p className="text-justify">
                Make appointment schedules, reminders, and notifications
                automatic. Make it easy to book consultations, check-ups, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Turn patients into loyal supporters with Anantya.ai"
        description="Download Your Free Guide to Learn How to Improve Patient Care and Grow Your Practice!"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal5"
      />
      <div
        className="modal fade"
        id="myModal5"
        tabIndex="-1"
        aria-labelledby="myModalLabel5"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel5">
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
      <section
        style={{
          background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
              <h2>
                <span>Promote</span> Test Packages & Health Supplements
              </h2>
              <br />
              <p className="text-justify">
                With Anantya.ai, a platform built on Official WhatsApp Business
                APIs, you can easily send broadcasts to as many users as you
                need all at once.
              </p>
             
              <p className="text-justify">
                Plus, you can include images, clickable buttons, and links with
                your message to make it highly interactive.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5 ">
              <img
                src={promoteTestPackagesImg}
                className="img-fluid"
                alt="Promote test packages and health supplements"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 container integration">
        <h2>
          {" "}
          Anantya.ai Seamlessly integrates With <br/> Top Ecommerce Platforms.{" "}
        </h2>
        <LTRSlider />
        <RTLSlider />
      </div>

      <FAQSection faqs={homeFAQs} />
      <section
        className="clients style-5 pb-20 mt-5"
        style={{ backgroundColor: "#f3fbff" }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
            <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
              <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
                <div className="col">
                  <div className="cta-card new text-center">
                    <ul className="cta-usp new">
                      <li className="list-item cta d-flex p-1">
                        <div className="html-embed-27 cta w-embed">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 18 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentColor"
                            ></path>
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
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentColor"
                            ></path>
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
                          Experience Anantya.ai on Whatsapp
                        </div>
                      </li>
                      <li className="list-item cta d-flex p-1">
                        <img
                          src={whatsappScannerImg}
                          className="img-fluid w-50 mx-auto"
                          alt="WhatsApp Scanner"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="style-5 col my-auto ps-md-5">
              <h2 className="mb-20 text-lg-start text-center">
                Experience Anantya.ai <br />
                <span>in Action!</span>
              </h2>
              <p>
                Register for our Live Demo today and discover why Anantya.ai is
                the right choice for your business and get answers to all your
                WhatsApp-related questions.
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

export default Healthcare;
