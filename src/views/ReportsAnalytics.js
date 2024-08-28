// src/views/ReportsAnalytics.js
import React from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import actionableAnalyticsImage from "../assets/images/actionable-analytics-for-unparalleled.webp";
import chatbotReportImg from '../assets/images/icons/chatbot-report.png';
import messagesStatisticImg from '../assets/images/icons/messages-statistic.png';
import labelReportImg from '../assets/images/icons/label-report.png';
import understandUserBehaviourImg from '../assets/images/understand-user-behaviour.webp';
import enhanceBusinessSuccessImg from '../assets/images/enhance-business-success.webp';
import whatsappImg from '../assets/images/wa.link_3dzezc.png';

const ReportsAnalytics = () => {
  return (
    <div>
      <div className="container">
        <div className="content py-md-5 py-0">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
              <div className="info text-black pe-md-2">
                <h1>
                  <span>Actionable WhatsApp</span> Analytics for Unparalleled
                  Success
                </h1>
                <p className="mt-20 text-black pe-md-5">
                  Discover how your users engage with your Intelligent Virtual
                  Assistant and gain valuable insights to enhance your key ROI
                  metrics and improve customer experience.
                </p>
                <div className="btns mt-40">
                  <a
                    href="book-a-demo"
                    className="btn login_button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Free 7 Day Trial
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
                  src={actionableAnalyticsImage}
                  className="img-fluid"
                  alt="reports-and-analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="process style-12" style={{ background: '#fff' }}>
      <div className="container">
        <div className="content py-5  text-center">
          
            <h2 className="pb-4">
              <span>Track, Analyze, and Optimise <br /></span>
              User Interactions
            </h2>
          
          <div className="content">
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 px-md-0 px-3">
              <div className="col">
                <a href="contact.html" className="features-card style-5 box-1 h-100">
                  <div className="icon">
                    <img src={chatbotReportImg} alt="24-7" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Chatbot Report</h5>
                    <p className="text">
                      Evaluate the performance of your chatbot with the Chatbot Efficiency Report.
                      Analyze metrics such as response time, user satisfaction ratings, and resolution rates.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact.html" className="features-card style-5 box-2 h-100">
                  <div className="icon">
                    <img src={messagesStatisticImg} alt="services" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Messages Statistic</h5>
                    <p className="text">
                      Gain visibility into the number of messages sent and received with the Sent/Received Messages Statistic feature.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact.html" className="features-card style-5 box-3 h-100">
                  <div className="icon">
                    <img src={labelReportImg} alt="cyber-security" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Label Report</h5>
                    <p className="text">
                      Effortlessly organize and categorize your chatbot data with our Label Report feature. Gain insights into how different labels are used and optimize your workflows.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img src={understandUserBehaviourImg} className="img-fluid" alt="understand-user-behaviour" />
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              Understand <span>User Behaviour</span> and Optimise Business Strategies
            </h2>
            <br />
            <p className="text-justify">
              Understand user behavior, preferences, and trends to enhance customer experiences.
            </p>
           
            <p className="text-justify">
              Easily sort and categorize information to stay organized and find what you need quickly.
            </p>

            <p className="text-justify">
              Understand what your customers like, address their concerns, and make informed decisions based on their feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              Enhance Business Success
              with <span>Actionable Reports</span>
            </h2>
    
            <p className="text-justify">
              Detailed reports on new and existing opt-ins provide insights into user preferences.
            </p>
    
            <p className="text-justify">
              Use this data to refine your marketing strategies and target the right audience effectively.
            </p>
           
            <p className="text-justify">
              Monitor and understand how users interact with your campaigns. Analyze user behavior, identify patterns, and optimize their experience.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img src={enhanceBusinessSuccessImg} className="img-fluid" alt="enhance-business-success" />
          </div>
        </div>
      </div>
    </section>
    <section className="clients style-5 pb-20" style={{ backgroundColor: '#f3fbff' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
          <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
            <div className="row row-cols-1 row-cols-md-2 g-4 py-md-0 py-5 px-md-0 px-3">
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor"></path>
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Experience a personalized demo with us
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor"></path>
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Discover why 10,000+ businesses choose us
                      </div>
                    </li>
                  </ul>
                  <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer" className="btn bg-green text-white btn-color text-center mt-10">
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
                      <img src={whatsappImg} className="img-fluid w-50 mx-auto" alt="whatsapp-scaner-img" />
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
              Register for our Live Demo today and discover why Anantya.ai is the right choice for your business and get answers to all your WhatsApp-related questions.
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

export default ReportsAnalytics;
