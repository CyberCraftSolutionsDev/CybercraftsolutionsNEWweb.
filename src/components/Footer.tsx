import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div
        className="container py-5 border-start-0 border-end-0"
        style={{ border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.08)' }}
      >
        <div className="row g-5">
          {/* Footer Item 1 */}
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
            <Link
  to="/"
  className="navbar-brand p-0"
  aria-label="Homepage"
  style={{
    display: 'flex', // Keeps the link and logo aligned
    alignItems: 'center',
  }}
>
  <img
    src="img/logo-2.png"
    alt="Brand Logo"
    style={{
      height: '90px', // Increased default height
      width: 'auto',   // Ensures aspect ratio is maintained
      transition: 'transform 0.3s ease, height 0.3s ease', // Smooth height adjustment
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)'; // Scales up smoothly
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'scale(1)'; // Resets to original size
    }}
  />
</Link>
              <p className="mb-4">
              Dear Valued Customer,
We can’t do it alone We have an ambitious road ahead, We're thrilled to extend an invitation for you to become a part of our vibrant online community. By subscribing to our website, you'll gain access to exclusive updates, special offers, and insightful content tailored just for you.


              </p>
              <div className="d-flex">
             
               
              </div>
            </div>
          </div>

          {/* Footer Item 2 */}
          <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link to="/about"><i className="fas fa-angle-right me-2"></i> About Us</Link>
              <Link to="#"><i className="fas fa-angle-right me-2"></i> Feature</Link>
             
              <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</Link>
            </div>
          </div>

          {/* Footer Item 3 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Support</h4>
              <Link to="/privacy"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
              <Link to="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
             
              <Link to="#"><i className="fas fa-angle-right me-2"></i> Support</Link>
             
           
            </div>
          </div>

          {/* Footer Item 4 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Contact Info</h4>
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                <p className="text-white mb-0">WESTLANDS - PEPONI
                Peponi Road</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope text-primary me-3"></i>
                <p className="text-white mb-0">info@cybercraftsolutions.co.ke</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-phone-alt text-primary me-3"></i>
                <p className="text-white mb-0">+254745835159</p>
              </div>
              <div className="d-flex align-items-center mb-4">
                <i className="fab fa-firefox-browser text-primary me-3"></i>
                <p className="text-white mb-0">cybercraftsolutions.co.ke</p>
              </div>
              <div className="d-flex">
                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white"></i></a>
              
                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white"></i></a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
