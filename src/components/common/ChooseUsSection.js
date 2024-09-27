import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import sharedTeamInboxIcon from '../../assets/images/icons/shared team inbox.png';
import bulkBroadcastingIcon from '../../assets/images/icons/bulk broadcasting.png';
import automatedChatbotIcon from '../../assets/images/icons/automated chatbot.png';
import campaignAnalyticsIcon from '../../assets/images/icons/campaign analytics.png';
import productCatalogsIcon from '../../assets/images/icons/product catalogs.png';

import sharedTeamInboxImg from '../../assets/images/shared-team-inbox.webp';
import bulkBroadcastingImg from '../../assets/images/bulk-broadcasting.webp';
import automatedChatbotImg from '../../assets/images/automated-chatbot.webp';
import campaignAnalyticsImg from '../../assets/images/campaign-analytics.webp';
import productCatalogImg from '../../assets/images/Product-catalog.webp';
const ChooseUsSection = () => {
    return (
        <section className="choose-us style-9 py-5">
            <div className="container">
                <div className="section-head text-center style-9 mb-30 wow fadeInUp">
                    <h2> Everything Within a <span> Single Platform </span></h2>
                    <p>Bringing Automation To Your Fingertips With WhatsApp Business API</p>
                </div>
                <div className="content">
                    <ul className="nav nav-pills mb-3 wow fadeInUp" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="choose1-tab" data-bs-toggle="pill" data-bs-target="#choose1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                <img src={sharedTeamInboxIcon} alt="Shared Team Inbox" /> Shared Team Inbox
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="choose2-tab" data-bs-toggle="pill" data-bs-target="#choose2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                <img src={bulkBroadcastingIcon} alt="Bulk Broadcasting" /> Bulk Broadcasting
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="choose3-tab" data-bs-toggle="pill" data-bs-target="#choose3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                <img src={automatedChatbotIcon} alt="Automated Chatbot" /> Automated Chatbot
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="choose4-tab" data-bs-toggle="pill" data-bs-target="#choose4" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                <img src={campaignAnalyticsIcon} alt="Campaign Analytics" /> Campaign Analytics
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="choose5-tab" data-bs-toggle="pill" data-bs-target="#choose5" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                <img src={productCatalogsIcon} alt="Product Catalogs" /> Product Catalogs
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content pt-2 wow fadeInUp" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="choose1" role="tabpanel">
                            <div className="feat-content">
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="img img-cover">
                                            <img src={sharedTeamInboxImg} alt="Shared Team Inbox" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 text-start">
                                        <div className="info mt-4 mt-lg-0">
                                            
                                            <h2> Supercharge Your Team's Productivity with Anantya.ai </h2>
                                            <p> Enable multiple team members to manage Live Chat Support using a single WhatsApp Business Number. 
                                                Efficiently organize chats by tags, campaigns, and attributes to facilitate
                                                Smart Agent Chat Routing. </p>
                                            <a className="mt-30 internalpage_link" href="whatsapp-marketing">
                                                Explore Live Chat <i className="fas fa-long-arrow-right ms-2 color-blue7"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="choose2" role="tabpanel">
                            <div className="feat-content">
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="img img-cover">
                                            <img src={bulkBroadcastingImg} alt="Bulk Broadcasting" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 text-start">
                                        <div className="info mt-4 mt-lg-0">
                                         
                                            <h2> Bulk Broadcast Messages to Unlimited Users in One Go </h2>
                                            <p> You can send bulk broadcast messages to users who have opted in, sharing awesome stuff like discount offers,
                                                festival promotions, product launches, season-end sales, and so much more. </p>
                                            <a className="mt-30 internalpage_link" href="whatsapp-broadcasting">
                                                Explore Broadcasting <i className="fas fa-long-arrow-right ms-2 color-blue7"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="choose3" role="tabpanel">
                            <div className="feat-content">
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="img img-cover">
                                            <img src={automatedChatbotImg} alt="Automated Chatbot" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 text-start">
                                        <div className="info mt-4 mt-lg-0">
                                           
                                            <h2> Build Chatbots for 24/7 Support & Engagement </h2>
                                            <p> From lead generation and customer onboarding to order updates and post-purchase assistance, chatbots on WhatsApp can handle it all.
                                                Revolutionize the way you connect with customers with zero-code chatbots.</p>
                                            <a className="mt-30 internalpage_link" href="automated-chatbot">
                                                Explore Automated Chatbot <i className="fas fa-long-arrow-right ms-2 color-blue7"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="choose4" role="tabpanel">
                            <div className="feat-content">
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="img img-cover">
                                            <img src={campaignAnalyticsImg} alt="Campaign Analytics" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 text-start">
                                        <div className="info mt-4 mt-lg-0">
                                           
                                            <h2> Advanced Algorithms That Dive Deep into Customer Behavior </h2>
                                            <p> Gone are the days of making blind decisions and relying on guesswork. With Anantya.ai, you gain valuable insights into your customers' preferences,
                                                needs, and desires. By understanding their behavior, you can optimize your strategies.</p>
                                            <a className="mt-30 internalpage_link" href="reports-and-analytics">
                                                Explore Analytics <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto mt-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="choose5" role="tabpanel">
                            <div className="feat-content">
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="img img-cover">
                                            <img src={productCatalogImg} alt="Product Catalogs" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 text-start">
                                        <div className="info mt-4 mt-lg-0">
                                           
                                            <h2> A Seamless Shopping Experience Through WhatsApp </h2>
                                            <p> Unlock the potential of WhatsApp for your business by allowing customers to browse, inquire, and purchase directly from the app.
                                                This unique experience enhances customer engagement and satisfaction.</p>
                                            <a className="mt-30 internalpage_link" href="product-catalog">
                                                Explore Catalogs <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUsSection;
