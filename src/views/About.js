import React from "react";
import "./about.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import MapVideo from "../assets/videos/Map-video.mp4";
import { Helmet } from 'react-helmet';
import { getImage } from '../utils/getImage'; // Adjust the path to your utility
// Fetching the images dynamically using the getImage function
const banerImage = getImage('About-Us-Graphic.webp'); // Adjust path if necessary
const YashikaImage = getImage('yashika-Maam.webp'); // Adjust path if necessary
const About = () => {
  return (
    <>
  <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/about" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/about" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/about" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/about" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/about" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/about" />

        <title>About Anantya.ai | Verified Whatsapp Business API</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="About Anantya.ai | Verified Whatsapp Business API" />
        <meta name="description"
          content="Learn about Anantya AI, a leading provider of intelligent software solutions. Discover how our cutting-edge technology helps businesses streamline operations, enhance productivity, and achieve success." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Anantya.ai | Verified Whatsapp Business API" />
        <meta property="og:description"
          content="Learn about Anantya AI, a leading provider of intelligent software solutions. Discover how our cutting-edge technology helps businesses streamline operations, enhance productivity, and achieve success." />
        <meta property="og:url" content="https://anantya.ai/about" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/About-Us-Graphic.webp" />
        <link rel="canonical" href="https://anantya.ai/about" />
        <meta name="author" content="Anantya" />

        <script type="application/ld+json">
          {`
            {
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
                "areaServed": ["AE","SA","BH","IN"],
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

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebPage",
              "@id": "#WebPage",
              "url": "https://anantya.ai/about",
              "name": "About Anantya.ai | Verified Whatsapp Business API"
            }
          `}
        </script>

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
                  "name": "About Us",
                  "item": "https://anantya.ai/about"
                }
              ]
            }
          `}
        </script>
      </Helmet>
    <div className="about-page mt-md-2 pt-md-5 mt-5 pt-5">
      <h1>Anantya.ai</h1>
      <p className="px-3">Bridging the Gap Between Businesses and Customers</p>
      <p>⚡️Powered by Meta</p>
      <div className="container">
      <div
        className="wow zoomIn"
        data-wow-delay="0.2s"
        style={{
          visibility: 'visible',
          animationDelay: '0.2s',
          animationName: 'zoomIn',
        }}
      >
        <img
          src={banerImage}
          className="img-fluid"
          alt="about-us-baner"
        />
      </div>
       </div>
      <div className="container">
        <div className="row_am features_section px-md-0 px-3 my-5">
          <div className="features_inner">
            <div className="section_title px-md-5 px-0">
              <h2 className="text-center mb-30">
                About <span> Us</span>
              </h2>
              <p className="px-md-5 px-4 text-justify pb-md-4">
                At Anantya.ai, We are dedicated to creating a world where small
                to medium-sized companies can grow their businesses smartly. Our
                ultimate goal is to assist businesses in connecting with their
                customers wherever they may be, particularly on messaging
                platforms, ensuring constant accessibility, personalization, and
                real-time engagement.
                <br />
                <br />
                At Anantya.ai, we provide companies with easy-to-use customer
                engagement software that leverages the power of the WhatsApp
                Business API, enabling personalized conversations with customers
                at scale. For instance, our API allows you to programmatically
                send customized notifications directly from your system.
                <br />
                <br /> Moreover, our platform offers SMEs a seamless inbox
                equipped with smart routing, canned responses, data tagging, and
                analytics, enabling them to efficiently support their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="testimonials style-1 my-5">
        <div className="container">
          <div className="section-head mb-md-3 text-center pt-5">
            <h2
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Where <span className="fw-normal">We Are</span>
            </h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-lg-5 my-auto">
                <div className="section-head style-4 mb-20">
                  <h2 className="mb-20 text-lg-start text-center">
                    Our Global <span>Presence</span> <br />
                  </h2>
                  <h5 className="text-lg-start text-center py-2">
                    Anantya.ai operates in all regions of the world
                  </h5>
                </div>
                <div className="text mb-30 text-md-start text-center">
                  Our expanding market presence brings us closer to our local
                  and regional customers and gives us greater capability to
                  serve these customers through a global workforce that is
                  dedicated to establishing and maintaining true partnerships.
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="vid_img mb-2 mb-md-0 wow zoomIn slow"
                  style={{ visibility: "visible", animationName: "zoomIn" }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    width="100%"
                    height="400"
                  >
                    <source src={MapVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials style-1 my-5 mb-50">
        <div className="container">
          <div className="section-head mb-30 text-center">
            <h2
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Anantya.ai <span className="fw-normal">Backbone!</span>
            </h2>
          </div>
          <div className="content pt-5">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="mb-2 mb-md-0 wow zoomIn slow text-center"
                  style={{ visibility: "visible", animationName: "zoomIn" }}
                >
                  <img
                    src={YashikaImage}
                    className="img-fluid w-75 mx-auto"
                    alt="yashika-kothari"
                  />
                  <div
                    className="wow fadeInUp text-black"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <h4 className="text-black">Yashika Kothari</h4>
                    <small className="text-black">CEO & Founder</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 my-auto text-start ">
                <div
                  className="info wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="mb-3" data-wow-delay="0">
                    <p>
                      Yashika Kothari is the brains behind Anantya.ai, a
                      top-notch platform that helps businesses with AI-based
                      conversations.
                    </p>
                  </div>
                  <div className="mb-3" data-wow-delay="0.2s">
                    She studied Economics and Mathematics at Hansraj College and
                    also did a program in Product Management at the Indian
                    School of Business.
                  </div>
                  <div className="mb-3" data-wow-delay="0.4s">
                    Looking ahead, Yashika sees a bright future for Anantya.ai.
                  </div>
                  <div
                    className="mb-3"
                    data-wow-delay="0.4s"
                    style={{ letterSpacing: "0.1rem" }}
                  >
                    “We want to keep making our platform better and offering
                    more helpful features for businesses and their customers. We
                    are more focused on Generative AI right now, so chats
                    between businesses and customers are more personalised and
                    natural. We are planning to expand in new countries, teaming
                    up with local businesses to help them communicate better.”
                  </div>
                  <a
                    href="https://www.linkedin.com/in/yashika-kothari/"
                    className="btn bg-green text-lg-start text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-briefcase me-2 pe-2 border-end"></i>
                    Let's talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about projects style-7 project-card style-7">
        <div className="container">
          <div className="content">
            <div className="row my-auto px-md-5 px-0 py-5">
              <div className="col-lg-4 col-sm-12 my-auto text-md-start text-center">
                <div className="projects-tabs text-center">
                  <ul
                    className="nav nav-pills mb-3 flex-md-column d-flex flex-nowrap-mobile"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-proj1-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-proj1"
                        type="button"
                        role="tab"
                        aria-controls="pills-proj1"
                        aria-selected="true"
                      >
                          
                        Our Mission
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-proj2-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-proj2"
                        type="button"
                        role="tab"
                        aria-controls="pills-proj2"
                        aria-selected="false"
                      >
                        Our Vision
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-proj3-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-proj3"
                        type="button"
                        role="tab"
                        aria-controls="pills-proj3"
                        aria-selected="false"
                      > 
                        Our Values
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12 my-auto">
                <div
                  className="tab-content mb-md-0 mb-5 wow fadeInUp"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active about_Card"
                    id="pills-proj1"
                    role="tabpanel"
                    aria-labelledby="pills-proj1-tab"
                  >
                    <div className="industry-1">
                      <div className="d-inline-flex row m-md-0 p-md-5 m-0 p-5">
                        <div
                          className="info col-md-12 col-sm-12 my-auto"
                          data-wow-delay="0"
                        >
                          <p>
                            Our goal is to create the best platform for having
                            enjoyable conversations with customers, making sure
                            they are happy and satisfied. We aim to be at the
                            forefront of innovation and provide an exceptional
                            customer experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade about_Card"
                    id="pills-proj2"
                    role="tabpanel"
                    aria-labelledby="pills-proj2-tab"
                  >
                    <div className="industry-2">
                      <div className="swiper-slide">
                        <div className="d-inline-flex row m-md-0 p-md-5 m-0 p-5">
                          <div
                            className="info col-md-12 col-sm-12 my-auto"
                            data-wow-delay="0.2s"
                          >
                            <p>
                              We imagine a world where businesses communicate
                              with customers through personalised conversations,
                              fostering meaningful relationships and
                              understanding their unique needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade about_Card"
                    id="pills-proj3"
                    role="tabpanel"
                    aria-labelledby="pills-proj3-tab"
                  >
                    <div className="industry-3">
                      <div className="swiper-slide">
                        <div className="d-inline-flex row m-md-0 p-md-5 m-0 p-5">
                          <div
                            className="info col-md-12 col-sm-12 my-auto"
                            data-wow-delay="0.4s"
                          >
                            <p>
                              We are deeply committed to our customers, placing
                              their needs and satisfaction above all else.
                              Integrity and honesty are at the heart of
                              everything we do, as we believe in conducting
                              business with transparency and ethical conduct.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
      <div className="text-center  py-5">
        <h2 className="mb-10">
          Be a part of the <span>Team</span>
        </h2>
        <p>
          Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.
        </p>
        <div className="d-flex align-items-center justify-content-center mt-40 mb-40">
          <a
            href="./work-with-us"
            className="btn bg-green me-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-briefcase me-2 pe-2 border-end"></i> Visit our Career page
          </a>
        </div>
      </div>
    </div>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default About;
