// src/views/AutoAssignChats.js
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

import welcomeBackground from '../assets/images/inner5_back.png';
import welcomeImage from '../assets/images/integration.webp';
import articleImage4 from '../assets/images/article-4.png';
const AutoAssignChats = () => {
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
                  <div className="tags mb-40">
                    <a href="#">Auto assign chat</a>
                    <a href="#">Agent Sublogin</a>
                  </div>
                  <h3 className="main-title mb-10">
                    How to Auto Assign Chats - Step-by-Step Guide
                  </h3>
                  <p className="pb-40 color-999">
                    By <a href="#" className="color-000">Deepika Yadav</a>
                  </p>

                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      With the 'Auto Assign' feature, you can set a special label for an Agent. This label will make sure the agent only sees chats that have that same label.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Here's an example - Let's say there are 100 Chats happening in Live Chat, but only 20 of them are labeled as 'Payment'. Now, you give the label 'Payment' to a particular Agent.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>What happens next?</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      By giving this label, the agent will only work on chats that are also labeled as 'Payment'. So, the agent will only see and work on those 20 chats that are about 'Payment'.
                    </p>
                  </div>

                  <h6 className="mt-40 mb-20">Step 1. Go to the Auto Assign Section</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Navigate to Auto Assign: On the left side of the dashboard, you'll find various options. Look for and click on the "Auto Assign" section.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Review Existing Actions: Once you're in the "Auto Assign" section, you might see a list of existing actions if any have been set up previously. If it's your first time using this feature, the dashboard may be empty.
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      Add a New Auto Assign Rule: In the top right corner of the page, locate and click the "Add Auto Assign" button.
                    </p>
                  </div>

                  <div className="text-center">
                    <img src="assets/img/auto-assign-section.webp" className="img-fluid pb-3 mx-auto" alt="Auto Assign Section" />
                  </div>

                  <h6 className="mt-40 mb-20">Step 2. Click on Add Auto Assign</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>
                      After clicking "Add Auto Assign," a new dialog box will appear, you need to fill the form completely. Here's how to fill out the necessary information:
                    </p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Select the Channel: Choose the communication channel for which you want to set up auto assignment.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Choose an Agent: Select an agent from the list of available agents in your system. This agent will be responsible for handling chats that meet the specified criteria.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Assign a Label: Apply a label to this auto assign rule. Labels help you easily identify and manage different rules. In this case, you can label it as 'Payment' to indicate that this rule is for chats related to payments.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Set Contact Limit: Determine the maximum number of chats you want to auto assign to the chosen agent. For instance, if you want to limit it to 20 chats, enter "20" in the contact limit field.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Save the Rule: After configuring all the details, review your settings to ensure they are accurate. Then, click the "Save" or "Create" button to save the auto assign rule.</p>
                  </div>

                  <div className="text-center">
                    <img src="assets/img/click-on-add-auto-assign.webp" className="img-fluid pb-3 mx-auto" alt="Click on Add Auto Assign" />
                  </div>

                  <h6 className="mt-40 mb-20">Step 3: Monitor the Labels and Agents</h6>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>Monitor Assigned Chats: The agent you've assigned the 'Payment' label to will now only see and handle chats that match the 'Payment' criteria. Regularly check the dashboard to monitor the assigned chats and agent performance.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <p>By following these steps, you can effectively use the "Auto Assign" feature to streamline your chat handling and ensure that the right agent is handling the right chats, leading to improved customer support and efficiency.</p>
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
</div>
  );
};

export default AutoAssignChats;
