// src/views/WhatsAppCommercePage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import WhatsAppWidget from '../components/common/WhatsAppWidget';
import pdfFile from '../assets/pdf/Usecase-WhatsApp-Commerce.pdf';
import CountUp from 'react-countup';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import { getImage } from '../utils/getImage'; // Adjust the path as needed
// Fetching images dynamically using the getImage function
const commerceImage = getImage('set-up-your-online-store-on-whatsapp.webp'); // Adjust path as needed
const sellImage = getImage('sell-your-products-online-with-catalog.webp'); // Adjust path as needed
const automatedImage = getImage('create-automated-checkout-workflows.webp'); // Adjust path as needed
const downloadEbookImage = getImage('download-ebook.png'); // Adjust path as needed
const whatsappImage = getImage('cta/whatsapp-commerce.webp'); // Ensure the path is correct
const shareCatalogsImage = getImage('share-catalogs-as-part-of-campaigns.webp'); // Adjust the path as needed

const WhatsAppCommercePage = () => {
  

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
      <title>WhatsApp Commerce | Anantya.ai</title>
      <meta
        name="keywords"
        content="Whatsapp Commerce,Whatsapp Commerce Platform,Whatsapp Commerce API"
      />
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Use WhatsApp Commerce to directly sell your products and services, boost sales, improve conversion rates, and streamline customer service operations."
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="WhatsApp Commerce | Anantya.ai" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Use WhatsApp Commerce to directly sell your products and services, boost sales, improve conversion rates, and streamline customer service operations."
      />
      <meta property="og:url" content="https://anantya.ai/whatsapp-commerce" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta
        property="og:image"
        content="https://anantya.ai/assets/img/whatsapp-commerce/set-up-your-online-store-on-whatsapp.webp"
      />

      {/* Canonical Link */}
      <link rel="canonical" href="https://anantya.ai/whatsapp-commerce" />

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
            "url": "https://anantya.ai/whatsapp-commerce",
            "name": "WhatsApp Commerce | Anantya.ai"
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
                "name": "WhatsApp Commerce | Anantya.ai",
                "item": "https://anantya.ai/whatsapp-commerce"
              }
            ]
          }
        `}
      </script>
    </Helmet>
    <div className="whatsapp-commerce-page">
      <section>
      <div className="container mt-5 py-5">
      <div className="content ">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20 text-md-start text-center">
            <div className=" text-black "> 
              <h1 className='heading'>
                WhatsApp Commerce: Set up your online store
              </h1>
              <p className="mt-30 text-black pe-md-5">
                Generate Leads, Qualify, Drive Discovery, Share Catalogs,
                Enable Shopping, Collect Payments, Upsell/Cross-Sell, and Boost Revenue.
              </p>
              <p className="text-black pe-md-5">
                Apply now for FREE access to WhatsApp Business API with Anantya.ai 👇
              </p>
              <div className="btns mt-40">
              <button
                  className="btn login_button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Start your 7-Day FREE Trial
                </button>
                 
             
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="wow zoomIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}>
              <img
                src={commerceImage}
                className="img-fluid"
                alt="Set up your online store on WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      <section className="numbers py-5 ">
      <div className="container">
        <div className="content pb-100 brd-gray">
          <div className="row">
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp end={50} duration={2} suffix="%" />
                </h2>
                <div className="text">
                  Time saved with AI & easy automation
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp end={3} duration={2} suffix="X" />
                </h2>
                <div className="text">
                  Higher conversions with interactive messages
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6 border-0">
                <h2 className="me-4 color-blue5">
                  <CountUp end={30} duration={2} suffix="%" />
                </h2>
                <div className="text">
                  Increase in customer retention rates
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
          <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
            <h2>
              <span>Sell Products Online</span> with WhatsApp Catalog
            </h2>
            <br />
            <p className="text-justify">
              Increase your orders by tenfold with our Catalogs & Cart feature, easily set up in minutes.
            </p>
            <br />
            <p className="text-justify">
              Introducing the user-friendly Flow Builder, allowing you to create and send single or multi-product messages seamlessly on WhatsApp.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={sellImage}
              className="img-fluid"
              alt="sell-your-products-online-with-catalog"
            />
          </div>
        </div>
      </div>
     </section>
    
  {/* Workflows */}
  <section>
    <div className="container py-5">
      <div className="row ">
        <div className="col-md-6 col-sm-12 my-auto px-5">
          <img
            src={automatedImage}
            className="img-fluid"
            alt="create-automated-checkout-workflows"
          />
        </div>
        <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-md-start text-center">
          <h2>
            Create Automated Checkout<span> Workflows</span>{" "}
          </h2>
          <br />
          <p className="text-justify">
            Make shopping effortless for your customers by automating the
            process of answering frequently asked questions.{" "}
          </p>
          <br />
          <p className="text-justify">
            With instant responses to common inquiries, customers can find the
            information they need without having to contact a live agent.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Workflows */}

      <DownloadEbookSection
        title="Discover a more effective marketing strategy to enhance your business."
        description="Download our Exclusive eBook for In-Depth Insights!"
        imageSrc={downloadEbookImage} // Use the correct path for the second ebook image
        imageAlt="another-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal2"
      />
      <div className="modal fade" id="myModal2" tabIndex="-1" aria-labelledby="myModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel2">Download Ebook</h5>
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
      <div className="container">
      <a href="https://wa.link/niznkn" target="_blank" rel="noopener noreferrer">
        <img
          src={whatsappImage}
          className="img-fluid"
          alt="Call to action on the home page"
        />
      </a>
      </div>
      <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
            <h2>
              Share Catalogs as Part of <span>Campaigns</span>
            </h2>
            <br />
            <p className="text-justify">
              You can send product/service catalogs as part of ongoing and one-time campaigns on WhatsApp.
            </p>
            <br />
            <p className="text-justify">
              With the catalogs available in the inbox section, your sales team can create and send personalized catalogs, providing customers with a comprehensive assisted selling experience!
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={shareCatalogsImage}
              className="img-fluid"
              alt="share-catalogs-as-part-of-campaigns"
            />
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

export default WhatsAppCommercePage;
