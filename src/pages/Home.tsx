import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import TestimonialSection from '../components/Testimonials';
import HeaderCarousel from '../components/Headercarousel';
import ServicesAndTestimonials from './Services';

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

interface TestimonialProps {
  image: string;
  name: string;
  profession: string;
  review: string;
  rating: number;
}
const ServiceCard: React.FC<ServiceProps> = ({ image, title, description }) => (
  <div className="col-md-6 col-lg-4">
    <div className="service-item">
      <div className="service-img">
        <img src={image} className="img-fluid rounded-top w-100" alt={title} />
      </div>
      <div className="rounded-bottom p-4">
        <a href="#" className="h4 d-inline-block mb-4">
          {title}
        </a>
        <p className="mb-4">{description}</p>
        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  
  
    return (
        <>
            {/* Carousel Start */}
           <div>
           <HeaderCarousel />
           </div>
            {/* Carousel End */}

            {/* About Section */}
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7">
                            <h4 className="text-primary">Take the brighter path</h4>
                            <h1 className="display-5 mb-4">Tailored innovative technologies for every business challenge; tech lights the way.</h1>
                            <p className="mb-4">
                            <p>
                we specialize in providing comprehensive, all-in-one solutions for Internet and e-commerce, catering to a diverse range of clients, from Small and Medium Enterprises (SMEs) to large international firms and organizations. Our commitment is to empower businesses through cutting-edge technology, ensuring they stay ahead in the ever-evolving digital landscape.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> constructing revolutionary technology solutions from the ground up using custom software.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Efficient and pragmatic. Our radical engagement model is an evolved approach to building technical solutions.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> modernizing antiquated systems, applications, and procedures through digitization for improved, more significant performance.
                  </li>
                </ul>
                <p className="fst-italic">
                End-to-end digital transformation solutions delivered through a comprehensive suite of technical capabilities.
                </p>
                            </p>
                            {/* Additional content */}
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary rounded position-relative overflow-hidden">
                <img
                  src="img/tata-1.png"
                  className="img-fluid rounded w-100"
                  alt=""
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                  }}
                >
                  
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: 10,
                    transform: "rotate(90deg)",
                  }}
                >
                 
                </div>
                <div className="rounded-bottom">
                  <img
                    src="img/about-5.jpg"
                    className="img-fluid rounded-bottom w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
                    </div>
                </div>
            </div>
<ServicesAndTestimonials />
      

       {/*
         <div className="container-fluid feature pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h4 className="text-primary">Our Features</h4>
                    <h1 className="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
                </div>
                <div className="row g-4">
                    {[
                        { icon: "chart-line", title: "Global Management" },
                        { icon: "university", title: "Corporate Banking" },
                        { icon: "file-alt", title: "Asset Management" },
                        { icon: "hand-holding-usd", title: "Investment Bank" }
                    ].map((feature, index) => (
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.2 + 0.2 * index}s`} key={index}>
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className={`fas fa-${feature.icon} fa-4x text-primary`}></i>
                                </div>
                                <h4>{feature.title}</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       
       <div className="container-fluid offer-section pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h4 className="text-primary">Our Offer</h4>
                    <h1 className="display-5 mb-4">Benefits We offer</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="nav nav-pills bg-light rounded p-5">
                            {['Lending money for investment of your new projects', 'Mobile payment is more flexible and easy for all investors', 'All transaction is kept free for the member of pro traders'].map((offer, index) => (
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href={`#collapse${index + 1}`} key={index}>
                                    <h5 className="mb-0">{offer}</h5>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="tab-content">
                            {['offer-1', 'offer-2', 'offer-3'].map((offer, index) => (
                                <div id={`collapse${index + 1}`} className="tab-pane fade show p-0" key={index}>
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src={`img/${offer}.jpg`} className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?</p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
        {/*<div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Blog & News</h4>
          <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae
            aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam
            mollitia hic.
          </p>
        </div>
        <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay="0.2s">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="blog-item p-4" key={index}>
              <div className="blog-img mb-4">
                <img src={`img/service-${item}.jpg`} className="img-fluid w-100 rounded" alt="" />
                <div className="blog-title">
                  <a href="#" className="btn">
                    {item % 2 === 0 ? 'Non-Dividend Stocks' : 'Dividend Stocks'}
                  </a>
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">Options Trading Business?</a>
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis
                accusamus labore....
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={`img/testimonial-${item}.jpg`}
                  className="img-fluid rounded-circle"
                  style={{ width: '60px', height: '60px' }}
                  alt=""
                />
                <div className="ms-3">
                  <h5>Admin</h5>
                  <p className="mb-0">October 9, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <div className="container-fluid faq-section pb-5">
      <div className="container pb-5 overflow-hidden">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">FAQs</h4>
          <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam
            temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
              {['What Does This Tool Do?', 'What Are The Disadvantages Of Online Trading?', 'Is Online Trading Safe?', 'What Is Online Trading, And How Dose It Work?', 'Which App Is Best For Online Trading?', 'How To Create A Trading Account?'].map((question, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`flush-heading${index + 1}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index + 1}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index + 1}`}
                    >
                      {question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index + 1}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${index + 1}`}
                    data-bs-parent="#accordionFlushSection"
                  >
                    <div className="accordion-body">Placeholder content for this accordion.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="bg-primary rounded">
              <img src="img/about-2.png" className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    */}
   

   
    <div>
        {/*<TestimonialSection />*/}
    </div>
        </>
    );
};

export default Home;
