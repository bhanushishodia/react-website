import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import ClientsSection from '../../components/common/ClientsSection'; // Adjust the path if necessary
import PopularPosts from '../../components/common/PopularPosts'; 
import SidebarInfo from "../../components/common/SidebarInfo"; // Adjust the path as necessary
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Adjust the path to your utility
// Fetching the image dynamically using the getImage function
const instagramLogo = getImage('icons/Logo-LINE.svg'); // Adjust path if necessary
const Line = () => {
  return (
<div>

<Helmet>
      <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/integrations/line" />
      <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/integrations/line" />
      <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/integrations/line" />
      <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/integrations/line" />
      <link rel="alternate" hreflang="en-in" href="https://anantya.ai/integrations/line" />
      <link rel="alternate" hreflang="en" href="https://anantya.ai/integrations/line" />

      <title>Integrate LINE with Whatsapp Business | Anantya.ai</title>
      <meta name="robots" content="index,follow" />
      <meta name="title" content="Integrate LINE with Whatsapp Business | Anantya.ai" />
      <meta name="description" content="Anantya.ai supports the LINE messaging API, helping businesses reach millions of users with Conversational AI-powered chatbots." />
      <meta name="keywords" content="Line messaging integration with whatsapp" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:locale" content="en_SA" />
      <meta property="og:locale" content="en_BH" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content="Integrate LINE with Whatsapp Business | Anantya.ai" />
      <meta property="og:description" content="Anantya.ai supports the LINE messaging API, helping businesses reach millions of users with Conversational AI-powered chatbots." />
      <meta property="og:url" content="https://anantya.ai/integrations/line" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/icons/Logo-LINE.svg" />
      <link rel="canonical" href="https://anantya.ai/integrations/line" />
      <meta name="author" content="Anantya" />
      
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

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/integrations/line",
            "name": "Integrate LINE with Whatsapp Business | Anantya.ai"
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
                "name": "Line",
                "item": "https://anantya.ai/integrations/line"
              }
            ]
          }
        `}
      </script>
    </Helmet>

    <div className="py-5" style={{ background: 'linear-gradient(180deg, #e7f1f5, #fff 100%, #fff)' }}>
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
              <h1 className="category-title integration">LINE</h1>
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
        <p>Leverage teams of agents to engage with your audience, generate leads, and foster enduring
                        customer relationships on the most popular messaging channel in Japan, Taiwan, and Thailand.</p>
                    <ul>
                        <li>Handling inbound conversations - Extend warm welcomes to customers, provide information
                            about availability, and direct them to the appropriate agent or department for assistance.
                        </li>
                        <li>Responding to chats - Seamlessly transfer customers, create support tickets, or process
                            orders promptly to ensure customer satisfaction.
                        </li>
                        <li>Conversation Supervision and Reporting - Evaluate agent performance, maintain complete
                            visibility over conversations, and intervene as needed to uphold service standards.
                        </li>
                        <li>Marketing Analytics - Assess campaign effectiveness and strategize for improvement to
                            maximize marketing impact.
                        </li>
                        <li>Transactional notifications - Keep customers informed with timely updates such as
                            appointment reminders, payment receipts, and delivery updates.
                        </li>
                        <li>Business process implementation - Tailor Facebook Messenger to suit your business needs and
                            optimize operational efficiency.
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

export default Line;
