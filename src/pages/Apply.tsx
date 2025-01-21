import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Apply: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFeedbackMessage('');

    emailjs
      .sendForm(
        'service_a9pmhql', // Replace with your EmailJS Service ID
        'template_5jxw3xa', // Replace with your EmailJS Template ID
        formRef.current,
        'qz8QOM5G6NJk6rh-t' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setFeedbackMessage('Message sent successfully!');
          setIsSending(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          setFeedbackMessage('Failed to send message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <div>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4">KRA ETims Application</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">KRA ETims</li>
          </ol>
        </div>
      </div>
      <div style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Contact Form (KRA Etims) */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <h4 style={{ color: '#B90E0E', marginBottom: '1.5rem' }}>KRA Etims Form</h4>
                <form ref={formRef} onSubmit={handleSendEmail}>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {/* Form fields */}
                    <div>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business Name"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #ced4da',
                        }}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #ced4da',
                        }}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #ced4da',
                        }}
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="businessDetails"
                        placeholder="Business Details"
                        style={{
                          width: '100%',
                          height: '160px',
                          padding: '0.75rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #ced4da',
                        }}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#B90E0E',
                        color: '#fff',
                        padding: '1rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        width: '100%',
                      }}
                      disabled={isSending}
                    >
                      {isSending ? 'Sending...' : 'Submit Form'}
                    </button>
                    {feedbackMessage && (
                      <p
                        style={{
                          color: feedbackMessage.includes('successfully') ? 'green' : 'red',
                          marginTop: '1rem',
                        }}
                      >
                        {feedbackMessage}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
