import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CustomHeader from './components/common/CustomHeader';
import TawkToScript from './components/common/TawkToScript';

import AutomatedChats from './components/common/AutomatedChats'; // Adjust the path if necessary

// Views
import OnboardingProcess from './components/common/OnboardingProcess';
import IncrediblePlatformCapabilities from './components/common/IncrediblePlatformCapabilities'; // Adjust the path as needed
import SalesHub from "./views/SalesHub";
import YourAffiliateLink from './views/YourAffiliateLink';
import MainContent from './views/homepage';
import Contact from './views/contact';
import About from './views/About';
import WorkWithUs from './views/WorkWithUs';
import PartnerWithUs from './views/PartnerWithUs';
import KnowledgeCenter from './views/KnowledgeCenter';
import WhatsAppPricing from './views/WhatsAppPricing';
import GettingStartedWithAnantya from './views/GettingStartedWithAnantya';
import WhatsappMarketing from './views/WhatsappMarketing';
import WhatsAppCommerce from './views/WhatsAppCommerce';
import WhatsAppSupport from './views/WhatsAppSupport';
import WhatsAppAuthentication from './views/WhatsAppAuthentication';
import LiveAgentAssistant from './views/LiveAgentAssistant';
import WhatsAppBroadcasting from './views/WhatsAppBroadcasting';
import ReportsAnalytics from './views/ReportsAnalytics';
import AutomatedChatBot from './views/AutomatedChatBot';
import Catalog from './views/Catalog';
import ClickToWhatsAppAds from './views/ClickToWhatsAppAds';
import EcommerceRetail from './views/EcommerceRetail';
import Healthcare from './views/Healthcare';
import EdTech from './views/EdTech';
import BankingBFSI from './views/BankingBFSI';
import MediaEntertainment from './views/MediaEntertainment';
import FoodBeverage from './views/FoodBeverage';
import TravelHospitality from './views/TravelHospitality';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsConditions from './views/TermsConditions';
import RefundPolicy from './views/RefundPolicy';
import SMSFallback from './views/SMSFallback';
import GetStarted from './views/GetStarted';
import SolutionPartner from './views/SolutionPartner';
import WhiteLabelPartner from './views/WhiteLabelPartner';
import AffiliateProgram from './views/AffiliateProgram';
import Blog from './views/Blog';
import IntegrationMain from './views/Integration/IntegrationMain';
import Zapier from './views/Integration/Zapier';
import Hubspot from './views/Integration/Hubspot';
import WooCommerce from './views/Integration/WooCommerce';
import Dialogflow from './views/Integration/Dialogflow';
import MakeCom from './views/Integration/MakeCom';
import Salesforce from './views/Integration/Salesforce';
import Pipedrive from './views/Integration/Pipedrive';
import Webhook from './views/Integration/Webhook';

import WhatsAppBusinessAPI from './views/channels/WhatsAppBusinessAPI';
import Instagram from './views/channels/Instagram';
import GoogleMessages from './views/channels/GoogleMessages';
import Viber from './views/channels/Viber';
import Line from './views/channels/Line';
import Messenger from './views/channels/Messenger';
import WeChat from './views/channels/WeChat';
import WhatsAppBusinessAppVsAPI from './views/blog/WhatsAppBusinessAppVsAPI';
import WhatsAppMarketingStrategies from './views/blog/WhatsAppMarketingStrategies';
import WhatsAppMarketingDirectCommunication from './views/blog/WhatsAppMarketingDirectCommunication';
import ReshapingCustomerEngagement from './views/blog/ReshapingCustomerEngagement';
import BoostSalesWithAIChatbots from './views/blog/BoostSalesWithAIChatbots';
import WhatsAppBusinessAPIUltimateGuide from './views/blog/WhatsAppBusinessAPIUltimateGuide';
import WhatsAppBroadcastingUltimateGuide from './views/blog/WhatsAppBroadcastingUltimateGuide';
import CreateWhatsAppChatbot from './views/blog/CreateWhatsAppChatbot';
import ClickToWhatsAppAdsMarketing2023 from './views/blog/ClickToWhatsAppAdsMarketing2023';
import WhatsAppForHealthcareGuide from './views/blog/WhatsAppForHealthcareGuide';
import WhatsAppBusinessAPIBankingSector from './views/blog/WhatsAppBusinessAPIBankingSector';
import Gitex2023Highlights from './views/blog/Gitex2023Highlights';
import MetaFrequencyCappingUpdate from './views/blog/MetaFrequencyCappingUpdate';
import WhatsAppBusinessAPIPricing from './views/blog/WhatsAppBusinessAPIPricing';

import WelcomeMessage from './views/WelcomeMessage';
import AgentSublogin from './views/AgentSublogin';
import LaunchCampaign from './views/LaunchCampaign';
import OutOfOfficeMessage from './views/OutOfOfficeMessage';
import AutoAssignChats from './views/AutoAssignChats';
import WhatsAppTemplateMessages from './views/WhatsAppTemplateMessages';

// Common Components
import BlogSlider from './components/common/BlogSlider';

function App() {
  return (
    <Router>
      <TawkToScript />
      <div className="App">
        <CustomHeader />
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/knowledge-center" element={<KnowledgeCenter />} />
          <Route path="/whatsapp-pricing" element={<WhatsAppPricing />} />
          <Route path="/getting-started-with-anantya" element={<GettingStartedWithAnantya />} />
          <Route path="/whatsapp-marketing" element={<><WhatsappMarketing /><BlogSlider /></>} />
          <Route path="/whatsapp-commerce" element={<><WhatsAppCommerce /><BlogSlider /></>} />
          <Route path="/whatsapp-support" element={<><WhatsAppSupport /><BlogSlider /></>} />
          <Route path="/whatsapp-authentication" element={<><WhatsAppAuthentication /><BlogSlider /></>} />
          <Route path="/live-agent-support" element={<LiveAgentAssistant />} />
          <Route path="/whatsapp-broadcasting" element={<WhatsAppBroadcasting />} />
          <Route path="/reports-and-analytics" element={<ReportsAnalytics />} />
          <Route path="/automated-chatbot" element={<AutomatedChatBot />} />
          <Route path="/whatsapp-catalog" element={<Catalog />} />
          <Route path="/click-to-whatsapp-ads" element={<ClickToWhatsAppAds />} />
          <Route path="/ecommerce-industry" element={<EcommerceRetail />} />
          <Route path="/healthcare-industry" element={<Healthcare />} />
          <Route path="/edtech-industry" element={<EdTech />} />
          <Route path="/banking-industry" element={<BankingBFSI />} />
          <Route path="/media-entertainment-industry" element={<MediaEntertainment />} />
          <Route path="/food-and-beverage-industry" element={<FoodBeverage />} />
          <Route path="/travel-and-hospitality-industry" element={<TravelHospitality />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/sms-fallback" element={<SMSFallback />} />
          <Route path="/campaign-request-demo" element={<GetStarted />} />
          <Route path="/solution-partner" element={<SolutionPartner />} />
          <Route path="/white-label-partner" element={<WhiteLabelPartner />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/integration" element={<IntegrationMain />} />
          <Route path="/integration/zapier" element={<Zapier />} />
          <Route path="/integration/hubspot" element={<Hubspot />} />
          <Route path="/integration/woocommerce" element={<WooCommerce />} />
          <Route path="/integration/dialogflow" element={<Dialogflow />} />
          <Route path="/integration/makecom" element={<MakeCom />} />
          <Route path="/integration/salesforce" element={<Salesforce />} />
          <Route path="/integration/pipedrive" element={<Pipedrive />} />
          <Route path="/integration/webhook" element={<Webhook />} />
          <Route path="/channels/whatsapp-business-api" element={<WhatsAppBusinessAPI />} />
        <Route path="/channels/instagram" element={<Instagram />} />
        <Route path="/channels/google-messages" element={<GoogleMessages />} />
        <Route path="/channels/viber" element={<Viber />} />
        <Route path="/channels/line" element={<Line />} />
        <Route path="/channels/messenger" element={<Messenger />} />
        <Route path="/channels/wechat" element={<WeChat />} />
        <Route path="/blog/whatsapp-business-app-vs-whatsapp-business-api" element={<WhatsAppBusinessAppVsAPI />} />
  <Route path="/blog/whatsapp-marketing-strategies-to-drive-sales" element={<WhatsAppMarketingStrategies />} />
  <Route path="/blog/whatsapp-marketing-a-direct-communication-with-customers" element={<WhatsAppMarketingDirectCommunication />} />
  <Route path="/blog/reshaping-customer-engagement-on-whatsapp" element={<ReshapingCustomerEngagement />} />
  <Route path="/blog/boost-sales-on-festive-season-with-ai-chatbots" element={<BoostSalesWithAIChatbots />} />
  <Route path="/blog/whatsapp-business-api-ultimate-guide" element={<WhatsAppBusinessAPIUltimateGuide />} />
  <Route path="/blog/whatsapp-broadcasting-ultimate-guide" element={<WhatsAppBroadcastingUltimateGuide />} />
  <Route path="/blog/how-to-create-a-whatsapp-chatbot-for-business" element={<CreateWhatsAppChatbot />} />
  <Route path="/blog/click-to-whatsapp-ads-marketing-2023" element={<ClickToWhatsAppAdsMarketing2023 />} />
  <Route path="/blog/whatsapp-for-healthcare-a-simple-guide" element={<WhatsAppForHealthcareGuide />} />
  <Route path="/blog/whatsapp-business-api-for-banking-sector" element={<WhatsAppBusinessAPIBankingSector />} />
  <Route path="/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution" element={<Gitex2023Highlights />} />
  <Route path="/blog/meta-new-frequency-capping-update" element={<MetaFrequencyCappingUpdate />} />
  <Route path="/blog/whatsapp-business-api-pricing" element={<WhatsAppBusinessAPIPricing />} />
  <Route path="/sales-hub" element={<SalesHub />} />
  <Route path="/how-to-setup-a-welcome-message-on-anantya.ai" element={<WelcomeMessage />} />
        <Route path="/how-to-add-agent-sublogin" element={<AgentSublogin />} />
        <Route path="/how-to-launch-first-campaign-in-anantya.ai" element={<LaunchCampaign />} />
        <Route path="/how-to-enable-whatsapp-out-of-office-message" element={<OutOfOfficeMessage />} />
        <Route path="/how-to-auto-assign-chats" element={<AutoAssignChats />} />
        <Route path="/how-to-create-whatsapp-templete-messages-in-anantya.ai" element={<WhatsAppTemplateMessages />} />
        <Route path="/your-affiliate-link" element={<YourAffiliateLink />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
