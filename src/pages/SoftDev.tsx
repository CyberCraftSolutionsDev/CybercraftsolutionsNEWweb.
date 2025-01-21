import React from "react";

const SoftwareDevelopment: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4 className="text-white display-4 mb-4">Software Development</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/services">Services</a>
            </li>
            <li className="breadcrumb-item active text-primary">
              Software Development
            </li>
          </ol>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "40px 20px",
            textAlign: "center",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ color: "#f10e0e", marginBottom: "10px" }}>
            Software Development
          </h1>
          <p style={{ fontSize: "18px", margin: "0" }}>
            Empowering businesses with efficient software solutions.
          </p>
        </div>

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Image */}
          <img
            src="img/service-3.jpg"
            alt="Software Development"
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />

          {/* Text Content */}
          <div
            style={{
              textAlign: "justify",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#333",
            }}
          >
            <p>
              <strong>We create and develop</strong> information and software
              systems for companies and institutions, offering solutions
              tailored to their unique needs. Our team excels in streamlining
              and managing systems developed by third parties where necessary.
            </p>
            <p>
              From concept to deployment, we focus on delivering reliable and
              scalable software that drives efficiency and growth.
            </p>
          </div>

          {/* Back to Services Button */}
          <a
            href="/services"
            style={{
              display: "inline-block",
              backgroundColor: "#f10e0e",
              color: "#fff",
              padding: "12px 30px",
              fontSize: "16px",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#f10e0e")
            }
          >
            Back to Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
