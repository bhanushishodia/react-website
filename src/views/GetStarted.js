import React from 'react';
import './GetStarted.css';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import ContactForm from "../forms/ContactForm"; // Correct casing used here
import { Helmet } from 'react-helmet';
const GetStarted = () => {
  return (
    <>
     <div>
      <Helmet>
        <title>Start Your Whatsapp API Journey with Anantya.ai | Get Started</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Start your WhatsApp API journey with Anantya.ai. Get affordable plans and seamless integration to enhance your business communication today." />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Start Your Whatsapp API Journey with Anantya.ai | Get Started" />
        <meta property="og:description" content="Start your WhatsApp API journey with Anantya.ai. Get affordable plans and seamless integration to enhance your business communication today." />
        <meta property="og:url" content="https://anantya.ai/campaign-request-demo" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://anantya.ai/assets/img/no-code-chat-bot.webp" />
        <link rel="canonical" href="https://anantya.ai/campaign-request-demo" />
        <meta name="author" content="Anantya" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "anantya.ai",
            "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
            "url": "https://anantya.ai",
            "logo": "https://anantya.ai/assets/img/logo.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971565480273",
              "contactType": "sales",
              "areaServed": ["IN"],
              "availableLanguage": ["en"]
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
      </Helmet>
     
    </div>
     <div className="container">
      <div className="content-wrapper row">
        <div className="get-started-content col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <h1>Experience Anantya.ai in Action!</h1>
          <p>
          In this demo, we’ll show you how you can:
          </p>
          <h2 className='h6 fw-bold'>Build Your Own WhatsApp Chatbot</h2>
          <p>
          Design custom chatflows tailored to your business needs and automate messages via integrations.
          </p>
          <h2 className='h6 fw-bold'>Run AD Campaigns and Do Bulk Broadcasting Through WhatsApp</h2>
          <p>
          Send out promotional offers to an unlimited audience, enhancing engagement with interactive buttons for better responses.
          </p>
          <h2 className='h6 fw-bold'> Use Powerful Analytics</h2>
          <p>
          Efficiently manage conversations & Agents from a single, powerful Platform and automate support to improve customer satisfaction.
          </p>
          <h3>Need Help?</h3>
          <p>
            If you need help at any stage, our support team is available at <a href="mailto:support@anantya.ai" className="link">support@anantya.ai</a>.
          </p>
        </div>
        <div className="text-md-end col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <ContactForm />
        </div>
      </div>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>

    
  );
};

export default GetStarted;
