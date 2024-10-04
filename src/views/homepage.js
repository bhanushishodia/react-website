import React, { useEffect, useRef, useState } from 'react';

import "./homepage.css";
// import CustomHeader from '../components/common/CustomHeader'; // Importing the component
import { Helmet } from 'react-helmet';
import IncrediblePlatformCapabilities from "../components/common/IncrediblePlatformCapabilities";
import AutomatedChats from "../components/common/AutomatedChats";
import LogoCarousel from "../components/common/LogoCarousel";
import LTRSlider from "../components/common/LTRSlider";
import RTLSlider from "../components/common/RTLSlider";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import StickyBar from "../components/common/StickyBar";

import video6 from "../assets/videos/Omnichannel live chat diagram.webm";
import { getImage } from '../utils/getImage'; // Adjust the path to your utility function

// Fetching images dynamically using the getImage function
const homePageGraphics = getImage('anantya-home-page.webp'); // Import the image
const metaLogo = getImage('meta-logo.png'); // Import the image
const ctaHome = getImage('cta/home-pagecta.jpg'); // Import the image
const icon1 = getImage('icons/24_7-support.png'); // Import the image
const icon2 = getImage('icons/Reliable-service.png'); // Import the image
const icon3 = getImage('icons/fortified-security.png'); // Import the image

const Homepage = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        var scroll = window.scrollY;
        var slicesDiv = document.getElementById("slices");

        if (scroll > 800 && scroll < 5400) {
          slicesDiv.classList.add("sticky-style");
        } else {
          slicesDiv.classList.remove("sticky-style");
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer logic for the video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger at 50% visibility
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once after initial <render></render>
  return (

    
    <div className="main-content">
      <div>
      <Helmet>
        <title>Conversational Engagement Platform for Businesses | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Anantya.ai is your Smartest Conversational Engagement Platform for Marketing, Commerce and Support & get every channel on a single platform." />
        <meta name="keywords" content="conversational engagement platform, conversational ai platform for customer engagement, conversational customer engagement software, conversational engagement software, whatsApp official api provider, whatsApp business solutions, whatsapp business solution provider, whatsapp business api, whatsapp api, Whatsapp for Business, whatsapp bulk message sender, whatsapp bulk message software, bulk whatsapp sender software, mass whatsapp messaging, whatsapp bulk sms sender, whatsapp bulk sms software, api of whatsapp, Whatsapp Api for Business" />
        <meta property="og:title" content="Conversational Engagement Platform for Businesses | Anantya.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Anantya.ai is your Smartest Conversational Engagement Platform for Marketing, Commerce and Support & get every channel on a single platform." />
        <meta property="og:url" content="https://anantya.ai" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://anantya.ai/assets/img/home/Home%20page%20Graphics.webp" />
        <link rel="canonical" href="https://anantya.ai" />
        <meta name="author" content="Anantya" />
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
                "areaServed": ["AE","SA","BH"],
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
      </Helmet>
      
    </div>
      {/* section1 */}
      <div className="parent-wrapper">
        <div className="container">
          <div className="content py-5 mt-md-4 mt-5 py-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 text-black  my-auto">
                <div className="info text-black text-start">
                  <h1>
                    Automate Your
                    <main id="restart" className="centered text-black">
                      <section className="intro pb-5 align-items-center">
                        <p className="typing intro_1">
                          Sales,<span className="blinking-cursor"></span>
                        </p>
                        <p className="typing intro_2">
                          Support<span className="blinking-cursor"></span>
                        </p>
                        <p className="typing intro_3">
                          Marketing <span className="blinking-cursor"></span>
                        </p>
                      </section>
                    </main>
                    with Generative AI
                  </h1>
                  <p className="mt-4 text-black pe-md-5">
                    {" "}
                    Keep your customers happy and engaged with an omnichannel
                    presence across all platforms.{" "}
                  </p>
                  <div className="d-flex align-items-center mt-30 youtube">
                    <span className="me-5">
                      Powered by
                      <a
                        href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&amp;platforms=whatsapp&amp;id=4336810659772608&amp;section=overview"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={metaLogo} // Correct path from views to assets/images
                          className="img-fluid meta ps-2"
                          alt="Meta Logo"
                        />
                      </a>
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=HChg-q8OC_4"
                      data-lity=""
                      className="play-btn"
                    >
                      <span className="icon me-2">
                        <i className="fas fa-play ms-1"></i>
                      </span>
                      <strong className="small">
                        View <br /> Promotion
                      </strong>
                    </a>
                  </div>

                  <div className="btns mt-30">
                  <a href="/contact" className="btn me-md-2 bg-green text-white btn-color">
  <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
  Try Anantya.ai
</a>

                    <a
                      href="https://calendly.com/info-w0m/30min?month=2024-02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn login_button"
                    >
                      Book a Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 pt-md-0 pt-4">
                <div
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "zoomIn",
                  }}
                >
                  <img
                    src={homePageGraphics} // Use the imported image
                    className="img-fluid"
                    alt="Automate Your Sales, Support with Generative AI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section1 */}
      {/* section2 */}
      <div className="text-center pt-5">
        <h2 className="logo_heading">Trusted by leading brands globally</h2>
        <LogoCarousel />
        <p
          className="color-666 line_breaker text-center mt-5 wow fadeInDown"
          style={{ visibility: "visible", animationName: "fadeInDown" }}
        >
          Generate leads, create help tickets, and chat across channels{" "}
          <a
            href="https://wa.link/hd4mvx"
            className="color-000 fw-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now
          </a>
        </p>
      </div>
      {/* section2 */}
      {/* section3 */}
      <div class="container-fluid">
        <div class="row-fluid-wrapper">
          <div id="slices" class="section-head text-center  style-5 pt-1 mt-4 ">
            <h2 class="mt-50 ">
              {" "}
              Incredible Platform <span> Capabilities </span>{" "}
            </h2>
            <p class="pb-3">
              Streamline, Engage, Notify: Your All-In-One Platform For Effective
              Business Communication{" "}
            </p>
          </div>
          <IncrediblePlatformCapabilities />
        </div>
      </div>
      {/* section3 */}
      {/* section4 */}
      <div class="container py-5 mt-md-0 mt-5">
        <a
          href="https://wa.link/hd4mvx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ctaHome}
            class="img-fluid"
            alt="Call to action on the home page"
          />
        </a>
      </div>
      {/* section4 */}
      {/* New Section 5 */}
      <section className="about style-5">
        <div className="content">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-lg-12 mb-30">
                <div className="section-head mb-10 style-5">
                  <h2>
                    {" "}
                    All Your Channels in <span> One Place </span>{" "}
                  </h2>
                </div>
                <p>
                  Whether you require a single channel or multiple integrations,
                  our customizable software  <br /> seamlessly melds with your
                  sales and marketing processes.
                </p>
              </div>
              <div className={`col-lg-12 mt-3 video-section ${isVisible ? 'zoom-in' : 'zoom-out'}`} ref={videoRef}>
        <video
          preload="auto"
          loop
          playsInline
          muted
          autoPlay
          src={video6}
          width="100%"
          height="auto"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '32.25vw',
            aspectRatio: '16/9',
          }}
          title="Omnichannel live chat diagram"
          data-lazyplay-target="video"
        ></video>
             </div>
            </div>
            <div className="btns mt-5 text-center">
              <a
                href="contact"
                className="btn bg-green text-white btn-color me-4"
              >
                Sign Up Free
              </a>
              <a
                href="https://calendly.com/info-w0m/30min?month=2024-02"
                className="btn login_button"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section5 */}
      <AutomatedChats /> {/* Use the component here */}
      {/* section6 */}
      <section className="process style-12">
        <div className="container">
          <div className="content pt-5">
            <div className="section-head text-center mb-40 mt-20">
              <h2>
                {" "}
                Rely on Our Security, <span> Stability & Support </span>{" "}
              </h2>
              <p>
                Supercharge your business without any backend worries with
                Anantya.ai.
              </p>
            </div>
            <div className="content">
              <div className="row row-cols-1 row-cols-md-3 g-5 py-4 px-md-0 px-3 text-lg-start text-center">
                <div className="col">
                  <div className="features-cards  h-100">
                    <div className="icon w-25 text-lg-start text-center">
                      <img src={icon1} class="img-fluid" alt="24-7" />
                    </div>
                    <div className="info">
                      <h5 className="card-title pt-3">24/7 Support</h5>
                      <p className="text pt-2">
                        Our Customer Support provides multilingual assistance
                        24/7, with AI support available off hours for continuous
                        24/7 service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-cards h-100">
                    <div className="icon w-25 text-lg-start text-center">
                      <img src={icon2} class="img-fluid" alt="services" />
                    </div>
                    <div className="info pt-3">
                      <h5 className="card-title">Reliable Service</h5>
                      <p className="text pt-2">
                        Count on Anantya.ai to deliver dependable service,
                        effortlessly handling high volumes without any slowdowns
                        or downtime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="features-cards style-5 h-100">
                    <div className="icon w-25 text-lg-start text-center">
                      <img src={icon3} class="img-fluid" alt="cyber-security" />
                    </div>
                    <div className="info pt-3">
                      <h5 className="card-title">Fortified Security</h5>
                      <p className="text pt-2">
                        Trust in our commitment to seamless operations, Your
                        data and processes are in secure hands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section6 */}
      {/* section7 */}
      {/* section7 */}
      {/* section8 */}
      <section className=" style-5 my-5 pb-20">
        <div className="container py-5">
          <div className="row">
            <div className=" container col-md-6 col-sm-12 integration">
              <LTRSlider />
              <RTLSlider />
            </div>
            <div className=" text-start  col-md-6 col-sm-12 pt-md-0 pt-5 my-auto px-5">
              <h2 className="mb-3">
                Easy integration with{" "}
                <span>
                  <br /> 100+ tools{" "}
                </span>{" "}
              </h2>
              <p>
                Connect Effortlessly with Your Favorite E-commerce Platforms,
                CRMs, E-stores, and Beyond, Powered by Anantya.ai.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section 8 end */}
      {/* Other sections */}
      <section
        className="clients style-5 pb-20 mt-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
            <div className="section-head text-start style-5 pt-5 col my-auto">
              <h2 className="mb-4 text-lg-start text-center">
                Get Started With
                <br />
                <span> Anantya.ai </span>
              </h2>
              <p>
                We Empower Thousands Of Businesses With Faster, Better, And
                Stronger Communication.
              </p>
            </div>
            <div className="section-head text-start mb-md-5 style-5 pt-md-5 col">
              <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3 pt-md-0 pt-4">
                <div className="col">
                  <div className="cta-card new text-center h-100">
                    <ul className="cta-usp new">
                      <li className="list-item cta d-flex p-1">
                        <div className="html-embed-27 cta w-embed">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 18 14"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentcolor"
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
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentcolor"
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
                      Book A Demo
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="cta-card new text-center h-100">
                    <ul className="cta-usp new">
                      <li className="list-item cta d-flex p-1">
                        <div className="html-embed-27 cta w-embed">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 18 14"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                        <div className="feature-text-2 text-start ps-2">
                          Join a rewarding, value-based partner program.
                        </div>
                      </li>
                      <li className="list-item cta d-flex p-1">
                        <div className="html-embed-27 cta w-embed">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 18 14"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                        <div className="feature-text-2 text-start ps-2">
                          Expand services & Unlock New Revenue Channels
                        </div>
                      </li>
                    </ul>

                    <a
                      href="partner-with-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn login_button mt-10"
                    >
                      Become a Partner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
      <ScrollToTopButton />
      <WhatsAppWidget />
      <StickyBar />
    </div>
  );
};

export default Homepage;
