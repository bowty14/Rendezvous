import React from 'react';
import '../App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import RandomRestaurant from './RandomRestaurant';
import Banner from './Banner';
import Footer from './Footer';
// import RestaurantList from './RestaurantList';
import RestaurantControl from './RestaurantControl'

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
    
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
        <Banner />
        <RestaurantControl />
        <div className='footer'><Footer /></div>
      </div>
    </React.Fragment>
  )
}

export default App;
