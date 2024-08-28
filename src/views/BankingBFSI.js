// src/views/BankingBFSI.js
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
import educationImg from "../assets/images/transform-education-with-whatsapp.webp"; // Adjust the path if necessary
import defaultImage from "../assets/images/empowering-fin-tech.webp";
import hoverImage1 from "../assets/images/empowering-fin-tech.webp";
import hoverImage2 from "../assets/images/convey-transactional-notifications.webp";
import OnboardingMadeImage from "../assets/images/onboarding-made-easy.webp";
import reduceCustomerImage from "../assets/images/reduce-customer-drop-offs.webp";
const BankingBFSI = () => {
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
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className="info text-black pe-md-2">
                {/* <small className="mb-20 title_small">whatsapp-marketing</small> */}
                <h1>Leverage WhatsApp for Finance & Insurance</h1>

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
              <br />
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
