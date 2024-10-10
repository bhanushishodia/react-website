import React from 'react';
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/common/InnerHeader';
import './knowledgecenter.css'; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const submitTemplateMessageImage = getImage('submit-a-new-whatsApp-template-message.webp');
const customizeTemplateMessageImage = getImage('customize-the-template-message.webp');
const templateMessageImage = getImage('template-message.webp');
const templateApprovalImage = getImage('template-message-for-approval.webp');


const TemplateMessages = () => {
  return (
    <>
     (
        <Helmet>
            {/* Alternate links */}
            <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <link rel="alternate" hreflang="en-in" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <link rel="alternate" hreflang="en" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />

            {/* Title and meta tags */}
            <title>How to Create Your Whatsapp Template Messages in Anantya.ai</title>
            <meta name="robots" content="index,follow" />
            <meta name="title" content="How to Create Your Whatsapp Template Messages in Anantya.ai" />
            <meta name="description" content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="How to Create Your Whatsapp Template Messages in Anantya.ai" />
            <meta property="og:description" content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!" />
            <meta property="og:url" content="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/anantya-home-page.webp" />
            <link rel="canonical" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai" />
            <meta name="author" content="Anantya.ai" />

            {/* JSON-LD structured data */}
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
                }
                `}
            </script>

            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    "@id": "#WebPage",
                    "url": "https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai",
                    "name": "How to Create Your Whatsapp Template Messages in Anantya.ai"
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
                            "name": "How to Create Your Whatsapp Template Messages in Anantya.ai",
                            "item": "https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya-ai"
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
        <h3 className="main-title mb-10">
          How to Create Your First WhatsApp Template Messages in Anantya.ai:
          Step-by-Step Guide
        </h3>
        <p className="pb-40 color-999">
    By <span className="color-000">Deepika Yadav</span>
</p>


        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            WhatsApp Template Messages is a predefined message that you can use
            multiple times to connect with your audience once they've opted-in
            to receive a message from you. To send these templates to users,
            businesses need to get approval from WhatsApp.
          </p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            Usually, it takes between 1 minute to 24 hours for WhatsApp template
            messages to be approved.
          </p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            WhatsApp Template Messages can be in formats like Text, Image, File,
            or Video. Every format must include Text, which is necessary. This
            means sending only Images, Files, or Videos as Template Messages is
            not allowed.
          </p>
        </div>

        <h3 className="main-title mb-10">
          How to submit a New WhatsApp Template Message?
        </h3>

        <h6 className="mt-4 mb-20">
          Step 1- Navigate to the 'Templates' section on your Anantya.ai Panel.
          click on the “Add Template Message” button on the top right corner.
        </h6>

        <div className="text-center">
          <img
            src={submitTemplateMessageImage}
            className="img-fluid pb-3 mx-auto"
            alt="Submit Template"
          />
        </div>

        <h6 className="mt-4 mb-20">Step 2- Customize the Template Message</h6>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            You can start creating a template from scratch or choose a
            pre-approved Template message and submit it for approval.
          </p>
        </div>

        <div className="text-center">
          <img
            src={customizeTemplateMessageImage}
            className="img-fluid pb-3 mx-auto"
            alt="Customize Template"
          />
        </div>

        <h6 className="mt-4 mb-20">
          Fill all the fields and the format of the input text to create a new
          template–
        </h6>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p> Begin by choosing the communication channel.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p> Select the appropriate template category.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>WhatsApp Template Messages offer various categories to suit different usage scenarios.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Utility: Messages oriented towards transaction confirmations, cancellations, or subscriptions.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Authentication: Messages containing one-time passwords (OTPs) and login codes for user verification.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Marketing: Messages encompassing a business's products and services promotion, excluding transaction-related content.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>You have the option to select the language for your WhatsApp template message from a wide range of global languages and vernacular options. Please note that you can only choose a single language for each template message.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Provide a name for your template. Ensure that the Template Name matches the Template Label. Make a few adjustments, such as starting with a lowercase letter and replacing spaces with underscores. For instance, use names like 'account_update', 'otp_verification', etc.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Add a title or choose the type of media you want for the header. This sets the kind of WhatsApp template message you're sending, like TEXT, IMAGE, VIDEO, or FILE.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Remember, you can't just send images alone. You need to include text with images, videos, or files.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Remember, the media file has to come with some text. You can't only send Images, Files, or Videos. TEXT is a must because WhatsApp's approval depends on the text.</p>
        </div>
        {/* Add more steps here like in the original HTML */}
        <div className="text-center">
          <img
            src={templateMessageImage}
            className="img-fluid  mx-auto"
            alt="Template Message"
          />
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Write down the template message that you plan to send to users once it's approved by WhatsApp in the text box.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>FORMAT – The template message should not be more than 1024 characters.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p> Add a short line of text to the bottom of your message template.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Create buttons that let customers respond to your message or take action</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>If there are no interactive actions needed, just select 'None'. You can choose to add either 'CTAs' or 'Quick Replies' to a WhatsApp Template Message, but you can't have both within a single Template Message.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Call to Actions: There are two types of Call to Action buttons - URL and Phone Number. A template message can contain a URL, a Phone Number, or both a URL and a Phone Number as CTAs. However, you cannot include two CTAs of the same type within a single template message.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Quick Replies: These buttons enable interactive actions for user responses. When a user clicks on these buttons, the button text becomes the user's message.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>A template message can include up to 3 Quick Replies (as limited by Facebook), each with a maximum of 20 characters.</p>
        </div>
        <div className="text d-flex">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>WhatsApp template messages featuring Quick Reply buttons are useful for gathering feedback from customers or allowing them to choose between provided options.</p>
        </div>

        <h6 className="mt-4 mb-20">
          Step 3- Submit Template Message for Approval
        </h6>
        <div className="text-center">
          <img
            src={templateApprovalImage}
            className="img-fluid pb-3 mx-auto"
            alt="Template Approval"
          />
        </div>

        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>
            Usually, WhatsApp Template Messages are approved within a time frame
            of 1 minute to 24 hours!
          </p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>Upon submitting the Template Message, it goes directly to WhatsApp for approval, and its status changes to IN-REVIEW.
          </p>
        </div>
        <div className="text d-flex mb-20">
          <span className="icon color-blue5 me-2 flex-shrink-0">
            <i className="fas fa-check-circle"></i>
          </span>
          <p>If the Template Message adheres to WhatsApp's policies and rules, it receives an APPROVED status; otherwise, it is REJECTED.
          </p>
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

export default TemplateMessages;
