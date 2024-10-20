import React from 'react';
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";

import CommentForm from "../../components/common/CommentForm";


const MetaWhatsAppBusiness = () => {
  return (
    <section>
        <div className="container py-5 mt-4">
          {/* SEO-Friendly Heading */}
          <h1 className="pb-2 text-center">
          Meta’s WhatsApp Business Update: Transforming Key Industries
          </h1>

          <div className="text-center">
         
          </div>

          <div className="row px-1 mx-1 mt-5 py-5">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12 col-sm-12 text-justify text-start">
              <div className="blogcontentui">
             
              </div>

              {/* Comment Section */}
              <CommentForm />
            </div>

            {/* Table of Contents */}
            <div className="col-lg-4 col-md-12 py-4 py-lg-0">
              <aside className="summary-card">
                <h3 className="font-weight-bold mb-3 text-start pb-3 border-bottom border-1 brd-gray">
                  Table of Contents
                </h3>
              
              </aside>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <WhatsAppWidget />
      </section>
  );
};

export default MetaWhatsAppBusiness;
