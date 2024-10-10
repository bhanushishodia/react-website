import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching the Instagram logo dynamically using getImage function
const instagramLogo = getImage('Google-Business-Messages.svg');

const GoogleMessages = () => {
  return (
    
    <div>
      <Helmet>
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/google-business-messages" />
        <link rel="alternate" hrefLang="en-ae" href="https://anantya.ai/integrations/google-business-messages" />
        <link rel="alternate" hrefLang="en-sa" href="https://anantya.ai/integrations/google-business-messages" />
        <link rel="alternate" hrefLang="en-bh" href="https://anantya.ai/integrations/google-business-messages" />
        <link rel="alternate" hrefLang="en-in" href="https://anantya.ai/integrations/google-business-messages" />
        <link rel="alternate" hrefLang="en" href="https://anantya.ai/integrations/google-business-messages" />

        <title>Integrate Google Business Messages with Whatsapp</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="Integrate Google Business Messages with Whatsapp" />
        <meta name="description" content="Anantya.ai Provides Google Business Messages for Business. It'll help you to engage your audience through google business message." />
        <meta name="keywords" content="google my business chat integration, google business messages, business messages google, google my business messages, messaging google my business" />
        
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale" content="en_SA" />
        <meta property="og:locale" content="en_BH" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Integrate Google Business Messages with Whatsapp" />
        <meta property="og:description" content="Anantya.ai Provides Google Business Messages for Business. It'll help you to engage your audience through google business message." />
        <meta property="og:url" content="https://anantya.ai/integrations/google-business-messages" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/Google-Business-Messages.svg" />
        
        <link rel="canonical" href="https://anantya.ai/integrations/google-business-messages" />
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
            "url": "https://anantya.ai/integrations/google-business-messages",
            "name": "Integrate Google Business Messages with Whatsapp"
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
                "item": "https://anantya.ai/integrations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Google Business Messages",
                "item": "https://anantya.ai/integrations/google-business-messages"
              }
            ]
          })}
        </script>
      </Helmet>

    <div className="py-5 my-5" style={{ background: 'linear-gradient(180deg, #e7f1f5, #fff 100%, #fff)' }}>
      <div className="container my-5 text-lg-start">
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
              <h1 className="category-title integration">Google Business Messages</h1>
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
        <p>
        Engage your audience through Google Business Messages by leveraging teams
        of agents to support and sell to customers who reach out through your
        Google Business Profile.
      </p>
      <ul>
        <li>
          Manage incoming conversations - greet customers, communicate
          availability, and direct them to the appropriate agent or department.
        </li>
        <li>
          Respond to chats - transfer customers, generate support tickets, or
          process their orders.
        </li>
        <li>
          Supervise and report on conversations - assess agent performance,
          maintain visibility over their chats, and intervene when necessary.
        </li>
        <li>
          Implement business processes - customize Google Business Messages to
          suit your business needs and enhance overall efficiency.
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

export default GoogleMessages;
