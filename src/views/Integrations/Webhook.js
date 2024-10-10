import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const webhookLogo = getImage('icons/Icon-71.svg'); // Adjust path if necessary
function Webhook() {
  return (
    <div>
       (
    <Helmet>
      {/* Alternate Links */}
      <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/webhook" />
      <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/integrations/webhook" />
      <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/integrations/webhook" />
      <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/integrations/webhook" />
      <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/integrations/webhook" />
      <link rel="alternate" hrefLang="en" href="https://anantya.ai/integrations/webhook" />

      {/* Title and Meta Tags */}
      <title>Integrate Webhook with Whatsapp | Anantya.ai</title>
      <meta name="robots" content="index,follow" />
      <meta name="title" content="Integrate Webhook with Whatsapp | Anantya.ai" />
      <meta name="description" content="Link Anantya.ai with any third-party service or database that supports webhooks integration for seamless automation, data synchronization, and workflow optimization" />
      <meta name="keywords" content="integrate webhook with whatsapp, webhook integration with whatsapp, webhook whatsapp integration" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:locale" content="en_SA" />
      <meta property="og:locale" content="en_BH" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content="Integrate Webhook with Whatsapp | Anantya.ai" />
      <meta property="og:description" content="Link Anantya.ai with any third-party service or database that supports webhooks integration for seamless automation, data synchronization, and workflow optimization" />
      <meta property="og:url" content="https://anantya.ai/integrations/webhook" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/Icon-71.svg" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://anantya.ai/integrations/webhook" />
      <meta name="author" content="Anantya" />

      {/* JSON-LD Structured Data */}
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
          }
        `}
      </script>

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/integrations/webhook",
            "name": "Integrate Webhook with Whatsapp | Anantya.ai"
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
                "name": "Webhook",
                "item": "https://anantya.ai/integrations/webhook"
              }
            ]
          }
        `}
      </script>
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
           <img alt="Instagram" src={webhookLogo} className="integration-logo" />
           <div className="div-block-267 ms-4">
             <div className="title integration-category">INTEGRATION</div>
             <h1 className="category-title integration">Webhook</h1>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div className="container py-5">
      <div className="row">
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <SidebarInfo />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12 my-auto ps-5 text-start mt-md-0 mt-4'>
        <div className='integration_content'>
        <p>Link Anantya.ai with any third-party service or database that supports webhooks for seamless automation, data synchronization, and workflow optimization:</p>
                    <ul>
                        <li>Automate processes by triggering actions in external systems based on interactions with Anantya.ai.
                        </li>
                        <li>Sync information between Anantya.ai and external databases or services in real-time to ensure data consistency.</li>
                        <li>Create efficient workflows by integrating Anantya.ai with tools and platforms used across your organization.</li>
                        <li>Streamline data exchange between Anantya.ai and other applications, enhancing productivity and reducing manual effort.
                        </li>
                        <li>Enable dynamic interactions by leveraging webhook-based integrations to respond to user inputs with relevant information or actions.
                        </li>
                        <li>Improve decision-making and analysis by aggregating data from Anantya.ai and external sources for comprehensive insights.
                        </li>
                       
                    </ul>
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

export default Webhook;
    