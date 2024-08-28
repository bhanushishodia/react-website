// src/views/ClickToWhatsAppAds.js
import React from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import runAdsImage from "../assets/images/run-click-to-whatsApp-ads.webp"; // Adjust path if necessary
import boostConversionsImg from "../assets/images/icons/boost-conversions.png"; // Adjust path if necessary
import seamlessExperienceImg from "../assets/images/icons/seamless-experience.png"; // Adjust path if necessary
import increaseVisibilityImg from "../assets/images/icons/increase-visibility.png"; // Adjust path if necessary
import VisibilityImg from "../assets/images/increase-the-visibility-of-your.webp"; // Adjust path if necessary
import clickToWhatsAppImg from "../assets/images/cta/click-to-whatsapp.png"; // Adjust the path according to your folder structure
import attractAndRetainImg from "../assets/images/attract-and-retain-customers.webp"; // Adjust the path as necessary
import waLinkImg from "../assets/images/wa.link_3dzezc.png"; // Adjust the path as necessary
const ClickToWhatsAppAds = () => {
  return (
    <div>
      <div className="container">
        <div className="content py-md-5 py-0">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className="info text-black pe-md-5">
                <h1>
                  Witness 5x ROI with Ads that <span>click to WhatsApp</span>
                </h1>
                <p className="mt-20 text-black pe-md-5">
                  Connect with new customers where they're most active. Run
                  Click-to-WhatsApp ads on Facebook and Instagram to invite
                  people for a chat.
                </p>
                <div className="btns mt-20">
                  <button
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    7 Days Free Trial
                  </button>
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
                  src={runAdsImage}
                  className="img-fluid"
                  alt="WhatsApp Marketing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="process style-12" style={{ background: "#fff" }}>
        <div className="container">
          <div className="content py-5  text-center">
          
              <h2 className="pb-4 fw-bold">
                Easily <span>Drive Traffic</span> to Your WhatsApp
              </h2>
          
            <div className="content">
              <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 px-md-0 px-3">
                <div className="col">
                  <a
                    href="contact.html"
                    className="features-card style-5 box-1 h-100"
                  >
                    <div className="icon">
                      <img src={boostConversionsImg} alt="Boost Conversions" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Boost Conversions</h5>
                      <p className="text">
                        Attract and keep customers by retargeting those who
                        clicked but didn't message, and guide them to purchase.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="contact.html"
                    className="features-card style-5 box-2 h-100"
                  >
                    <div className="icon">
                      <img
                        src={seamlessExperienceImg}
                        alt="Seamless Experience"
                      />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Seamless Experience</h5>
                      <p className="text">
                        Quickly respond to users from click-to-WhatsApp ads. Add
                        promos to get more engagement.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="contact.html"
                    className="features-card style-5 box-3 h-100"
                  >
                    <div className="icon">
                      <img
                        src={increaseVisibilityImg}
                        alt="Increase Visibility"
                      />
                    </div>
                    <div className="info">
                      <h5 className="card-title">Increase Visibility</h5>
                      <p className="text">
                        Run WhatsApp ads on Facebook & Instagram to redirect
                        users straight to your WhatsApp business profile.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a
              href="contact.html"
              className="btn bg-green text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={VisibilityImg}
                className="img-fluid"
                alt="Increase the visibility of your WhatsApp Business profile"
              />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-lg-start text-center">
              <h2>
                <span>Increase the visibility</span> of your WhatsApp Business
                profile
              </h2>
              <br />
              <p className="text-justify">
                Direct traffic to your WhatsApp business profile with
                click-to-WhatsApp ads.
              </p>
              
              <p className="text-justify">
                Expand your reach by displaying these ads on Facebook &
                Instagram.
              </p>
              <p className="text-justify">
                Be quick to reply when users message your business through
                WhatsApp ads for better customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <a
          href="/campaign-request-demo.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={clickToWhatsAppImg}
            className="img-fluid"
            alt="Call to action on the home page"
          />
        </a>
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
                <span>Attract & retain </span> customers with WhatsApp Business
                Platform
              </h2>
              <br />
              <p className="text-justify">
                Re-engage users who clicked your WhatsApp ads but haven't
                messaged you yet.
              </p>
              
              <p className="text-justify">
                Help direct messaging customers toward purchasing your products.
              </p>
          
              <p className="text-justify">
                Include special offers in your WhatsApp ads to attract users to
                interact with your business.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <img
                src={attractAndRetainImg}
                className="img-fluid"
                alt="Attract & retain customers with WhatsApp Business Platform"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "#f3fbff" }}
        className="clients style-5 pb-20"
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
                          src={waLinkImg}
                          className="img-fluid w-50 mx-auto"
                          alt="WhatsApp link icon representing the ability to connect with Anantya.ai via WhatsApp"
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
                <span> in Action! </span>
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

export default ClickToWhatsAppAds;
