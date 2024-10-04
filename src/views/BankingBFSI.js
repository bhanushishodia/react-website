// src/views/BankingBFSI.js
import React, { useState } from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import FAQSection from "../components/common/FAQSection";
import LogoCarousel from "../components/common/LogoCarousel";
import "./EcommerceRetail.css"; // Import your CSS file if needed
import { Helmet } from 'react-helmet';
import pdfFile from '../assets/pdf/Banking-Usecase-Updated.pdf';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import { getImage } from '../utils/getImage'; // Adjust the path to your utility

// Fetching images dynamically using the getImage function
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const whatsappScannerImg = getImage('wa.link_3dzezc.png'); // Adjust path as needed

const educationImg = getImage('transform-education-with-whatsapp.webp'); // Adjust the path if necessary
const defaultImage = getImage('empowering-fin-tech.webp'); // Adjust the path if necessary
const hoverImage1 = getImage('empowering-fin-tech.webp'); // Adjust the path if necessary
const hoverImage2 = getImage('convey-transactional-notifications.webp'); // Adjust the path if necessary
const OnboardingMadeImage = getImage('onboarding-made-easy.webp'); // Adjust the path if necessary
const reduceCustomerImage = getImage('reduce-customer-drop-offs.webp'); // Adjust the path if necessary
const BankingBFSI = () => {
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
        "Q1: What is a Finance or Banking Chatbot?",
      answer:
        "A: A finance or banking chatbot encompasses a spectrum of capabilities, from straightforward, predefined journeys for common queries to sophisticated AI-driven conversations. These chatbots are trained on industry-specific data and scenarios within the banking, financial services, and insurance (BFSI) sector.",
    },
    {
      question:
        "Q2: What are the Benefits of a Finance Chatbot?",
      answer: "A: Intuitive and Convenient: A finance chatbot offers customers an intuitive and self-serve channel, available 24/7, for transactions, advice, and product exploration. Wide Engagement: With conversational AI, financial service providers can engage customers across 30+ messaging channels, catering to commerce, marketing, and support needs. Meaningful Digital Experiences: Deliver meaningful digital experiences to customers at scale, ensuring easy onboarding, accelerated transactions, simplified service requests, and elevated support quality"
    },
    {
      question:
        "Q3: Can BFSI companies leverage WhatsApp for marketing and promotions?",
      answer:
        "A: Yes, WhatsApp can be utilized for marketing and promotional activities in the BFSI industry. Companies can share updates about new products, exclusive offers, investment opportunities, and financial tips to engage customers and nurture leads. However, it is important to follow WhatsApp's policies and guidelines for marketing purposes.",
    },
    {
      question: "Q4: What are some best practices for BFSI companies utilizing WhatsApp?",
      answer: "A: To maximize the benefits of WhatsApp, BFSI companies should focus on providing personalized customer experiences, ensuring timely responses to customer queries, maintaining data privacy, leveraging automation for routine tasks, and continuously adapting to customer needs and preferences."
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
      <title>Banking and Finance Whatsapp Chatbots | Secure WhatsApp API</title>
      <meta name="keywords" content="Whatsapp chatbot for Banking,Chatbot for Banking,conversational ai for banking" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Use a automated Whatsapp Chatbot for banking industry to simplify the communication process, make customer interactions fast and secure with Anantya.ai." />
      <meta property="og:title" content="Banking and Finance Whatsapp Chatbots | Secure WhatsApp API" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Use a automated Whatsapp Chatbot for banking industry to simplify the communication process, make customer interactions fast and secure with Anantya.ai." />
      <meta property="og:url" content="https://anantya.ai/banking-industry" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/bfsi/exceptional-customer-experience.webp" />
      <link rel="canonical" href="https://anantya.ai/banking-industry" />
      <meta name="author" content="Anantya" />
      
      {/* JSON-LD for Organization */}
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

      {/* JSON-LD for WebPage and WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "name": "Banking and Finance Whatsapp Chatbots | Secure WhatsApp API",
              "description": "Use a automated Whatsapp Chatbot for banking industry to simplify the communication process, make customer interactions fast and secure with Anantya.ai."
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

      {/* JSON-LD for BreadcrumbList */}
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
              "name": "Banking & BFSI",
              "item": "https://anantya.ai/banking-industry"
            }
          ]
        })}
      </script>

      {/* JSON-LD for FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Q1: What Is A Finance Or Banking Chatbot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A finance or banking chatbot encompasses a spectrum of capabilities, from straightforward, predefined journeys for common queries to sophisticated AI-driven conversations. These chatbots are trained on industry-specific data and scenarios within the banking, financial services, and insurance (BFSI) sector."
              }
            },
            {
              "@type": "Question",
              "name": "What Are The Benefits Of A Finance Chatbot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intuitive and Convenient: A finance chatbot offers customers an intuitive and self-serve channel, available 24/7, for transactions, advice, and product exploration. Wide Engagement: With conversational AI, financial service providers can engage customers across 30+ messaging channels, catering to commerce, marketing, and support needs. Meaningful Digital Experiences: Deliver meaningful digital experiences to customers at scale, ensuring easy onboarding, accelerated transactions, simplified service requests, and elevated support quality."
              }
            },
            {
              "@type": "Question",
              "name": "Can BFSI Companies Leverage WhatsApp For Marketing And Promotions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, WhatsApp can be utilized for marketing and promotional activities in the BFSI industry. Companies can share updates about new products, exclusive offers, investment opportunities, and financial tips to engage customers and nurture leads. However, it is important to follow WhatsApp's policies and guidelines for marketing purposes."
              }
            },
            {
              "@type": "Question",
              "name": "What Are Some Best Practices For BFSI Companies Utilizing WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To maximize the benefits of WhatsApp, BFSI companies should focus on providing personalized customer experiences, ensuring timely responses to customer queries, maintaining data privacy, leveraging automation for routine tasks, and continuously adapting to customer needs and preferences."
              }
            }
          ]
        })}
      </script>
    </Helmet>
      <div className="container py-5 mt-5">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className=" text-black pe-md-2">
                {/* <small className="mb-20 title_small">whatsapp-marketing</small> */}
                <h1 className="heading">Leverage WhatsApp for Finance & Insurance</h1>

                <p className="mt-20 text-black">
                  Carry out KYC processes like ID verification, document
                  verification etc
                </p>
                <p className="mt-20 text-black">
                  Offer 24/7 support to clients via WhatsApp
                </p>
                <p className="mt-20 text-black">
                  Share invoices, e-policies, e-receipts with customers
                </p>

                <div className="btns mt-40">
                  <a
                    href="book-a-demo"
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Book a 1:1 Demo
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
                  src={educationImg}
                  className="img-fluid"
                  alt="Transform Education with WhatsApp APIs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="logo_heading">Top Brands Growing with WhatsApp</h2>
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
            <div className="col-md-6 col-sm-12 pe-md-5 text-lg-start text-center  ">
              <h2>
                Empowering FinTech Conversations: Pay, Invest, Engage - All in
                One Chat!
              </h2>
              <h6 className="text-justify pt-10">
                Increase sales by sending personalised recommendations for
                banking, financial services, and insurance (BFSI) products based
                on purchase history and credit score.
              </h6>
              <br />
              <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3 pt-10">
                <div className="col">
                  <div
                    className="ecom-card"
                    onMouseEnter={() => setHoveredCard("card1")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">Carry Digital eKYC</h4>
                      <p>
                        Make KYC simple with step-by-step guidance and
                        collecting documents on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="ecom-card"
                    onMouseEnter={() => setHoveredCard("card2")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">
                        Convey Transactional Notifications
                      </h4>
                      <p>
                        Use WhatsApp to ensure that customers stay informed
                        about their financial transactions and obligations.
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
                src={OnboardingMadeImage}
                className="img-fluid"
                alt="sell-more-with-whatsapp-catalogues"
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5  text-lg-start text-center">
              <h2>
                Onboarding Made Easy: Chat, Verify, Activate - in No Time!
              </h2>

              <p className="text-justify">
                Simplify the onboarding process by replacing Complex form
                filling and document collection with effortless chat
                interactions
              </p>
            
              <p className="text-justify">
                Facilitate KYC verification, customer onboarding, and activation
                through messaging, voice, and video. Achieve a significant 26%
                reduction in onboarding time
              </p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Transform occasional users into dedicated clients with Anantya.ai"
        description="Download Our Exclusive Guide to Discover Ways to Boost Your Financial Success!."
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModa20"
      />
      <div
        className="modal fade"
        id="myModa20"
        tabIndex="-1"
        aria-labelledby="myModalLabe20"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel6">
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
              <h2>Reduce Customer Drop-Offs and Churn by Using WhatsApp</h2>

              <p className="text-justify">
                Help new customers get started easily with interactive messages
                on WhatsApp.
              </p>

              <p className="text-justify">
                Get the info you need from customers and guide them on what to
                do next. Share helpful details about your products and services
                with PDFs and videos.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={reduceCustomerImage}
                className="img-fluid"
                alt="send-whatsapp-retargeting"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" container integration py-5">
        <h2> Connect to the Tools You Love </h2>
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
                  <div className="cta-card new text-center h-100">
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
                Register for our Live Demo today and discover why Anantya.ai is
                the right choice for your business and get answers to all your
                WhatsApp-related questions.
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

export default BankingBFSI;
