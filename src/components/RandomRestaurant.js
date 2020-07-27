import React from 'react';
import { makeApiCall } from '../actions';
import { connect } from 'react-redux';


class RandomRestaurant extends React.Component {
  constructor(props) {
    super(props);
  }


    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
    }
    
    render() {
    const { error, isLoading, restaurants, dispatch} = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading restaurants...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <div>
            {isLoading && <h1>Your Rendezvous location is loading...</h1>}
            <button className="randombtn" onClick={()=> dispatch(makeApiCall())}>New restaurant</button>
           
            <div className='card'>
              <h1 className='restName'>{restaurants.name}</h1>
              <h3 className='restAdd'>{restaurants.address}</h3>
              <h3 className='restNum'>{restaurants.number}</h3>
              <h3 className='restCat'>Category: {restaurants.category}</h3>
              <h3 className='restPrice'>Price per person: {restaurants.price}</h3>
              <button className='menubtn'><a className='restMenu' href={restaurants.menu} target={restaurants.menu}>Menu</a></button><br />
              <button className='resbtn'><a className='restResv' href={restaurants.reservation} target={restaurants.reservation}>Make a reservation</a></button><br />
              <button className='webBtn'><a className='restWeb' href={restaurants.website} target={restaurants.website}>Checkout their website</a></button>
            </div>
            <br/><br/>
          </div>
        </React.Fragment>
      );
    }  
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps)(RandomRestaurant);



// import React, { useState, useEffect } from 'react';


// function Restaurant() {
//   const [apiCall, setApiCall] = useState([])
//   // const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);

//   // constloadMoreQuote = () => {
//   //   setPage(page+1);
//   // }
//   const randomGenerator = () => {
//     return Math.random() * (18 - 1) + 1;
//   }

//   useEffect(() => {
//     fetch(`https://serene-earth-10579.herokuapp.com/restaurants/${randomGenerator()}`, {
//       method: "GET"
//     })
//       .then(res => res.json())
//       .then(response => {
//         setApiCall(response);
//         setIsLoading(false);
//       })
//       .catch(error => console.log(error));
//   })

//   return (
//     <div>
//       {isLoading && <h1>Your Rendezvous location is loading...</h1>}
//       <button className="randombtn" onClick={() => fetch()}>New restaurant</button>

//       <div className='card'>
//         <h1 className='restName'>{apiCall.name}</h1>
//         <h3 className='restAdd'>{apiCall.address}</h3>
//         <h3 className='restNum'>{apiCall.number}</h3>
//         <h3 className='restCat'>Category: {apiCall.category}</h3>
//         <h3 className='restPrice'>Price per person: {apiCall.price}</h3>
//         <button className='menubtn'><a className='restMenu' href={apiCall.menu} target="_blank">Menu</a></button><br />
//         <button className='resbtn'><a className='restResv' href={apiCall.reservation} target="_blank">Make a reservation</a></button><br />
//         <button className='webBtn'><a className='restWeb' href={apiCall.website} target="_blank">Checkout their website</a></button>
//       </div>
//       <br /><br />
//     </div>
//   );

// }
// export default Restaurant;




 