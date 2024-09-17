import React from "react";
import AffiliateForm from '../forms/AffiliateForm'; // Adjust the path as needed
import partnerImage from "../assets/images/solution-partner-home-page.webp"; // Adjust the path as needed
import dedicatedManagerImg from "../assets/images/icons/dedicated-manager.png";
import productAndSalesImg from "../assets/images/icons/product-and-sales.png";
import coMarketingImg from "../assets/images/icons/co-marketing.png";
import customPricingImg from "../assets/images/icons/custom-pricing.png";
import whatWeHandleImg from "../assets/images/what-we-handle-for-you.webp";
import marketingAgenciesImg from "../assets/images/icons/marketing-agencies.png";
import solutionProvidersImg from "../assets/images/icons/solution-providers.png";
import consultantsFreelancersImg from "../assets/images/icons/consultants-&-freelancers.png";
import allYouNeedImage from "../assets/images/all-You-need-to-do.webp"; // Adjust the import path as needed
import ctaImg from '../assets/images/partner-cta.webp'; // Adjust the path as necessary
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const SolutionPartner = () => {
  return (
    <>
      <section>
        <div className="container py-md-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-auto text-md-start text-center">
              <span
                style={{
                  letterSpacing: ".2rem",
                  paddingLeft: "0.5rem",
                  color: "#4a4a56",
                }}
              >
                Solution Partner
              </span>
              <h1 className="partner_heading pt-4">
                Boost Your Revenue and Expand Business with our
                <span>Reseller Program</span>
              </h1>
              <p className="mt-30">
                Partner with Anantya.ai and increase the business value you
                bring to your customers.
              </p>

              <a
                href="contact.html"
                className="button_partner my-3 btn me-2 bg-green text-white btn-color"
              >
                Become a Solution Partner
              </a>
            </div>
            <div className="col-md-6 col-sm-12 px-md-5 px-4 my-auto">
              <img src={partnerImage} className="img-fluid" alt="dashboard" />
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#f3fbff" }}>
        <div className="container text-center py-5 px-md-0 px-3">
          <div className="section_title">
            <h2>
              Why join the Anantya.ai{" "}
              <span>
                <br />
                Partner Program?
              </span>
            </h2>
            <p>
              Get the smartest WhatsApp engagement platform, enjoy priority
              support, and earn generous <br /> rewards structured to accelerate
              your growth.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4 py-3 px-md-0 px-3">
            <div className="col my-2">
              <div className="solution-cards pt-4 h-100">
                <img
                  src={dedicatedManagerImg}
                  className="img-fluid"
                  alt="dedicated-manager"
                />
                <div className="card-body px-md-4 px-3">
                  <h5 className="card-title">Dedicated Manager</h5>
                  <p className="card-text text-center">
                    Get direct support from a dedicated partner manager to make
                    your onboarding process smooth and easy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div className="solution-cards pt-4 h-100">
                <img
                  src={productAndSalesImg}
                  className="img-fluid"
                  alt="product-and-sales"
                />
                <div className="card-body px-md-4 px-3">
                  <h5 className="card-title">Product and Sales Training</h5>
                  <p className="card-text text-center">
                    Gain special access to the partner hub, allowing your team
                    to participate in product and sales training.
                  </p>
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div className="solution-cards pt-4 h-100">
                <img
                  src={coMarketingImg}
                  className="img-fluid"
                  alt="co-marketing"
                />
                <div className="card-body px-md-4 px-3">
                  <h5 className="card-title">Co-marketing Opportunities</h5>
                  <p className="card-text text-center">
                    Explore collaborative marketing ventures to boost your brand
                    presence and reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div className="solution-cards pt-4 h-100">
                <img
                  src={customPricingImg}
                  className="img-fluid"
                  alt="custom-pricing"
                />
                <div className="card-body px-md-4 px-3">
                  <h5 className="card-title">Custom Pricing</h5>
                  <p className="card-text text-center">
                    Add your own margins on subscription plans and WhatsApp
                    conversation charges, our charges remain fixed at the
                    minimum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-md-0 px-4">
        <div className="row pt-5">
          <div className="col-md-6 col-lg-6 col-sm-12 my-auto text-md-start text-center">
            <h2>What We Handle for You</h2>
            <p className="py-3">
              Becoming a WhatsApp API reseller has never been easier. We'll help
              you convert leads, conduct demos, and manage training sessions,
              allowing you to relax while we take care of it all.
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
                    />
                  </svg>
                </small>
                <p>
                  Offering training sessions, priority support, and access to
                  our expert team
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
                    />
                  </svg>
                </small>
                <p>
                  Providing exclusive access to our development team to meet
                  your client's evolving needs
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
                    />
                  </svg>
                </small>
                <p>Regularly introducing new features</p>
              </li>
              <li className="d-flex align-items-center">
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
                    />
                  </svg>
                </small>
                <p>
                  Maintaining a consistent fee for the agreed contractual period
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto pt-md-0 pt-3">
            <img
              src={whatWeHandleImg}
              className="img-fluid"
              alt="What We Handle"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="container text-center py-5 px-md-0 px-4">
          <div className="section_title">
            <h2>
              Who can <span>join?</span>
            </h2>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 py-md-5 py-0 text-center">
            <div className="col">
              <div className="solution-cards h-100 p-4">
                <img
                  src={marketingAgenciesImg}
                  className="img-fluid"
                  alt="Marketing Agencies"
                />
                <h5 className="pt-2">Marketing Agencies:</h5>
                <p>
                  Companies focusing on digital marketing, can promote
                  Anantya.ai and earn revenue by upselling the platform.
                </p>
              </div>
            </div>

            <div className="col ">
              <div className="solution-cards h-100 p-4">
                <img
                  src={solutionProvidersImg}
                  className="img-fluid"
                  alt="Solution Providers"
                />
                <h5 className="pt-2">Solution Providers:</h5>
                <p>
                  Businesses already offering various solutions or services,
                  aiming to upsell and cross-sell chatbot solutions alongside
                  their existing offerings.
                </p>
              </div>
            </div>

            <div className="col ">
              <div className="solution-cards p-4 h-100">
                <img
                  src={consultantsFreelancersImg}
                  className="img-fluid"
                  alt="Consultants & Freelancers"
                />
                <h5 className="pt-2">Consultants & Freelancers:</h5>
                <p>
                  Independent professionals who have a network to which they can
                  sell WhatsApp Engagement platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-md-0 px-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto pt-md-0 pt-3">
              <img
                src={allYouNeedImage}
                className="img-fluid"
                alt="all-You-need-to-do"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 my-auto text-md-start text-center">
              <h2>All You Need to Do</h2>
              <p className="py-3">
                Whether you want to upsell Anantya.ai or include it in a bundled
                offering for your clients, the decision is yours. Enjoy the
                perks of being an Anantya.ai Partner.
              </p>
              <ul>
                {[
                  "Introduce Anantya.ai to new customers and markets",
                  "Offer Anantya.ai exclusively or as part of a bundled deal to your clients",
                  "Provide excellent support to your clients using Anantya.ai",
                  "Resell Anantya.ai as part of your portfolio",
                  "Upsell the product to your existing customers",
                ].map((text, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
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
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-5">
      <div className="cta-partner text-black mx-md-0 mx-3">
        <div className="row my-auto py-md-0 px-md-0 px-0 mx-md-0 mx-0 text-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-capitalize my-auto"
            style={{ backgroundColor: '#f3fbff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
          >
            <h2 className="font-weight-bold px-md-5 px-3 pt-5 text-center">
            Become An Affiliate
            Partner Today!
            </h2>
            <span class="u-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                                <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path>
                            </svg> &nbsp;Earn 50% Commission on your first sale.</span>
            <img src={ctaImg} className="img-fluid w-75" alt="cta-img" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-capitalize partner_forms my-auto px-md-5 px-4 text-left">
          <AffiliateForm />
          </div>
        </div>
        
      </div>
      </section>
      <ScrollToTopButton /> 
      <WhatsAppWidget />
    </>
  );
};

export default SolutionPartner;
