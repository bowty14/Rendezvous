import React from 'react';
import { makeApiCall } from '../actions';
import { connect } from 'react-redux';


class RestaurantList extends React.Component {
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
           
            <div className='card'>
              <p className='restName'>{restaurants.name}</p>
              <p className='restAdd'>{restaurants.address}</p>
              <p className='restNum'>{restaurants.number}</p>
              <p className='restCat'>Category: {restaurants.category}</p>
              <p className='restPrice'>Price per person: {restaurants.price}</p>
              <button className='menubtn'><a className='restMenu' href={restaurants.menu}>Menu</a></button><br />
              <button className='resbtn'><a className='restResv' href={restaurants.reservation}>Make a reservation</a></button><br />
              <button className='webBtn'><a className='restWeb' href={restaurants.website}>Checkout their website</a></button>
            </div>
            <br/><br/>
            <button className="randombtn" onClick={()=> dispatch(makeApiCall())}>New restaurant</button>
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
export default connect(mapStateToProps)(RestaurantList);




 