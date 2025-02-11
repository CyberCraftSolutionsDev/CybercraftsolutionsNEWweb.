import React from 'react';
import { Helmet } from "react-helmet";

const PrivacyPolicy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '900px',
    padding: '20px',
    color: '#333',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#B90E0E',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1rem',
    lineHeight: '1.6',
  };

  const listStyle: React.CSSProperties = {
    listStyleType: 'disc',
    marginLeft: '20px',
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: '8px',
  };

  return (
    <div>
        <Helmet>
                    <title>APPLY - Cyber+Craft+Solutions</title>
                    <meta name="description" content="Get in touch with Cyber+Craft+Solutions for technology solutions and consulting services." />
                  </Helmet>
          <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
            <h4 className="text-white display-4 mb-4">Privacy Policy</h4>
            <ol className="breadcrumb d-flex justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Privacy Policy</li>
            </ol>
          </div>
        </div>
    <div style={containerStyle}>
      

      <main>
        <section>
          <h2 style={sectionTitleStyle}>ABOUT THIS NOTICE</h2>
          <p style={paragraphStyle}>
            This Privacy Notice provides information on how Cyber Craft Solutions Ltd collects and processes your personal data when you visit our website or mobile applications. It details what we do with your personal data, how we keep it secure, and explains your rights in relation to your personal data.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>WHO WE ARE</h2>
          <p style={paragraphStyle}>
            Cyber Craft Solutions Ltd is a leading provider of solutions in digital and tech services. Any personal data provided or collected by Cyber Craft Solutions Ltd is controlled by the subsidiary that the website and/or mobile app relates to.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>THE DATA WE COLLECT ABOUT YOU</h2>
          <p style={paragraphStyle}>
            Personal data includes information that can be used to identify a specific individual, either directly or indirectly. We collect your personal data to provide tailored products and services, as well as to analyze and improve our offerings.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Information you provide to us: Name, contact details, demographic information, online registration information, payment information, responses to surveys, and competition entries.</li>
            <li style={listItemStyle}>Information we automatically collect: Details of website visits, product interests, device information, browsing data, social media interactions, etc.</li>
          </ul>
          <p style={paragraphStyle}>
            We strive to offer choices regarding the personal data you provide to us. Where required, if you wish to have your personal data used by Cyber Craft Solutions Ltd for a personalized experience, you can indicate this in the registration form or through communication with our representatives. You can opt out or adjust your preferences at any time by closing your account or emailing customerservice@cybercraftsolutions.com.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>COOKIES AND OTHER IDENTIFIERS</h2>
          <p style={paragraphStyle}>
            A cookie is a small file placed on your computer, phone, or tablet. Cookies distinguish you from other users, enhancing your browsing experience. For more on cookies and their usage, please read our Cookie Notice.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>HOW WE USE YOUR PERSONAL DATA</h2>
          <p style={paragraphStyle}>
            We use your personal data to operate, provide, develop, and improve our products and services, including:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Registering you as a customer</li>
            <li style={listItemStyle}>Processing orders</li>
            <li style={listItemStyle}>Managing customer relationships</li>
            <li style={listItemStyle}>Enabling participation in promotions</li>
            <li style={listItemStyle}>Improving our website and applications</li>
            <li style={listItemStyle}>Recommending/advertising products and services</li>
            <li style={listItemStyle}>Enabling access to partner services</li>
            <li style={listItemStyle}>Complying with legal obligations</li>
            <li style={listItemStyle}>Detecting fraud</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>LEGAL BASIS FOR PROCESSING PERSONAL DATA</h2>
          <p style={paragraphStyle}>
            We process personal data based on legal justifications, such as:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Consent</li>
            <li style={listItemStyle}>Legitimate business interests</li>
            <li style={listItemStyle}>Contract performance</li>
            <li style={listItemStyle}>Compliance with law</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>HOW WE SHARE YOUR PERSONAL DATA</h2>
          <p style={paragraphStyle}>
            Your personal data may be shared with third parties for:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Sale of products and services: To deliver purchased products and services.</li>
            <li style={listItemStyle}>Third-party service providers: For functions such as fulfilling orders, data analysis, marketing assistance, payment processing, and customer service.</li>
            <li style={listItemStyle}>Business transfers: As part of business asset transfers.</li>
            <li style={listItemStyle}>Detecting fraud and abuse</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>DATA RETENTION</h2>
          <p style={paragraphStyle}>
            Your personal data is retained for the minimum period necessary. We maintain data for as long as necessary to manage our relationship with you and fulfill legal or business requirements.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>DATA SECURITY</h2>
          <p style={paragraphStyle}>
            We implement security measures to protect personal data from unauthorized access, alteration, or loss. Access is restricted to those with a business need, and they process data under strict confidentiality.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>YOUR LEGAL RIGHTS</h2>
          <p style={paragraphStyle}>
            It’s essential that your personal data is accurate. You have rights under data protection laws, including the right to access, correct, or delete personal data. You can close your account through our website for permanent data deletion.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>DATA CONTROLLERS & CONTACT</h2>
          <p style={paragraphStyle}>
            For any inquiries or to exercise your rights, please contact our Data Privacy Officer at customerservice@cybercraftsolutions.com. We will investigate any complaints about our data management practices and respond promptly.
          </p>
        </section>
      </main>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
