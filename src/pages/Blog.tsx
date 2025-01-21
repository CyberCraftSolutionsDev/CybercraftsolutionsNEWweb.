import React from "react";

const BlogSection: React.FC = () => {
  const blogData = [
    {
      id: 1,
      imgSrc: "img/service-1.jpg",
      category: "Dividend Stocks",
      title: "Options Trading Business?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis accusamus labore....",
      adminImg: "img/testimonial-1.jpg",
      adminName: "Admin",
      date: "October 9, 2025",
    },
    {
      id: 2,
      imgSrc: "img/service-2.jpg",
      category: "Non-Dividend Stocks",
      title: "Options Trading Business?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis accusamus labore....",
      adminImg: "img/testimonial-2.jpg",
      adminName: "Admin",
      date: "October 9, 2025",
    },
    {
      id: 3,
      imgSrc: "img/service-3.jpg",
      category: "Dividend Stocks",
      title: "Options Trading Business?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis accusamus labore....",
      adminImg: "img/testimonial-3.jpg",
      adminName: "Admin",
      date: "October 9, 2025",
    },
    {
      id: 4,
      imgSrc: "img/service-4.jpg",
      category: "Non-Dividend Stocks",
      title: "Options Trading Business?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis accusamus labore....",
      adminImg: "img/testimonial-1.jpg",
      adminName: "Admin",
      date: "October 9, 2025",
    },
  ];

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Blog & News</h4>
          <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay="0.2s">
          {blogData.map((blog) => (
            <div key={blog.id} className="blog-item p-4">
              <div className="blog-img mb-4">
                <img
                  src={blog.imgSrc}
                  className="img-fluid w-100 rounded"
                  alt={blog.title}
                />
                <div className="blog-title">
                  <a href="#" className="btn">
                    {blog.category}
                  </a>
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">
                {blog.title}
              </a>
              <p className="mb-4">{blog.description}</p>
              <div className="d-flex align-items-center">
                <img
                  src={blog.adminImg}
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                  alt={blog.adminName}
                />
                <div className="ms-3">
                  <h5>{blog.adminName}</h5>
                  <p className="mb-0">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
