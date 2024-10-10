import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const wooCommerceLogo = getImage('icons/woo-commerce.webp'); // Adjust path if necessary
function WooCommerce() {
  return (
    <div>

<Helmet>
        {/* Alternate Links */}
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/woocommerce" />
        <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/integrations/woocommerce" />
        <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/integrations/woocommerce" />
        <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/integrations/woocommerce" />
        <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/integrations/woocommerce" />
        <link rel="alternate" hrefLang="en" href="https://anantya.ai/integrations/woocommerce" />

        {/* Meta Information */}
        <title>Woocommerce Integration with Whatsapp API | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Woocommerce Integration with Whatsapp API | Anantya.ai" />
        <meta name="description" content="Seamlessly link Anantya.ai with WooCommerce to automate the synchronization of contact details between both platforms and trigger messages when users make new orders." />
        <meta name="keywords" content="woocommerce integration with whatsapp, integrate woocommerce with whatsapp api, whatsapp woocommerce integration" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Woocommerce Integration with Whatsapp API | Anantya.ai" />
        <meta property="og:description" content="Seamlessly link Anantya.ai with WooCommerce to automate the synchronization of contact details between both platforms and trigger messages when users make new orders." />
        <meta property="og:url" content="https://anantya.ai/integrations/woocommerce" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/woo-commerce.webp" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://anantya.ai/integrations/woocommerce" />

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
              "logo": "https://ik.imagekit.io/cloy701fl/images/logo.webp",
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
              "url": "https://anantya.ai/integrations/woocommerce",
              "name": "Woocommerce Integration with Whatsapp API| Anantya.ai"
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
                  "name": "Woocommerce",
                  "item": "https://anantya.ai/integrations/woocommerce"
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
             <div className="title integration-category">INTEGRATION</div>
             <h1 className="category-title integration">WooCommerce</h1>
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
        <p>Utilizing Zapier's integration capabilities, seamlessly link Anantya.ai with WooCommerce to automate the synchronization of contact details between both platforms and trigger messages when users make new orders.</p>
                    <ul>
                        <li>Streamlined Contact Management: Automate the transfer of contact information between Anantya.ai and WooCommerce to ensure consistency and accuracy across systems.
                        </li>
                        <li>Real-Time Order Notifications: Set up triggers to automatically send messages through Anantya.ai whenever users make new orders on WooCommerce, keeping customers informed and engaged.
                        </li>
                        <li>Simplified Workflow Automation: Reduce manual tasks by automating the process of updating contact details and sending order-related messages, saving time and resources for your team.
                         </li>
                        <li>Comprehensive Reporting and Analytics: Gain insights into customer engagement and order trends by analyzing data from Anantya.ai and WooCommerce, enabling data-driven decision-making and optimization strategies.
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

export default WooCommerce;
