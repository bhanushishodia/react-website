// src/views/EcommerceRetail.js
import React, { useState } from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import FAQSection from "../components/common/FAQSection";
import LogoCarousel from "../components/common/LogoCarousel";
import { Helmet } from 'react-helmet';
import "./EcommerceRetail.css"; // Import your CSS file if needed
import pdfFile from '../assets/pdf/Usecase-WhatsApp-Commerce.pdf';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import { getImage } from '../utils/getImage'; // Adjust the path to your utility function
// Fetching images dynamically using the getImage function
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const whatsappScannerImg = getImage('wa.link_3dzezc.png');
const retargetingImage = getImage('send-whatsapp-retargeting.webp');
const ctaImage = getImage('cta/ecommerce.webp');
const chatAndSellMoreImg = getImage('chat-and-sell-more-with.webp');
const sellMoreImage = getImage('sell-more-with-whatsapp-catalogues.webp'); // Update the
const defaultImage = getImage('convert-browsers-into.webp');
const hoverImage1 = getImage('promote-on-every-channel.webp');
const hoverImage2 = getImage('convert-browsers-into.webp');

const EcommerceRetail = () => {
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
        "How can an e-commerce business benefit from utilizing WhatsApp Business API?",
      answer:
        "By leveraging the WhatsApp Business API, e-commerce businesses can effectively grow and sell products online. It enables direct communication with customers, providing personalized interactions and enhancing customer engagement. This leads to increased sales, improved customer satisfaction, and expanded reach.",
    },
    {
      question:
        "How can e-commerce businesses utilize WhatsApp Business API for marketing and sales?",
      answer: (
        <>
          E-commerce businesses can utilize WhatsApp Business API for marketing
          and sales by:
          <ol>
            <li>
              Sending personalized product recommendations and promotions to
              customers.
            </li>
            <li>
              Sharing product catalogs, allowing customers to browse and make
              purchases directly on WhatsApp.
            </li>
            <li>
              Automating abandoned cart notifications to recover lost sales.
            </li>
            <li>
              Providing real-time customer support, addressing queries, and
              resolving issues promptly.
            </li>
            <li>
              Sending order updates, delivery notifications, and post-purchase
              follow-ups.
            </li>
          </ol>
        </>
      ),
    },
    {
      question:
        "Is WhatsApp Business API suitable for businesses of all sizes?",
      answer:
        "Yes, WhatsApp Business API is suitable for businesses of all sizes, ranging from small startups to large enterprises. It offers scalability, flexibility, and a range of features that can be tailored to meet the specific needs of each business. Whether you're just starting or already established, WhatsApp Business API can be an effective tool for e-commerce growth.",
    },
    {
      question: "What are the advantages of Conversational Commerce?",
      answer: (
        <>
          Conversational commerce offers numerous benefits to businesses. With
          Anantya.ai, businesses can:
          <ol>
            <li>Expand market reach with chatbot shopping.</li>
            <li>Build direct digital connections with customers.</li>
            <li>Engage and respond in real time.</li>
            <li>Turn messaging into a sales channel.</li>
            <li>
              Create consultative and conversational online commerce
              experiences.
            </li>
          </ol>
        </>
      ),
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
      <title>Conversational E-commerce Chatbot - WhatsApp Engagement for E-commerce</title>
      <meta name="keywords" content="whatsapp chatbot for ecommerce, whatsapp ecommerce integration, whatsapp business ecommerce, whatsapp api for ecommerce, whatsapp business api for ecommerce" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Discover how Anantya.ai empowers the ecommerce industry with WhatsApp Chatbot services. Maximize sales, provide instant support, and grow your online business." />
      <meta property="og:title" content="Conversational E-commerce Chatbot - WhatsApp Engagement for E-commerce" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Discover how Anantya.ai empowers the ecommerce industry with WhatsApp Chatbot services. Maximize sales, provide instant support, and grow your online business." />
      <meta property="og:url" content="https://anantya.ai/ecommerce-industry" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/ecom/chat-and-sell-more-with.webp" />
      <link rel="canonical" href="https://anantya.ai/ecommerce-industry" />
      <meta name="author" content="Anantya" />

      {/* JSON-LD structured data */}
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
              "name": "Conversational E-commerce Chatbot - WhatsApp Engagement for E-commerce",
              "description": "Discover how Anantya.ai empowers the ecommerce industry with WhatsApp Chatbot services. Maximize sales, provide instant support, and grow your online business."
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
              "name": "E-commerce & Retail",
              "item": "https://anantya.ai/ecommerce-industry"
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
              "name": "How Can An E-Commerce Business Benefit From Utilizing WhatsApp Business API?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By leveraging the WhatsApp Business API, e-commerce businesses can effectively grow and sell products online. It enables direct communication with customers, providing personalized interactions and enhancing customer engagement. This leads to increased sales, improved customer satisfaction, and expanded reach."
              }
            },
            {
              "@type": "Question",
              "name": "How Can E-Commerce Businesses Utilize WhatsApp Business API For Marketing And Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "E-commerce businesses can utilize WhatsApp Business API for marketing and sales by:\n1. Sending personalized product recommendations and promotions to customers.\n2. Sharing product catalogs, allowing customers to browse and make purchases directly on WhatsApp.\n3. Automating abandoned cart notifications to recover lost sales.\n4. Providing real-time customer support, addressing queries, and resolving issues promptly.\n5. Sending order updates, delivery notifications, and post-purchase follow-ups."
              }
            },
            {
              "@type": "Question",
              "name": "Is WhatsApp Business API Suitable For Businesses Of All Sizes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, WhatsApp Business API is suitable for businesses of all sizes, ranging from small startups to large enterprises. It offers scalability, flexibility, and a range of features that can be tailored to meet the specific needs of each business. Whether you're just starting or already established, WhatsApp Business API can be an effective tool for e-commerce growth."
              }
            },
            {
              "@type": "Question",
              "name": "What Are The Advantages Of Conversational Commerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Conversational commerce offers numerous benefits to businesses. With Anantya.ai, businesses can:\n1. Expand market reach with chatbot shopping.\n2. Build direct digital connections with customers.\n3. Engage and respond in real time.\n4. Turn messaging into a sales channel.\n5. Create consultative and conversational online commerce experiences."
              }
            }
          ]
        })}
      </script>
       </Helmet>
      <div className="container py-5  mt-5">
        <div className="content ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className=" text-black pe-md-2">
                <h1 className="heading">Transform Shopping Experience with WhatsApp Commerce</h1>
                <p className="mt-20 text-black pe-md-5">
                  Boost your online sales with Anantya.ai. No matter what you
                  sell – software, luxury items, or education – turn chats into
                  sales.
                </p>
                <p className="mt-20 text-black pe-md-5">
                  Manage all your marketing, sales, and customer support in one
                  place, easily.
                </p>
                <div className="btns mt-40">
                  <a
                    href="book-a-demo"
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Sign Up for Free
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
                  src={chatAndSellMoreImg}
                  className="img-fluid"
                  alt="Chat and Sell More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="logo_heading">
          Top ECommerce Brands Growing with WhatsApp
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
        <div className="container py-5 my-5 ecom">
          <div className="row">
            <div className="col-md-6 col-sm-12 pe-md-5 text-md-start text-center">
              <h2>
                Convert Browsers <span>into Buyers</span>
              </h2> 
              <h6 className="text-justify pt-10">
                Increase your chances of getting customers by using
                click-to-WhatsApp ads. Make it easy for people to chat with you
                on your website with a WhatsApp widget.
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
                      <h4 className="card-title">Data-Driven Insights</h4>
                      <p>
                        Track all messages sent to and from your business,
                        understand customer behavior, and evaluate how well your
                        agents are doing with Anantya.ai
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
                      <h4 className="card-title">Promote on Every Channel</h4>
                      <p>
                        Easily share special deals right away or plan them ahead
                        of time. Get more people to see and click on your offers
                        by using the best channels.
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
                src={sellMoreImage}
                className="img-fluid"
                alt="sell-more-with-whatsapp-catalogues"
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5  text-lg-start text-center">
              <h2>
                Sell more with <span> WhatsApp Catalogues </span>
              </h2>
              <br />
              <p className="text-justify">
                Seamlessly send product catalogues to thousands of customers who
                have opted in to receive updates on WhatsApp.
              </p>
             
              <p className="text-justify">
                Automate notification campaigns triggered when customers abandon
                their carts or place orders, ensuring timely and relevant
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Achieves 10X ROI with Whatsapp Broadcasting"
        description="Learn how your E-commerce store can leverage WhatsApp to attain an impressive click-through rate of 57%"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal4"
      />
      <div
        className="modal fade"
        id="myModal4"
        tabIndex="-1"
        aria-labelledby="myModalLabel4"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel4">
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
      <section
        style={{
          background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
              <h2>
                Send WhatsApp <span>Retargeting Campaigns</span>
              </h2>
              <br />
              <p className="text-justify">
                Sort your audience based on whether they've read, received, or
                replied to your messages, and then send them targeted messages.
              </p>
           
              <p className="text-justify">
                Reach out to users who are 3 times more likely to become
                customers.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={retargetingImage}
                className="img-fluid"
                alt="send-whatsapp-retargeting"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <a
          href="https://wa.link/x2stoz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ctaImage}
            className="img-fluid"
            alt="Call to action on the home page"
          />
        </a>
      </div>
      <div className=" container integration py-5">
        <h2 className="pb-4">
          {" "}
          Anantya.ai Seamlessly integrates With <br/> Top Ecommerce Platforms.{" "}
        </h2>
        <LTRSlider />
        <RTLSlider />
      </div>

      <FAQSection faqs={homeFAQs} />
      <section className="clients style-5 pb-20 mt-5" style={{ backgroundColor: '#f3fbff' }}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
                    <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
                        <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
                            <div className="col">
                                <div className="cta-card new text-center h-100">
                                    <ul className="cta-usp new">
                                        <li className="list-item cta d-flex p-1">
                                            <div className="html-embed-27 cta w-embed">
                                                <svg width="16" height="12" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="feature-text-2 text-start ps-2">
                                                Experience a personalized demo with us
                                            </div>
                                        </li>
                                        <li className="list-item cta d-flex p-1">
                                            <div className="html-embed-27 cta w-embed">
                                                <svg width="16" height="12" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="feature-text-2 text-start ps-2">
                                                Discover why 10,000+ businesses choose us
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer" className="btn bg-green text-white btn-color text-center mt-10">
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
                                            <img src={whatsappScannerImg} className="img-fluid w-50 mx-auto" alt="whatsapp-scaner-img" />
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
                            Register for our Live Demo today and discover why Anantya.ai is the right choice for your business and get answers to all your WhatsApp-related questions.
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

export default EcommerceRetail;
