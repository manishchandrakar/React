import React from 'react';

function Services() {
  // Inline CSS styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  };

  const listStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <p style={listStyle}>
        We provide a wide range of services to meet the needs of our clients.
        Our services include:
      </p>
      <ul style={listStyle}>
        <li>Service 1: Describe My first service here.</li>
        <li>Service 2: Explain My second service in detail.</li>
        <li>Service 3: Highlight the features of My third service.</li>
        <li>Service 4: Provide information about My fourth service.</li>
      </ul>
      <p style={listStyle}>
        Our team of experts is dedicated to delivering top-notch solutions and
        ensuring customer satisfaction. We tailor our services to meet your
        specific requirements and provide a seamless experience.
      </p>
    </div>
  );
}

export default Services;
