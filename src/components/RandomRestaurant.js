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
              <button className='menubtn'><a className='restMenu' href={restaurants.menu} target="_blank">Menu</a></button><br />
              <button className='resbtn'><a className='restResv' href={restaurants.reservation} target="_blank">Make a reservation</a></button><br />
              <button className='webBtn'><a className='restWeb' href={restaurants.website} target="_blank">Checkout their website</a></button>
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




 