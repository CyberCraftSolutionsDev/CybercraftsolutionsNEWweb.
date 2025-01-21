import React from "react";

interface Feature {
  iconClass: string;
  title: string;
  description: string;
  link: string;
}

const features: Feature[] = [
  {
    iconClass: "fas fa-chart-line fa-4x text-primary",
    title: "Global Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
    link: "#",
  },
  {
    iconClass: "fas fa-university fa-4x text-primary",
    title: "Corporate Banking",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
    link: "#",
  },
  {
    iconClass: "fas fa-file-alt fa-4x text-primary",
    title: "Asset Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
    link: "#",
  },
  {
    iconClass: "fas fa-hand-holding-usd fa-4x text-primary",
    title: "Investment Bank",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
    link: "#",
  },
];

const Features: React.FC = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-5 mb-4">
            Connecting businesses, ideas, and people for greater impact.
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
              key={index}
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className={feature.iconClass}></i>
                </div>
                <h4>{feature.title}</h4>
                <p className="mb-4">{feature.description}</p>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href={feature.link}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
