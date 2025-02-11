import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const contactInfo = [
    { icon: 'fas fa-phone', title: 'Call Us', text: '+254745835159' },
    { icon: 'fas fa-envelope', title: 'Email', text: 'info@cybercraftsolutions.co.ke' },
    { icon: 'fas fa-map-marker-alt', title: 'Location', text: 'WESTLANDS - PEPONI,Peponi Road' },
  ];

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFeedbackMessage('');

    emailjs
      .sendForm(
        'service_a9pmhql', // Replace with your EmailJS Service ID
        'template_x0p07v7', // Replace with your EmailJS Template ID
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
       <Helmet>
                    <title>Contact Us - Cyber+Craft+Solutions</title>
                    <meta name="description" content="Get in touch with Cyber+Craft+Solutions for technology solutions and consulting services." />
                  </Helmet>
    <div style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ padding: '5rem 0' }}>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Contact Information Section */}
          <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
                padding: '2rem',
                marginBottom: '2rem',
              }}
            >
              <h4 style={{ color: '#B90E0E', marginBottom: '1.5rem' }}>Get in Touch</h4>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {contactInfo.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <i
                      className={item.icon}
                      style={{
                        color: '#B90E0E',
                        fontSize: '2rem',
                        marginRight: '1rem',
                      }}
                    ></i>
                    <div>
                      <h4 style={{ margin: 0 }}>{item.title}</h4>
                      <p style={{ margin: 0 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
                padding: '2rem',
                height: '50%',
              }}
            >
              <h4 style={{ color: '#B90E0E' }}>Send Your Message</h4>
              <form ref={formRef} onSubmit={handleSendEmail}>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {['name', 'email', 'phone', 'project', 'subject'].map((field) => (
                    <div key={field}>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #ced4da',
                        }}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Leave a message here"
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
                    {isSending ? 'Sending...' : 'Send Message'}
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

          {/* Map Section */}
          <div style={{ flex: '1 1 45%', minWidth: '300px', height: '400px' }}>
  <iframe
    style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.054184115237!2d36.806038007812495!3d-1.2545715999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1710e9a2f3ab%3A0xe5a3f9e9358f1c9e!2sPeponi%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1694259649153!5m2!1sen!2ske"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
