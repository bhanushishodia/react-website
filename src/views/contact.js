// src/views/contact.js
import React from "react";
import ContactForm from "../forms/ContactForm"; // Correct casing used here
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import "./contact.css";
import { Helmet } from 'react-helmet';
import { getImage } from '../utils/getImage'; // Adjust the path to your utility
// Fetching images dynamically using the getImage function
const icon4 = getImage('icons/call.png');
const icon5 = getImage('icons/email.png');
const icon6 = getImage('icons/location.png');
const icon7 = getImage('icons/branch.png');
const supportImage = getImage('customer-support.webp');
const salesImage = getImage('Talk-to-sales.webp');


const Contact = () => {
  return (
     <>
      <Helmet>
                <title>Contact Us | Whatsapp API Platform | Anantya</title>
                <meta name="robots" content="index,follow" />
                <meta
                    name="description"
                    content="Connect with Verified WhatsApp API - Your trusted solution for seamless communication. Reach out to us today for secure and reliable WhatsApp integration."
                />
                <meta property="og:title" content="Contact Us | Whatsapp API Platform | Anantya" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="Connect with Verified WhatsApp API - Your trusted solution for seamless communication. Reach out to us today for secure and reliable WhatsApp integration."
                />
                <meta property="og:url" content="https://anantya.ai/contact" />
                <meta property="og:site_name" content="anantya.ai" />
                <meta property="og:image" content="https://anantya.ai/assets/img/contact/customer-support.webp" />
                <link rel="canonical" href="https://anantya.ai/contact" />
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
                            "availableLanguage": "en",
                        },
                        "sameAs": [
                            "https://www.facebook.com/anantyaai",
                            "https://www.instagram.com/anantya.ai",
                            "https://www.youtube.com/@Anantyaai",
                            "https://www.linkedin.com/company/anantya-ai",
                            "https://www.pinterest.com/anantyaai",
                        ],
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "name": "Contact Us | Whatsapp API Platform | Anantya",
                                "description": "Connect with Verified WhatsApp API - Your trusted solution for seamless communication. Reach out to us today for secure and reliable WhatsApp integration.",
                            },
                            {
                                "@type": "WebSite",
                                "name": "Anantya",
                                "alternateName": "anantya.ai",
                                "url": "https://anantya.ai/",
                            },
                        ],
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
                                "item": "https://anantya.ai",
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Contact Us",
                                "item": "https://anantya.ai/contact",
                            },
                        ],
                    })}
                </script>
      </Helmet>
      <div className="contact-page">
      <section>
        <div className="container py-5 mt-4">
          <div className="row">
            <div className="col-lg-7 col-sm-12 pe-md-5 text-black text-center">
              <h3 className="mt-30">We’re Here To Help</h3>

              <div className="row">
                <div className="col-lg-6 col-sm-12">
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
                      src={supportImage}
                      className="img-fluid"
                      alt="Customer Support"
                    />
                  </div>
                  <h5>Sales</h5>
                  <p>
                    Get in touch with our Sales Team for immediate help with any
                    sales-related inquiries
                  </p>
                  <a
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green text-white btn-color text-center mt-10"
                  >
                    Book A Demo
                  </a>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div
                    className="wow zoomIn"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  >
                    <img src={salesImage} className="img-fluid" alt="Support" />
                  </div>
                  <h5>Support</h5>
                  <p>
                    Reach out to our customer support team immediately for any
                    product-related assistance.
                  </p>
                  <a
                    href="contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green text-white btn-color text-center mt-10"
                  >
                    Generate a Ticket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Use ContactForm component */}

      {/*card */}
      <section className="clients">
        <div className="container py-5 ">
        
            <h2>
              we are here to <span>assist you</span>
            </h2>
            <div className="row row-cols-1 row-cols-md-4 g-4  pt-4 px-md-0 px-3">
              <div className="col ">
                <div
                  className="features-card my-auto style-5 box-1  wow fadeInUp h-100"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="img">
                    <img src={icon4} alt="call icon" />
                  </div>
                  <div className="info pt-30">
                    <h5>Call Now</h5>
                    <ul style={{ listStyleType: "none", paddingLeft: "0rem" }}>
                      <li>
                        <a href="tel:+971565480273">+971 56 548 0273</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="features-card style-5 box-2 mt-md-0 wow fadeInUp h-100"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img">
                    <img src={icon5} alt="email icon" />
                  </div>
                  <div className="info pt-30">
                    <h5>
                      Email <span>Us</span>
                    </h5>
                    <ul style={{ listStyleType: "none", paddingLeft: "0rem" }}>
                      <li>
                        <a href="mailto:info@anantya.ai">info@anantya.ai</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="features-card style-5 box-3 wow fadeInUp h-100"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img">
                    <img src={icon6} alt="location icon" />
                  </div>
                  <div className="info pt-30">
                    <h5>Headquarters</h5>
                    <p>
                      P/162 Building No. 3, 6th floor - 608 Wadi An Niyabiyah St
                      - Al Nahyan - E25 - Abu Dhabi - United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="features-card style-5 box-1 wow fadeInUp h-100"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="img">
                    <img src={icon7} alt="location icon" />
                  </div>
                  <div className="info">
                    <h5>Branch</h5>
                    <p>
                      Nosnia Tech Private Limited <br />
                      <span className="text-lowercase">
                        Fifth floor, 509, Signature, Makarba Sarkhej Roza Road,
                        Jeep Concept Jeep, Makarba, Ahmedabad, Gujarat, 382210
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </section>
      {/* card */}
      {/* location */}
      <div className="googleMap">
        <iframe
          title="Google Map showing The Binary Tower"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4662198338556!2d55.26399937444126!3d25.187495332095388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d3bbf192ab%3A0xe9ca814013344df7!2sThe%20Binary%20Tower!5e0!3m2!1sen!2sin!4v1708583369325!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* location */}

      <ScrollToTopButton />
      <WhatsAppWidget />
       </div>
       </>
  );
};

export default Contact;
