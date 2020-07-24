import React from 'react';

function Banner() {
  const headerStyles = {
    postiion: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '30vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: '3px solid rgb(91,192,222)'
  }

  return (<div className='header' style={headerStyles}>
    <h1>Here is your rendezvous</h1>
  </div>
  );
}

export default Banner;