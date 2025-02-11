import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";

const Apply: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFeedbackMessage('');

    const formData = new FormData(formRef.current);
    const userEmail = formData.get("email") as string; // Get the user's email

    try {
      // Send the main form email
      await emailjs.sendForm(
        'service_a9pmhql', // Your EmailJS Service ID
        'template_5jxw3xa', // Your EmailJS Template ID for applications
        formRef.current,
        'qz8QOM5G6NJk6rh-t' // Your EmailJS Public Key
      );

      // Send auto-reply email
      await emailjs.send(
        'service_a9pmhql', // Same Service ID
        'template_x0p07v7', // Your Auto-Reply Template ID
        {
          to_email: userEmail, // Send to the user's email
          reply_message: "Thank you for your application. We will review your request and get back to you shortly.",
          business_name: formData.get("businessName"),
        },
        'qz8QOM5G6NJk6rh-t' // Your EmailJS Public Key
      );

      setFeedbackMessage('Message sent successfully! A confirmation email has been sent to you.');
      formRef.current?.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setFeedbackMessage('Failed to send message. Please try again.');
    }

    setIsSending(false);
  };

  return (
    <div>
      <Helmet>
        <title>APPLY - Cyber+Craft+Solutions</title>
        <meta name="description" content="Get in touch with Cyber+Craft+Solutions for technology solutions and consulting services." />
      </Helmet>
      
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
              <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '2rem', marginBottom: '2rem' }}>
                <h4 style={{ color: '#B90E0E', marginBottom: '1.5rem' }}>KRA Etims Form</h4>
                <form ref={formRef} onSubmit={handleSendEmail}>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div>
                      <input type="text" name="businessName" placeholder="Business Name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }} />
                    </div>
                    <div>
                      <input type="email" name="email" placeholder="Email Address" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }} />
                    </div>
                    <div>
                      <input type="text" name="phoneNumber" placeholder="Phone Number" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }} />
                    </div>
                    <div>
                      <textarea name="businessDetails" placeholder="Business Details" required style={{ width: '100%', height: '160px', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}></textarea>
                    </div>
                    <button type="submit" disabled={isSending} style={{ backgroundColor: '#B90E0E', color: '#fff', padding: '1rem', border: 'none', borderRadius: '0.25rem', width: '100%' }}>
                      {isSending ? 'Sending...' : 'Submit Form'}
                    </button>
                    {feedbackMessage && (
                      <p style={{ color: feedbackMessage.includes('successfully') ? 'green' : 'red', marginTop: '1rem' }}>
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
