// src/views/WhatsAppCommercePage.js
import React from 'react';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import WhatsAppWidget from '../components/common/WhatsAppWidget';
// Import images or other assets if needed
import commerceImage from '../assets/images/set-up-your-online-store-on-whatsapp.webp'; // Adjust path as needed
import sellImage from '../assets/images/sell-your-products-online-with-catalog.webp'; // Adjust path as needed
import automatedImage from '../assets/images/create-automated-checkout-workflows.webp'; // Adjust path as needed
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from '../assets/images/download-ebook.png'; // Adjust path as needed
import whatsappImage from '../assets/images/cta/whatsapp-commerce.webp'; // Ensure the path is correct
import shareCatalogsImage from '../assets/images/share-catalogs-as-part-of-campaigns.webp'; // Adjust the path as needed

import CountUp from 'react-countup';
const WhatsAppCommercePage = () => {
  return (
    <div className="whatsapp-commerce-page">
      <section>
      <div className="container">
      <div className="content py-md-5 py-0">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20 text-md-start text-center">
            <div className="info text-black">
              <h1 className='heading'>
                WhatsApp Commerce:<br /> Set up your online store
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
          <div className="col-lg-6">
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
  );
};

export default WhatsAppCommercePage;
