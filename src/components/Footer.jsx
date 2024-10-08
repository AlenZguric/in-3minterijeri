import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(75,77,77)', color: '#fff', fontWeight: 200, padding: '10px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} In-3m Interijeri. Sva prava pridržana.</p>
    </footer>       
  );
};

export default Footer;
