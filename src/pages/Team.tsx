import React from 'react';
import { Helmet } from "react-helmet";

const Team: React.FC = () => {
  // Team member data
  const teamData = [
    {
      name: 'Cyber Craft Solutions',
      profession: 'Software Engineer',
      img: 'img/team-1.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/search/top/?q=cyber%20craft%20solutions',
        twitter: 'https://twitter.com/david',
        linkedin: 'https://linkedin.com/in/david',
        instagram: 'https://www.instagram.com/cybercraftsolutions/',
      },
    },
    {
      name: 'Jane Doe',
      profession: 'UI/UX Designer',
      img: 'img/team-2.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/jane',
        twitter: 'https://twitter.com/jane',
        linkedin: 'https://linkedin.com/in/jane',
        instagram: 'https://instagram.com/jane',
      },
    },
    {
      name: 'John Smith',
      profession: 'Marketing Specialist',
      img: 'img/team-3.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/john',
        twitter: 'https://twitter.com/john',
        linkedin: 'https://linkedin.com/in/john',
        instagram: 'https://instagram.com/john',
      },
    },
    {
      name: 'Emma Watson',
      profession: 'Project Manager',
      img: 'img/team-4.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/emma',
        twitter: 'https://twitter.com/emma',
        linkedin: 'https://linkedin.com/in/emma',
        instagram: 'https://instagram.com/emma',
      },
    },
  ];

  return (
    <>
      {/* Navbar & Hero Start */}
       <Helmet>
          <title>TEAM - Cyber+Craft+Solutions</title>
          <meta name="description" content="Get in touch with Cyber+Craft+Solutions for technology solutions and consulting services." />
        </Helmet>
      <div className="container-fluid position-relative p-0">
        {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
            <h4 className="text-white display-4 mb-4">Our Team</h4>
            <ol className="breadcrumb d-flex justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Team</li>
            </ol>
          </div>
        </div>
        {/* Header End */}
      </div>
      {/* Navbar & Hero End */}

      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: '800px' }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-5 mb-4">Meet Our Advisers</h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis.
            </p>
          </div>
          <div className="row g-4">
            {teamData.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-xl-3">
                <div className="team-item">
                  <div className="team-img">
                    <img
                      src={member.img}
                      className="img-fluid"
                      alt={member.name}
                    />
                  </div>
                  <div className="team-title">
                    <h4 className="mb-0">{member.name}</h4>
                    <p className="mb-0">{member.profession}</p>
                  </div>
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square rounded-circle me-0"
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default Team;
