import React from 'react';
import '../App.css';
import RestaurantList from './RestaurantList';
import Header from './Header';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className='random'><RestaurantList /></div>
    </React.Fragment>
  )
}

export default App;
