import React from 'react';

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/254745835159" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed', 
        bottom: '20px',
        left: '20px', 
        zIndex: 1000, 
        cursor: 'pointer', 
        transition: 'transform 0.3s ease', 
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.transform = 'scale(1.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '80px', 
          height: '80px',
          objectFit: 'cover',
        }}
      />
    </a>
  );
};

export default WhatsAppIcon;
