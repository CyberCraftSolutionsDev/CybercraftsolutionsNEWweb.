import React from "react";
import { Link } from "react-router-dom";

// TypeScript Interfaces
interface ServiceProps {
  image: string;
  title: string;
  description: string;
  link: string; // Route for dynamic navigation
}

const ServiceCard: React.FC<ServiceProps> = ({ image, title, description, link }) => (
  <div className="col-md-6 col-lg-4">
    <div className="service-item">
      <div className="service-img">
        <img src={image} className="img-fluid rounded-top w-100" alt={title} />
      </div>
      <div className="rounded-bottom p-4">
        <h4 className="d-inline-block mb-4">{title}</h4>
        <p className="mb-4">{description}</p>
        <Link className="btn btn-primary rounded-pill py-2 px-4" to={link}>
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const ServicesAndTestimonials: React.FC = () => {
  const services = [
    {
      image: "img/KRA eTIMS.jpg",
      title: "KRA eTIMS",
      description: " Cyber Craft Solutions is dedicated to transforming the landscape of business operations for both small and large enterprises in Kenya, specifically in collaboration with the Kenya Revenue Authority's eTIMS (Electronic Tax Invoice Management System). Our cutting-edge software solution offers a seamless and efficient approach to electronic invoicing, providing businesses with a myriad of benefits.",
      link: "/kra-etims",
    },
    {
      image: "img/service-2.jpg",
      title: "KRA TIMS",
      description: " we specialize in providing expert consultation services tailored for the Tax Information Management System (TIMS). Our seasoned professionals bring a wealth of knowledge and experience to guide businesses through the intricacies of TIMS, ensuring optimal utilization and compliance.",
      link: "/services/kra-tims",
    },
    {
      image: "img/service-3.jpg",
      title: "Software development",
      description: " We create and develop information and software systems for companies and institutions and can streamline and manage information systems created by third parties where necessary.",
      link: "/soft-dev",
    },
    {
      image: "img/service-4.jpg",
      title: "Tally ERP",
      description: " Expertise in Tarry ERP Implementation: With a deep understanding of Tarry ERP's capabilities, our team of seasoned professionals excels in seamless implementation tailored to the unique needs of businesses in Kenya. From small enterprises to large corporations, we have the expertise to elevate your business processes to new heights.",
      link: "/services/service-3",
    },
    {
      image: "img/service-5.jpg",
      title: "ICT Services",
      description: " Information and Communication Technology services converge with innovation to redefine the digital landscape . we are trusted ICT services partner, and embark on a transformative journey where your business's vision converges with our technological prowess. Illuminate the possibilities of the digital future with Cyber Craft Solutions, where innovation meets excellence in ICT services.",
      link: "/services/service-3",
    },
    {
      image: "img/service-6.jpg",
      title: " CCTV Solutions",
      description: " Whether you're a small business or a large enterprise, we understand the importance of a robust and reliable network infrastructure. Our team of experts is committed to designing, implementing, and maintaining scalable networking solutions tailored to your specific needs. From wired to wireless networks, we ensure seamless connectivity to keep your operations running smoothly.",
      link: "/services/service-3",
    },
    {
      image: "img/service-6.jpg",
      title: "Cyber CraftPOS",
      description: " our team of seasoned professionals excels in delivering seamless implementations customized to meet the distinctive requirements of businesses in Kenya. Whether you operate a small enterprise or a large corporation, we possess the expertise to elevate your business processes to unprecedented levels of efficiency and productivity.",
      link: "/services/service-3",
    },
    {
      image: "img/service-6.jpg",
      title: "Graphic Design",
      description: " Whether you're a small business or a large enterprise, we understand the importance of a robust and reliable network infrastructure. Our team of experts is committed to designing, implementing, and maintaining scalable networking solutions tailored to your specific needs. From wired to wireless networks, we ensure seamless connectivity to keep your operations running smoothly.",
      link: "/services/service-3",
    },
    {
      image: "img/service-6.jpg",
      title: "Networking",
      description: " Whether you're a small business or a large enterprise, we understand the importance of a robust and reliable network infrastructure. Our team of experts is committed to designing, implementing, and maintaining scalable networking solutions tailored to your specific needs. From wired to wireless networks, we ensure seamless connectivity to keep your operations running smoothly.",
      link: "/services/service-3",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="mb-3">Our Services</h1>
          <p>Explore the variety of services we offer to help you succeed.</p>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mt-5">
          <h1 className="mb-3">What Our Clients Say</h1>
          <p>Discover what our valued clients have to say about us.</p>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="testimonial-item p-4 bg-light rounded">
              <p className="mb-4">
             
- TF Pharmacy
I am writing to express my sincere gratitude and admiration for the exceptional work done by Cyber Craft Solutions in building our ecommerce website for TF Pharmacy. As someone deeply involved in the day-to-day operations of our pharmacy, I cannot emphasize enough how crucial it was for us to have a reliable and user-friendly online platform to serve our customers.
              </p>
              <h5>- Emmah</h5>
              <p>TF Pharmacy</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-item p-4 bg-light rounded">
              <p className="mb-4">
             
            

             

The installation of the eTIMS system has revolutionized the way we manage tax compliance at Ongata Farmers Agrovet. The automated generation and submission of electronic tax invoices have significantly streamlined our invoicing processes, reduced manual errors, and ensured accuracy in tax reporting. This has not only saved us valuable time and resources but has also facilitated compliance with tax regulations, mitigating the risk of penalties and fines.
              </p>
              <h5>-   Mary</h5>
              <p>-  Ongata Farmers Agrovet</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="testimonial-item p-4 bg-light rounded">
              <p className="mb-4">
             
            

I am writing to express my utmost satisfaction and gratitude for the outstanding work carried out by Cyber Craft Solutions in seamlessly integrating TIMS (Tax Integrated Management System) with Business Central 365 for Diamond Wholesalers Ltd. As someone deeply involved in the operations of our organization, I cannot overstate the importance of this integration in streamlining our business processes and enhancing overall efficiency.
              </p>
              <h5>-   Abu</h5>
              <p>- Diamond Wholesalers Ltd</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-item p-4 bg-light rounded">
              <p className="mb-4">

I cannot express enough gratitude for the exceptional support provided by Cyber Craft Solutions in integrating SAP Business One into our operations at Tarkbil. The proficiency and dedication shown by the team, especially in integrating Kra TIMS, have been exemplary.
              </p>
              <h5>              Abdi
              </h5>
              <p>- Takbir Distributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndTestimonials;
