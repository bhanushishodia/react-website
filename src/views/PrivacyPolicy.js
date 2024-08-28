import React from "react";
import "./privacy-policy.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">    
      <div className="container">

      <div className="content-wrapper">
        <div className="privacy-content">
        <header>
          <h1 className="display-4">Privacy Policy</h1>
          <p>Effective Date: [Insert Date]</p>
          </header>
          <p className="intro-text">
            Safeguarding the personal information of our customers and visitors who use our website 
            <a href="./" className="link">
               http://www.anantya.ai/
            </a> and our offerings is really important to us.
          </p>
          <p className="intro-text">
            This Privacy Policy explains how Anantya.ai collects, uses, and shares information from people 
            (referred to as 'Users' or 'you') who use the ('Site'). The same rules apply to the Site and 
            all the products and services Anantya.ai provides. When we say 'we,' 'us,' or 'our,' we mean 
            Anantya.ai and Anantya.ai Corporate family.
          </p>
          <h2>SCOPE OF THIS PRIVACY POLICY</h2>
          <p className="text">
            This privacy policy is about your personal information, which means the details we get, use, 
            and share from you, as explained below. It applies to all Anantya.ai websites, products and 
            services. But it doesn't cover how our users use or share data they collect using our services.
          </p>
          <p className="text">
            When you use any of our products or Services, we collect, use, and share your personal information 
            as explained in this privacy policy. There are also specific agreements or contracts for some 
            of our products and services that you need to follow.
          </p>
          <h2>1. INFORMATION WE COLLECT FROM YOU</h2>
          <h3>Personal Identification Information</h3>
          <p className="text">
            We may gather personal identification information from users through various means in association 
            with our website, software, or other services (collectively referred to as "Services"). This could 
            encompass instances where users explore our platform, create accounts, or partake in other activities 
            facilitated by our Services. The information we might request includes, but is not limited to, your 
            name, email address, mailing address, phone number, and credit card details. It's important to note 
            that users are always at liberty to visit our platform without disclosing personal identification 
            information. However, opting not to provide such information voluntarily may potentially restrict your 
            engagement in certain activities associated with our Services.
          </p>
          <h4>Non-Personal Identification Information</h4>
          <p className="text">
            Whenever users interact with our platform, we may compile non-personal identification information. 
            This could comprise details like the type of browser you're using, the specific computer system you 
            operate, technical specifics about your connection to our platform (such as your operating system and 
            internet service provider), and analogous data.
          </p>
          <h4>Web Browser Cookies</h4>
          <p className="text">
            To enhance the user experience, our platform might employ "cookies." These are small data files that 
            a user's web browser places on their device's hard drive for purposes like record-keeping and occasionally 
            for tracking user-related information. Users can adjust their web browser settings to reject cookies or 
            to receive alerts when cookies are being transmitted. However, it's worth noting that certain parts of 
            our platform might not function optimally if cookies are disabled.
          </p>
          <h4>Anantya.ai's Business Products</h4>
          <p className="text">
            We develop apps, services, features, APIs, software, and websites that empower businesses to engage 
            with users of our products and services ("Business Products"). Partners (referred to as "data controllers") 
            may provide us with personal information pertaining to their customers using our Business Products. While 
            the decision of what information to share rests with the Partners, this typically includes details such as 
            customer phone numbers and other information within the Partner's purview. For comprehensive details, 
            customers may communicate directly with the relevant Partner. The personal data supplied by Partners is 
            processed by us to deliver Business Products in adherence to the applicable terms of the specific Business 
            Product and in alignment with the instructions provided by the Partners.
          </p>
          <h4>2. HOW WE USE COLLECTED INFORMATION</h4>
          <p className="text">
            Anantya.ai may collect and utilize User information for the following objectives: We might analyze data 
            concerning your use of our website and services ('usage data'). Usage data could encompass, but is not 
            limited to, your IP address, geographical location, browser type and version, operating system, referral 
            source, duration of visit, page views, and website browsing paths.
          </p>
          <h3>Anantya.ai the trusted product of Nosnia Tech Private Limited</h3>
        </div>
      </div>
      </div>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default PrivacyPolicy;
