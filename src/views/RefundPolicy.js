import React from "react";
import { Helmet } from 'react-helmet';
import "./refund-policy.css"; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

const RefundPolicy = () => {
  return (
    <>
     <Helmet>
      <title>Cancellation and Refund Policy</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta 
        name="description" 
        content="Safeguarding Your Data is Our Priority. Learn How Anantya.ai Ensures Your Privacy. Discover Our Privacy Policy Today." 
      />
      <meta property="og:title" content="Cancellation and Refund Policy - Anantya.ai" />
      <meta property="og:type" content="Article" />
      <meta 
        property="og:description" 
        content="Safeguarding Your Data is Our Priority. Learn How Anantya.ai Ensures Your Privacy. Discover Our Privacy Policy Today." 
      />
      <meta property="og:url" content="https://anantya.ai/cancellation-and-refund-policy" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="" />
      <link rel="canonical" href="https://anantya.ai/cancellation-and-refund-policy" />
      <meta name="author" content="Anantya.ai" />
    </Helmet>
    <div className="refund-policy-page">
      <div className="container pt-md-0 pt-5">
        <main className="privacy-policy-content my-5 py-3 px-5 bg-white ">
          <header>
            <h1 className="display-4">Cancellation and Refund Policy</h1>
          </header>

          <section>
            <p>
              Welcome to Anantya.ai. We specialize in providing WhatsApp API,
              Chatbot, and automation services. We promise to provide reliable
              and high-quality services that are customized to your company's
              requirements. Our Cancellation and Refund Policy, a crucial
              component of our Terms of Service, is described on this page.
            </p>
          </section>

          <section>
            <h2 className="h3 py-2">Account Cancellation</h2>
            <ul>
              <li>
                <strong>Notification:</strong> Clients must give{" "}
                <b>written notice via email</b>{" "}
                <a href="mailto:info@anantya.ai" className="link-primary">
                  info@anantya.ai
                </a>{" "}
                at least 30 days prior to the service renewal date in order to
                cancel a service. This enables us to handle the cancellation
                efficiently and guarantee a seamless transfer.
              </li>
              <li>
                <strong>No Prorated Refunds:</strong> Anantya.ai does not
                provide prorated refunds for any unused time if you choose to
                terminate your service before the end of your subscription
                period.
              </li>
              <li>
                <strong>Data Retention:</strong> We advise you to safeguard any
                data or information you might need from your service upon
                cancellation because Anantya.ai will not be held liable for any
                lost data after the service is terminated.
              </li>
              <li>
                <strong>Fraud:</strong> Anantya may suspend or cancel your
                account, without limiting any other remedies, if we suspect that
                you have engaged in fraudulent behavior in connection with the
                services that we supply (by conviction, settlement, insurance or
                inquiry, or otherwise, forcefully removing our branding).
              </li>
              <li>
                <strong>Note:</strong> Even if a plan is terminated in the
                middle of the month, there are no refunds.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="h4">Automatic Renewal</h3>
            <p>
              We reserve the right to automatically renew our services. Any
              changes to costs or services, as well as the renewal, will be
              communicated to you in advance. It is your duty to notify us in
              accordance with the cancellation policy if you decide not to
              renew.
            </p>
          </section>

          <section>
            <h4 className="h4 py-2">Refund Policy</h4>
            <p>
              At Anantya.ai, we provide service-based solutions rather than
              physical or digital products. Because of the nature of our
              company:
            </p>
            <ul>
              <li>
                <strong>No Refunds:</strong> For any services provided, we do
                not provide refunds. From the beginning of any project or
                service subscription, our team dedicates time and resources to
                guarantee the best possible quality of service.
              </li>
              <li>
                <strong>Trial Periods:</strong> To determine whether our
                services are a good fit for your needs, we strongly advise you
                to take advantage of our 7-day trial periods or demo services
                that are provided.
              </li>
              <li>
                <strong>Service Concerns:</strong> We strongly advise you to get
                in touch with your <b>Key Account Manager</b> if you have any
                questions or problems with the services offered. Our commitment
                is to address your concerns and resolve them in a way that meets
                your needs.
              </li>
            </ul>
          </section>

          <section>
            <h4 className="py-2">Contact Us</h4>
            <p>
              Please send an email to <b>support@anantya.ai</b> or reach us at{" "}
              <a href="./contact" className="link-primary">
                https://anantya.ai/contact
              </a>{" "}
              with any inquiries or clarifications regarding our cancellation
              and refund policies.
            </p>
            <p className="pt-4">
              <i>
                This policy is subject to change at the discretion of Anantya.ai
                and will be updated on this page as necessary. Your continued
                use of our services after any changes constitutes your
                acceptance of the new terms.
              </i>
            </p>
          </section>
        </main>
      </div>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default RefundPolicy;
