import React from 'react';
import { makeApiCall2 } from '../actions';




class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall2());
  }

  render() {
    const { error, isLoading, restaurants } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading restaurants...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <div>
            {isLoading && <h1>Loading restaurant list...</h1>}
            
            <ul>
              {restaurants.map((restaurant, index) => 
                <li key={index}>
            <div className='card'>
              <h1 className='restName'>{restaurant.name}</h1>
              {/* <h3 className='restAdd'>{restaurant.address}</h3>
              <h3 className='restNum'>{restaurant.number}</h3>
              <h3 className='restCat'>Category: {restaurant.category}</h3>
              <h3 className='restPrice'>Price per person: {restaurant.price}</h3>
              <button className='menubtn'><a className='restMenu' href={restaurant.menu} target="_blank">Menu</a></button><br />
              <button className='resbtn'><a className='restResv' href={restaurant.reservation} target="_blank">Make a reservation</a></button><br />
              <button className='webBtn'><a className='restWeb' href={restaurant.website} target="_blank">Checkout their website</a></button> */}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default RestaurantList;