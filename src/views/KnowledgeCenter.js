import React from 'react';
import { Helmet } from 'react-helmet';
import './knowledgecenter.css'; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const KnowledgeCenter = () => {
  return (
    <>
     <Helmet>
            <title>Knowledge Center - Knowledge center of Conversational Platform</title>
            <meta name="robots" content="index,follow" />
            <meta name="description" content="In our Knowledge centre pages we will explore scope of Conversational ai platform." />
            <meta property="og:title" content="Knowledge Center - Knowledge center of Conversational Platform" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="In our Knowledge centre pages we will explore scope of Conversational ai platform." />
            <meta property="og:url" content="https://anantya.ai/knowledge-center" />
            <meta property="og:site_name" content="anantya.ai" />
            <meta property="og:image" content="https://anantya.ai/assets/img/home/Home%20page%20Graphics.webp" />
            <link rel="canonical" href="https://anantya.ai/knowledge-center" />
            <meta name="author" content="Anantya" />

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Anantya.ai",
                    "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
                    "url": "https://anantya.ai/",
                    "logo": "https://anantya.ai/assets/img/logo.webp",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+971565480273",
                        "contactType": "sales",
                        "areaServed": ["AE", "SA", "BH"],
                        "availableLanguage": "en"
                    },
                    "sameAs": [
                        "https://www.facebook.com/anantyaai",
                        "https://www.instagram.com/anantya.ai",
                        "https://www.youtube.com/@Anantyaai",
                        "https://www.linkedin.com/company/anantya-ai",
                        "https://www.pinterest.com/anantyaai"
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "name": "Knowledge Center - Knowledge center of Conversational Platform",
                            "description": "In our Knowledge centre pages we will explore scope of Conversational ai platform."
                        },
                        {
                            "@type": "WebSite",
                            "name": "Anantya",
                            "alternateName": "anantya.ai",
                            "url": "https://anantya.ai/"
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
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
                })}
            </script>
        </Helmet>
    <div className="knowledge-center-page">
         {/* section1*/}
        <section style={{ background: '#f3fbff' }}>
            <div className="container py-5 text-lg-start">
                <div className="row py-5 text-black text-center my-auto">
                    <div className="col-md-12 col-sm-12 pt-3">
                        <h1 className='fw-bold h2'>Anantya Support </h1>
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
