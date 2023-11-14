import React from 'react';
import Layout from '@theme/Layout';

const MyPage = () => {
  // Define your data with button information
  const buttonData = [
    { id: 1, label: 'Button 1', href: 'https://example.com/1', position: { top: '30%', left: '39%' } },
    { id: 2, label: 'Button 2', href: 'https://example.com/2', position: { top: '50%', left: '60%' } },
    { id: 3, label: 'Button 3', href: 'https://example.com/3', position: { top: '80%', left: '20%' } },
    // Add more buttons as needed
  ];

  // URL of your image
const imageUrl = require("/static/img/karta.png").default;

return (
    <div style={{ position: 'relative' }}>
      <h1>Welcome to My Page!</h1>
      <img src={imageUrl} alt="Your Image" style={{ maxWidth: '100%' }} />

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {buttonData.map((button) => (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              ...button.position,
              background: 'rgba(255, 0, 0, 0.5)', // Adjust the alpha (last) value for transparency
              padding: '10px', // Optional: Add padding for better visibility
              borderRadius: '5px', // Optional: Add border radius for rounded corners
            }}
          >
            <button style={{ background: 'transparent', border: 'none', color: '#fff' }}>{button.label}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyPage;