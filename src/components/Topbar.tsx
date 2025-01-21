import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Topbar: React.FC = () => {
  return (
    <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-flex flex-wrap">
            <Link to="/location" className="text-muted small me-4">
              <i className="fas fa-map-marker-alt me-2"></i>WESTLANDS - PEPONI
              Peponi Road
            </Link>
            <a href="tel:+01234567890" className="text-muted small me-4">
              <i className="fas fa-phone-alt me-2"></i>+254745835159
            </a>
            <a href="info@cybercraftsolutions.co.ke" className="text-muted small me-0">
              <i className="fas fa-envelope me-2"></i>info@cybercraftsolutions.co.ke
            </a>
          </div>
        </div>
       <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
          {/*  <Link to="/register" className="me-3">
              <small><i className="fa fa-user me-2"></i>Register</small>
            </Link> */}
           {/* <Link to="/login" className="me-3">
              <small><i className="fa fa-sign-in-alt me-2"></i>Login</small>
            </Link> */}
           {/* <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <small><i className="fa fa-home me-2"></i> My Dashboard</small>
              </Link>
              <div className="dropdown-menu rounded">
                <Link to="/profile" className="dropdown-item">
                  <i className="fas fa-user-alt me-2"></i> My Profile
                </Link>
                <Link to="/inbox" className="dropdown-item">
                  <i className="fas fa-comment-alt me-2"></i> Inbox
                </Link>
                <Link to="/notifications" className="dropdown-item">
                  <i className="fas fa-bell me-2"></i> Notifications
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <i className="fas fa-cog me-2"></i> Account Settings
                </Link>
                <Link to="/logout" className="dropdown-item">
                  <i className="fas fa-power-off me-2"></i> Log Out
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
