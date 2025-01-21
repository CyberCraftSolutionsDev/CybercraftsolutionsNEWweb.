import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Corrected import path for modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import carousel1 from "../components/assets/img/carousel-1.jpg";
import carousel2 from "../components/assets/img/carousel-2.jpg";
import { Link } from "react-router-dom"


const HeaderCarousel: React.FC = () => {
  return (
    <div className="header-carousel">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header-carousel-item">
            <img src={carousel1} className="img-fluid w-100" alt="Carousel 1" />
            <div className="carousel-caption">
  <div className="container">
    <div className="row gy-0 gx-5">
      <div className="col-lg-0 col-xl-5"></div>
      <div className="col-xl-7 animated fadeInLeft">
        <div className="text-sm-center text-md-end">
          <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Cybercraftsolutions</h4>
          <h1 className="display-4 text-uppercase text-white mb-4">    Sharpen your edge.Lead your sector.</h1>
          <p className="mb-5 fs-5">
          We deliver custom software and applications that give you the competitive advantage in your industry. Move first. Remain first.
          </p>
          <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
            
            <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/learn-more">
              Work With Us
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-md-end">
            <h2 className="text-white me-2">Follow Us:</h2>
            <div className="d-flex justify-content-end ms-2">
              <Link className="btn btn-md-square btn-light rounded-circle me-2" to="/facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
             
              <Link className="btn btn-md-square btn-light rounded-circle mx-2" to="/instagram">
                <i className="fab fa-instagram"></i>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-carousel-item">
            <img src={carousel2} className="img-fluid w-100" alt="Carousel 2" />
            <div className="carousel-caption">
  <div className="container">
    <div className="row g-5">
      <div className="col-12 animated fadeInUp">
        <div className="text-center">
          <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Cyber Craft Solutions</h4>
          <h1 className="display-4 text-uppercase text-white mb-4">We are a software and web development company</h1>
          <p className="mb-5 fs-5">
          Our main area of operations is offering all-in-one solutions for Internet and e-commerce.We prepare information systems, websites, online stores and apps for Small & Medium Enterprises  as well as large international firms and organisations.
          Whether your business seeks technology innovation through software development, application modernization services, or total digital transformation, we can help illuminate the possibilities by pairing your industry experience with our technical acumen.
          </p>
          <div className="d-flex justify-content-center flex-shrink-0 mb-4">
          
            <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/learn-more">
            Work With Us
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="text-white me-2">Follow Us:</h2>
            <div className="d-flex justify-content-end ms-2">
              <Link className="btn btn-md-square btn-light rounded-circle me-2" to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </Link>
          
              <Link className="btn btn-md-square btn-light rounded-circle mx-2" to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
