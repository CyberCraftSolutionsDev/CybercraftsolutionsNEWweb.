import React from "react";


const NotFound: React.FC = () => {
  return (
    <div>
    <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
            <h4 className="text-white display-4 mb-4">NotFound</h4>
            <ol className="breadcrumb d-flex justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">NotFound</li>
            </ol>
          </div>
        </div>
    <div className="container-fluid bg-light py-5">
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <i
              className="far fa-frown-open display-1 text-primary mb-4"
              style={{ width: "80px", height: "80px" }}
            ></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist on our
              website! Maybe go to our home page or try to use a search?
            </p>
            <a
              className="btn btn-primary rounded-pill py-3 px-5"
              href="/"
            >
              Go Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
