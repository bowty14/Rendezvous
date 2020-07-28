import React from 'react';
import '../App.css';
import Banner from './Banner';
import Footer from './Footer';
import RestaurantRoutes from './RestaurantRoutes'

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
    
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
        <Banner />
        <RestaurantRoutes />
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default App;
