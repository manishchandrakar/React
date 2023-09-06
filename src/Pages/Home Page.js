import React from 'react';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h2 style={headingStyle}>Welcome to the Home Page!</h2>
     
    </div>
  );
};

export default Home;

// Inline CSS styles
const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '68vh',
  background: '#f4f4f4',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  padding: '20px',
  background: 'white',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const paragraphStyle = {
  fontSize: '18px',
  color: '#555',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '20px',
};
