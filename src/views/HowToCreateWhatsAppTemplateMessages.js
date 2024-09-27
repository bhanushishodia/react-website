import React from 'react';
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/common/InnerHeader';
import submitTemplateMessageImage from "../assets/images/submit-a-new-whatsApp-template-message.webp";
import customizeTemplateMessageImage from "../assets/images/customize-the-template-message.webp";
import templateMessageImage from "../assets/images/template-message.webp";
import templateApprovalImage from "../assets/images/template-message-for-approval.webp";

import './knowledgecenter.css'; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const TemplateMessages = () => {
  return (
    <>
     <Helmet>
            <title>How to Create Your Whatsapp Template Messages in Anantya.ai | Knowledge Center</title>
            <meta name="robots" content="index,follow" />
            <meta name="description" content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!" />
            <meta property="og:title" content="How to Create Your Whatsapp Template Messages in Anantya.ai | Knowledge Center" />
            <meta property="og:type" content="article" />
            <meta property="og:description" content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!" />
            <meta property="og:url" content="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya.ai" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://anantya.ai/assets/img/submit-a-new-whatsApp-template-message.webp" />
            <link rel="canonical" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya.ai" />
            <meta name="author" content="Anantya.ai" />

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "How to Create Your Whatsapp Template Messages in Anantya.ai | Knowledge Center",
                    "description": "Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!",
                    "url": "https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya.ai"
                })}
            </script>
        </Helmet>
    <div className="page-content">
    <div>
      <InnerHeader />
    </div>
    <main className="career-details-page style-5 pt-100">
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
          <p>1. Begin by choosing the communication channel.</p>
        </div>
        {/* Add more steps here like in the original HTML */}
        <div className="text-center">
          <img
            src={templateMessageImage}
            className="img-fluid pb-3 mx-auto"
            alt="Template Message"
          />
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
