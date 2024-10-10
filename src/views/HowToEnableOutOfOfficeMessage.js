import React from 'react';
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/common/InnerHeader';
import './knowledgecenter.css'; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const goToBotSetupImage = getImage('go-to-bot-setup.webp');
const addAwayMessageImage = getImage('add-a-away-message.webp');
const setupYourMessageImage = getImage('setup-your-message.webp');
const submitYourAwayMessageImage = getImage('submit-your-away-message.webp');

const OutOfOffice = () => {
  return (
    <>
       <Helmet>
        {/* Alternate Links */}
        <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <link rel="alternate" hreflang="en-in" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <link rel="alternate" hreflang="en" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        
        {/* Page Title and Meta Tags */}
        <title>How to Enable WhatsApp Out-of-Office Message in Whatsapp Business</title>
        <meta name="robots" content="index,follow" />
        <meta name="title" content="How to Enable WhatsApp Out-of-Office Message in Whatsapp Business" />
        <meta name="description" content="How to Enable WhatsApp Out-of-Office Message in Whatsapp Business" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Enable WhatsApp Out-of-Office Message in Whatsapp Business" />
        <meta property="og:description" content="How to Enable WhatsApp Out-of-Office Message in Whatsapp Business" />
        <meta property="og:url" content="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        <meta property="og:site_name" content="anantya.ai" />
        <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/anantya-home-page.webp" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://anantya.ai/how-to-enable-whatsapp-out-of-office-message" />
        
        {/* Author Meta Tag */}
        <meta name="author" content="Anantya.ai" />

        {/* Organization Schema */}
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

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            "url": "https://anantya.ai/how-to-enable-whatsapp-out-of-office-message",
            "name": "How to Enable WhatsApp Out-of-Office Message in Whatsapp Business"
          }
          `}
        </script>

        {/* Breadcrumb Schema */}
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
                "name": "How to Enable WhatsApp Out-of-Office Message in Whatsapp Business",
                "item": "https://anantya.ai/how-to-enable-whatsapp-out-of-office-message"
              }
            ]
          }
          `}
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
        <h3 className="main-title mb-10">How to Enable WhatsApp Out-of-Office Message: Step-by-Step Guide</h3>
        <p className="pb-40 color-999">
    By <span className="color-000">Deepika Yadav</span>
</p>


        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>This feature will allow you to automate a message from WhatsApp Chatbot to people who contact you outside working hours.</p>
        </div>

        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            So, Whenever a user messages you outside working hours, your WhatsApp Chat Bot will automate a message stating that the business will contact them later.
          </p>
        </div>

        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Follow this comprehensive step-by-step guide to enable an Out-of-Office message for your users.</p>
        </div>

        {/* Step 1 */}
        <h6 className="mt-40 mb-20">Step 1: Go to Bot Setup</h6>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Navigate to the 'Bot Setup' section on your Anantya.ai Panel. Select 'Away Message'.</p>
        </div>

        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Within the 'Bot Setup' section, locate and click on the option labeled 'Away Message.' This is where you'll configure your welcome message settings.</p>
        </div>

        <div className="text-center">
          <img src={goToBotSetupImage} className="img-fluid pb-3 mx-auto" alt="Go to Bot Setup" />
        </div>

        {/* Step 2 */}
        <h6 className="mt-40 mb-20">Step 2: Add an Away Message</h6>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>In this step, you'll create and add your away message. Click on the 'Add Away Message' button to proceed.</p>
        </div>

        <div className="text-center">
          <img src={addAwayMessageImage} className="img-fluid pb-3 mx-auto" alt="Add Away Message" />
        </div>

        {/* Step 3 */}
        <h6 className="mt-40 mb-20">Step 3: Setup Your Message</h6>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Begin by choosing the communication channel.</p>
        </div>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Select the specific days you'll be using an away message.</p>
        </div>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Set your opening and closing hours for each day.</p>
        </div>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>If you receive messages beyond your closing time, an automatic away message will be triggered.</p>
        </div>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Create a friendly and relatable message for your audience.</p>
        </div>
        <div className="text d-flex mb-10">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>If using multimedia, ensure images and videos align with your brand.</p>
        </div>

        <div className="text-center">
          <img src={setupYourMessageImage} className="img-fluid pb-3 mx-auto" alt="Setup Your Message" />
        </div>

        {/* Step 4 */}
        <h6 className="mt-40 mb-20">Step 4: Submit Your Away Message</h6>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Once you're satisfied with your away message, click the 'Submit' button to save your settings and activate the away message feature.</p>
        </div>

        <div className="text-center">
          <img src={submitYourAwayMessageImage} className="img-fluid pb-3 mx-auto" alt="Submit Your Away Message" />
        </div>

        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Congratulations! You've successfully set up your away message.</p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>From this point, you have the flexibility to manage your away messages.</p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Now you can always change your message to keep things fresh. You can also hide messages if you don't need them anymore.</p>
        </div>
      </div>
          </div>
      
         
            <div className="col-lg-4">
              <div className="summary-card">
                <h6 className="mb-20 pb-4 border-bottom border-1 brd-gray">Anantya Platform</h6>
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

export default OutOfOffice;
