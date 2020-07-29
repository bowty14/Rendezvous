import React, { useState, useEffect } from 'react';





function RandomRestaurant() {
  const [apiCall, setApiCall] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://salty-fjord-35244.herokuapp.com/restaurants/random', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(response => {
        setApiCall(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, {})
  console.log(apiCall)
  function refreshPage() {
    window.location.reload(false);
  }
  return (<body className='randomRestaurant'>
    <React.Fragment>

      <div>
        {isLoading && <h1>Loading restaurant list...</h1>}
        <button className="randombtn" onClick={refreshPage} >New restaurant</button>
              <div className='card'>
                <h1 className='restName'>{apiCall.name}</h1>
                <h3 className='restAdd'>{apiCall.address}</h3>
                <h3 className='restNum'>{apiCall.number}</h3>
                <h3 className='restCat'>Category: {apiCall.category}</h3>
                <h3 className='restPrice'>Price per person: {apiCall.price}</h3>
          <button className='menubtn'><a className='restMenu' href={apiCall.menu} target={apiCall.menu} >Menu</a></button><br />
          <button className='resbtn'><a className='restResv' href={apiCall.reservation} target={apiCall.reservation}>Make a reservation</a></button><br />
          <button className='webBtn'><a className='restWeb' href={apiCall.website} target={apiCall.website}>Checkout their website</a></button>
        </div>
        <ul>
          <h6 className='filler'>
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
            sdal;fjl;asdkhg;lhas;ldkghlasdkghl;askdghlasdhg
          </h6>
        </ul>
            
      </div>
    </React.Fragment>
  </body>
  );
}

export default RandomRestaurant;








 