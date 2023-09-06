import React from 'react';

function Footer() {
  // Inline CSS styles for the footer
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',  // Fixed positioning
    bottom: '0',        // Stick to the bottom
    width: '100%',      // Full width
  };

  return (
    <footer style={footerStyle}>
      <p>
        &copy; {new Date().getFullYear()} My Company Name. All Rights Reserved.
      </p>
      <p>Developed and Designed by Manish Chandrakar</p>
    </footer>
  );
}

export default Footer;
