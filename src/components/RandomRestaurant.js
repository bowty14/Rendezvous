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
      <h1>Here is your rendezvous</h1>
      <p className='restName'>{apiCall.name}</p>
      <p className='restAdd'>{apiCall.address}</p>
      <p className='restNum'>{apiCall.number}</p>
      <a className='restMenu' href={apiCall.menu}>Menu</a><br />
      <a className='restResv' href={apiCall.reservation}>Make a reservation</a><br />
      <a className='restWeb' href={apiCall.website}>Checkout their website</a><br />
      <p className='restCat'>{apiCall.category}</p>
      <p className='restPrice'>{apiCall.price}</p>
    </div>
  );
  
}
export default RandomRestaurant;
