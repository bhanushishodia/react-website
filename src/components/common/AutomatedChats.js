import React from 'react';
import './AutomatedChats.css'; // Create a CSS file for additional styles if needed
import whatsappMarketing from '../../assets/images/whatsapp-marketing.webp'; // Adjust the path as needed
import whatsappSupport from '../../assets/images/whatsapp-support.webp'; // Adjust the path as needed
import whatsappCommerce from '../../assets/images/whatsapp-commerce.webp'; // Adjust the path as needed
import whatsappAuthentication from '../../assets/images/whatsapp-authentication.webp';
import whatsappMarketingIcon from '../../assets/images/icons/whatsapp-marketing.png'; // Adjust the path as needed
import whatsappSupportIcon from '../../assets/images/icons/whatsapp-support.png'; // Adjust the path as needed
import whatsappCommerceIcon from '../../assets/images/icons/whatsapp-commerce.png'; // Adjust the path as needed
import whatsappAuthenticationIcon from '../../assets/images/icons/whatsapp-authentication.png';  // Ensure this path is correct



const AutomatedChats = () => {
    return (
        <div>
            <div className="automated style-5 mb-60">
                <h2 className="text-center mb-5 py-4">
                    Do More with AI <span> Automated Chats! </span>
                </h2>
            </div>
            <section className="projects style-7 mt-60 countdown-content wow fadeInUp">
                <div className="container">
                    <div className="content chats">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12">
                                <div className="projects-tabs py-4"
                                    style={{ color: '#76c6b7', backgroundColor: '#fff', boxShadow: '0px 0px 10px 0px rgba(33,35,34,.1)', borderRadius: '12px', marginTop: '-50px' }}>
                                    <ul className="nav nav-pills flex-row align-items-center" id="pills-tab" role="tablist"
                                        style={{ justifyContent: 'space-evenly' }}>
                                        <li className="nav-item d-flex align-items-center" role="presentation">
                                            <img src={whatsappMarketingIcon} className="img-fluid" alt="" />
                                            <button className="nav-link active" id="pills-proj1-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-proj1" type="button" role="tab"
                                                aria-controls="pills-proj1" aria-selected="true">
                                                WhatsApp <br /> Marketing
                                            </button>
                                        </li>
                                        <li className="nav-item d-flex align-items-center" role="presentation">
                                            <img src={whatsappSupportIcon} className="img-fluid" alt="" />
                                            <button className="nav-link" id="pills-proj2-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-proj2" type="button" role="tab"
                                                aria-controls="pills-proj2" aria-selected="false">
                                                WhatsApp <br /> Support
                                            </button>
                                        </li>
                                        <li className="nav-item d-flex align-items-center" role="presentation">
                                            <img src={whatsappCommerceIcon} className="img-fluid" alt="" />
                                            <button className="nav-link" id="pills-proj3-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-proj3" type="button" role="tab"
                                                aria-controls="pills-proj3" aria-selected="false">
                                                WhatsApp <br /> Commerce
                                            </button>
                                        </li>
                                        <li className="nav-item d-flex align-items-center" role="presentation">
                                            <img src={whatsappAuthenticationIcon} className="img-fluid" alt="" />
                                            <button className="nav-link" id="pills-proj4-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-proj4" type="button" role="tab"
                                                aria-controls="pills-proj4" aria-selected="false">
                                                WhatsApp <br /> Authentication
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 my-auto">
                                <div className="tab-content mb-md-0 mb-5" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-proj1" role="tabpanel"
                                        aria-labelledby="pills-proj1-tab">
                                        <div className="industry-1">
                                            <div className="project-card style-7 d-inline-flex py-5 row m-md-0 m-0 p-0">
                                                <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-lg-start text-center">
                                                    <h3>Your 'Complete' WhatsApp Marketing Platform</h3>
                                                    <p className="my-3">Everything you need to notify, chat & engage customers - All in one place</p>
                                                    <ul>
                                                        <li className="d-flex align-items-center mb-2">
                                                            <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                </svg>
                                                            </small>
                                                            <p>Broadcast promotional offers to unlimited users</p>
                                                        </li>
                                                        <li className="d-flex align-items-center mb-2">
                                                            <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                </svg>
                                                            </small>
                                                            <p>Sync Facebook & Instagram Ads lead to WhatsApp</p>
                                                        </li>
                                                        <li className="d-flex align-items-center mb-2">
                                                            <div className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                </svg>
                                                            </div>
                                                            <p>Sell your products online using catalogs</p>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <div className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                </svg>
                                                            </div>
                                                            <p>Automate notifications for abandoned carts, application drop-offs, order confirmations, and more.</p>
                                                        </li>
                                                        <a className="mt-30 internalpage_link" href="whatsapp-marketing.html">
                                                            Explore WhatsApp Marketing <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                                                        </a>
                                                    </ul>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                                                    <img src={whatsappMarketing} className="img-fluid my-auto" alt="whatsapp-marketing" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-proj2" role="tabpanel" aria-labelledby="pills-proj2-tab">
                                        <div className="industry-2">
                                            <div className="swiper-slide">
                                                <div className="project-card style-7 d-inline-flex py-5 row m-md-0  m-0 p-0">
                                                    <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-lg-start text-center">
                                                        <h3>Customer Support Made Simple</h3>
                                                        <p className="my-3">Automate replies and deliver personalized support experiences.</p>
                                                        <ul>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Setup automated responses to common queries</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Provide 24/7 customer service with automated replies</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Send customized follow-up messages</p>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Integrate with CRM to manage and track interactions</p>
                                                            </li>
                                                            <a className="mt-30 internalpage_link" href="whatsapp-support.html">
                                                                Explore WhatsApp Support <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                                                        <img src={whatsappSupport} className="img-fluid my-auto" alt="whatsapp_support" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-proj3" role="tabpanel" aria-labelledby="pills-proj3-tab">
                                        <div className="industry-3">
                                            <div className="swiper-slide">
                                                <div className="project-card style-7 d-inline-flex py-5 row m-md-0 m-0 p-0 ">
                                                    <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-lg-start text-center">
                                                        <h3>Streamline Your Online Sales</h3>
                                                        <p className="my-3">Manage your product catalogs and engage customers directly on WhatsApp.</p>
                                                        <ul>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Showcase products with rich media and descriptions</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Enable easy and secure checkout process</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Track orders and send updates to customers</p>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Automate sales notifications and updates</p>
                                                            </li>
                                                            <a className="mt-30 internalpage_link" href="whatsapp-commerce.html">
                                                                Explore WhatsApp Commerce <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                                                        <img src={whatsappCommerce} className="img-fluid my-auto" alt="whatsapp_commerce" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-proj4" role="tabpanel" aria-labelledby="pills-proj4-tab">
                                        <div className="industry-4">
                                            <div className="swiper-slide">
                                                <div className="project-card style-7 d-inline-flex py-5 row m-md-0  m-0 p-0">
                                                    <div className="info col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto text-lg-start text-center">
                                                        <h3>Boost Engagement with Marketing Campaigns</h3>
                                                        <p className="my-3">Create personalized marketing campaigns and reach customers on WhatsApp.</p>
                                                        <ul>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Design and send targeted marketing messages</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Segment your audience for better targeting</p>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-2">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Track campaign performance and optimize</p>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <small className="icon-30 rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                                                    <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.60003 10.6L1.40003 6.4L3.05176e-05 7.8L5.60003 13.4L17.6 1.4L16.2 0L5.60003 10.6Z" fill="#448AFF"></path>
                                                                    </svg>
                                                                </small>
                                                                <p>Integrate with analytics tools for deeper insights</p>
                                                            </li>
                                                            <a className="mt-30 internalpage_link" href="whatsapp-marketing.html">
                                                                Explore WhatsApp Marketing <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                                                            </a>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-auto mt-md-0 mt-4">
                                                        <img src={whatsappAuthentication} className="img-fluid my-auto" alt="whatsapp_marketing" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
    );
}

export default AutomatedChats;
