// src/views/Integration/IntegrationMain.js
import React from "react";
import "./IntegrationMain.css"; // Import the CSS file for styles

import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to the utility
// Fetching images dynamically using the getImage function
const integrationsImg = getImage('integrations.webp'); // Correct path
const instagramIcon = getImage('Integration/instagram.svg');
const whatsappIcon = getImage('Integration/Whatsapp.webp');
const messengerIcon = getImage('Integration/Messenger.webp');
const wechatIcon = getImage('Integration/Logo-WeChat.svg');
const lineIcon = getImage('Integration/Logo-LINE.svg');
const viberIcon = getImage('Integration/Logo-Viber.svg');
const googleBusinessMessagesIcon = getImage('Integration/Google-Business-Messages.svg');
const smsIcon = getImage('Integration/Google-Business-Messages.svg'); // Update if SMS image is different
const wordpressIcon = getImage('Integration/wordpress.webp');
const squarespaceIcon = getImage('Integration/square.png');
const shopifyIcon = getImage('Integration/shopify.webp');
const IntegrationMain = () => {
    const services = [
        { img: instagramIcon, title: 'Instagram', link: 'integrations/instagram', delay: '0' },
        { img: whatsappIcon, title: 'WhatsApp Business Platform', link: 'whatsapp-business-api', delay: '0.2s' },
        { img: messengerIcon, title: 'Facebook Messenger', link: 'integrations/facebook-messenger', delay: '0.4s' },
        { img: wechatIcon, title: 'WeChat', link: 'integrations/wechat', delay: '0' },
        { img: lineIcon, title: 'Line', link: 'integrations/line', delay: '0.2s' },
        { img: viberIcon, title: 'Viber', link: 'integrations/viber', delay: '0.4s' },
        { img: googleBusinessMessagesIcon, title: 'Google Business Messages', link: 'integrations/google-business-messages', delay: '0.4s' },
        { img: smsIcon, title: 'SMS', link: 'integrations/google-business-messages', delay: '0.2s' }, // Update if SMS image is different
        { img: wordpressIcon, title: 'Wordpress', link: 'integrations/woocommerce', delay: '0.4s' },
        { img: squarespaceIcon, title: 'Squarespace', link: 'integrations/salesforce', delay: '0.4s' },
        { img: shopifyIcon, title: 'Shopify', link: 'integrations/salesforce', delay: '0.4s' }
      ];
    
  return (
    <>

<Helmet>
      {/* Alternate Links */}
      <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integration" />
      <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/integration" />
      <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/integration" />
      <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/integration" />
      <link rel="alternate" hreflang="en-in" href="https://anantya.ai/integration" />
      <link rel="alternate" hreflang="en" href="https://anantya.ai/integration" />

      {/* Title and Meta Tags */}
      <title>Integrate Message Application with Whatsapp Business| Anantya.ai</title>
      <meta name="robots" content="index,follow" />
      <meta name="title" content="Integrate Message Application with Whatsapp Business| Anantya.ai" />
      <meta name="description" content="Integration with all the largest platforms, Facebook Messenger, Google Business Messages, Instagram, Line, Telegram, Viber, Wechat, Dialogflow, Hubspot, Make, Salesforce, Pipedrive, Webhook, Woocommerce, and Zapier" />
      <meta name="keywords" content="facebook messenger integration, google business messages integration, instagram integration, line integration, telegram integration, viber integration, wechat integration, dialogflow integration, hubspot integration, make integration, salesforce integration, pipedrive integration, webhook, woocommerce, zapier integration" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:locale" content="en_SA" />
      <meta property="og:locale" content="en_BH" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content="Integrate Message Application with Whatsapp Business| Anantya.ai" />
      <meta property="og:description" content="Integration with all the largest platforms, Facebook Messenger, Google Business Messages, Instagram, Line, Telegram, Viber, Wechat, Dialogflow, Hubspot, Make, Salesforce, Pipedrive, Webhook, Woocommerce, and Zapier" />
      <meta property="og:url" content="https://anantya.ai/integration" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/integrations.webp" />
      <link rel="canonical" href="https://anantya.ai/integration" />
      <meta name="author" content="Anantya" />

      {/* JSON-LD Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
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
            "areaServed": ["AE", "SA", "BH", "IN"],
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
          "url": "https://anantya.ai/integration",
          "name": "Integrate Message Application with Whatsapp Business| Anantya.ai"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Integrations",
              "item": "https://anantya.ai/integration"
            }
          ]
        })}
      </script>
    </Helmet>
      <section className="about style-3">
        <div className="container my-5 pt-md-0 pt-5">
          <div className="row">
            <div className="col-lg-5 my-auto text-lg-start text-center">
              <div className="integration info pe-lg-5">
                <h3>
                  Anantya.ai <span>INTEGRATIONS</span>
                </h3>

                <div className="text mt-3">
                  Connect your Business tech stack to the Integrations you Love
                </div>
                <ul>
                  <li>
                    Acquire, Engage, and Retain more customers with Anantya.ai's
                    powerful apps and integrations.
                  </li>
                  <li>
                    Give your customers the best experience and personalization.
                  </li>
                </ul>
                <a href="work-with-us" className="btn bg-green mt-4">
                  <span>How We Work</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7 pt-30 ">
              <img
                src={integrationsImg}
                className="img-fluid"
                alt="integrations"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services section-padding style-1">
      <div className="container">
       <h2 className="wow fadeInUp pb-4 pt-5" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                Perfect IT Solutions <span>For Your Business</span>  </h2>
          
      
        <div className="content">
          <div className="row row-cols-1 row-cols-md-4 pb-5">
            {services.map((service, index) => (
              <div className="col mb-4" key={index}>
                <div className="service-box wow fadeInUp h-100" data-wow-delay={service.delay} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  <div className="icon">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <h5>
                    <a href={service.link}>{service.title}</a>
                  </h5>
                  <div className="info">
                    <div className="text">
                      Trust our top minds to eliminate workflow pain points, implement new tech &amp; app.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="clients style-5 pb-20 mt-5" style={{ backgroundColor: '#f3fbff' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
          <div className="section-head text-start mb-40 style-5 pt-5 col">
            <h2 className="mb-20 text-lg-start text-center">
              Get Started With<br />
              <span> Anantya.ai </span>
            </h2>
            <p>
              We Empower Thousands Of Businesses With Faster, Better, And Stronger Communication.
            </p>
          </div>
          <div className="section-head text-start mb-md-5 style-5 pt-md-5 col my-auto">
            <div className="row row-cols-1 row-cols-md-2 g-4 px-md-0 px-3">
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor" />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Experience a personalized demo with us
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor" />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Discover why 10,000+ businesses choose us
                      </div>
                    </li>
                  </ul>
                  <a href="https://calendly.com/info-w0m/30min?month=2024-03" target="_blank" rel="noopener noreferrer" className="btn bg-green text-white btn-color text-center mt-10">
                    Book A Demo
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="cta-card new text-center h-100">
                  <ul className="cta-usp new">
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor" />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Join a rewarding, value-based partner program.
                      </div>
                    </li>
                    <li className="list-item cta d-flex p-1">
                      <div className="html-embed-27 cta w-embed">
                        <svg width="16" height="12" viewBox="0 0 18 14" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="currentcolor" />
                        </svg>
                      </div>
                      <div className="feature-text-2 text-start ps-2">
                        Expand services & Unlock New Revenue Channels
                      </div>
                    </li>
                  </ul>
                  <a href="partner-with-us" target="_blank" rel="noopener noreferrer" className="btn login_button mt-10">
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="line_breaker_2" />
    </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </>
  );
};

export default IntegrationMain;
