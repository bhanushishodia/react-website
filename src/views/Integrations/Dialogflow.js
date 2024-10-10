import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching the WooCommerce logo dynamically using getImage function
const wooCommerceLogo = getImage('dialogflow-logo.svg');
function Dialogflow() {
  return (
    <div>
 <Helmet>
        {/* Alternate Links */}
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/dialogflow" />
        <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/integrations/dialogflow" />
        <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/integrations/dialogflow" />
        <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/integrations/dialogflow" />
        <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/integrations/dialogflow" />
        <link rel="alternate" hrefLang="en" href="https://anantya.ai/integrations/dialogflow" />

        {/* Meta Information */}
        <title>Dialogflow Integration with Whatsapp API | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Dialogflow Integration with Whatsapp API | Anantya.ai" />
        <meta name="description" content="Integrate your Dialogflow with Anantya.ai for automating sales or support conversations" />
        <meta name="keywords" content="dialogflow integration with whatsapp, integrate dialogflow with whatsapp, dialog flow, dialogflow integration, dialogflow api integration" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Dialogflow Integration with Whatsapp API | Anantya.ai" />
        <meta property="og:description" content="Integrate your Dialogflow with Anantya.ai for automating sales or support conversations." />
        <meta property="og:url" content="https://anantya.ai/integrations/dialogflow" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/dialogflow-logo.svg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://anantya.ai/integrations/dialogflow" />

        {/* Author Meta Tag */}
        <meta name="author" content="Anantya" />

        {/* JSON-LD for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Anantya.ai",
              "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
              "url": "https://anantya.ai/",
              "logo": "https://ik.imagekit.io/cloy701fl/images/logo.webpp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971565480273",
                "contactType": "sales",
                "areaServed": ["AE","SA","BH","IN"],
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

        {/* JSON-LD for WebPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebPage",
              "@id": "#WebPage",
              "url": "https://anantya.ai/integrations/dialogflow",
              "name": "Dialogflow Integration with Whatsapp API | Anantya.ai"
            }
          `}
        </script>

        {/* JSON-LD for BreadcrumbList */}
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
   <div className="container py-5 my-5">
      <div className="row">
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <SidebarInfo />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12 my-auto ps-5 text-start mt-md-0 mt-4'>
        <div className='integration_content '>
      <p>
        Integrate your Dialogflow agent with Anantya.ai for automating sales or
        support conversations:
      </p>
      <ul>
        <li>
          Welcome customers and notify about availability or direct to the right
          agent or department for inbound conversations.
        </li>
        <li>
          Transfer customers, generate support tickets, or process orders in
          response to chats.
        </li>
        <li>Provide personalized recommendations based on customer preferences.</li>
        <li>
          Collect feedback and insights to continuously improve customer
          interactions.
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

export default Dialogflow;
