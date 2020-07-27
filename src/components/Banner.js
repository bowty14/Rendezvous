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
      <li>
        <Link to="/restaurant">Restaurant list</Link>
      </li>
      <li>
        <Link to="/">Random</Link>
      </li>
    </ul>
    <h1>Rendezvous in PDX</h1>
  </div>
  );
}

export default Banner;