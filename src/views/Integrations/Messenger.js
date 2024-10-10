import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const MessengerLogo = getImage('icons/Messenger.webp'); // Adjust path if necessary

const Messenger = () => {
  return (
    <div>
     <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/facebook-messenger" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/integrations/facebook-messenger" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/integrations/facebook-messenger" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/integrations/facebook-messenger" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/integrations/facebook-messenger" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/integrations/facebook-messenger" />

        <title>Integrate Facebook Messenger with Whatsapp | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Integrate Facebook Messenger with Whatsapp | Anantya.ai" />
        <meta name="description" content="Anantya.ai Provides Facebook Messenger Integration for Business. Provide a better chatting experience for your customers and your team." />
        <meta name="keywords" content="facebook messenger, facebook for business, facebook business integrations, business integrations facebook, facebook integration with whatsapp, facebook whatsapp messenger" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Integrate Facebook Messenger with Whatsapp | Anantya.ai" />
        <meta property="og:description" content="Anantya.ai Provides Facebook Messenger Integration for Business. Provide a better chatting experience for your customers and your team." />
        <meta property="og:url" content="https://anantya.ai/integrations/facebook-messenger" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/Messenger.webp" />
        <link rel="canonical" href="https://anantya.ai/integrations/facebook-messenger" />
        <meta name="author" content="Anantya" />

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
              "availableLanguage": "en",
            },
            "sameAs": [
              "https://www.facebook.com/anantyaai",
              "https://www.instagram.com/anantya.ai",
              "https://www.youtube.com/@Anantyaai",
              "https://www.linkedin.com/company/anantya-ai",
              "https://www.pinterest.com/anantyaai",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/integrations/facebook-messenger",
            "name": "Integrate Facebook Messenger with Whatsapp | Anantya.ai",
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
                "item": "https://anantya.ai",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Integrations",
                "item": "https://anantya.ai/integration",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Facebook Messenger",
                "item": "https://anantya.ai/integrations/facebook-messenger",
              },
            ],
          })}
        </script>
      </Helmet>

       <div className="py-5 mt-4" style={{ background: 'linear-gradient(180deg, #e7f1f5, #fff 100%, #fff)' }}>
      <div className="container  my-5 text-lg-start">
        <div className="text-block-125 integration mb-3">
          <a className="internalpage_link" href="../integration">
          <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i> Integrations
          </a>
        </div>
        <div className="align-items-center">
          <div className="integrations-info-container d-inline-flex align-items-center">
            <img alt="Instagram" src={MessengerLogo} className="integration-logo" />
            <div className="div-block-267 ms-4">
              <div className="title integration-category">Messaging Channels</div>
              <h1 className="category-title integration">Facebook Messenger</h1>
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
        <p>Build strong connections with your audience by using teams of agents to communicate, generate leads, and foster lasting customer relationships on one of the world's most popular messaging platforms.</p>
                    <ul>
                        <li>Manage incoming messages - greet customers, inform them of your availability, and direct them to the right agent or department.
                        </li>
                        <li>Respond to messages - transfer customers, create support tickets, or process their orders.
                        </li>
                        <li>Supervise and report on conversations - assess your agents' performance, monitor their chats, and intervene as needed.
                            </li>
                        <li>Facebook Messenger Marketing - engage with ad campaigns, nurture leads, send messages for abandoned carts, newsletters, and promote additional services.
                        </li>
                        <li>Marketing Analytics - evaluate the success of your campaigns and make improvements.
                        </li>
                        <li>Business process implementation - Tailor Facebook Messenger to suit
                             your business needs and optimize operational efficiency.
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
};

export default Messenger;
