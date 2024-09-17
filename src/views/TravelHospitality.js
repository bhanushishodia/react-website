// src/views/TravelHospitality.js
import React, { useState } from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import FAQSection from "../components/common/FAQSection";
import LogoCarousel from "../components/common/LogoCarousel";
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from "../assets/images/download-ebook.png"; // Adjust path as needed
import whatsappScannerImg from '../assets/images/wa.link_3dzezc.png';
import "./EcommerceRetail.css"; // Import your CSS file if needed
import travelAgencyImg from '../assets/images/get-more-leads-for-your-travel.webp'; // Adjust the path if necessary
import defaultImage from "../assets/images/share-exclusive-travel-deals-and-offers.webp";
import hoverImage1 from "../assets/images/share-exclusive-travel-deals-and-offers.webp";
import hoverImage2 from "../assets/images/launch-a-ai-chatbot.webp";
import offerDealImage from "../assets/images/promote-exclusive-travel.webp";
import sendProactiveImage from "../assets/images/send-proactive-updates-for-travel-booking.webp";
const TravelHospitality = () => {
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
     <div className="container">
            <div className="content py-md-5 py-0">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-black mt-20">
                        <div className="info text-black pe-md-5 text-lg-start text-center">
                        
                            <h1 className="heading">Get More Leads for Your Travel Agency on WhatsApp</h1>

                            <p className="mt-30 text-black">Offer 24/7 Customer Support and Agent Availability</p>
                            <p className="mt-20 text-black">Instantly Answer Travel and Tourism FAQs</p>
                            <p className="mt-20 text-black">Easily Share Documents, PDFs, and Property Brochures on WhatsApp</p>
                            
                            <div className="btns mt-40">
                                <a href="book-a-demo" className="btn login_button" data-bs-toggle="modal" data-bs-target="#myModal">
                                    Book a Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wow zoomIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}>
                            <img src={travelAgencyImg} className="img-fluid" alt="Transform Education with WhatsApp APIs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <h2 className="logo_heading">
        Top Media & Entertainment Brands Growing with WhatsApp
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
              <h2>Share Exclusive Travel Deals and Offers
              </h2>
              <h6 className="text-justify pt-10">
              Keep customers updated on the latest and most thrilling deals and personalised offers on hotel packages & holiday activities. Send contextual offers and promotions and increase your travel bookings through WhatsApp.

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
                      <h4 className="card-title">Engage on every channel</h4>
                      <p>Set up automated marketing campaigns across various channels to reconnect with past customers or potential clients who have shown interest.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="ecom-card "
                    onMouseEnter={() => setHoveredCard("card2")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">
                      
Launch a AI Chatbot</h4>
                      <p>Automate messages like recommendations or FAQ responses with WhatsApp Chatbot for 24/7 self-service.</p>
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
                src={offerDealImage}
                className="img-fluid"
                alt="sell-more-with-whatsapp-catalogues"
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5 pt-4 text-lg-start text-center">
              <h2>Promote Exclusive Travel Deals and Offers through Click-to-WhatsApp Ads
              </h2>
              <br />
              <p className="text-justify">Run click to WhatsApp ads with exclusive offers to generate interest
              </p>
              
              <p className="text-justify">Use WhatsApp links to promote on social media and other platforms
              </p>
              <p className="text-justify">Add a WhatsApp widget on your website to initiate conversations</p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Attract More Customers to Your Travel Business: Unlock Proven Tips!"
        description="Download Our Exclusive Ebook to Learn More!"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal7"
      />
      <div
        className="modal fade"
        id="myModal7"
        tabIndex="-1"
        aria-labelledby="myModalLabel7"
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
              <h2>Send Proactive Updates for Travel Booking Confirmation & Reminders
              </h2>
              <br />
              <p className="text-justify">
              Provide Booking Progress Updates for International Travel, including VISA Applications and More
              </p>
          
              <p className="text-justify">
              Effortlessly Share Boarding Passes and E-Tickets on WhatsApp for Convenient Document Access
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={sendProactiveImage}
                className="img-fluid"
                alt="send-whatsapp-retargeting"
              />
            </div>
          </div>
        </div>
      </section>
   
      <div className=" container integration py-5">
        <h2>
          {" "}
          Connect to the Tools You Love{" "}
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
            <hr className="line_breaker_2 " />
        </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default TravelHospitality;
