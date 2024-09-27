import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import hubspotLogo from '../../assets/images/icons/hubspot.webp'; // Importing the image
import { Helmet } from 'react-helmet';
function Hubspot() {
  return (
    <div>
       <Helmet>
      {/* anup meta tags and schema */}
      <title>HubSpot Integration | Modernize Your Sales and Marketing</title>
      <meta name="robots" content="index,follow" />
      <meta 
        name="description" 
        content="Through the powerful integration capabilities of Zapier, seamlessly link Anantya.ai with HubSpot to automate the synchronization of contact details between both platforms." 
      />
      <meta 
        name="keywords" 
        content="hubspot integrations, hubspot crm integration, hubspot software, hubspot integrations api" 
      />
      <meta 
        property="og:title" 
        content="HubSpot Integration | Modernize Your Sales and Marketing" 
      />
      <meta property="og:type" content="website" />
      <meta 
        property="og:description" 
        content="Through the powerful integration capabilities of Zapier, seamlessly link Anantya.ai with HubSpot to automate the synchronization of contact details between both platforms." 
      />
      <meta 
        property="og:url" 
        content="https://anantya.ai/integrations/hubspot" 
      />
      <meta property="og:site_name" content="anantya.ai" />
      <meta 
        property="og:image" 
        content="https://anantya.ai/assets/img/home/hubspot.webp" 
      />
      <link rel="canonical" href="https://anantya.ai/integrations/hubspot" />
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
                "name": "HubSpot Integration | Modernize Your Sales and Marketing",
                "description": "Through the powerful integration capabilities of Zapier, seamlessly link Anantya.ai with HubSpot to automate the synchronization of contact details between both platforms."
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
                "name": "Hubspot",
                "item": "https://anantya.ai/integrations/hubspot"
              }
            ]
          }
        `}
      </script>
      {/* anup meta tags and schema */}
    </Helmet>
      
    <div className="py-5 " style={{ background: 'linear-gradient(180deg, #e7f1f5, #fff 100%, #fff)' }}>
     <div className="container   mt-5 text-lg-start">
       <div className="text-block-125 integration mb-3">
         <a className="internalpage_link" href="../integration">
         <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i> Integrations
         </a>
       </div>
       <div className="align-items-center">
         <div className="integrations-info-container d-inline-flex align-items-center">
           <img alt="Instagram" src={hubspotLogo} className="integration-logo" />
           <div className="div-block-267 ms-4">
             <div className="title integration-category">Messaging Channels</div>
             <h1 className="category-title integration">HubSpot</h1>
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
}

export default Hubspot; 
