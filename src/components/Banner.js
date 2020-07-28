import React from 'react';
import { Link } from "react-router-dom";

function Banner() {
  const headerStyles = {
    postiion: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '24vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: '3px solid rgb(91,192,222)'
  }

  return (<div className='header' style={headerStyles}>
      <ul className='bannerHead'>
          <h5 className='bannerLink'><Link to="/restaurant" className='Link1'>Restaurants</Link></h5>
          <h5 className='bannerLink'><Link to="/random" className='Link2'>Random</Link></h5>
          <h5 className='bannerLink'><Link to ="/about" className='Link4'>About</Link></h5>
          <h5 className='bannerLink'><Link to ="/" className='Link3'>Home</Link></h5>
      </ul>
    <h2 className='headerTitle'>Rendezvous in PDX</h2>
  </div>
  );
}

export default Banner;