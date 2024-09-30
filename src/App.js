import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redirect from './views/Redirect'; 
// Common Components

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CustomHeader from './components/common/CustomHeader';
import TawkToScript from './components/common/TawkToScript';
import BlogSlider from './components/common/BlogSlider';

// Views
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
import IntegrationMain from './views/Integrations/IntegrationMain';
import Zapier from './views/Integrations/Zapier';
import Hubspot from './views/Integrations/Hubspot';
import WooCommerce from './views/Integrations/WooCommerce';
import Dialogflow from './views/Integrations/Dialogflow';
import MakeCom from './views/Integrations/MakeCom';
import Salesforce from './views/Integrations/Salesforce';
import Pipedrive from './views/Integrations/Pipedrive';
import Webhook from './views/Integrations/Webhook';
import NotFound from './views/NotFound'; // Import the NotFound component

// Channel Pages
import WhatsAppBusinessAPI from './views/WhatsAppBusinessAPI';
import Instagram from './views/Integrations/Instagram';
import GoogleMessages from './views/Integrations/GoogleMessages';
import Viber from './views/Integrations/Viber';
import Line from './views/Integrations/Line';
import Messenger from './views/Integrations/Messenger';
import WeChat from './views/Integrations/WeChat';

// Blog Pages
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
import WhatsAppBusinessSwitching from './views/blog/WhatsAppBusinessSwitching';
import WhatsAppInternationalPricing from './views/blog/WhatsAppInternationalPricing';
import WhatsAppFreeEntryCapping from './views/blog/WhatsAppFreeEntryCapping';
import WhatsAppBroadcastList from './views/blog/WhatsAppBroadcastList';
import WhatsAppBusinessApiGovernment from './views/blog/WhatsAppBusinessApiGovernment';
import WhatsAppBusinessApiProviders from './views/blog/WhatsAppBusinessApiProviders';
// Additional Pages
import GenerateWhatsAppLink from './views/GenerateWhatsAppLink';
import YourAffiliateLink from './views/YourAffiliateLink';
import SalesHub from "./views/SalesHub";
// knowledge center Pages
import HowToSetupWelcomeMessage from './views/HowToSetupWelcomeMessage';
import HowToAddAgentSublogin from './views/HowToAddAgentSublogin';
import HowToLaunchFirstCampaign from './views/HowToLaunchFirstCampaign';
import HowToEnableOutOfOfficeMessage from './views/HowToEnableOutOfOfficeMessage';
import HowToAutoAssignChats from './views/HowToAutoAssignChats';
import HowToCreateWhatsAppTemplateMessages from './views/HowToCreateWhatsAppTemplateMessages';

function Layout({ children }) {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/sales-hub';

  return (
    <div className="App">
      {showHeaderFooter && <CustomHeader />}
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <TawkToScript />

      <Layout>
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
          <Route path="/blog" element={<><Blog /><BlogSlider /></>} />

          <Route path="/integration" element={<IntegrationMain />} />
          <Route path="/integrations/zapier" element={<Zapier />} />
          <Route path="/integrations/hubspot" element={<Hubspot />} />
          <Route path="/integrations/woocommerce" element={<WooCommerce />} />
          <Route path="/integrations/dialogflow" element={<Dialogflow />} />
          <Route path="/integrations/make" element={<MakeCom />} />
          <Route path="/integrations/salesforce" element={<Salesforce />} />
          <Route path="/integrations/pipedrive" element={<Pipedrive />} />
          <Route path="/integrations/webhook" element={<Webhook />} />
          <Route path="/whatsapp-business-api" element={<><WhatsAppBusinessAPI /> <BlogSlider /> </>} />
          <Route path="/integrations/instagram" element={<Instagram />} />
          <Route path="/integrations/google-business-messages" element={<GoogleMessages />} />
          <Route path="/integrations/viber" element={<Viber />} />
          <Route path="/integrations/line" element={<Line />} />
          <Route path="/integrations/facebook-messenger" element={<Messenger />} />
          <Route path="/integrations/wechat" element={<WeChat />} />  
          {/* blog */}
          <Route path="/whatsapp-business-app-vs-whatsapp-business-api" element={<Redirect to="/blog/whatsapp-business-app-vs-whatsapp-business-api" />} />
        <Route path="/whatsapp-marketing-strategies-to-drive-sales" element={<Redirect to="/blog/whatsapp-marketing-strategies-to-drive-sales" />} />
        <Route path="/whatsapp-marketing-a-direct-communication-with-customers" element={<Redirect to="/blog/whatsapp-marketing-a-direct-communication-with-customers" />} />
        <Route path="/reshaping-customer-engagement-on-whatsapp" element={<Redirect to="/blog/reshaping-customer-engagement-on-whatsapp" />} />
        <Route path="/boost-sales-on-festive-season-with-ai-chatbots" element={<Redirect to="/blog/boost-sales-on-festive-season-with-ai-chatbots" />} />
        <Route path="/whatsapp-business-api-ultimate-guide" element={<Redirect to="/blog/whatsapp-business-api-ultimate-guide" />} />
        <Route path="/whatsapp-broadcasting-ultimate-guide" element={<Redirect to="/blog/whatsapp-broadcasting-ultimate-guide" />} />
        <Route path="/how-to-create-a-whatsapp-chatbot-for-business" element={<Redirect to="/blog/how-to-create-a-whatsapp-chatbot-for-business" />} />
        <Route path="/click-to-whatsapp-ads-marketing-2023" element={<Redirect to="/blog/click-to-whatsapp-ads-marketing-2023" />} />
        <Route path="/whatsapp-for-healthcare-a-simple-guide" element={<Redirect to="/blog/whatsapp-for-healthcare-a-simple-guide" />} />
        <Route path="/whatsapp-business-api-for-banking-sector" element={<Redirect to="/blog/whatsapp-business-api-for-banking-sector" />} />
        <Route path="/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution" element={<Redirect to="/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution" />} />
        <Route path="/meta-new-frequency-capping-update" element={<Redirect to="/blog/meta-new-frequency-capping-update" />} />
        <Route path="/whatsapp-business-api-pricing" element={<Redirect to="/blog/whatsapp-business-api-pricing" />} />
        <Route path="/whatsapp-business-switching-from-green-tick-to-blue-tick" element={<Redirect to="/blog/whatsapp-business-switching-from-green-tick-to-blue-tick" />} />
        <Route path="/change-in-whatsapp-international-authentication-pricing" element={<Redirect to="/blog/change-in-whatsapp-international-authentication-pricing" />} />
        <Route path="/whatsapp-free-entry-frequency-capping" element={<Redirect to="/blog/whatsapp-free-entry-frequency-capping" />} />
        <Route path="/whatsapp-broadcast-list" element={<Redirect to="/blog/whatsapp-broadcast-list" />} />
        <Route path="/whatsapp-business-api-for-government" element={<Redirect to="/blog/whatsapp-business-api-for-government" />} />
        <Route path="/whatsapp-business-api-providers" element={<Redirect to="/blog/whatsapp-business-api-providers" />} />

     
          
 {/* blogs updates */}
<Route path="/blog/whatsapp-business-app-vs-whatsapp-business-api" element={<><WhatsAppBusinessAppVsAPI /><BlogSlider /></>} />
<Route path="/blog/whatsapp-marketing-strategies-to-drive-sales" element={<><WhatsAppMarketingStrategies /><BlogSlider /></>} />
<Route path="/blog/whatsapp-marketing-a-direct-communication-with-customers" element={<><WhatsAppMarketingDirectCommunication /><BlogSlider /></>} />
<Route path="/blog/reshaping-customer-engagement-on-whatsapp" element={<><ReshapingCustomerEngagement /><BlogSlider /></>} />
<Route path="/blog/boost-sales-on-festive-season-with-ai-chatbots" element={<><BoostSalesWithAIChatbots /><BlogSlider /></>} />
<Route path="/blog/whatsapp-business-api-ultimate-guide" element={<><WhatsAppBusinessAPIUltimateGuide /><BlogSlider /></>} />
<Route path="/blog/whatsapp-broadcasting-ultimate-guide" element={<><WhatsAppBroadcastingUltimateGuide /><BlogSlider /></>} />
<Route path="/blog/how-to-create-a-whatsapp-chatbot-for-business" element={<><CreateWhatsAppChatbot /><BlogSlider /></>} />
<Route path="/blog/click-to-whatsapp-ads-marketing-2023" element={<><ClickToWhatsAppAdsMarketing2023 /><BlogSlider /></>} />
<Route path="/blog/whatsapp-for-healthcare-a-simple-guide" element={<><WhatsAppForHealthcareGuide /><BlogSlider /></>} />
<Route path="/blog/whatsapp-business-api-for-banking-sector" element={<><WhatsAppBusinessAPIBankingSector /><BlogSlider /></>} />
<Route path="/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution" element={<><Gitex2023Highlights /><BlogSlider /></>} />
<Route path="/blog/meta-new-frequency-capping-update" element={<><MetaFrequencyCappingUpdate /><BlogSlider /></>} />
<Route path="/blog/whatsapp-business-api-pricing" element={<><WhatsAppBusinessAPIPricing /><BlogSlider /></>} />

<Route path="/blog/whatsapp-business-switching-from-green-tick-to-blue-tick" element={<><WhatsAppBusinessSwitching /><BlogSlider /></>} />
<Route path="/blog/change-in-whatsapp-international-authentication-pricing" element={<><WhatsAppInternationalPricing /><BlogSlider /></>} />
<Route path="/blog/whatsapp-free-entry-frequency-capping" element={<><WhatsAppFreeEntryCapping /><BlogSlider /></>} />
<Route path="/blog/whatsapp-broadcast-list" element={<><WhatsAppBroadcastList /><BlogSlider /></>} />
<Route path="/blog/whatsapp-business-api-for-government" element={<><WhatsAppBusinessApiGovernment /><BlogSlider /></>} />
<Route path="/blog/whatsapp-business-api-providers" element={<><WhatsAppBusinessApiProviders /><BlogSlider /> </>} />

          <Route path="/generate-whatsapp-link" element={<GenerateWhatsAppLink />} />
          <Route path="/your-affiliate-link" element={<YourAffiliateLink />} />
          <Route path="/sales-hub" element={<SalesHub />} />

          {/* resources */}
          <Route path="/how-to-setup-a-welcome-message-on-anantya.ai" element={<HowToSetupWelcomeMessage />} />
<Route path="/how-to-add-agent-sublogin" element={<HowToAddAgentSublogin />} />
<Route path="/how-to-launch-first-campaign-in-anantya.ai" element={<HowToLaunchFirstCampaign />} />
<Route path="/how-to-enable-whatsapp-out-of-office-message" element={<HowToEnableOutOfOfficeMessage />} />
<Route path="/how-to-auto-assign-chats" element={<HowToAutoAssignChats />} />
<Route path="/how-to-create-whatsapp-templete-messages-in-anantya.ai" element={<HowToCreateWhatsAppTemplateMessages />} />
<Route path="*" element={<NotFound />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
