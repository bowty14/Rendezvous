import React, { useState, useEffect } from 'react';


function RandomRestaurant() {
  const [apiCall, setApiCall] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('https://serene-earth-10579.herokuapp.com/restaurants/1', {
      method: 'Get'
    })
      .then(res => res.json())
      .then(response => {
        setApiCall(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  })

  return (
    <div>
      {isLoading && <h1>Your Rendezvous location is loading...</h1>}

      {apiCall.name}
      <br/>
      {apiCall.address}
      <br />
      {apiCall.number}
      <br />
      <a href={apiCall.menu}>Menu</a>
      <br />
      <a href={apiCall.reservation}>Make a reservation</a>
      <br />
      <a href={apiCall.website}>Checkout their website</a>
      <br />
      {apiCall.category}
      <br />
      {apiCall.price}
    </div>
  );
  
}
export default RandomRestaurant;
