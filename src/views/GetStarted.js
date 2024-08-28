import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="content-wrapper">
        <div className="get-started-content">
          <h1>Get Started</h1>
          <p>
            Ready to start your journey with Anantya? Follow the steps below to get up and running with our services.
          </p>
          <h2>Step 1: Sign Up</h2>
          <p>
            Create an account by filling out our <a href="/signup" className="link">sign-up form</a>. You will receive a confirmation email once your account is created.
          </p>
          <h2>Step 2: Setup Your Profile</h2>
          <p>
            After signing up, log in to your account and complete your profile setup. This includes adding necessary information and preferences.
          </p>
          <h2>Step 3: Explore Our Services</h2>
          <p>
            Navigate through our platform to explore the various services and features we offer. Use the <a href="/guide" className="link">user guide</a> for assistance.
          </p>
          <h3>Need Help?</h3>
          <p>
            If you need help at any stage, our support team is available at <a href="mailto:support@anantya.ai" className="link">support@anantya.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
