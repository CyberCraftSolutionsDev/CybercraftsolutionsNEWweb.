import React, { useState } from "react";
import { Helmet } from "react-helmet";

const OfferSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('collapseOne');

  const descriptions = [
    {
      id: 'collapseOne',
      title: 'Lending money for investment of your new projects',
      description:
        'We provide financial support to help you kickstart your new projects with ease. Our lending options are tailored to meet the needs of innovative entrepreneurs.',
      imgSrc: 'img/offer-1.jpg',
    },
    {
      id: 'collapseTwo',
      title: 'Securing funding for your business growth',
      description:
        'Our platform ensures you have access to the right funding for expanding your business operations and achieving long-term success.',
      imgSrc: 'img/offer-2.jpg',
    },
    {
      id: 'collapseThree',
      title: 'Mobile payment is more flexible and easy for all investors',
      description:
        'Experience the convenience of mobile payments, designed to provide flexibility and efficiency for all your financial transactions.',
      imgSrc: 'img/offer-3.jpg',
    },
    {
      id: 'collapseFour',
      title: 'All transactions are kept free for the members of pro traders',
      description:
        'As a pro trader member, enjoy free transactions and premium benefits that enhance your trading experience.',
      imgSrc: 'img/offer-4.jpg',
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeContent = descriptions.find((desc) => desc.id === activeTab);

  return (
    <div>   <Helmet>
                  <title>Offer - Cyber+Craft+Solutions</title>
                  <meta name="description" content="Get in touch with Cyber+Craft+Solutions for technology solutions and consulting services." />
                </Helmet>
    <div className="container-fluid offer-section py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Offer</h4>
          <h1 className="display-5 mb-4">Benefits We offer</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam
            temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="nav nav-pills bg-light rounded p-5">
              {descriptions.map((desc) => (
                <a
                  key={desc.id}
                  className={`accordion-link p-4 ${activeTab === desc.id ? 'active' : ''} mb-4`}
                  data-bs-toggle="pill"
                  href={`#${desc.id}`}
                  onClick={() => handleTabClick(desc.id)}
                >
                  <h5 className="mb-0">{desc.title}</h5>
                </a>
              ))}
            </div>
          </div>
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="tab-content">
              {activeContent && (
                <div className={`tab-pane fade show active`} id={activeContent.id}>
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
                      <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
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
    </div>
  );
};

export default OfferSection;
