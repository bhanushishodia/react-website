// src/views/Catalog.js
import React from 'react';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { Helmet } from 'react-helmet';
import { getImage } from '../utils/getImage'; // Adjust the path to your utility
// Fetching images dynamically using the getImage function
const catalogImage = getImage('showcase-your-products-using-whatsapp-catalog.webp');
const increasedReachIcon = getImage('increased-reach.png');
const realTimeUpdatesIcon = getImage('real-time-updates.png');
const easyShoppingIcon = getImage('easy-shopping.png');
const connectWithAudienceImg = getImage('connect-with-a-wider-audience-on-whatsapp.webp');
const whatsappCatalogImg = getImage('whatsapp-catalog.webp');
const simplifyShoppingImg = getImage('Simplify-shopping-with-whatsapp.webp');
const whatsappImg = getImage('wa.link_3dzezc.png');

const Catalog = () => {
  return (
    <div>
       <Helmet>
      <title>Whatsapp Catalog | Increase Engagement and Boost Sales</title>
      <meta name="keywords" content="Whatsapp Catalog, Whatsapp Business Catalog, catalogue for whatsapp business" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Anantya.ai provides whatsapp business catalog service, now businesses can easily create product catalogs & it will increase engagement and boost sales." />
      <meta property="og:title" content="Whatsapp Catalog | Increase Engagement and Boost Sales" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Anantya.ai provides whatsapp business catalog service, now businesses can easily create product catalogs & it will increase engagement and boost sales." />
      <meta property="og:url" content="https://anantya.ai/whatsapp-catalog" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/whatsapp-support/offer-support-at-scale-with.webp" />
      <link rel="canonical" href="https://anantya.ai/whatsapp-catalog" />
      <meta name="author" content="Anantya" />
      
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebPage",
          "@id": "#WebPage",
          "url": "https://anantya.ai/whatsapp-catalog",
          "name": "Whatsapp Catalog | Increase Engagement and Boost Sales"
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Whatsapp Catalog | Increase Engagement and Boost Sales",
              "item": "https://anantya.ai/whatsapp-catalog"
            }
          ]
        })}
      </script>
    </Helmet>
     <div className="container py-5 mt-5">
      <div className="content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-black mt-20">
            <div className=" text-black pe-md-5 text-lg-start text-center">
              <h1>
                <span>WhatsApp Catalog:</span> List your Products Online
              </h1>
              <p className="mt-20 text-black pe-md-5">
                Create product collections in your WhatsApp catalogs to make it easier for customers to find what they're looking for. This makes shopping simpler and more enjoyable for them.
              </p>
              <div className="btns mt-40">
                <a
                  type="button"
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
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' }}
            >
              <img
                src={catalogImage}
                className="img-fluid"
                alt="Showcase Your Products Using WhatsApp Catalog"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section style={{ background: '#fff' }} className="process style-12">
      <div className="container">
        <div className="content py-5  text-center">
     
            <h2>Convert <span> Browsers into Buyers</span></h2>
            <p>Personalised Recommendations, One-on-One Chats, Instant Support!</p>
       
          <div className="content pt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 px-md-0 px-3">
              <div className="col">
                <a href="contact" className="features-card style-5 box-1 h-100">
                  <div className="icon">
                    <img src={increasedReachIcon} alt="24-7" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Increased Reach</h5>
                    <p className="text">
                      Attract more people on WhatsApp by reaching out to a larger audience. Show off special deals or limited-time offers using the WhatsApp catalog feature.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact" className="features-card style-5 box-2 h-100">
                  <div className="icon">
                    <img src={realTimeUpdatesIcon} alt="services" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Real-time Updates</h5>
                    <p className="text">
                      Keeping your customers informed with up-to-date info. Make sure your product list stays accurate by adding new items and removing discontinued ones.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="contact" className="features-card style-5 box-3 h-100">
                  <div className="icon">
                    <img src={easyShoppingIcon} alt="cyber-security" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">Easy Shopping</h5>
                    <p className="text">
                      Enable easy browsing, inquiries, and orders on WhatsApp. Offer quick access for customers to ask about products and get more info.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a
            href="whatsapp-commerce"
            className="btn bg-green text-white mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore WhatsApp Commerce
          </a>
        </div>
      </div>
    </section>
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={connectWithAudienceImg}
              className="img-fluid"
              alt="Connect with a wider audience on WhatsApp."
            />
          </div>
          <div className="col-md-6 col-sm-12 px-5 pt-4 text-lg-start text-center">
            <h2>
              <span>Connect</span> with a wider audience on WhatsApp.
            </h2>
            <br />
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
                  Seamlessly send product catalogs to thousands of customers who have opted in to receive updates on WhatsApp.
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
                  Set up custom auto-replies to FAQs, welcome messages, out-of-office notifications, or delay responses during work hours.
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
                  Automate abandoned cart notifications to recover lost sales.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="container py-5">
      <a href="https://wa.link/ljkyg9" target="_blank" rel="noopener noreferrer">
        <img
          src={whatsappCatalogImg}
          className="img-fluid"
          alt="Call to action on the home page"
        />
      </a>
    </div>
    <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-lg-start text-center">
            <h2>
              <span>Simplify shopping </span> with WhatsApp
            </h2>
            <br />
            <ul>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                  </svg>
                </small>
                <p>Display your products in one message with clear images, descriptions, and prices</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                  </svg>
                </small>
                <p>Make buying simple by providing an easy way to browse and purchase everything in one place.</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF" />
                  </svg>
                </small>
                <p>Sending personalised product recommendations and promotions to customers.</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img src={simplifyShoppingImg} className="img-fluid" alt="Simplify shopping with WhatsApp" />
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
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Experience a personalized demo with us
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentColor"></path>
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
              <span> in Action! </span>
            </h2>
            <p>
              Register for our Live Demo today and discover why Anantya.ai is the right choice for your business and
              get answers to all your WhatsApp-related questions.
            </p>
          </div>
        </div>
      </div>
      <hr className="line_breaker_2 " />
    </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default Catalog;
