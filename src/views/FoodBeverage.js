// src/views/FoodBeverage.js
import React, { useState } from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import FAQSection from "../components/common/FAQSection";
import LogoCarousel from "../components/common/LogoCarousel";
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from "../assets/images/download-ebook.png"; // Adjust path as needed
import whatsappScannerImg from "../assets/images/wa.link_3dzezc.png";
import "./EcommerceRetail.css"; // Import your CSS file if needed
import foodBeverageImg from "../assets/images/grow-your-food-business.webp"; // Adjust the path if necessary
import defaultImage from "../assets/images/grow-your-restaurant.webp";
import hoverImage1 from "../assets/images/grow-your-restaurant.webp";
import hoverImage2 from "../assets/images/easy-order-and-tracking.webp";
import promoteYourImage from "../assets/images/promote-your-dine-in-menu.webp";
import issueVerifiedImage from "../assets/images/issue-verified-returns.webp";
import { Helmet } from 'react-helmet';
import pdfFile from '../assets/pdf/Food-Beverage-Usecase-Updated.pdf';
const FoodBeverage = () => {
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
        "Q1: Can I promote my food menu and special offers using WhatsApp Business API?",
      answer:
        "A: Absolutely! WhatsApp Business API enables you to create engaging catalogs to showcase your food menu, highlight special offers, and tempt customers with mouthwatering visuals.",
    },
    {
      question:
        "Q2: Are QR scanners a secure and dependable option for a safe dining experience?",
      answer: "A: Absolutely! Our QR scanners are safe and reliable for a secure dining experience. We prioritize data security through encryption measures. You can confidently scan our QR codes to access the menu and place your order, knowing your information is protected from unauthorized access."
    },
    {
      question:
        "Q3: Can customers place orders directly through WhatsApp?",
      answer:
        "Yes, customers can conveniently place orders directly through WhatsApp using the API. They can browse your menu, select items, provide necessary details, and complete the order process seamlessly within the WhatsApp interface.",
    },
    {
      question: "Q4: How can a WhatsApp chat bot benefit my food business?",
      answer: "A: A WhatsApp chat bot can significantly benefit your food business by automating customer interactions, and providing instant responses to inquiries about menus, prices, and special offers. It can also handle orders, process payments, and provide personalized recommendations, enhancing customer satisfaction and streamlining operations."
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
      <title>Chatbot for Food & Beverage Industry | Whatsapp Business API</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Make your customers happy in the food and beverage industry using WhatsApp's Chatbot for fast and easy communication. Anantya.ai helps you have smooth conversations." />
      <meta property="og:title" content="Chatbot for Food & Beverage Industry | Whatsapp Business API" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Make your customers happy in the food and beverage industry using WhatsApp's Chatbot for fast and easy communication. Anantya.ai helps you have smooth conversations." />
      <meta property="og:url" content="https://anantya.ai/food-and-beverage-industry" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/food/grow-your-food-business.webp" />
      <link rel="canonical" href="https://anantya.ai/food-and-beverage-industry" />
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
              "name": "Chatbot for Food & Beverage Industry | Whatsapp Business API",
              "description": "Make your customers happy in the food and beverage industry using WhatsApp's Chatbot for fast and easy communication. Anantya.ai helps you have smooth conversations."
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
              "name": "Food & Beverage",
              "item": "https://anantya.ai/food-and-beverage-industry"
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
              "name": "Q1: Can I Promote My Food Menu And Special Offers Using WhatsApp Business API?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! WhatsApp Business API enables you to create engaging catalogs to showcase your food menu, highlight special offers, and tempt customers with mouthwatering visuals."
              }
            },
            {
              "@type": "Question",
              "name": "Are QR Scanners A Secure And Dependable Option For A Safe Dining Experience?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Our QR scanners are safe and reliable for a secure dining experience. We prioritize data security through encryption measures. You can confidently scan our QR codes to access the menu and place your order, knowing your information is protected from unauthorized access."
              }
            },
            {
              "@type": "Question",
              "name": "Can Customers Place Orders Directly Through WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, customers can conveniently place orders directly through WhatsApp using the API. They can browse your menu, select items, provide necessary details, and complete the order process seamlessly within the WhatsApp interface."
              }
            },
            {
              "@type": "Question",
              "name": "How Can A WhatsApp Chat Bot Benefit My Food Business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A WhatsApp chat bot can significantly benefit your food business by automating customer interactions, and providing instant responses to inquiries about menus, prices, and special offers. It can also handle orders, process payments, and provide personalized recommendations, enhancing customer satisfaction and streamlining operations."
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
              <div className=" text-black pe-md-5">
                <h1 className="heading">Expand your Food Business with WhatsApp API</h1>

                <p className="mt-20 text-black">
                  Get people excited about your food menu, taking orders for
                  home delivery, curbside pick up and dine-in, to sharing
                  recommendations, do it all with WhatsApp Business API.
                </p>

                <div className="btns mt-40">
                  <a
                    href="book-a-demo"
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Try Anantya.ai for Free
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
                  src={foodBeverageImg}
                  className="img-fluid"
                  alt="Transform Education with WhatsApp APIs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="logo_heading">
          Top Restaurent Brands Growing with WhatsApp
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
              <h2>
                Grow your restaurant and food business with the all-in-one
                platform
              </h2>
              <h6 className="text-justify pt-10">
                Set up automatic and personalised WhatsApp messages to offer
                discounts and send updates. Keep customers informed with
                delivery notifications sent via WhatsApp.
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
                      <h4 className="card-title">24/7 Support for Foodies</h4>
                      <p>
                        Support clients round the clock at scale. Gather
                        ratings/feedback from clients using WhatsApp automated{" "}
                        <flows></flows>
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
                      <h4 className="card-title">Easy Order and Tracking</h4>
                      <p>
                        Easily keep customers informed about delivery time,
                        order status, and agent details.
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
                src={promoteYourImage}
                className="img-fluid"
                alt="sell-more-with-whatsapp-catalogues"
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5 pt-4 text-lg-start text-center">
              <h2>Promote your food menu with WhatsApp Catalogs</h2>
              <br />
              <p className="text-justify">
                Use WhatsApp broadcasts to reach a wider audience and showcase
                your restaurant menus.
              </p>

              <p className="text-justify">
                Highlight the irresistible dishes and products available for
                convenient online ordering. Keep your customers in the loop by
                providing timely updates about their orders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Convert hungry diners into loyal fans with Anantya.ai"
        description="Download Our Exclusive Guide to Discover How to Boost Your Restaurant Sales!"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal8"
      />
      <div
        className="modal fade"
        id="myModal8"
        tabIndex="-1"
        aria-labelledby="myModalLabel8"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel8">
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
              <h2>Issue verified returns and refunds</h2>
              <br />
              <p className="text-justify">
                Verify customer and order details, choose the return/refund
                method, and address issues instantly.
              </p>
            
              <p className="text-justify">
                WhatsApp streamlines the process for hassle-free returns,
                ensuring customer satisfaction and trust with a seamless
                experience.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={issueVerifiedImage}
                className="img-fluid"
                alt="send-whatsapp-retargeting"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" container integration py-5">
        <h2> Connect to the Tools You Love. </h2>
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

export default FoodBeverage;
