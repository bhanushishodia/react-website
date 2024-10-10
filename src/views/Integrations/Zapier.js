import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const zapierLogo = getImage('icons/zapier.webp'); // Adjust path if necessary

function Zapier() {
  return (
    <div>
      <Helmet>
        {/* Alternate Language Links */}
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/zapier" />
        <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/integrations/zapier" />
        <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/integrations/zapier" />
        <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/integrations/zapier" />
        <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/integrations/zapier" />
        <link rel="alternate" hrefLang="en" href="https://anantya.ai/integrations/zapier" />

        {/* Title and Meta Tags */}
        <title>Integrate Zapier with WhatsApp Business | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Integrate Zapier with WhatsApp Business | Anantya.ai" />
        <meta name="description"
          content="With Zapier integration, Anantya.ai connects seamlessly with thousands of apps to automate messaging workflows, synchronize data across various platforms, and streamline operations." />
        <meta name="keywords" content="zapier integration with whatsapp, integrate zapier with whatsapp, zapier whatsapp integration, zapier integration with whatsapp business api" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Integrate Zapier with WhatsApp Business | Anantya.ai" />
        <meta property="og:description" content="With Zapier integration, Anantya.ai connects seamlessly with thousands of apps to automate messaging workflows, synchronize data across various platforms, and streamline operations." />
        <meta property="og:url" content="https://anantya.ai/integrations/zapier" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/zapier.webp" />
        <link rel="canonical" href="https://anantya.ai/integrations/zapier" />
        <meta name="author" content="Anantya" />

        {/* JSON-LD Schema Markup */}
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
            "url": "https://anantya.ai/integrations/zapier",
            "name": "Integrate Zapier with WhatsApp Business | Anantya.ai"
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Zapier",
                "item": "https://anantya.ai/integrations/zapier"
              }
            ]
          })}
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
           <img alt="Instagram" src={zapierLogo} className="integration-logo" />
           <div className="div-block-267 ms-4">
             <div className="title integration-category">Messaging Channels</div>
             <h1 className="category-title integration">Zapier</h1>
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
        <p>With Zapier integration, Anantya.ai connects seamlessly with thousands of apps to automate messaging workflows, synchronize data across various platforms, and streamline operations.</p>
                    <ul>
                        <li>Handling inbound conversations - Extend warm welcomes to customers, inform them about availability, and route them to the appropriate agent or department for assistance.
                        </li>
                        <li>Responding to chats - Qualify and transfer customers efficiently, generate support tickets, or process orders promptly to ensure smooth interactions.
                        </li>
                        <li>Transactional notifications - Keep customers informed with timely updates such as appointment reminders, payment receipts, and delivery notifications.
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

export default Zapier;
