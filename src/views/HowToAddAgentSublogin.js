import React from 'react';
import InnerHeader from '../components/common/InnerHeader';
import stepImg1 from '../assets/images/fill-out-the-form.webp'; // Adjust the path based on your folder structure
import stepImg2 from '../assets/images/set-a-strong-password.webp';

import './knowledgecenter.css'; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const HowToAddAgentSublogin = () => {
  return (
    <div className="page-content">
    <div>
      <InnerHeader />
    </div>
    <main className="career-details-page style-5 pt-100">
    <section className="jop-details pb-100">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-8">
              <div className="jop-info py-5">
                <div className="tags mb-40">
                  <a href="#">Auto assign chat</a>
                  <a href="#">Agent Sublogin</a>
                </div>
                <h3 className="main-title mb-10">
                  How to Add Agent Sublogin: A Step-by-Step Guide
                </h3>
                <p className="pb-40 color-999">
                  By <a href="#" className="color-000">Deepika Yadav</a>
                </p>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Enabling multiple agents to log in to the same account and reach customers on WhatsApp Web and Mobile is a fantastic way to improve your customer support experience.</p>
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>As the owner, you can add multiple agents and assign roles to those agents in the Anantya.ai Panel easily.</p>
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>In this tutorial, you'll learn how to assign roles to agents in the Anantya.ai Panel.</p>
                </div>
                <h3 className="main-title mt-40">Steps to Create Agents in Anantya.ai Panel</h3>
                <h6 className="mt-40 mb-20">Step 1: Access the Agent Section</h6>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>First, log in as the owner of the account. Once you're in, look to the left side of your screen for the "Agents" section.</p>
                </div>
                <h6 className="mt-40 mb-20">Step 2: Create a New Agent</h6>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>In the "Agent" section, you'll either see a list of existing agents or an empty agent dashboard. To add a new agent, locate the "Create Agent" button in the top right corner of the page and click on it.</p>
                </div>
                <div className="text-center">
                  <img src={stepImg1} className="img-fluid pb-3 mx-auto" alt="Fill Out the Form" />
                </div>
                <h6 className="mt-40 mb-20">Step 3: Fill Out the Form</h6>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>After clicking "Create Agent," a new window will pop up, requesting information about the agent you're adding.</p>
                </div>
                <div className="text-center">
                  <img src={stepImg2} className="img-fluid pb-3 mx-auto" alt="Set a Strong Password" />
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p><strong className="color-000">Choose Role Type:</strong> Decide whether this person will be a regular agent or an agent head, who oversees others.</p>
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p><strong className="color-000">Select Reporting Structure:</strong> Specify who this new agent will report to or work under within your organization.</p>
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p><strong className="color-000">Provide Official Information:</strong> Fill in all the necessary details about the agent, ensuring accuracy.</p>
                </div>
                <div className="text d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p><strong className="color-000">Set a Strong Password:</strong> Create a secure password for the new agent to use.</p>
                </div>
                <div className="text-center">
                  <img src={stepImg2} className="img-fluid pb-3 mx-auto" alt="Set a Strong Password" />
                </div>
                <div className="text-start d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Once you've double-checked that all the information is correct, look for the button to finalize the agent creation. Click it.</p>
                </div>
                <div className="text-start d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p><strong className="color-000">Well done!</strong> You've added the sub-agent to the agent section and created a new agent with the details you provided. Remember to keep the login information safe and share it only with the new agent in a secure way.</p>
                </div>
                <div className="text-start d-flex mb-20">
                  <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Now that you've successfully created a sub-agent, learn more about how to assign chats to these agents.</p>
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
  );
};

export default HowToAddAgentSublogin;
