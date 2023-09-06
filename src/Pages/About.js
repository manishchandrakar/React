import React from 'react';

function AboutUs() {
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

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        metus vel iaculis facilisis. Vestibulum vehicula tellus vitae justo
        fringilla, ut volutpat massa finibus. Nullam ut nisl sed purus
        gravida blandit. Curabitur at ligula id nulla congue rhoncus in at
        sapien. Donec pharetra venenatis leo eu vehicula.
      </p>
      <p style={paragraphStyle}>
        Our company is dedicated to delivering high-quality products and
        services to our customers. We have a team of experienced professionals
        who are passionate about what they do. With years of expertise in the
        industry, we strive to exceed your expectations and provide solutions
        tailored to your needs.
      </p>
      <p style={paragraphStyle}>
        At our company, we value innovation, integrity, and customer
        satisfaction. We believe in building strong relationships with our
        clients and partners. Whether you're looking for our products or
        services, we're here to assist you every step of the way.
      </p>
      <p style={paragraphStyle}>
        Thank you for choosing us as your trusted partner. We look forward to
        serving you and being a part of your success.
      </p>
    </div>
  );
}

export default AboutUs;
