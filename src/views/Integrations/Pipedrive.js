import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const pipedriveLogo = getImage('icons/pipedrive.webp'); // Adjust path if necessary
function Pipedrive() {
  return (
    <div>
 
 <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/pipedrive" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/integrations/pipedrive" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/integrations/pipedrive" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/integrations/pipedrive" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/integrations/pipedrive" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/integrations/pipedrive" />
        <title>Integrate Pipedrive with Whatsapp Business | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Integrate Pipedrive with Whatsapp Business | Anantya.ai" />
        <meta name="description" content="Integrate whatsapp api with Pipedrive, automating the synchronization of contact details and comments between both platforms." />
        <meta name="keywords" content="pipedrive integration with whatsapp, integrate pipedrive with whatsapp" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Integrate Pipedrive with Whatsapp Business | Anantya.ai" />
        <meta property="og:description" content="Integrate whatsapp api with Pipedrive, automating the synchronization of contact details and comments between both platforms." />
        <meta property="og:url" content="https://anantya.ai/integrations/pipedrive" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/pipedrive.webp" />
        <link rel="canonical" href="https://anantya.ai/integrations/pipedrive" />
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
          "url": "https://anantya.ai/integrations/pipedrive",
          "name": "Integrate Pipedrive with Whatsapp Business | Anantya.ai"
        }
        `}
      </script>

      {/* JSON-LD for Breadcrumb */}
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
              "name": "Pipedrive",
              "item": "https://anantya.ai/integrations/pipedrive"
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
           <img alt="Instagram" src={pipedriveLogo} className="integration-logo" />
           <div className="div-block-267 ms-4">
             <div className="title integration-category">INTEGRATION</div>
             <h1 className="category-title integration">Pipedrive</h1>
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
        <p>Utilize Zapier to seamlessly integrate Anantya.ai with Pipedrive, automating the synchronization of contact details and comments between both platforms.</p>
                    <ul>  
                        <li>Synchronize Contact Details: Automate the transfer of contact information between Anantya.ai and Pipedrive to ensure consistency and accuracy across systems.
                        </li>
                        <li>Enhance Customer Relationship Management: Keep track of customer interactions and communication history within Pipedrive, providing valuable context for sales and support teams.</li>
                        <li>Improve Workflow Efficiency: Reduce manual data entry tasks and streamline processes by automating the transfer of information between Anantya.ai and Pipedrive.</li>
                        <li>Enhance Data Integrity: Minimize the risk of errors and discrepancies by automating the synchronization of contact details and comments, ensuring data consistency across both platforms.
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

export default Pipedrive;
