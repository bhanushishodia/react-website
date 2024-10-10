import React from 'react';
import { Helmet } from 'react-helmet';
import AffiliateForm from '../forms/AffiliateForm'; // Adjust the path as needed
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const PartnerImage = getImage('partner/Become-an-Anantya.webp'); 
const PrioritySupport = getImage('partner/Priority-support.png');
const SuccessTraining = getImage('partner/success-training.png');
const CustomPricing = getImage('partner/custom-pricing.png');   
const growingMarketImage = getImage('partner/enter-the-growing-market.webp');
const solutionProvidersImg = getImage('partner/solution-providers.png');
const digitalAgencyImg = getImage('partner/digital-agency.png');
const softwareResellerImg = getImage('partner/software-reseller.png');
const dashboardImage = getImage('partner/gain-a-new-revenue-stream.webp'); 
const partnerImage = getImage('partner/partner-cta.webp');

const WhiteLabelPartner = () => {
  return (
   <>
 <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/white-lable-partner" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/white-lable-partner" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/white-lable-partner" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/white-lable-partner" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/white-lable-partner" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/white-lable-partner" />

        <title>Whatsapp API White Lable Partner | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="WhatsApp Business API provider. Become Anantya's whitelabel whatsapp api reseller to get whitelabel API, and platform with your brand and logo." />
        <meta name="keywords" content="white lable whatsapp api, whatsapp api white lable, whatsapp business api, reseller" />
        
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:title" content="Whatsapp API White Lable Partner | Anantya.ai" />
        <meta property="og:description" content="WhatsApp Business API provider. Become Anantya's whitelabel whatsapp api reseller to get whitelabel API, and platform with your brand and logo." />
        <meta property="og:url" content="https://anantya.ai/white-lable-partner" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/partner/Become-an-Anantya.webp" />
        <link rel="canonical" href="https://anantya.ai/white-lable-partner" />
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
              "areaServed": ["AE","SA","BH"],
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
            "url": "https://anantya.ai/white-lable-partner",
            "name": "Whatsapp API White Lable Partner | Anantya.ai"
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
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
                "name": "White Lable Partner",
                "item": "https://anantya.ai/white-lable-partner"
              }
            ]
          }
          `}
        </script>
      </Helmet>
       <div className="container py-4 mt-md-0 mt-4">
        <div className="row py-5">
          <div className="col-md-6 col-sm-12 my-auto info text-lg-start text-center">
            <span style={{ letterSpacing: '.2rem', paddingLeft: '0.5rem', color: '#4a4a56' }}>
              Whitelabel Partner
            </span>
            <h1 className="partner_heading pt-2">
              Become an Anantya.ai
              <span> WhiteLabel Partner</span>
            </h1>
            <p className="mt-30 mb-30">
              Get Access to WhatsApp APIs, build your own solution & win <br /> it big in the market.
            </p>
            <a href="contact" className="button_partner my-3 btn me-2 bg-green text-white btn-color">
              Apply Now
            </a>
          </div>
          <div className="col-md-6 col-sm-12 px-md-5 px-4">
            <img src={PartnerImage} className="img-fluid" alt="dashboard" />
          </div>
        </div>
      </div>
      <section className="py-5 my-5" style={{ backgroundColor: '#f3fbff' }}>
      <div className="text-center section_title py-4 px-md-0 px-3">
        <h2>
          WhiteLabel Partner <span>Benefits</span>
        </h2>
        <p>
          Give your customers the best they deserve. Provide an exceptional customer experience using our <br />
          affordable WhatsApp Engagement Platform
        </p>
      </div>
      <div className="container px-md-5 px-4 text-start">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-md-2 py-0 px-md-0 px-3">
          <div className="col">
            <div className="white_label_Card h-100">
              <img src={PrioritySupport} className="img-fluid" alt="Priority Support" />
              <h5 className="usp-subheading-2 py-2">Priority Support</h5>
              <p>
                Skip the support line with a dedicated Success Manager to answer all your inquiries & improve your processes.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="white_label_Card h-100">
              <img src={SuccessTraining} className="img-fluid" alt="Success Training" />
              <h5 className="usp-subheading-2 py-2">Success Training</h5>
              <p>
                We'll pass down the FAQs and best practices generated from our own sales and success teams to yours.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="white_label_Card h-100">
              <img src={CustomPricing} className="img-fluid" alt="Custom Pricing" />
              <h5 className="usp-subheading-2 py-2">Custom Pricing</h5>
              <p>
                Add your own margins on subscription plans and WhatsApp conversation charges, our charges remain fixed at
                the minimum.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="about style-4">
      <div className="content sec-content">
        <div className="container">
          <div className="section-head style-4 text-center">
            <h2 className="mb-20">
              <span> Enter The Growing Market Of </span> <br />
              <span> WhatsApp Chatbots </span>
            </h2>
            <p>Get Access to WhatsApp APIs, build your own solution & win it big in the market.</p>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-2 order-lg-0">
              <div className="info">
                <div className="faq style-3 style-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          Your logo, your domain
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Add your own logo and domain to the platform.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          Your team
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Use your own team or rent ours for customer support and sales.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Your custom prices
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Since you understand your customers best, set a price that benefits both parties.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Your terms and conditions
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Design your own terms for engaging with your customers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="img mb-30 mb-lg-0">
                <img src={growingMarketImage} className="img-fluid" alt="why-choose-us-as-your-partner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className="container text-center py-5 px-md-0 px-3">
      <div className="section_title">
        <h2>
          Are You a <span>Good Match?</span>
        </h2>
        <p>
          The WhiteLabel Partner Program is designed in mind for businesses that want to enter the growing market
          <br />
          of WhatsApp and expand their services. You'd be a good match if the nature of your business is any of the following:
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 py-3 px-md-0 px-3">
        <div className="col my-2">
          <div className="solution-cards pt-4 h-100">
            <img src={solutionProvidersImg} className="img-fluid" alt="solution-providers" />
            <div className="card-body px-md-4 px-3">
              <h5 className="card-title">Solutions Provider</h5>
              <p className="card-text text-center">
                Provides consulting and tech implementation for businesses such as CRMs, IT solutions, or system integrations.
              </p>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div className="solution-cards pt-4 h-100">
            <img src={digitalAgencyImg} className="img-fluid" alt="digital-agency" />
            <div className="card-body px-md-4 px-3">
              <h5 className="card-title">Digital Agency</h5>
              <p className="card-text text-center">
                Provides consulting on business, technology, sales, marketing, or customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div className="solution-cards pt-4 h-100">
            <img src={softwareResellerImg} className="img-fluid" alt="software-reseller" />
            <div className="card-body px-md-4 px-3">
              <h5 className="card-title">Software Reseller</h5>
              <p className="card-text text-center">
                Provides a cost-effective and scalable solution for smaller businesses that meet varying business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <section>
      <div className="container py-4">
        <div className="section_title text-center">
          <h2> What Do You <span> Get? </span> </h2>
        </div>
        <div className="row text-left">
          <div className="col-md-7 col-sm-12">
            <img src={dashboardImage} className="img-fluid" alt="dashboard" />
          </div>
          <div className="col-md-5 col-sm-12 text-left my-auto px-3 pt-md-0 pt-4">
            <div className="titles">
              <h5 className="card-title">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5dc4eb" className="bi bi-buildings" viewBox="0 0 16 16">
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"></path>
                    <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"></path>
                  </svg>
                </span>&nbsp;&nbsp; Freedom to use & sell at your own terms
              </h5>
              <p>Your product, your terms, your brand, your logo, your prices.</p>
            </div>
            <div className="titles">
              <h5 className="card-title">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5dc4eb" className="bi bi-tools" viewBox="0 0 16 16">
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"></path>
                  </svg>
                </span>&nbsp;&nbsp; Expert tech team assistance
              </h5>
              <p>Our team’s got your back. Get expert team assistance on demand.</p>
            </div>
            <div className="titles">
              <h5 className="card-title">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5dc4eb" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286ZM8 6.5A1.5 1.5 0 1 0 6.5 8 1.5 1.5 0 0 0 8 6.5Z"></path>
                  </svg>
                </span>&nbsp;&nbsp; Full customer support
              </h5>
              <p>Complete customer support to make sure your needs are fully met.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="cta-partner text-black mx-md-0 mx-3">
        <div className="row my-auto py-md-0 px-md-0 px-0 mx-md-0 mx-0 text-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-capitalize my-auto"
            style={{ backgroundColor: '#f3fbff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
          >
            <h2 className="font-weight-bold px-md-5 px-3 py-5 text-center">
            Become a Partner <br/>Today
            </h2>
            
            <img src={partnerImage} className="img-fluid w-75" alt="cta-img" />
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

export default WhiteLabelPartner;
