// src/views/LaunchCampaign.js
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

import welcomeBackground from '../assets/images/inner5_back.png';
import welcomeImage from '../assets/images/integration.webp';

import articleImage4 from '../assets/images/article-4.png';
const LaunchCampaign = () => {
  return (
    <div>
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
                    How to Launch Your First Campaign - Step-by-Step Guide
                  </h3>
                

                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Launching your very first campaign can be both exciting and a bit overwhelming.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Whether you're trying to promote a product, raise awareness for a cause, or spread the word about an event, here is a step-by-step guide to launch your first campaign.
                    </p>
                  </div>

                  {/* ---------- */}
                  <h6 className="mt-40 mb-20">Step 1: Set Up Your WhatsApp Broadcast Campaign</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Access the Campaigns Page:</strong> Log in to Anantya.ai Panel and navigate to the Campaigns Page.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Create a New Campaign:</strong> Look for the "Add Campaign" button located at the top right corner of the page. Click on it to start a new campaign.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Channel and Campaign Name:</strong> Choose a meaningful channel name that identifies the purpose of your campaign. Then, give your campaign a clear and concise name that reflects its content.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/broadcast-campaign.webp" className="img-fluid pb-3 mx-auto" alt="Broadcast Campaign" />
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Select a Template:</strong> Choose a pre-approved template for your campaign.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Pre-approved Template Messages are the different message templates that you got approved from WhatsApp according to different use cases. This includes Images, Text, Videos, PDFs, CTAs, and Quick Replies.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      These messages can be sent to both Active users (who are in the 24 hours window) and Inactive users.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Import or Download Contacts:</strong> You have two options for adding contacts. You can import a list of contacts from a file, or you can use a sample format provided by the platform. This list should include the phone numbers of the recipients.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Set Up Campaign:</strong> Follow the steps to configure your WhatsApp Broadcast campaign. This may include scheduling the send time, setting up any necessary personalization, and crafting the content of your message.
                    </p>
                  </div>
                  <h6 className="mt-40 mb-20">Step 2: Validate and Review Contacts</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Select Attributes:</strong> This step involves identifying attributes or fields in your contact list that you want to use for personalization. This could include names, locations, or any other relevant information.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Validate Mapping:</strong> Ensure that the attributes you've selected match the corresponding fields in your contact list. This step helps avoid errors in personalization.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Check Validity:</strong> The platform will display the number of valid and invalid contacts in your list. Review this information to ensure your message reaches the intended recipients.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/validate-and-review-contacts.webp" className="img-fluid pb-3 mx-auto" alt="Validate and Review Contacts" />
                  </div>
                  <h6 className="mt-40 mb-20">Step 3: Review and Submit</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      The platform might provide a mechanism to determine the likelihood of recipients engaging with your message. This helps you assess the potential effectiveness of your campaign.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Submit Your Campaign:</strong> After reviewing all the previous steps and ensuring everything is set up correctly, click on the "Submit" button to finalize your campaign setup.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/review-and-submit.webp" className="img-fluid pb-3 mx-auto" alt="Review and Submit" />
                  </div>
                  <h6 className="mt-40 mb-20">Step 4: Monitor and Optimize</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Monitor Campaign Performance:</strong> Use the analytics tools provided by the platform to track the performance of your campaign. This may include open rates, click-through rates, and other relevant metrics.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      <strong className="color-000">Optimize for Better Results:</strong> Based on the performance data, make adjustments to your campaign for better results. This might involve tweaking your message, targeting, or scheduling.
                    </p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/monitor-and-optimize.webp" className="img-fluid pb-3 mx-auto" alt="Monitor and Optimize" />
                  </div>
                </div>
              </div>
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

export default LaunchCampaign;
