import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching the Instagram logo dynamically using getImage function
const instagramLogo = getImage('instagram.svg');
const Instagram = () => {
  return (
    <div>
 
 <Helmet>
        {/* Alternate Links */}
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/instagram" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/integrations/instagram" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/integrations/instagram" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/integrations/instagram" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/integrations/instagram" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/integrations/instagram" />

        {/* Title and Meta Tags */}
        <title>Integrate Instagram with Whatsapp Business | Anantya.ai</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Integrate Instagram with Whatsapp Business | Anantya.ai" />
        <meta name="description" content="Utilise multiple agents to talk to your customers on Instagram. Take advantage of its popularity to connect, sell, and help customers through messages." />
        <meta name="keywords" content="Instagram integration" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Integrate Instagram with Whatsapp Business | Anantya.ai" />
        <meta property="og:description" content="Utilise multiple agents to talk to your customers on Instagram. Take advantage of its popularity to connect, sell, and help customers through messages." />
        <meta property="og:url" content="https://anantya.ai/integrations/instagram" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/instagram.svg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://anantya.ai/integrations/instagram" />
        <meta name="author" content="Anantya" />

        {/* JSON-LD for Organization */}
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

        {/* JSON-LD for WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/integrations/instagram",
            "name": "Integrate Instagram with Whatsapp Business | Anantya.ai"
          })}
        </script>

        {/* JSON-LD for BreadcrumbList */}
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
                "name": "Instagram",
                "item": "https://anantya.ai/integrations/instagram"
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
            <img alt="Instagram" src={instagramLogo} className="integration-logo" />
            <div className="div-block-267 ms-4">
              <div className="title integration-category">Messaging Channels</div>
              <h1 className="category-title integration">Instagram</h1>
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
        <p>Utilise multiple agents to talk to your customers on Instagram. Take advantage of its
                        popularity to connect, sell, and help customers through messages.</p>
                    <ul>
                        <li>Manage incoming chats - greet customers, inform them if you're unavailable, and direct
                            them to the right agent or department.</li>
                        <li>Respond to messages - move customers to different agents, create support requests, or
                            complete their orders
                        </li>
                        <li>Supervise and report on conversations - review how well your agents are doing, see all their
                            chats, and step in when needed.
                            <br/>
                        </li>
                        <li>Use Instagram for marketing - engage with ad campaigns, nurture leads, send messages about
                            abandoned carts, newsletters, and offer additional services.
                        </li>
                        <li>Implement business processes - tailor Instagram to benefit your business and streamline your
                            operations.</li>
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

export default Instagram;
