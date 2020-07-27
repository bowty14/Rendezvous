import React from 'react';
import { connect } from 'react-redux';





class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }


   componentDidMount() {
     fetch(`https://serene-earth-10579.herokuapp.com/restaurants`)
       .then(res => res.json())
       .then(json => this.setState({ data: json }));
  }

  render() {
    const { error, isLoading, restaurants } = this.props;
    console.log(restaurants.length)
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;

    } else if (isLoading) {
      return <React.Fragment>Loading restaurants...</React.Fragment>;
    } else {
      console.log(restaurants)
      return (
        <React.Fragment>
          <div>
            {isLoading && <h1>Loading restaurant list...</h1>}
            
            <ul>
              {this.state.data.map((restaurant, index) => 
                <h2 key={index}>
            <div className='card2'>
              <h1 className='resName'>{restaurant.name}</h1>
                  </div>
                </h2>
              )}
            </ul>
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



