import React from "react";
import { Helmet } from "react-helmet";
import pdfFile from '../assets/pdf/Usecase-WhatsApp-Marketing.pdf';
import CountUp from "react-countup";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import "./WhatsappMarketing.css"; // Import a CSS file if you have specific styles
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const whatsappMarketing = getImage('whatsapp-marketing-home-page.webp'); // Adjust path as needed
const broadcastImage = getImage('broadcasting-promotional-messages.webp');
const clickToWhatsAppImage = getImage('run-click-to-whatsApp-ads.webp'); // Adjust the path as needed
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const automateNotificationsImage = getImage('automate-notifications-&-reminders.webp'); // Adjust path as needed
const callToActionImage = getImage('cta/whatsapp-marketing.webp'); // Adjust path as needed
const redirectTrafficImage = getImage('redirect-website-traffic-on-whatsapp.webp'); // Adjust path as needed

const WhatsappMarketing = () => {
  const submitFormAndOpenPDF = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform form submission (assuming you have a form with the id 'marketing')
    document.getElementById("marketing").submit();

    // Open PDF in a new tab
      
  window.open(pdfFile, "_blank");
  };

  return (
    <>
      <Helmet>
        {/* Title and Meta Tags */}
        <title>Boost Engagement with WhatsApp Marketing | Anantya.ai</title>
        <meta
          name="keywords"
          content="whatsapp marketing,whatsapp business marketing,whatsapp marketing service,whatsapp marketing software,whatsapp marketing company"
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Get WhatsApp marketing service to engage customers and make sales. Find out how the WhatsApp marketing platform can help your business succeed."
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Boost Engagement with WhatsApp Marketing | Anantya.ai"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Get WhatsApp marketing service to engage customers and make sales. Find out how the WhatsApp marketing platform can help your business succeed."
        />
        <meta
          property="og:url"
          content="https://anantya.ai/whatsapp-marketing"
        />
        <meta property="og:site_name" content="anantya.ai" />
        <meta
          property="og:image"
          content="https://anantya.ai/assets/img/whatsapp-marketing/whatsapp-marketing-home-page.webp"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://anantya.ai/whatsapp-marketing" />

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
            "url": "https://anantya.ai/whatsapp-marketing",
            "name": "Boost Engagement with WhatsApp Marketing | Anantya.ai"
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
                "name": "Boost Engagement with WhatsApp Marketing | Anantya.ai",
                "item": "https://anantya.ai/whatsapp-marketing"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <div className="whatsapp-marketing-page">
        <div className="container py-5 mt-5">
          <div className="content">
            <div className="row align-items-center">
              <div className="col-lg-6 text-black mt-20">
                <div className=" text-black text-md-start text-center">
                  <h1 className="heading">
                    Kick Start Your WhatsApp Marketing Journey
                  </h1>
                  <p className=" text-black pe-md-5">
                    Unlock the power of WhatsApp Marketing and watch your
                    business skyrocket to new heights! With us, you can achieve:
                  </p>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Upto 150x ROI by Broadcasting Messages</li>
                    <li>5x Conversions with Click to WhatsApp Ads</li>
                    <li>Automate your business for 2x Boost in sales</li>
                  </ul>
                  <div className="d-flex align-items-center mt-20 youtube">
                    <p className="me-5">
                      ⚡️Powered by Official WhatsApp Business API
                    </p>
                  </div>
                  <div className="btns mt-20">
                    <button
                      type="button"
                      href="https://calendly.com/info-w0m/30min?month=2024-02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn me-2 bg-green text-white btn-color"
                    >
                      <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                      Book a Demo
                    </button>
                    <a href="contact" className="btn login_button">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
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
                    src={whatsappMarketing}
                    className="img-fluid"
                    alt="Start your WhatsApp Marketing Journey With Anantya.ai"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="numbers">
          <div className="container py-5">
            <div className="content px-md-0 px-3">
              <div className="row">
                <div className="col-lg-4">
                  <div className="number-card style-6">
                    <h2 className="me-4 color-blue5">
                      <CountUp start={0} end={70} duration={2.75} suffix="%" />
                    </h2>
                    <div className="text">
                      lower cost per lead with marketing campaigns
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="number-card style-6">
                    <h2 className="me-4 color-blue5">
                      <CountUp start={0} end={2} duration={2.75} suffix="X" />
                    </h2>
                    <div className="text">
                      Higher Open Rates & Faster Response Times
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="number-card style-6 border-0">
                    <h2 className="me-4 color-blue5">
                      <CountUp start={0} end={58} duration={2.75} suffix="%" />
                    </h2>
                    <div className="text">
                      Repeat Customers with smart recommendation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "linear-gradient(to left bottom, #FFF7FC, #f3fbff)",
          }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
                <h2>
                  Boost Customer <span> Engagement </span> with WhatsApp
                  broadcasts
                </h2>
                <br />
                <p className="text-justify">
                  Easily send unlimited WhatsApp promotional messages to users
                  who have opted in, sharing discount offers, promotions on
                  festivals & much more.
                </p>
                <br />
                <p className="text-justify">
                  Broadcasting bulk WhatsApp Marketing messages and offers
                  stands out as the best method to connect with a broad audience
                  and enhance sales.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 my-auto px-5">
                <img
                  src={broadcastImage}
                  className="img-fluid"
                  alt="broadcasting-promotional-messages"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-auto px-5">
                <img
                  src={clickToWhatsAppImage}
                  className="img-fluid"
                  alt="run-click-to-whatsApp-ads"
                />
              </div>
              <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-md-start text-center">
                <h2>
                  Run{" "}
                  <span className="primary_color"> Click to WhatsApp Ads </span>{" "}
                  On Instagram & Facebook
                </h2>
                <br />
                <p className="text-justify">
                  Run Direct to WhatsApp Ads on Instagram and Facebook with
                  WhatsApp marketing software to quickly generate leads and
                  lower lead costs.
                </p>

                <p className="text-justify">
                  With 'Direct to WhatsApp Ads,' users go straight to your
                  WhatsApp, starting a live one-on-one chat. When someone lands
                  on your WhatsApp, you instantly get their name and phone
                  number without making them fill out long forms.
                </p>
                <button
                  type="button"
                  className="btn bg-green text-white mt-3"
                  onClick={() =>
                    window.open("https://wa.link/prcxc0", "_blank")
                  }
                >
                  Get Started with CTWA
                </button>
              </div>
            </div>
          </div>
        </section>
        <DownloadEbookSection
          title="Discover why your business needs WhatsApp marketing"
          description="Read this detailed guide to understand why your business should use the WhatsApp Business API for marketing"
          imageSrc={downloadEbookImage}
          imageAlt="download-ebook-logo"
          buttonText="Download ebook"
          modalTarget="#myModal1"
        />

        {/* Modal components */}
        <div
          className="modal fade"
          id="myModal1"
          tabIndex="-1"
          aria-labelledby="myModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fw-bold" id="myModalLabel1">
                  Download Ebook Now
                </h4>
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
              <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
                <h2>
                  Automate{" "}
                  <span className="primary_color">
                    {" "}
                    Notifications & Reminders{" "}
                  </span>{" "}
                  on WhatsApp
                </h2>
                <br />
                <p className="text-justify">
                  Forget about emails and texts – you'll get 5 times more people
                  to see and respond when you use WhatsApp marketing software
                  for automated notifications.
                </p>
                <br />
                <p className="text-justify">
                  You can set up automatic messages on WhatsApp for different
                  things like orders, shipping updates, deliveries, abandoned
                  carts, and more by connecting it with other tools.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 my-auto px-5">
                <img
                  src={automateNotificationsImage}
                  className="img-fluid"
                  alt="automate-notifications-reminders"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container py-5">
          <a
            href="https://wa.link/prcxc0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={callToActionImage}
              className="img-fluid"
              alt="Call to action on the home page"
            />
          </a>
        </div>
        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-auto px-5">
                <img
                  src={redirectTrafficImage}
                  className="img-fluid"
                  alt="redirect-website-traffic"
                />
              </div>
              <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-md-start text-center">
                <h2>
                  Redirect{" "}
                  <span className="primary_color">Website Traffic</span> on
                  WhatsApp with a WhatsApp Button
                </h2>
                <br />
                <p className="text-justify">
                  A WhatsApp chat widget is like a chat button on a website that
                  lets visitors talk to you through WhatsApp.
                </p>

                <p className="text-justify">
                  Think of a WhatsApp Chat Widget as a handy tool on websites,
                  like a friendly doorbell for online visitors. It makes it
                  simple for them to start a chat with you using the familiar
                  WhatsApp platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ScrollToTopButton />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default WhatsappMarketing;
