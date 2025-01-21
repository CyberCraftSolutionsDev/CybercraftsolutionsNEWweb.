import React, { useState } from "react";

const OfferSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("collapseOne");

  const descriptions = [
    {
      id: "collapseOne",
      title: "KRA ETIMS",
      description:
        "Experience real-time reporting, reduced administrative burdens, and secure electronic invoicing to keep your business compliant. Focus on growing your business while our solution handles tax compliance with ease and efficiency. Our team provides unparalleled support and guidance to ensure a smooth transition to eTIMS.",
      imgSrc: "img/offer-1.jpg",
      introTitle: 'KRA ETIMS - Simplifying Compliance',
      introText: 'Cyber Craft Solutions collaborates with KRA eTIMS to provide seamless electronic invoicing, simplifying tax compliance for businesses.',
    },
    {
      id: "collapseTwo",
      title: "Software Development",
      description:
        "Our platform ensures you have access to the right funding for expanding your business operations and achieving long-term success.",
      imgSrc: "img/offer-2.jpg",
      introTitle: 'Software Development Solutions',
      introText: 'Discover innovative software development services tailored to your business needs.',
    },
    {
      id: "collapseThree",
      title: "Graphic Design",
      description:
        "Experience the convenience of mobile payments, designed to provide flexibility and efficiency for all your financial transactions.",
      imgSrc: "img/offer-3.jpg",
      introTitle: 'Creative Graphic Design',
      introText: 'Elevate your brand with cutting-edge graphic design solutions.',
    },
    {
      id: "collapseFour",
      title: "ICT Services",
      description:
        "As a pro trader member, enjoy free transactions and premium benefits that enhance your trading experience.",
      imgSrc: "img/offer-3.jpg",
      introTitle: 'ICT Services',
      introText: 'Enhancing businesses with top-tier ICT solutions.',
    },
    {
      id: "collapseFive",
      title: "Networking",
      description:
        "Get reliable and scalable networking solutions for your business operations.",
      imgSrc: "img/offer-3.jpg",
      introTitle: 'Networking Solutions',
      introText: 'Seamless networking for enhanced connectivity.',
    },
    {
      id: "collapseSix",
      title: "CCTV Solutions",
      description: "Secure your premises with advanced CCTV solutions.",
      imgSrc: "img/offer-3.jpg",
      introTitle: 'CCTV Solutions',
      introText: 'Stay secure with our cutting-edge CCTV solutions.',
    },
    // Add more tabs as needed
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeContent = descriptions.find((desc) => desc.id === activeTab);

  return (
    <div className="container-fluid offer-section py-5">
      <div className="container py-5">
        {activeContent && (
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: "800px" }}
          >
             <h4 className="text-primary">{activeContent.introTitle}</h4>
            <h1 className="display-5 mb-4">{activeContent.title}</h1>
            <p className="mb-0">{activeContent.introText}</p>
          </div>
        )}
        <div className="row g-5 align-items-center">
          {/* Scrollable Tabs */}
          <div className="col-xl-5">
            <div
              className="nav nav-pills bg-light rounded p-3"
              style={{
                maxHeight: "300px", // Adjust height to show only 4 tabs
                overflowY: "auto", // Enable vertical scrolling
              }}
            >
              {descriptions.map((desc) => (
                <a
                  key={desc.id}
                  className={`accordion-link p-3 ${
                    activeTab === desc.id ? "active" : ""
                  } mb-2`}
                  onClick={() => handleTabClick(desc.id)}
                  style={{
                    display: "block",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <h5 className="mb-0">{desc.title}</h5>
                </a>
              ))}
            </div>
          </div>
          {/* Content Section */}
          <div className="col-xl-7">
            <div className="tab-content">
              {activeContent && (
                <div className="tab-pane fade show active">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src={activeContent.imgSrc}
                        className="img-fluid w-100 rounded"
                        alt={activeContent.title}
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">{activeContent.title}</h1>
                      <p className="mb-4">{activeContent.description}</p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
