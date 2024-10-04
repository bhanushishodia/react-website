import React from 'react';
import ScrollToTopButton from '../../components/common/ScrollToTopButton';
import WhatsAppWidget from '../../components/common/WhatsAppWidget';
import { Helmet } from 'react-helmet';
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching images dynamically using getImage function
const whatsappChatbotImage = getImage('whatsapp-chatbot-for-business.webp');
const whatsappChatbotImage1 = getImage('anantyaai-dashboard-login.webp');
const whatsappChatbotImage2 = getImage('whatsapp-chatbot-dashboard.webp');
const whatsappChatbotImage3 = getImage('whatsapp-chatbot-setup.webp');
const welcomeMessageImg = getImage('welcome-message.webp');
const outOfOfficeMessageImg = getImage('out-of-office-message.webp');
const whatsappBotSetupImg = getImage('whatsapp-bot-setup.webp');
const feedbackMessageImg = getImage('feedback-message.webp');
const quickReplyImg = getImage('quick-reply.webp');

const CreateWhatsAppChatbot = () => {
  return (
    <div>
      <Helmet>
      <title>Whatsapp Chatbot: Create a WhatsApp ChatBot for Business</title>
      <meta name="keywords" content="whatsapp chatbot,whatsapp chatbot for business,chatbot in whatsapp,whatsapp bot for business,whatsapp business chatbot,how to create chatbot,how to create whatsapp bot,how to create whatsapp chatbot,how to create chatbot in whatsapp" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Unlock the process of creating a WhatsApp chatbot for business in a few simple steps with the guidance of Anantya.ai's comprehensive tutorial." />
      <meta property="og:title" content="Whatsapp Chatbot: Create a WhatsApp ChatBot for Business" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Unlock the process of creating a WhatsApp chatbot for business in a few simple steps with the guidance of Anantya.ai's comprehensive tutorial." />
      <meta property="og:url" content="https://anantya.ai/how-to-create-a-whatsapp-chatbot-for-business" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/blog/whatsapp-chatbot-for-business.webp" />
      <link rel="canonical" href="https://anantya.ai/how-to-create-a-whatsapp-chatbot-for-business" />
      <meta name="author" content="Anantya" />

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "anantya.ai",
          "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
          "url": "https://anantya.ai",
          "logo": "https://anantya.ai/assets/img/logo.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971565480273",
            "contactType": "sales",
            "areaServed": ["AE","SA","BH"],
            "availableLanguage": ["en"]
          },
          "sameAs": [
            "https://www.facebook.com/anantyaai",
            "https://www.instagram.com/anantya.ai",
            "https://www.youtube.com/@Anantyaai",
            "https://www.linkedin.com/company/anantya-ai",
            "https://www.pinterest.com/anantyaai"
          ]
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://anantya.ai/how-to-create-a-whatsapp-chatbot-for-business"
          },
          "headline": "Whatsapp Chatbot: Create a WhatsApp ChatBot for Business",
          "description": "Unlock the process of creating a WhatsApp chatbot for business in a few simple steps with the guidance of Anantya.ai's comprehensive tutorial.",
          "image": "https://anantya.ai/assets/img/blog/whatsapp-chatbot-for-business.webp",  
          "author": {
            "@type": "Organization",
            "name": "Anantya.ai",
            "url": "https://anantya.ai",
            "areaServed": ["AE","SA","BH"]
          },  
          "publisher": {
            "@type": "Organization",
            "name": "Anantya.ai",
            "logo": {
              "@type": "ImageObject",
              "url": "https://anantya.ai/assets/img/logo.webp"
            }
          },
          "datePublished": "2024-04-25"
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Home",
            "item": "https://anantya.ai/"  
          },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "Whatsapp Chatbot: Create a WhatsApp ChatBot for Business",
            "item": "https://anantya.ai/how-to-create-a-whatsapp-chatbot-for-business"  
          }]
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Which Two Methods Are Best For Integrating And Creating A Chatbot For WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Either the WhatsApp Business App or the WhatsApp Business Platform can be used to link your WhatsApp chatbot service. Small businesses should choose the first option, but if you require more than basic automation, you will need to engage developers to build chatbots on your behalf. However, because Anantya.ai is a WhatsApp business solution provider, the second choice makes integration quick and easy."
            }
          },{
            "@type": "Question",
            "name": "What Requirements Must Be Followed To Integrate A Chatbot With WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your company must have access to the official WhatsApp Business API and a confirmed Facebook Business account in order to successfully integrate a chatbot with WhatsApp. You also require a registered business phone number on WhatsApp."
            }
          },{
            "@type": "Question",
            "name": "How Can I Use A WhatsApp Chatbot To Send Broadcasts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Broadcasts can be used to send people through paths, messages with options, and simple text messages. You can even plan your broadcasts and direct them to particular user segments with our help. You must utilize a template message if you want to broadcast messages on WhatsApp after the 24-hour deadline has passed. All you need to do is use the Template Message node to set up the templates right in the conversation flow while creating your WhatsApp AI chatbot."
            }
          },{
            "@type": "Question",
            "name": "How Can I Access The Business API For WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WhatsApp uses its partners to distribute its business APIs. With our platform, Anantya.ai will assist you in gaining access to the WhatsApp API when you construct a free chatbot. Additionally, you can acquire a 24-hour verification of your WhatsApp AI number."
            }
          },{
            "@type": "Question",
            "name": "How Much Does The Chatbot On WhatsApp Cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WhatsApp marketing is growing, and you need to take advantage of this by using WhatsApp to connect with your clients. Therefore, even though implementing your WhatsApp AI chatbot isn't free, we can assist you in doing so at a reasonable cost because of our relationships with WhatsApp API providers."
            }
          },{
            "@type": "Question",
            "name": "What Is The Business API For WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medium-sized and big organizations use the WhatsApp Business API to increase consumer engagement on WhatsApp with interactive buttons, broadcasts, templates, and other unique capabilities that aren't found in the WhatsApp Business App. Large companies with lots of clients and a business suite that connects with their other software, processes, and data are the ones who use it the most."
            }
          },{
            "@type": "Question",
            "name": "Is There A Free Anantya.Ai WhatsApp Integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the Anantya.ai WhatsApp API service provider offers you free chatbot use with the WhatsApp API platform Connectivity."
            }
          }]
        }
      `}</script>
       </Helmet>


         <div className="container py-4 mt-4 ">
            <div className="row px-md-5 px-1 mx-1 mx-md-5">
                <div className="col-md-12 col-sm-12">
                    <div className="text-center py-4">
                        <img 
                            src={whatsappChatbotImage} 
                            className="img-fluid h-50 w-75 mx-auto" 
                            alt="WhatsApp Chatbot for Business" 
                        />
                    </div>
                </div>
            </div>
          </div>
        <main className="career-details-page style-5 pt-10">
            <section className="jop-details pb-100">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-8 blog">
                                <div className="jop-info">
                                    <h3 className="main-title mb-10">
                                        How to Create a WhatsApp ChatBot in Just a Few Steps
                                    </h3>
                                    <p className="pb-40 color-999">
                                     Update on <span className="color-000">25 May 2024</span></p>

                                    <div className="text d-flex mb-20">
                                        <p>
                                            Looking for different ways to boost your business or provide better customer support while using a <b>WhatsApp chatbot?</b>
                                        </p>
                                    </div>
                                    <div className="text d-flex mb-20">
                                        <p>Then you are not alone!</p>
                                    </div>
                                    <div className="text d-flex mb-20 mt-20">
                                        <p>
                                            More than <a href="https://www.drift.com/books-reports/conversational-marketing-trends/#What+is+Conversational+Marketing%3F+" target="_blank" rel='noreferrer'>82% of businesses have found success with AI-powered conversational marketing tools, as they play an effective role in sales and marketing.</a>
                                        </p>
                                    </div>
                                    <div className="text d-flex mb-20 mt-20">
                                        <p>
                                            As we all already know, WhatsApp is a popular messaging platform, making it one of the great choices for seamless communication with customers through a WhatsApp chatbot. With the WhatsApp Business API, businesses can create and engage customers more efficiently and interactively.
                                        </p>
                                    </div>
                                    <div className="text d-flex mb-20 mt-20">
                                        <p>
                                            Now, as WhatsApp Chatbot has such huge benefits, let’s explore more things about it and how one can create a WhatsApp chatbot by simply following these steps.
                                        </p>
                                    </div>
                                    
                                    <div id="whatsapp-broadcast31">
                                        <h6 className="mt-4 mb-20">What is a WhatsApp chatbot?</h6>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                A <a href="automated-chatbot" target="_blank">WhatsApp chatbot</a> is like having a virtual assistant for your business on WhatsApp. It is basically a computer programme that can automatically answer questions from customers about a given product or service.
                                                It can also share useful content and send updates about orders, payments, and shipping directly through WhatsApp.
                                            </p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                When a customer messages your business through WhatsApp, the chatbot comes into action to assist them. This can be responded to with text messages, images, buttons, or even videos to provide real-time help and support.
                                            </p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                The WhatsApp chatbot feature is accessible through the WhatsApp Business API. It’s one of the easiest ways to streamline customer communication and provide quick assistance whenever your customers need it.
                                            </p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                Want to know how the <b>WhatsApp Chatbot can help your business flourish with customers'</b> positive reviews? Let’s get a deep dive into why businesses should use the WhatsApp chatbot.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="whatsapp-broadcast32">
                                        <h6 className="mt-4 mb-20">Why should businesses use WhatsApp chatbots?</h6>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                Do you agree that not all of us are developers? However, that doesn't mean we need to know how to code to use the WhatsApp Business API.
                                            </p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                To make things easier, you’ll need the tools to answer your customer's queries. This tool does all the hard work for you by creating a <b>WhatsApp chatbot</b> as per your needs, which is super simple and understandable for you and your consumers.
                                            </p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>
                                                You must first decide what you want the WhatsApp chatbot to achieve for your company. Which issue are you trying to resolve? Answers can help you activate your chatbot and begin to see results as soon as you have an idea in mind.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12 py-4 col-12 contact mx-auto">
                                        <section className="contact pt-0 style-6">
                                            <div className="content">
                                                <div className="row justify-content-center">
                                                    <div className="text-center">
                                                        <h5 className="text-black">Create Your Anantya.ai Account</h5>
                                                        <form action="https://formspree.io/f/mdorezev" className="form" method="post">
                                                            <p className="text-center text-danger fs-12px mb-30">
                                                                Fill in the details below to start your 14 Day FREE trial. <br />
                                                                No Credit Card needed.*
                                                            </p>
                                                            <div className="row px-5">
                                                                <div className="col-lg-4">
                                                                    <div className="form-group mb-20">
                                                                        <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group mb-20">
                                                                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group mb-20">
                                                                        <input type="text" name="phone" className="form-control" placeholder="Phone Number" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group mb-20">
                                                                        <input type="text" name="message" className="form-control" id="messages" placeholder="Name of Organisation" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="form-group">
                                                                        <input type="url" name="url" className="form-control" id="url" placeholder="Website URL" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 text-center">
                                                                    <input type="submit" value="Submit" className="btn bg-green text-light fs-12px" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <div id="whatsapp-broadcast33">
                                        <div className="text d-flex mb-20">
                                            <h6 className="mt-4">Benefits of Using WhatsApp ChatBots</h6>
                                        </div>
                                        <div className="text d-flex mb-20 mt-20">
                                            <span className="icon color-blue5 me-2 flex-shrink-0">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p><b>Improve your customer support.</b></p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>Any customer service channel's main responsibility is to quickly resolve user complaints.</p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>The process is made easier by a WhatsApp chatbot, which guarantees that users feel respected and heard by offering prompt responses.</p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>This promotes brand loyalty in addition to raising client satisfaction.</p>
                                        </div>
                                        <div className="text d-flex mb-20 mt-20">
                                            <span className="icon color-blue5 me-2 flex-shrink-0">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p><b>Boost Chances for Sales and Engagement</b></p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>The basis of any effective business strategy is engagement. Chatbot platforms for WhatsApp offer engaging conversational tools that get potential customers closer to the sales channel. This interactive strategy may improve the overall user experience in addition to increasing purchases.</p>
                                        </div>
                                        <div className="text d-flex mb-20 mt-20">
                                            <span className="icon color-blue5 me-2 flex-shrink-0">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p><b>Create a 24/7 communication channel.</b></p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>With a WhatsApp chatbot, your business can remain open and active around the clock, even in a world where clients may be in different time zones.</p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>By being available around the clock, you can guarantee that client inquiries are handled promptly, showing your dedication to meeting their demands and creating a chatbot flow that is constantly lively and responsive</p>
                                        </div>
                                        <div className="text d-flex mb-20 mt-20">
                                            <span className="icon color-blue5 me-2 flex-shrink-0">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p><b>
                                            Improve consumer trust and loyalty.</b></p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>Improved consumer satisfaction and loyalty can be achieved by allowing contact through the preferred service, thereby leading to an increase in brand trust and loyalty.</p>
                                        </div>
                                        <div className="text d-flex mb-20">
                                            <p>Up to 52% of consumers prefer brands that provide convenient experiences.</p>
                                        </div>
                                        <div className="text d-flex mb-20 mt-20">
                                            <span className="icon color-blue5 me-2 flex-shrink-0">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p><b>Automate Frequently Asked Questions Responses</b></p>
                                        </div>
                                        <div class="text d-flex mb-20">

<p>The capacity of a <b>WhatsApp chatbot for businesses</b> to consistently and accurately respond to frequently asked questions is one of its most notable capabilities.
</p>
</div>
<div class="text d-flex mb-20">

<p>Businesses can save time and resources by training their chatbots to identify frequently asked questions and provide prompt answers, thanks to the <a href="whatsapp-business-api-ultimate-guide" target="_blank"> WhatsApp Business API </a> connection.
</p>
</div>
<div class="text d-flex mb-20">

<p>So, as mentioned above, there are multiple benefits to using a chatbot in your business.
     Let's see how you can easily create a WhatsApp chatbot by simply following these steps.</p>
</div>
                                    </div>
                               
                                    <div id="whatsapp-broadcast34">
            <h3 className="main-title mb-10">Steps to Create WhatsApp Chatbots in 2024</h3>

            <h6 className="mt-4 mb-20">Step 1: Choose the Best Platform</h6>
            <div className="text d-flex mb-20">
                <p>While creating a <b>WhatsApp chatbot,</b> you have two choices: whether you can code it or use a powerful, no-code chatbot platform.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>It would be best to build it using a no-code chatbot platform like <b>Anantya.ai.</b> Ultimately, there's no reason to tirelessly code a chatbot when you can create a visual <b>chatbot for WhatsApp.</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p>We have WhatsApp chatbots that are ready to be used for any industry and use case; this reduces the time it takes to go live.</p>
            </div>

            <h6 className="mt-4 mb-20">Step 2: Requirements for implementing chatbots on WhatsApp</h6>
            <div className="text d-flex mb-20">
                <p>You must first be able to use the business API for WhatsApp. Through its partners, WhatsApp provides access to these APIs directly.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>By using Anantya.ai, you will be eligible to access the WhatsApp Business API platform while creating the Free <b>Chat Bot for your business.</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p>Additionally, you must have a confirmed Facebook Business Manager (FBM) account in order to obtain WhatsApp bot API access.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>You must set up a phone number to use as your WhatsApp business phone number.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>You must ensure that this number can accept calls because WhatsApp will call it to verify and activate it for your WhatsApp Business Account.</p>
            </div>

            <h6 className="mt-4 mb-20">Step 3: Log in with Anantya.ai</h6>
            <div className="text d-flex mb-20">
                <p>Once you are all done with the procedure of setting your <a href="whatsapp-business-api" target="_blank">WhatsApp Business API</a> in your account at Anantya.ai.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>You get the login credentials for the Anantya.ai Platform from our team, and the page window will appear as shown below.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel='noreferrer'>
                    <img src={whatsappChatbotImage1} className="img-fluid pb-3 mx-auto" alt="Anantya.ai Dashboard Login" />
                </a>
            </div>
            <div className="text d-flex mb-20">
                <p>By simply typing the given login and password, you can log in to Anantya.ai’s API platform.</p>
            </div>

            <h6 className="mt-4 mb-20">Step 4: Dashboard Panel</h6>
            <div className="text d-flex mb-20">
                <p>Once you log in to the panel, you will get to see the dashboard, which has multiple options. For creating a chatbot, you should choose the “Bot setup” option on the left-hand side corner.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel='noreferrer'>
                    <img src={whatsappChatbotImage2} className="img-fluid pb-3 mx-auto" alt="WhatsApp Chatbot Dashboard" />
                </a>
            </div>
            <div className="text d-flex mb-20">
                <p>In the bot setup, you will find six different ways to set up a bot. Each of these steps will be explained personally by our team to make your WhatsApp chatbot journey easy.</p>
            </div>

            {/* Steps 5 to 10 can be structured similarly */}
            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>First Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Keyword Auto Reply:</b> This function is used to automatically send messages to the customers if they trigger specific keywords, which are created by the user or the client.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>For example, if there is a client who has a grocery store, Now he wants his customers to know about the current offers available at their store. So we will create a keyword named "Offers" and put a button on the chatbot with the same keyword as an option.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>When the customer clicks on the "Offers" button, the bot will understand the keyword and trigger the message that we have created for the "Offers" keyword automatically for the customer.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel='noreferrer'>
                    <img src={whatsappChatbotImage3} className="img-fluid pb-3 mx-auto" alt="WhatsApp Chatbot Setup" />
                </a>
            </div>

            <div>
            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>Second Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Welcome message:</b> In this option, if a customer has come to the client's WhatsApp for the first time, a welcome message will be sent automatically to the customer.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>The user can create a welcome message of his own by clicking on the "Add Welcome Message" button (as shown in the screenshot).</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer">
                    <img src={welcomeMessageImg} className="img-fluid pb-3 mx-auto" alt="welcome-message" />
                </a>
            </div>

            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>Third Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Out of Office:</b> If a customer tries to chat before or after the client's working hours, then an Out of Office message will be sent to the customer.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>Again, here, users can create a message of their own and mention the days and times of their operation according to their needs.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer">
                    <img src={outOfOfficeMessageImg} className="img-fluid pb-3 mx-auto" alt="out-of-office-message" />
                </a>
            </div>

            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>Fourth Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Bot Setup:</b> Here, <b>anantya.ai</b> will share a sample chatflow format with the client; the user will then use that format to create a chatflow tailored to his needs and share it with us.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>We will then create a chatbot for the client. Then, customers can use services, order, buy, get information, and make payments with the help of the chatbot.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappBotSetupImg} className="img-fluid pb-3 mx-auto" alt="whatsapp-bot-setup" />
                </a>
            </div>

            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>Fifth Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Feedback Message:</b> Once a chat with the customer is over, the client gets an option to close the chat.</p>
            </div>
            <div className="text d-flex mb-20">
                <p>When he closes a chat, an automatic feedback message will be sent to the customer (as mentioned in the screenshot).</p>
            </div>
            <div className="text d-flex mb-20">
                <p>He can create and add a feedback message using the "Add Feedback Message" button. As seen in the below image.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer">
                    <img src={feedbackMessageImg} className="img-fluid pb-3 mx-auto" alt="feedback-message" />
                </a>
            </div>

            <div className="text d-flex mb-20 mt-20">
                <span className="icon color-blue5 me-2 flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                </span>
                <p><b>Sixth Option</b></p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>Quick reply:</b> For some basic keywords, we can create quick reply messages to send to customers.</p>
            </div>
            <div className="text d-flex mb-20">
                <p><b>For example,</b> if we set a quick reply message for the word "location," automatically a quick reply will go to the customer saying, "Our location is." The client can use the "Add quick reply" button and can enter a title and their quick reply messages.</p>
            </div>
            <div className="text-center">
                <a href="https://calendly.com/info-w0m/30min?month=2024-02" target="_blank" rel="noopener noreferrer">
                    <img src={quickReplyImg} className="img-fluid pb-3 mx-auto" alt="quick-reply" />
                </a>
            </div>
            </div>

                               </div> 
                              
              <div id="whatsapp-broadcast35">
        <h6 className="mt-4 mb-20">Conclusion</h6>
        <div className="text d-flex mb-20">
          <p>
            Creating a <b>WhatsApp chatbot for your business</b> will also enhance your customer support, boost sales and engagement, and improve overall customer satisfaction.
          </p>
        </div>
        <div className="text d-flex mb-20">
          <p>
            By following these few steps and using powerful tools like Anantya.ai, businesses can simply set up a WhatsApp chatbot to streamline communication with their customers and provide them with quick and efficient assistance.
          </p>
        </div>
        <div className="text d-flex mb-20">
          <p>
            With the advantages of automation and 24/7 availability, WhatsApp chatbots offer a convenient and effective solution for businesses looking to enhance their customer service and drive growth.
          </p>
        </div>
              </div>

                              <section className="faq style-4 pb-60" id="whatsapp-broadcast36">
        <div className="container px-md-0 px-4" id="whatsapp-broadcast9">
          <div className="section-head text-center style-4" style={{ padding: '24px 10px', boxShadow: '0px 0px 20px 6px #e0dfdf59', borderRadius: '20px' }}>
            <small className="title_small">Frequently Asked Questions</small>
     
            <div className="content">
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionSt4">
                  <div className="row gx-5 px-md-5 px-0">
                    <div className="col-lg-12 col-sm-12">
                      {/* Question 1 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading11">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            Q1: Which two methods are best for integrating and creating a chatbot for WhatsApp?
                          </button>
                        </h2>
                        <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>Either the WhatsApp Business App or the WhatsApp Business Platform can be used to link your WhatsApp chatbot service. Small businesses should choose the first option, but if you require more than basic automation, you will need to engage developers to build chatbots on your behalf.</p>
                            <p>However, because Anantya.ai is a WhatsApp business solution provider, the second choice makes integration quick and easy.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 2 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading12">
                          <button className="accordion-button py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                            Q2: What requirements must be followed to integrate a chatbot with WhatsApp?
                          </button>
                        </h2>
                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>Your company must have access to the official WhatsApp Business API and a confirmed Facebook Business account in order to successfully integrate a chatbot with WhatsApp.</p>
                            <p>You also require a registered business phone number on WhatsApp.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 3 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading13">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                            Q3: How can I use a WhatsApp chatbot to send broadcasts?
                          </button>
                        </h2>
                        <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>Broadcasts can be used to send people through paths, messages with options, and simple text messages. You can even plan your broadcasts and direct them to particular user segments with our help.</p>
                            <p>You must utilize a template message if you want to <a href="whatsapp-broadcasting">broadcast messages on WhatsApp</a> after the 24-hour deadline has passed.</p>
                            <p>All you need to do is use the Template Message node to set up the templates right in the conversation flow while creating your WhatsApp AI chatbot.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 4 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading4">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Q4: How can I access the business API for WhatsApp?
                          </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>WhatsApp uses its partners to distribute its business APIs. With our platform, Anantya.ai will assist you in gaining access to the WhatsApp API when you construct a free chatbot. Additionally, you can acquire a 24-hour verification of your WhatsApp AI number.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 5 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading5">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            Q5: How much does the chatbot on WhatsApp cost?
                          </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>WhatsApp marketing is growing, and you need to take advantage of this by using WhatsApp to connect with your clients. Therefore, even though implementing your WhatsApp AI chatbot isn't free, we can assist you in doing so at a reasonable cost because of our relationships with WhatsApp API providers.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 6 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading6">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            Q6: What is the business API for WhatsApp?
                          </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>Medium-sized and big organizations use the WhatsApp Business API to increase consumer engagement on WhatsApp with interactive buttons, broadcasts, templates, and other unique capabilities that aren't found in the WhatsApp Business App.</p>
                            <p>Large companies with lots of clients and a business suite that connects with their other software, processes, and data are the ones who use it the most.</p>
                          </div>
                        </div>
                      </div>
                      {/* Question 7 */}
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header" id="heading7">
                          <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            Q7: Is there a free Anantya.ai WhatsApp integration?
                          </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionSt4">
                          <div className="accordion-body">
                            <p>Yes, the Anantya.ai WhatsApp API service provider offers you free chatbot use with the WhatsApp API platform Connectivity.</p>
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
                           </section>  </div>
                           
      
                           </div>
                           <div className="col-lg-4">
      <div className="summary-card">
        <h6 className="pb-20 border-bottom border-1 brd-gray">Table of Contents:</h6>
        <ul>
          <li><a href="#whatsapp-broadcast31">What is a WhatsApp chatbot?</a></li>
          <li><a href="#whatsapp-broadcast32">Why should businesses use WhatsApp chatbots?</a></li>
          <li><a href="#whatsapp-broadcast33">Benefits of Using ChatBots</a></li>
          <li><a href="#whatsapp-broadcast34">Steps to Create WhatsApp Chatbots</a></li>
          <li><a href="#whatsapp-broadcast35">Conclusion</a></li>
          <li><a href="#whatsapp-broadcast36">FAQs</a></li>
        </ul>
      </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </main>
      <ScrollToTopButton />
       <WhatsAppWidget />
    </div>
  );
};

export default CreateWhatsAppChatbot;
