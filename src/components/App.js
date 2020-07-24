import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RandomRestaurant from './RandomRestaurant';
import Banner from './Banner';
import Footer from './Footer';
// import RestaurantList from './RestaurantList';

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
    
  }
  return (
    <Router>
      <div style={appStyles}>
        <Banner />
        <Switch>
        <Route path='/'>
        <div className='random'><RandomRestaurant /></div>
          </Route>
          {/* <Route path='/'>
            <RestaurantList/>
          </Route> */}
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
