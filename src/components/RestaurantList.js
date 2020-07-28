import React, { useState, useEffect } from 'react';




function RestaurantList() {
  const [apiCall, setApiCall] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://serene-earth-10579.herokuapp.com/restaurants', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(response => {
        setApiCall(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  },{})
console.log(apiCall)
  return (<div className='restaurantList'>
    <React.Fragment>

      <div>
        {isLoading && <h1>Loading restaurant list...</h1>}

        <ul>
          {apiCall.map((el, index) => 
          <h3 key={index}>
              <div className='card'>
                <h1 className='restName'>{el.name}</h1>
                
                  <h3 className='restAdd'>{el.address}</h3>
                  <h3 className='restNum'>{el.number}</h3>
                  <h3 className='restCat'>Category: {el.category}</h3>
                  <h3 className='restPrice'>Price per person: {el.price}</h3>
                  <button className='menubtn'><a className='restMenu' href={el.menu} target={el.menu}>Menu</a></button><br />
                  <button className='resbtn'><a className='restResv' href={el.reservation} target={el.reservation}>Make a reservation</a></button><br />
                  <button className='webBtn'><a className='restWeb' href={el.website} target={el.website}>Checkout their website</a></button>
                
        </div>
            </h3>
          )} 
      </ul>  
      </div>
    </React.Fragment>
      </div>
    
  );
}

export default RestaurantList;
