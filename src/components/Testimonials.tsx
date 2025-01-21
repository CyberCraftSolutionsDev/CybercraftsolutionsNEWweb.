import React from 'react';

interface Testimonial {
  image: string;
  name: string;
  profession: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    image: 'img/testimonial-1.jpg',
    name: 'Person Name',
    profession: 'Profession',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    rating: 5,
  },
  {
    image: 'img/testimonial-2.jpg',
    name: 'Person Name',
    profession: 'Profession',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    rating: 5,
  },
  {
    image: 'img/testimonial-3.jpg',
    name: 'Person Name',
    profession: 'Profession',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    rating: 5,
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5">
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-4">Our Clients Reviews</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-quote-left">
                <i className="fas fa-quote-left fa-2x"></i>
              </div>
              <div className="testimonial-img">
                <img src={testimonial.image} className="img-fluid" alt="Image" />
              </div>
              <div className="testimonial-text">
                <p className="mb-0">{testimonial.quote}</p>
              </div>
              <div className="testimonial-title">
                <div>
                  <h4 className="mb-0">{testimonial.name}</h4>
                  <p className="mb-0">{testimonial.profession}</p>
                </div>
                <div className="d-flex text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="testimonial-quote-right">
                <i className="fas fa-quote-right fa-2x"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
