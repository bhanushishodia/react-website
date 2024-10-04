import React from "react";
import "./AutomatedChats.css"; // Create a CSS file for additional styles if needed
import { getImage } from '../../utils/getImage';  // Correct path to utility
 // For images in assets/images
 const whatsappMarketing = getImage('whatsapp-marketing.webp');
 const whatsappSupport = getImage('whatsapp-support.webp');
 const whatsappCommerce = getImage('whatsapp-commerce.webp');
 const whatsappAuthentication = getImage('whatsapp-authentication.webp');
 // For icons in assets/images/icons
 const whatsappMarketingIcon = getImage('icons/whatsapp-marketing.png');
 const whatsappSupportIcon = getImage('icons/whatsapp-support.png');
 const whatsappCommerceIcon = getImage('icons/whatsapp-commerce.png');
 const whatsappAuthenticationIcon = getImage('icons/whatsapp-authentication.png');
const AutomatedChats = () => {
  return (
    <div>
      <div className="automated style-5 mb-60">
        <h2 className="text-center mb-5 py-4">
          Do More with AI <span> Automated Chats! </span>
        </h2>
      </div>
      <section className="projects style-7 mt-60 countdown-content wow fadeInUp">
        <div className="container">
          <div className="content chats">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div
                  className="projects-tabs py-3"
                  style={{
                    color: "#76c6b7",
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 10px 0px rgba(33,35,34,.1)",
                    borderRadius: "12px",
                    marginTop: "-50px",
                  }}
                >
                  <ul
                    className="nav nav-pills flex-row align-items-center"
                    id="pills-tab"
                    role="tablist"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <li
                      className="nav-item d-flex align-items-center"
                      role="presentation"
                    >
                      <img
                        src={whatsappMarketingIcon}
                        className="img-fluid"
                        alt=""
                      />
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
                        WhatsApp <br /> Marketing
                      </button>
                    </li>
                    <li
                      className="nav-item d-flex align-items-center"
                      role="presentation"
                    >
                      <img
                        src={whatsappSupportIcon}
                        className="img-fluid"
                        alt=""
                      />
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
                        WhatsApp <br /> Support
                      </button>
                    </li>
                    <li
                      className="nav-item d-flex align-items-center"
                      role="presentation"
                    >
                      <img
                        src={whatsappCommerceIcon}
                        className="img-fluid"
                        alt=""
                      />
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
                        WhatsApp <br /> Commerce
                      </button>
                    </li>
                    <li
                      className="nav-item d-flex align-items-center"
                      role="presentation"
                    >
                      <img
                        src={whatsappAuthenticationIcon}
                        className="img-fluid"
                        alt=""
                      />
                      <button
                        className="nav-link"
                        id="pills-proj4-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-proj4"
                        type="button"
                        role="tab"
                        aria-controls="pills-proj4"
                        aria-selected="false"
                      >
                        WhatsApp <br /> Authentication
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 my-auto">
                <div className="tab-content mb-md-0 mb-5" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-proj1"
                    role="tabpanel"
                    aria-labelledby="pills-proj1-tab"
                  >
                    <div className="industry-1">
                      <div className="project-card style-7 d-inline-flex py-5 row m-md-0 m-0 p-0">
                        <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-start">
                          <h3>Your 'Complete' WhatsApp Marketing Platform</h3>
                          <p className="my-3">
                            Everything you need to notify, chat & engage
                            customers - All in one place
                          </p>
                          <ul>
                            <li className="d-flex align-items-center mb-2">
                              <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                    fill="#448AFF"
                                  ></path>
                                </svg>
                              </small>
                              <p>
                                Broadcast promotional offers to unlimited users
                              </p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                    fill="#448AFF"
                                  ></path>
                                </svg>
                              </small>
                              <p>
                                Sync Facebook & Instagram Ads lead to WhatsApp
                              </p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <div className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                    fill="#448AFF"
                                  ></path>
                                </svg>
                              </div>
                              <p>Sell your products online using catalogs</p>
                            </li>
                            <li className="d-flex align-items-center">
                              <div className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                    fill="#448AFF"
                                  ></path>
                                </svg>
                              </div>
                              <p>
                                Automate notifications for abandoned carts,
                                application drop-offs, order confirmations, and
                                more.
                              </p>
                            </li>
                           
                          </ul>
                          <a
                              className="mt-2 internalpage_link ps-md-4"
                              href="whatsapp-marketing"
                            >
                              Explore WhatsApp Marketing{" "}
                              <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                          <img
                            src={whatsappMarketing}
                            className="img-fluid my-auto"
                            alt="whatsapp-marketing"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-proj2"
                    role="tabpanel"
                    aria-labelledby="pills-proj2-tab"
                  >
                    <div className="industry-2">
                      <div className="swiper-slide">
                        <div className="project-card style-7 d-inline-flex py-5 row m-md-0  m-0 p-0">
                          <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-start ">
                            <h3>Engage Customers 24x7 via Smart Chatbot</h3>
                            <p className="my-3">
                              Whether you're solving customer queries or leading
                              your team, we have the right tools for you.
                            </p>
                            <ul>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Enable multiple team members to handle Live
                                  Chat Support on one WhatsApp Business Number!
                                </p>
                              </li>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Build Chatbots & Solve for 24 x 7 Support &
                                  Engagement
                                </p>
                              </li>
                             </ul>
                            <a
                                className="mt-2 internalpage_link ps-md-4"
                                href="whatsapp-support"
                              >
                                Explore WhatsApp Support{" "}
                                <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                            <img
                              src={whatsappSupport}
                              className="img-fluid my-auto"
                              alt="whatsapp_support"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-proj3"
                    role="tabpanel"
                    aria-labelledby="pills-proj3-tab"
                  >
                    <div className="industry-3">
                      <div className="swiper-slide">
                        <div className="project-card style-7 d-inline-flex py-5 row m-md-0 m-0 p-0 ">
                          <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-start">
                            <h3>5X Your Sales - Start selling on WhatsApp!</h3>
                            <p className="my-3">
                              customers easily find, check out, and buy your
                              products or services on the go.
                            </p>
                            <ul>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Sell products Online with WhatsApp Catalogs
                                  and cart.
                                </p>
                              </li>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Effortlessly share product catalogs through
                                  automated notifications.
                                </p>
                              </li>
                            </ul>
                            

                            <a
                                className="mt-2 internalpage_link ps-md-4"
                                href="whatsapp-commerce"
                              >
                                Explore WhatsApp Commerce{" "}
                                <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                            <img
                              src={whatsappCommerce}
                              className="img-fluid my-auto"
                              alt="whatsapp_commerce"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-proj4"
                    role="tabpanel"
                    aria-labelledby="pills-proj4-tab"
                  >
                    <div className="industry-4">
                      <div className="swiper-slide">
                        <div className="project-card style-7 d-inline-flex py-5 row m-md-0  m-0 p-0">
                          <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-start">
                            <h3>
                              Boost Security with WhatsApp's Easy
                              Authentication.
                            </h3>
                            <p className="my-3">
                              Verify user identity at every login step using
                              OTPs, including registration, recovery, and
                              integrity validation.
                            </p>
                            <ul>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Users can easily request a password reset and
                                  receive an OTP on WhatsApp.
                                </p>
                              </li>
                              <li className="d-flex align-items-center mb-2">
                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z"
                                      fill="#448AFF"
                                    ></path>
                                  </svg>
                                </small>
                                <p>
                                  Provide a convenient and secure verification
                                  process.
                                </p>
                              </li>
                            </ul>
                              <a
                                className="mt-2 internalpage_link ps-md-4"
                                href="/whatsapp-authentication"
                              >
                                Explore WhatsApp Authentication{" "}
                                <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                            <img
                              src={whatsappAuthentication}
                              className="img-fluid my-auto"
                              alt="whatsapp_marketing"
                            />
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
    </div>
  );
};

export default AutomatedChats;
