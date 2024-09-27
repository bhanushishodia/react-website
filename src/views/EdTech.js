// src/views/EdTech.js

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
import defaultImage from "../assets/images/provide-support-to-students.webp";
import hoverImage1 from "../assets/images/attract-students-with-exciting.webp";
import hoverImage2 from "../assets/images/provide-support-to-students.webp";
import smoothImage from "../assets/images/smooth-admissions-process.webp";
import keepImage from "../assets/images/keep-students-engaged.webp";
import { Helmet } from 'react-helmet';
import pdfFile from '../assets/pdf/Education-Industry-Usecase-Updated.pdf';
const EdTech = () => {
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
        " Q1: How can educational institutes benefit from using WhatsApp?",
      answer:
        " A: WhatsApp can be a powerful tool for educational institutes to enhance communication, engagement, and student support. It allows institutes to connect with students, share information, provide updates, deliver study materials, and facilitate interactive discussions.",
    },
    {
      question:
        "Q2: What are some ways educational institutes can leverage WhatsApp?",
      answer: (
        <>
          Educational institutes can leverage WhatsApp in several ways, such as:
          <ol>
            <li>
              Sending important announcements and notifications to students and
              parents.
            </li>
            <li>
              Sharing course materials, study resources, and assignment details.
            </li>
            <li>
              Conducting interactive discussions and Q&A sessions with students.
            </li>
            <li>
              Offering personalized support and guidance to students through
              direct messaging.
            </li>
            <li>
              Facilitating quick and convenient communication between teachers,
              students, and parents.
            </li>
          </ol>
        </>
      ),
    },
    {
      question:
        " Q3: Can WhatsApp be used for admissions and enrollment processes?",
      answer: (
        <>
          A: Absolutely! WhatsApp can simplify and expedite the admissions and
          enrollment process. Institutes can:
          <ol>
            <li>
              Share admission forms, prospectuses, and course catalogs via
              WhatsApp.
            </li>
            <li>
              {" "}
              Answer prospective students' queries promptly and guide them
              through the application process.
            </li>
            <li>
              Conduct interviews, group discussions, and admission-related
              discussions through WhatsApp.
            </li>
            <li>
              {" "}
              Collect required documents and information from applicants using
              WhatsApp.
            </li>
          </ol>
        </>
      ),
    },
    {
      question:
        "Q4: Is WhatsApp a secure platform for educational institutes to use?",
      answer:
        "A: While WhatsApp provides end-to-end encryption for messages, it's essential to ensure that sensitive information is shared responsibly. Institutes should educate users on data privacy, avoid sharing confidential information over public groups, and comply with applicable data protection regulations.",
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
      <title>Enhance Learning with WhatsApp Integration | Ed-tech Whatsapp Chatbot</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Whatsapp Chatbot for EdTech solutions with Anantya AI's WhatsApp integration. Streamline communication, engage learners, and create a more connected educational experience." />
      <meta property="og:title" content="Enhance Learning with WhatsApp Integration | Ed-tech Whatsapp Chatbot" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Whatsapp Chatbot for EdTech solutions with Anantya AI's WhatsApp integration. Streamline communication, engage learners, and create a more connected educational experience." />
      <meta property="og:url" content="https://anantya.ai/edtech-industry" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/edtech/transform-education-with-whatsapp.webp" />
      <link rel="canonical" href="https://anantya.ai/edtech-industry" />
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
              "name": "Enhance Learning with WhatsApp Integration | Ed-tech Whatsapp Chatbot",
              "description": "Whatsapp Chatbot for EdTech solutions with Anantya AI's WhatsApp integration. Streamline communication, engage learners, and create a more connected educational experience."
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
              "name": "Ed-tech",
              "item": "https://anantya.ai/edtech-industry"
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
              "name": "How Can Educational Institutes Benefit From Using WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "WhatsApp can be a powerful tool for educational institutes to enhance communication, engagement, and student support. It allows institutes to connect with students, share information, provide updates, deliver study materials, and facilitate interactive discussions."
              }
            },
            {
              "@type": "Question",
              "name": "What Are Some Ways Educational Institutes Can Leverage WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Educational institutes can leverage WhatsApp in several ways, such as: Sending important announcements and notifications to students and parents. Sharing course materials, study resources, and assignment details. Conducting interactive discussions and Q&A sessions with students. Offering personalized support and guidance to students through direct messaging. Facilitating quick and convenient communication between teachers, students, and parents."
              }
            },
            {
              "@type": "Question",
              "name": "Can WhatsApp Be Used For Admissions And Enrollment Processes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! WhatsApp can simplify and expedite the admissions and enrollment process. Institutes can: Share admission forms, prospectuses, and course catalogs via WhatsApp. Answer prospective students' queries promptly and guide them through the application process. Conduct interviews, group discussions, and admission-related discussions through WhatsApp. Collect required documents and information from applicants using WhatsApp."
              }
            },
            {
              "@type": "Question",
              "name": "Is WhatsApp A Secure Platform For Educational Institutes To Use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While WhatsApp provides end-to-end encryption for messages, it's essential to ensure that sensitive information is shared responsibly. Institutes should educate users on data privacy, avoid sharing confidential information over public groups, and comply with applicable data protection regulations."
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
              <div className=" text-black pe-md-5">
                {/* <small className="mb-20 title_small">whatsapp-marketing</small> */}
                <h1 className="heading">Transform Education with WhatsApp APIs</h1>

                <p className="mt-20 text-black">
                  Send tailored reminders for tests, fee payments, results, and
                  more
                </p>
                <p className="mt-20 text-black">
                  Enhance accessibility, affordability, and flexibility in
                  education
                </p>
                <p className="mt-20 text-black">
                  Engage students with personalised chat conversations on
                  WhatsApp
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
            <div className="col-md-6 col-sm-12 pe-md-5 text-lg-start text-center">
              <h2>Attract Students with Exciting Ad Campaigns</h2>
              <h6 className="text-justify pt-10">
                Use Click To WhatsApp Ads to invite potential students to chat.
                Engage students and parents with a convenient WhatsApp widget to
                encourage course enrollment.
              </h6>
              <br />
              <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3 pt-10">
                <div className="col">
                  <div
                    className="ecom-card "
                    onMouseEnter={() => setHoveredCard("card1")}
                    onMouseLeave={() => setHoveredCard("card1")} // Default state when not hovering
                  >
                    <div className="cta-content">
                      <h4 className="card-title">
                        Simplify Application Process
                      </h4>
                      <p>
                        By collecting data through these conversations,
                        applicants can share information in a more natural and
                        effortless manner, streamlining the overall experience
                        and increasing efficiency.
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
                        Provide Support to Students
                      </h4>
                      <p>
                        Deliver personalised student support, addressing queries
                        and concerns in real-time. This kind of help makes
                        learning easier and encourages students to do well in
                        their studies.
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
                src={smoothImage}
                className="img-fluid"
                alt="sell-more-with-whatsapp-catalogues"
              />
            </div>
            <div className="col-md-6 col-sm-12 px-5  text-lg-start text-center">
              <h2>
                Smooth Admissions Process: Engage and Connect via WhatsApp
                Business API
              </h2>
              <br />
              <p className="text-justify">
                Engage students in interactive conversations to encourage their
                admission with ease
              </p>

              <p className="text-justify">
                Use a Green Tick Verified account to establish trust and
                credibility among students
              </p>
            </div>
          </div>
        </div>
      </section>
      <DownloadEbookSection
        title="Encourage the Right Learning with WhatsApp"
        description="Download our exclusive E-book to discover how to resolve student queries faster with WhatsApp's interactive messages"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal6"
      />
      <div
        className="modal fade"
        id="myModal6"
        tabIndex="-1"
        aria-labelledby="myModalLabel6"
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
              <h2>Keep Students Engaged & Informed with WhatsApp Chatbot</h2>
              <br />
              <p className="text-justify">
                Share personalised news and announcements through automated
                WhatsApp notifications.
              </p>
              <p className="text-justify">
                Encourage participation in extracurriculars through WhatsApp for
                better engagement.
              </p>
              <p className="text-justify">
                Deliver personalised study materials promptly to students via
                WhatsApp.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={keepImage}
                className="img-fluid"
                alt="send-whatsapp-retargeting"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" container integration py-5">
        <h2 className="pb-4">
          {" "}
          Anantya.ai Seamlessly integrates With <br /> Top Ecommerce Platforms.{" "}
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
        <hr className="line_breaker_2 " />
      </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default EdTech;
