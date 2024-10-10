// src/views/WhatsAppAuthentication.js
import React from 'react';
import { Helmet } from 'react-helmet';
import pdfFile from '../assets/pdf/Usecase-WhatsApp-Authentication.pdf';
import CountUp from 'react-countup';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const securityImage = getImage('double-up-on-security.webp');
const secureMessagingImage = getImage('secure-messaging-with-dedicated.webp');
const enhancedCustomerExperienceImg = getImage('enhanced-customer-experience.webp');
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const improveSecurityImg = getImage('improve-security-with-whatsapp-otp.webp');


const WhatsAppAuthentication = () => {
const submitFormAndOpenPDF = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform form submission (assuming you have a form with the id 'marketing')
    document.getElementById("marketing").submit();

    // Open PDF in a new tab	
      	
  window.open(pdfFile, "_blank");
  };
  return (
    <div>
       <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/whatsapp-authentication" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/whatsapp-authentication" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/whatsapp-authentication" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/whatsapp-authentication" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/whatsapp-authentication" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/whatsapp-authentication" />

        <title>WhatsApp OTP Verification | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="WhatsApp OTP Verification | Anantya.ai" />
        <meta name="description" content="Secure your account & transaction with Anantya.ai's WhatsApp OTP Verification. Fast, reliable, & easy to implement. Ensure user authenticity with every interaction." />
        <meta name="keywords" content="Whatsapp OTP,Whatsapp OTP Verification API,Whatsapp OTP verification,whatsapp otp api" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="WhatsApp OTP Verification | Anantya.ai" />
        <meta property="og:description" content="Secure your account & transaction with Anantya.ai's WhatsApp OTP Verification. Fast, reliable, & easy to implement. Ensure user authenticity with every interaction." />
        <meta property="og:url" content="https://anantya.ai/whatsapp-authentication" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/double-up-on-security.webp" />
        <link rel="canonical" href="https://anantya.ai/whatsapp-authentication" />
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
            "url": "https://anantya.ai/whatsapp-authentication",
            "name": "WhatsApp OTP Verification | Anantya.ai"
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
                "name": "Homepage",
                "item": "https://anantya.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "WhatsApp OTP Verification",
                "item": "https://anantya.ai/whatsapp-authentication"
              }
            ]
          }
          `}
        </script>
      </Helmet>

       <div className="container mt-5  py-5">
      <div className="content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20 text-lg-start text-center">
            <div className=" text-black pe-md-5">
              {/* <small className="mb-20 title_small">whatsapp-marketing</small> */}
              <h1 className='heading'>Double up Business Security with WhatsApp OTP</h1>
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
