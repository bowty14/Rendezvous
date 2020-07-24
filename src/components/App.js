import React from 'react';
import '../App.css';
import RandomRestaurant from './RandomRestaurant';
import Banner from './Banner';
import Footer from './Footer';

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
    
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
        <Banner />
        <div className='random'><RandomRestaurant /></div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default App;
