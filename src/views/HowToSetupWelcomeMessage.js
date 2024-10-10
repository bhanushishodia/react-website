import React from "react";
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/common/InnerHeader';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const articleImg1 = getImage('article-1.png');
const articleImg2 = getImage('article-2.png');
const articleImg3 = getImage('article-3.png');
const articleImg4 = getImage('article-4.png');
const HowToSetupWelcomeMessage = () => {
  return (
    <>
  
    <Helmet>
      {/* Alternate links */}
      <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <link rel="alternate" hreflang="en-in" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <link rel="alternate" hreflang="en" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />

      {/* Meta tags */}
      <title>How to setup a Welcome message on WhatsApp Business</title>
      <meta name="robots" content="index,follow" />
      <meta name="title" content="How to setup a Welcome message on WhatsApp Business" />
      <meta name="description" content="How to setup a Welcome message on WhatsApp Business API Step-by-Step Guide" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="How to setup a Welcome message on WhatsApp Business" />
      <meta property="og:description" content="How to setup a Welcome message on WhatsApp Business API Step-by-Step Guide" />
      <meta property="og:url" content="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/article-1.png" />
      <link rel="canonical" href="https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai" />
      <meta name="author" content="Anantya.ai" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`{
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
        }`}
      </script>

      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "WebPage",
          "@id": "#WebPage",
          "url": "https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai",
          "name": "How to setup a Welcome message on WhatsApp Business"
        }`}
      </script>

      <script type="application/ld+json">
        {`{
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
              "name": "How to setup a Welcome message on WhatsApp Business",
              "item": "https://anantya.ai/how-to-setup-a-welcome-message-on-anantya-ai"
            }
          ]
        }`}
      </script>
    </Helmet>
  
    <div className="page-content">
     <div>
      <InnerHeader />
    </div>
    <main className="career-details-page my-5 style-5 pt-100">
      <section className="jop-details pb-100">
        <div className="container py-5">
          <div className="content">
            <div className="row">
              <div className="col-lg-8">
                <div className="jop-info text-start">
                  <div className="tags mb-40">
                    <a href="/contact">Auto assign chat</a>
                    <a href="/contact">Agent Sublogin</a>
                  </div>
                  <h3 className="main-title mb-10 pt-3">
                    How to Set Up a Welcome Message: Step-by-Step Guide
                  </h3>
                  <p className="pb-40 color-999">
    By <span className="color-000">Deepika Yadav</span>
</p>

                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      A welcome message is a great way to instantly greet users and provide them with a positive first interaction when they connect with your platform.
                    </p>
                  </div>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Set up a welcome message that gets sent when new customers contact your business for the first time, or when existing users reach out after 24 hours.
                    </p>
                  </div>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Follow this comprehensive step-by-step guide to establish an automatic welcome message for your users.
                    </p>
                  </div>
                  <h6 className="mt-4 mb-2">Step 1: Go to Bot Setup</h6>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Navigate to the 'Bot Setup' section on your Anantya.ai Panel. Select 'Welcome Message' within the 'Bot Setup' section, locate and click on the option labeled 'Welcome Message.' This is where you'll configure your welcome message settings.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={articleImg1} className="img-fluid pb-3 mx-auto" alt="Bot Setup" />
                  </div>
                  <h6 className="mt-4 mb-2">Step 2: Add a Welcome Message</h6>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      In this step, you'll create and add your welcome message. Click on the 'Add Welcome Message' button to proceed.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={articleImg2} className="img-fluid pb-3 mx-auto" alt="Add Welcome Message" />
                  </div>
                  <h6 className="mt-4 mb-2">Step 3: Setup Your Message</h6>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Now, you have the choice of selecting a pre-approved message template or creating a customized welcome message tailored to your users.
                    </p>
                  </div>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Depending on your preferences, you can set up a regular text message, an image message, a video message, or even send a file as part of your welcome greeting.
                    </p>
                  </div>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Compose the content of your welcome message. If you're opting for a text message, write a warm and engaging greeting that resonates with your audience.
                    </p>
                  </div>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      For media messages like images, videos, or files, ensure they align with your brand's identity and message.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={articleImg3} className="img-fluid pb-3 mx-auto" alt="Setup Your Message" />
                  </div>
                  <h6 className="mt-4 mb-2">Step 4: Submit Your Welcome Message</h6>
                  <div className="text d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Once you're satisfied with your welcome message, click the 'Submit' button to save your settings and activate the welcome message feature.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={articleImg4} className="img-fluid pb-3 mx-auto" alt="Submit Your Message" />
                  </div>
                  <div className="text-start d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Congratulations! You've successfully set up your welcome message.</p>
                  </div>
                  <div className="text-start d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>From this point, you have the flexibility to manage your welcome messages.</p>
                  </div>
                  <div className="text-start d-flex mb-2">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>In short, a welcome message is a kind way to say hi to new people. With these easy steps, you can make one and make people smile when they join!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="summary-card">
                  <h6 className="mb-2 pb-4 border-bottom border-1 brd-gray">Anantya Platform</h6>
                  <ul>
                    <li><a href="how-to-setup-a-welcome-message-on-anantya.ai">How to Set Up a Welcome Message</a></li>
                    <li><a href="how-to-add-agent-sublogin">How to Add Agent Sublogin</a></li>
                    <li><a href="how-to-launch-first-campaign-in-anantya.ai">How to Launch Your Campaign</a></li>
                    <li><a href="how-to-enable-whatsapp-out-of-office-message">How to Enable WhatsApp Out-of-Office Message</a></li>
                    <li><a href="how-to-auto-assign-chats">How to Auto Assign Chats - Step-by-Step Guide</a></li>
                    <li><a href="how-to-create-whatsapp-templete-messages-in-anantya.ai">How to Create Your First WhatsApp Template Messages in Anantya.ai</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      {/* Add more sections as needed */}
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default HowToSetupWelcomeMessage;
