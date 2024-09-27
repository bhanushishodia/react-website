import React from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './BlogSlider.css'; // Add necessary styles for Swiper
// Import images
import img1 from '../../assets/images/blog/whatsapp-business-app-vs-whatsapp-business-api.webp';
import img2 from '../../assets/images/blog/5-winning-whatsapp-marketing-strategies.webp';
import img3 from '../../assets/images/blog/from-vision-to-reality-how-anantya.ai.webp';
import img4 from '../../assets/images/blog/whatsapp-business-api-in-banking-sector.webp'; // Add new images
import img5 from '../../assets/images/blog/whatsapp-marketing-direct-communication-with-customers.webp'; // Add new images
import img6 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img7 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img8 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img9 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img10 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img11 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img12 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img13 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img14 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img15 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img16 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img17 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img18 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img19 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images
import img20 from '../../assets/images/blog/meta-frequency-capping-update.webp'; // Add new images

const BlogSlider = () => {
  React.useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Cleanup Swiper instance on unmount
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []); 

  return (
    <section className="popular-posts related-posts bg-gray5">
      <div className="container py-5">
        <h5 className=" pb-5 display-6">Recommended Resources</h5>
        <div className="related-postes-slider position-relative">
          <div className="swiper-container">
            <div className="swiper-wrapper blog">
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/whatsapp-business-app-vs-whatsapp-business-api" className="img radius-7 overflow-hidden img-cover">
                    <img src={img1} className="card-img-top" alt="WhatsApp Business App vs WhatsApp Business API" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/whatsapp-business-app-vs-whatsapp-business-api">WhatsApp Business App vs WhatsApp Business API</a>
                    </h5>
                    <p className="small mt-2 op-8">When WhatsApp introduced the WhatsApp Business app, it came out as a great tool for small businesses to interact with customers.</p>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/whatsapp-marketing-strategies-to-drive-sales" className="img radius-7 overflow-hidden img-cover">
                    <img src={img2} className="card-img-top" alt="5 Winning WhatsApp Marketing Strategies" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/whatsapp-marketing-strategies-to-drive-sales">5 Winning WhatsApp Marketing Strategies to Drive 3X More Sales</a>
                    </h5>
                    <p className="small mt-2 op-8">As of now, the world's population is around 7.5 billion people. And guess what?</p>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/reshaping-customer-engagement-on-whatsapp" className="img radius-7 overflow-hidden img-cover">
                    <img src={img3} className="card-img-top" alt="Reshaping Customer Engagement on WhatsApp" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/reshaping-customer-engagement-on-whatsapp">Reshaping Customer Engagement on WhatsApp</a>
                    </h5>
                    <p className="small mt-2 op-8">Anantya.ai is Reshaping Customer Engagement on WhatsApp. The journey started when we realized that the existing customer engagement.</p>
                  </div>
                </div>
              </div>
              {/* Slide 4 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-1" className="img radius-7 overflow-hidden img-cover">
                    <img src={img4} className="card-img-top" alt="Additional Content 1" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-1">WhatsApp Business API Conversation Pricing is Changing!</a>
                    </h5>
                    <p className="small mt-2 op-8">With billions of users worldwide, WhatsApp has established a well-known presence among users..</p>
                    <a href="/blog/additional-page-1"> <small> Read More</small>
                    </a>
                    </div>
                </div>
              </div>
              {/* Slide 5 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-2" className="img radius-7 overflow-hidden img-cover">
                    <img src={img5} className="card-img-top" alt="Additional Content 2" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-2">Additional Content 2</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 2.</p>
                  </div>
                </div>
              </div>
              {/* Slide 6 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img6} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 7 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img7} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 8 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img8} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 9 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img9} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 10 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img10} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 11 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img11} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 12 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img12} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 13 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img13} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 14 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img14} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 15 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img15} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 16 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img16} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 17 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img17} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 18 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img18} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 19 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img19} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/blogadditional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
              {/* Slide 20 */}
              <div className="swiper-slide">
                <div className="card border-0 bg-transparent rounded-0 p-0 d-block">
                  <a href="/blog/blog/additional-page-3" className="img radius-7 overflow-hidden img-cover">
                    <img src={img20} className="card-img-top" alt="Additional Content 3" />
                  </a>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <a href="/blog/additional-page-3">Additional Content 3</a>
                    </h5>
                    <p className="small mt-2 op-8">Brief description of the additional content 3.</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
