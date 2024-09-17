// src/views/contact.js
import React from "react";
import ContactForm from "../forms/ContactForm"; // Correct casing used here
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import "./contact.css";
import icon4 from "../assets/images/icons/call.png"; // Import the image
import icon5 from "../assets/images/icons/email.png"; // Import the image
import icon6 from "../assets/images/icons/location.png"; // Import the image
import icon7 from "../assets/images/icons/branch.png"; // Import the image
import supportImage from "../assets/images/customer-support.webp"; // Import the support image
import salesImage from "../assets/images/Talk-to-sales.webp"; // Import the sales image

const Contact = () => {
  return (
    <div className="contact-page">
      <section>
        <div className="container py-5 my-5">
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
                    href="contact.html"
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
  );
};

export default Contact;
