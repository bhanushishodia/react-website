import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching the WooCommerce logo dynamically using getImage function
const wooCommerceLogo = getImage('dialogflow-logo.svg');
function Dialogflow() {
  return (
    <div>

    <Helmet>
      {/* Page Title */}
      <title>Integration for Dialogflow | Anantya.ai</title>

      {/* Meta Tags */}
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Integrate your Dialogflow agent with Anantya.ai for automating sales or support conversations"
      />
      <meta name="keywords" content="dialog flow, dialogflow integration, dialogflow api integration" />
      <meta property="og:title" content="Integration for Dialogflow | Anantya.ai" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Integrate your Dialogflow agent with Anantya.ai for automating sales or support conversations."
      />
      <meta property="og:url" content="https://anantya.ai/integrations/dialogflow" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/home/dialogflow-logo.svg" />
      <link rel="canonical" href="https://anantya.ai/integrations/dialogflow" />
      <meta name="author" content="Anantya" />

      {/* Organization Schema Markup */}
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

      {/* WebPage and Website Schema Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Integration for Dialogflow | Anantya.ai",
                "description": "Integrate your Dialogflow agent with Anantya.ai for automating sales or support conversations."
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

      {/* Breadcrumb Schema Markup */}
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
                "name": "Dialogflow",
                "item": "https://anantya.ai/integrations/dialogflow"
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
           <img alt="Instagram" src={wooCommerceLogo} className="integration-logo" />
           <div className="div-block-267 ms-4">
             <div className="title integration-category">BOTS</div>
             <h1 className="category-title integration">Dialogflow</h1>
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

export default Dialogflow;
