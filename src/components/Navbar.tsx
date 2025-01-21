import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar: React.FC = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        {/* Logo */}
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
      height: '180px', // Increased default height
      width: 'auto',   // Ensures aspect ratio is maintained
      transition: 'transform 0.3s ease, height 0.3s ease', // Smooth height adjustment
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'scale(1.8)'; // Scales up smoothly
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'scale(1)'; // Resets to original size
    }}
  />
</Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
           {/*<Link to="/blogs" className="nav-item nav-link">
              Blogs
            </Link> */} 

            {/* Dropdown Menu */}
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
               {/* <li><Link to="/features" className="dropdown-item">Our Features</Link></li>*/} 
                <li><Link to="#" className="dropdown-item">Our Shop</Link></li>
              {/*  <li><Link to="/testimonial" className="dropdown-item">Testimonial</Link></li> */}
                <li><Link to="#" className="dropdown-item">Support</Link></li>
                <li><Link to="#" className="dropdown-item">Partners</Link></li>
               
              </ul>
            </div>

            <Link to="/contact" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/apply"
            className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
