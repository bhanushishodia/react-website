// src/views/WhatsAppTemplateMessages.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/common/Breadcrumb';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const welcomeBackground = getImage('inner5_back.png');
const welcomeImage = getImage('integration.webp');


const WhatsAppTemplateMessages = () => {
  return (
    <div>
        <Helmet>
      {/* Title and Meta Tags */}
      <title>How to Create Your Whatsapp Template Messages in Anantya.ai | Knowledge Center</title>
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!"
      />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="How to Create Your Whatsapp Template Messages in Anantya.ai | Knowledge Center" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Learn all the important steps to make WhatsApp Template Messages and get them approved by WhatsApp in a single guide!"
      />
      <meta property="og:url" content="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya.ai" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/submit-a-new-whatsApp-template-message.webp" />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://anantya.ai/how-to-create-whatsapp-templete-messages-in-anantya.ai" />
      
      {/* Author */}
      <meta name="author" content="Anantya.ai" />
    </Helmet>
    <Breadcrumb
  links={[{ href: '#', text: 'Home' }, { href: '#', text: 'Welcome Message' }]}
  backgroundImage={welcomeBackground}
  title="Resources"
  sideImage={welcomeImage}
/>
<main className="career-details-page style-5 pt-100">
      {/* ====== start careers-features ====== */}
      <section className="jop-details pb-100">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-lg-8">
                <div className="jop-info">
                 
                  <h3 className="main-title mb-10">
                    How to Create Your First WhatsApp Template Messages in Anantya.ai: Step-by-Step Guide
                  </h3>
                 

                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      WhatsApp Template Messages is a predefined message that you can use multiple times to connect with your audience once they've opted-in to receive a message from you. To send these templates to users, businesses need to get approval from WhatsApp.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Usually, it takes between 1 minute to 24 hours for WhatsApp template messages to be approved.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      WhatsApp Template Messages can be in formats like Text, Image, File, or Video. Every format must include Text, which is necessary. This means sending only Images, Files, or Videos as Template Messages is not allowed.
                    </p>
                  </div>

                  <h3 className="main-title mb-10">How to submit a New WhatsApp Template Message?</h3>

                  {/* ---------- */}
                  <h6 className="mt-40 mb-20">Step 1- Navigate to the 'Templates' section on your Anantya.ai Panel. Click on the “Add Template Message” button on the top right corner.</h6>

                  <div className="text-center">
                    <img src="assets/img/submit-a-new-whatsApp-template-message.webp" className="img-fluid pb-3 mx-auto" alt="Submit a new WhatsApp template message" />
                  </div>

                  <h6 className="mt-40 mb-20">Step 2- Customize the Template Message</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>You can start creating a template from scratch or choose a pre-approved Template message and submit it for approval.</p>
                  </div>

                  <div className="text-center">
                    <img src="assets/img/customize-the-template-message.webp" className="img-fluid pb-3 mx-auto" alt="Customize the template message" />
                  </div>

                  <h6 className="mt-40 mb-20">Fill all the fields and the format of the input text to create a new template–</h6>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>1. Begin by choosing the communication channel.</p>
                  </div>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>2. Select the appropriate template category.</p>
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
                    <p>4. Provide a name for your template. Ensure that the Template Name matches the Template Label. Make a few adjustments, such as starting with a lowercase letter and replacing spaces with underscores. For instance, use names like 'account_update', 'otp_verification', etc.</p>
                  </div>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>5. Add a title or choose the type of media you want for the header. This sets the kind of WhatsApp template message you're sending, like TEXT, IMAGE, VIDEO, or FILE.</p>
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
                  <div className="text-center">
                    <img src="assets/img/template-message.webp" className="img-fluid pb-3 mx-auto" alt="Template message" />
                  </div>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>6. Write down the template message that you plan to send to users once it's approved by WhatsApp in the text box.</p>
                  </div>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>7. Use variables to customize the template for individual users. Insert placeholders in the text and give them names.</p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/variables-template-message.webp" className="img-fluid pb-3 mx-auto" alt="Variables template message" />
                  </div>
                  <h6 className="mt-40 mb-20">Step 3- Submit the Template</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>After completing the template creation, you need to submit it for approval. Anantya.ai will send the template for review, and you’ll be notified once it gets approved by WhatsApp.</p>
                  </div>
                  <div className="text d-flex">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>On average, approval can take between 1 minute to 24 hours.</p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/template-submit.webp" className="img-fluid pb-3 mx-auto" alt="Submit template" />
                  </div>
                </div>
              </div>

              {/* Sidebar or other content */}
              <div className="col-lg-4">
                <div className="summary-card">
                  <h6 className="mb-20 pb-20 border-bottom border-1 brd-gray">Anantya Platform</h6>
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
      {/* ====== end careers-features ====== */}
    </main>
{/* Add your content here */}
<ScrollToTopButton />
<WhatsAppWidget />
    </div>
  );
};

export default WhatsAppTemplateMessages;
