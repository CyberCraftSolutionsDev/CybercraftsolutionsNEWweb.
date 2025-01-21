import React from "react";

const FAQSection: React.FC = () => {
  return (
    <div
      style={{
        padding: "5rem 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="container overflow-hidden"
        style={{
          padding: "5rem 0",
        }}
      >
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "800px" }}
          data-wow-delay="0.2s"
        >
          <h4 style={{ color: "#007bff" }}>FAQs</h4>
          <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          {/* Accordion Section */}
          <div className="col-lg-6" data-wow-delay="0.2s">
            <div
              className="accordion accordion-flush"
              id="accordionFlushSection"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "0.375rem",
                padding: "2rem",
              }}
            >
              {[
                {
                  id: "flush-collapseOne",
                  title: "What Does This Tool Do?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body.",
                },
                {
                  id: "flush-collapseTwo",
                  title: "What Are The Disadvantages Of Online Trading?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. Let's imagine this being filled with some actual content.",
                },
                {
                  id: "flush-collapseThree",
                  title: "Is Online Trading Safe?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the third item's accordion body.",
                },
                {
                  id: "flush-collapseFour",
                  title: "What Is Online Trading, And How Does It Work?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the fourth item's accordion body.",
                },
                {
                  id: "flush-collapseFive",
                  title: "Which App Is Best For Online Trading?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the fifth item's accordion body.",
                },
                {
                  id: "flush-collapseSix",
                  title: "How To Create A Trading Account?",
                  body: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. Nothing more exciting happening here in terms of content.",
                },
              ].map((item, index) => (
                <div
                  className={`accordion-item ${
                    index === 0
                      ? "rounded-top"
                      : index === 5
                      ? "rounded-bottom"
                      : ""
                  }`}
                  key={item.id}
                >
                  <h2 className="accordion-header" id={item.id}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded="false"
                      aria-controls={item.id}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.id}
                    data-bs-parent="#accordionFlushSection"
                  >
                    <div className="accordion-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6" data-wow-delay="0.2s">
            <div
              style={{
                backgroundColor: "#007bff",
                borderRadius: "0.375rem",
                overflow: "hidden",
              }}
            >
              <img
                src="img/about-2.png"
                alt="FAQs illustration"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
