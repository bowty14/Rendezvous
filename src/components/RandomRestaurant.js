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
    const { error, isLoading, restaurants, dispatch } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading restaurants...</React.Fragment>;
    } else {
      return (<body className='randomRestaurant'>
        <React.Fragment>
          <div>
            {isLoading && <h1>Loading restaurant...</h1>}
              <button onClick={() => dispatch(makeApiCall())} className="randombtn">New restaurant</button>
            <div className='card'>
              <h1 className='restName'>{restaurants.name}</h1>
              <h3 className='restAdd'>{restaurants.address}</h3>
              <h3 className='restNum'>{restaurants.number}</h3>
              <h3 className='restCat'>Category: {restaurants.category}</h3>
              <h3 className='restPrice'>Price per person: {restaurants.price}</h3>
              <button className='menubtn'><a className='restMenu' href={restaurants.menu} target={restaurants.menu} >Menu</a></button><br />
              <button className='resbtn'><a className='restResv' href={restaurants.reservation} target={restaurants.reservation}>Make a reservation</a></button><br />
              <button className='webBtn'><a className='restWeb' href={restaurants.website} target={restaurants.website}>Checkout their website</a></button>
            </div>
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
        </React.Fragment>
        </body>
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
