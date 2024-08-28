// src/views/WhatsAppAuthentication.js
import React from 'react';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import securityImage from '../assets/images/double-up-on-security.webp';
import CountUp from 'react-countup';
import secureMessagingImage from '../assets/images/secure-messaging-with-dedicated.webp';
import enhancedCustomerExperienceImg from '../assets/images/enhanced-customer-experience.webp';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from "../assets/images/download-ebook.png"; // Adjust path as needed
import improveSecurityImg from '../assets/images/improve-security-with-whatsapp-otp.webp';

const WhatsAppAuthentication = () => {
  return (
    <div>
       <div className="container">
      <div className="content py-md-5 py-0">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
            <div className="info text-black pe-md-5">
              {/* <small className="mb-20 title_small">whatsapp-marketing</small> */}
              <h1>Double up Business Security with WhatsApp OTP</h1>
              <p className="mt-20 text-black pe-md-5">
                Boost security with WhatsApp's easy authentication. Verify user identity at every login step using OTPs, including registration, recovery, and integrity validation.
              </p>
              <div className="btns mt-30">
                <a href="contact" className="btn login_button">
                  Talk to an expert
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="wow zoomIn"
              data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}
            >
              <img
                src={securityImage}
                className="img-fluid"
                alt="double-up-on-security"
              />
            </div>
          </div>
        </div>
      </div>
       </div>
       <section className="numbers py-5">
      <div className="container pb-5">
        <div className="content pb-100 brd-gray">
          <div className="row">
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp end={85} duration={2} suffix="%" />
                </h2>
                <div className="text">
                Decrease in security breaches
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp end={5} duration={2} suffix="X" />
                </h2>
                <div className="text">
                Faster account recovery <br/> process
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6 border-0">
                <h2 className="me-4 color-blue5">
                  <CountUp end={45} duration={2} suffix="%" />
                </h2>
                <div className="text">
                Increase in user trust & retention rates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              <span>Secure Messaging</span> with Dedicated Numbers
            </h2>
            <br />
            <p className="text-justify">
              Build trust with customers by sending OTP messages on WhatsApp using your dedicated number.
            </p>
            <br />
            <p className="text-justify">
              Enable easy two-way communication for OTP messages. Customers can verify seamlessly, enhancing their overall experience.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={secureMessagingImage}
              className="img-fluid"
              alt="secure-messaging-with-dedicated"
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
                            src={enhancedCustomerExperienceImg} 
                            className="img-fluid" 
                            alt="Enhanced Customer Experience" 
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 px-5 text-lg-start text-center">
                        <h2>Enhanced <span>Customer Experience</span></h2>
                        <br />
                        <p className="text-justify">
                            WhatsApp OTP eliminates the need for customers to switch apps for OTPs, providing a seamless verification process within their preferred messaging app.
                        </p>
                        <br />
                        <p className="text-justify">
                            Customers save time by receiving and verifying OTPs without the hassle of navigating between different apps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <DownloadEbookSection
        title="Discover a more effective marketing strategy to enhance your business."
        description="Download our Exclusive eBook for In-Depth Insights!"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal3"
      />
      <div className="modal fade" id="myModal3" tabIndex="-1" aria-labelledby="myModalLabel3" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel3">Download Ebook</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Your modal content for the second ebook */}
            </div>
          </div>
        </div>
      </div>
      <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
                        <h2>
                            Improved Security with <span>WhatsApp OTP</span>
                        </h2>
                        <br />
                        <p className="text-justify">
                            Utilize WhatsApp OTP for robust security against hacking and fraud. Encrypted OTPs offer enhanced defense compared to traditional SMS OTPs.
                        </p>
                        <br />
                        <p className="text-justify">
                            Implement seamless login with WhatsApp OTP, providing customers with a convenient and secure authentication process.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 my-auto px-5">
                        <img 
                            src={improveSecurityImg} 
                            className="img-fluid" 
                            alt="Improve Security with WhatsApp OTP" 
                        />
                    </div>
                </div>
            </div>
        </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default WhatsAppAuthentication;
