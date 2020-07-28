import React from 'react';
import { Link } from "react-router-dom";

function Banner() {
  const headerStyles = {
    postiion: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '25vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: '3px solid rgb(91,192,222)'
  }

  return (<div className='header' style={headerStyles}>
    <ul>
      <h4>
        <Link to="/restaurant" className='list'>All Restaurants</Link>
      </h4>
      <h4>
        <Link to="/" className='rando'>Random</Link>
      </h4>
    </ul>
    <h1>Rendezvous in PDX</h1>
  </div>
  );
}

export default Banner;