import React from 'react';
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/common/InnerHeader';
import './knowledgecenter.css'; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { getImage } from '../utils/getImage'; // Adjust the path as needed

// Fetching images dynamically using the getImage function
const broadcastImg = getImage('broadcast-campaign.webp');
const validateImg = getImage('validate-and-review-contacts.webp');
const reviewImg = getImage('review-and-submit.webp');
const monitorImg = getImage('monitor-and-optimize.webp');


const HowToLaunchFirstCampaign = () => {
  return (
    <>
    <Helmet>
            <title>How to Launch Your First Campaign in Anantya.ai | Knowledge Center</title>
            <meta name="robots" content="index,follow" />
            <meta name="description" content="Step-by-step guide to launch your first campaign in Anantya.ai" />
            <meta property="og:title" content="How to Launch Your First Campaign in Anantya.ai" />
            <meta property="og:type" content="article" />
            <meta property="og:description" content="Step-by-step guide to launch your first campaign in Anantya.ai" />
            <meta property="og:url" content="https://anantya.ai/how-to-launch-first-campaign-in-anantya.ai" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://anantya.ai/assets/img/broadcast-campaign.webp" />
            <link rel="canonical" href="https://anantya.ai/how-to-launch-first-campaign-in-anantya.ai" />
            <meta name="author" content="Anantya.ai" />

           
        </Helmet>
    
    <div className="page-content">
    <div>
      <InnerHeader />
    </div>
    <main className="career-details-page my-5 style-5 pt-100">
    <section className="jop-details pb-100">
      <div className="container py-5 ">
        <div className="content">
          <div className="row">
          <div className="col-lg-8">
          <div className="jop-info text-start">
            <div className="tags mb-40">
              <a href="/contact">Auto assign chat</a>
              <a href="/contact">Agent Sublogin</a>
            </div>
            <h3 className="main-title mb-10">
              How to Launch Your First Campaign - Step-by-Step Guide
            </h3>
            <p className="pb-40 color-999">
                  By <span className="color-000">Deepika Yadav</span>
                  </p>


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

            <h6 className="mt-4 mb-20">Step 1: Set Up Your WhatsApp Broadcast Campaign</h6>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Access the Campaigns Page:</strong> Log in to Anantya.ai Panel and navigate to the Campaigns Page.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Create a New Campaign:</strong> Look for the "Add Campaign" button located at the top right corner of the page. Click on it to start a new campaign.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Channel and Campaign Name:</strong> Choose a meaningful channel name that identifies the purpose of your campaign. Then, give your campaign a clear and concise name that reflects its content.</p>
            </div>
            <div className="text-center">
              <img src={broadcastImg} className="img-fluid pb-3 mx-auto" alt="Broadcast Campaign" />
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Select a Template:</strong> Choose a pre-approved template for your campaign.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p>Pre-approved Template Messages are the different message templates that you got approved from WhatsApp according to different use cases. This includes Images, Text, Videos, PDFs, CTAs, and Quick Replies.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p>These messages can be sent to both Active users (who are in the 24 hours window) and Inactive users.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Import or Download Contacts:</strong> You have two options for adding contacts. You can import a list of contacts from a file, or you can use a sample format provided by the platform. This list should include the phone numbers of the recipients.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Set Up Campaign:</strong> Follow the steps to configure your WhatsApp Broadcast campaign. This may include scheduling the send time, setting up any necessary personalization, and crafting the content of your message.</p>
            </div>

            <h6 className="mt-4 mb-20">Step 2: Validate and Review Contacts</h6>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Select Attributes:</strong> This step involves identifying attributes or fields in your contact list that you want to use for personalization. This could include names, locations, or any other relevant information.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Validate Mapping:</strong> Ensure that the attributes you've selected match the corresponding fields in your contact list. This step helps avoid errors in personalization.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Check Validity:</strong> The platform will display the number of valid and invalid contacts in your list. Review this information to ensure your message reaches the intended recipients.</p>
            </div>
            <div className="text-center">
              <img src={validateImg} className="img-fluid pb-3 mx-auto" alt="Validate and Review Contacts" />
            </div>

            <h6 className="mt-4 mb-20">Step 3: Review and Submit</h6>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p>The platform might provide a mechanism to determine the likelihood of recipients engaging with your message. This helps you assess the potential effectiveness of your campaign.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Submit Your Campaign:</strong> After reviewing all the previous steps and ensuring everything is set up correctly, click on the "Submit" button to finalize your campaign setup.</p>
            </div>
            <div className="text-center">
              <img src={reviewImg} className="img-fluid pb-3 mx-auto" alt="Review and Submit" />
            </div>

            <h6 className="mt-4 mb-20">Step 4: Monitor and Optimize</h6>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Monitor Campaign Performance:</strong> Once your campaign is live, monitor its performance through the campaign management platform. Track metrics like open rates, click-through rates, and responses.</p>
            </div>
            <div className="text d-flex mb-20">
              <span className="icon color-blue5 me-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <p><strong className="color-000">Engagement Analysis:</strong> Analyze the engagement data to understand which aspects of your campaign are resonating with your audience and which may need improvement.</p>
            </div>
            <img src={monitorImg} className='img-fluid pb-3 mx-auto' alt="Monitor Campaign Performance" />

           
            <div class="text d-flex mb-20">
                                    <span class="icon color-blue5 me-2 flex-shrink-0"> <i class="fas fa-check-circle"></i> </span>
                                    <p> To know more about how you can monitor your campaigns. Click Here. </p>
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

export default HowToLaunchFirstCampaign;
