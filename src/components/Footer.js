import React from 'react';

function Footer() {
  const footStyles = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100vw',
    backgroundColor: '#3D5C29',
    color: '#f6f6f2',
    padding: '0.5%',
    paddingLeft: '2%'
  }

  return (
    <div style={footStyles}>
      <p>&copy; 2020 - Tyler Bowerman</p>
    </div>
  );
}

export default Footer;