import React from 'react';
import { Helmet } from 'react-helmet';
import './knowledgecenter.css'; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const KnowledgeCenter = () => {
  return (
    <>
     (
        <Helmet>
            {/* Alternate Links */}
            <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/knowledge-center" />
            <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/knowledge-center" />
            <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/knowledge-center" />
            <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/knowledge-center" />
            <link rel="alternate" hreflang="en-in" href="https://anantya.ai/knowledge-center" />
            <link rel="alternate" hreflang="en" href="https://anantya.ai/knowledge-center" />

            {/* Title and Meta Tags */}
            <title>Knowledge Center - Knowledge center of Conversational Platform</title>
            <meta name="robots" content="index,follow" />
            <meta name="title" content="Knowledge Center - Knowledge center of Conversational Platform" />
            <meta name="description" content="In our Knowledge centre pages we will explore scope of Conversational ai platform." />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Knowledge Center - Knowledge center of Conversational Platform" />
            <meta property="og:description" content="In our Knowledge centre pages we will explore scope of Conversational ai platform." />
            <meta property="og:url" content="https://anantya.ai/knowledge-center" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://ik.imagekit.io/cloy701fl/images/whatsapp-marketing.webp" />
            <link rel="canonical" href="https://anantya.ai/knowledge-center" />
            <meta name="author" content="Anantya" />

            {/* JSON-LD for Organization */}
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Anantya.ai",
                    "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
                    "url": "https://anantya.ai/",
                    "logo": "https://ik.imagekit.io/cloy701fl/images/logo.webp",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+971565480273",
                        "contactType": "sales",
                        "areaServed": ["AE", "SA", "BH", "IN"],
                        "availableLanguage": "en"
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

            {/* JSON-LD for WebPage */}
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    "@id": "#WebPage",
                    "url": "https://anantya.ai/knowledge-center",
                    "name": "Knowledge Center - Knowledge center of Conversational Platform"
                }
            `}</script>

            {/* JSON-LD for BreadcrumbList */}
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org/",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Homepage",
                            "item": "https://anantya.ai"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Knowledge Center",
                            "item": "https://anantya.ai/knowledge-center"
                        }
                    ]
                }
            `}</script>
        </Helmet>

    <div className="knowledge-center-page">
         {/* section1*/}
        <section style={{ background: '#f3fbff' }}>
            <div className="container py-5 text-lg-start">
                <div className="row py-5 text-black text-center my-auto">
                    <div className="col-md-12 col-sm-12 pt-3">
                        <h1 className='fw-bold'>Anantya Support </h1>
                    </div>
                   
                </div>
            </div>
        </section>
      {/* section1*/}
      {/* section2*/}
        <section>
            <div className="container my-5 py-5">
                <div className="info">
                    <div className="knowledge_card mb-2">
                        <div className="user_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#5dc4eb"
                                className="bi bi-file-earmark-medical my-auto" viewBox="0 0 16 16">
                                <path
                                    d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z">
                                </path>
                                <path
                                    d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z">
                                </path>
                            </svg>
                        </div>
                        <a href="/getting-started-with-anantya" className="inf_content">
                            <h6>1. Anantya Platform</h6>
                            <p>Getting Started with Anantya.ai: Account Setup and Features
                                Guide</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

      {/* section2*/}

      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
      </>
  );
};

export default KnowledgeCenter;
