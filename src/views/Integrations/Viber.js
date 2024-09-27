import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import viberLogo from '../../assets/images/icons/Logo-Viber.svg'; // Importing the image
import { Helmet } from 'react-helmet';

const Viber = () => {
  return (
    <div>
     <Helmet>
      {/* anup meta tags and schema */}
      <title>Integration for Viber | Anantya.ai</title>
      <meta name="robots" content="index,follow" />
      <meta 
        name="description" 
        content="Utilize teams of multiple agents to engage with your customers on Viber, generating leads and fostering long-lasting relationships on this popular messaging platform." 
      />
      <meta 
        name="keywords" 
        content="viber integration, viber integration api, viber business account, viber business, viber business messages, viber messenger, viber bot, viber chatbot, viber business messages api, viber software" 
      />
      <meta property="og:title" content="Integration for Viber | Anantya.ai" />
      <meta property="og:type" content="website" />
      <meta 
        property="og:description" 
        content="Utilize teams of multiple agents to engage with your customers on Viber, generating leads and fostering long-lasting relationships on this popular messaging platform." 
      />
      <meta property="og:url" content="https://anantya.ai/integrations/viber" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta 
        property="og:image" 
        content="https://anantya.ai/assets/img/home/Logo-Viber.svg" 
      />
      <link rel="canonical" href="https://anantya.ai/integrations/viber" />
      <meta name="author" content="Anantya" />

      {/* JSON-LD Schema Markup */}
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
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Integration for Viber | Anantya.ai",
                "description": "Utilize teams of multiple agents to engage with your customers on Viber, generating leads and fostering long-lasting relationships on this popular messaging platform."
              },
              {
                "@type": "WebSite",
                "name": "Anantya",
                "alternateName": "anantya.ai",
                "url": "https://anantya.ai/"
              }
            ]
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
                "name": "Integrations",
                "item": "https://anantya.ai/integration"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Viber",
                "item": "https://anantya.ai/integrations/viber"
              }
            ]
          }
        `}
      </script>
      {/* anup meta tags and schema */}
    </Helmet>


     <div className="py-5" style={{ background: 'linear-gradient(180deg, #e7f1f5, #fff 100%, #fff)' }}>
      <div className="container my-5 text-lg-start">
        <div className="text-block-125 integration mb-3">
          <a className="internalpage_link" href="../integration">
          <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i> Integrations
          </a>
        </div>
        <div className="align-items-center">
          <div className="integrations-info-container d-inline-flex align-items-center">
            <img alt="Instagram" src={viberLogo} className="integration-logo" />
            <div className="div-block-267 ms-4">
              <div className="title integration-category">Messaging Channels</div>
              <h1 className="category-title integration">Viber</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
      <PopularPosts />
      <ClientsSection />
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default Viber;
