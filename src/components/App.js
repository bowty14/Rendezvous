import React from 'react';
import '../App.css';
import RestaurantList from './RestaurantList';
import Header from './Banner';
function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
    
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
        <Header />
        <div className='random'><RestaurantList /></div>
      </div>
    </React.Fragment>
  )
}

export default App;
