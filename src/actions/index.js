import * as c from './ActionTypes';

export const requestRestaurants = () => ({
  type: c.REQUEST_RESTAURANT
});

export const getRestaurantSuccess = (restaurants) => ({
  type: c.GET_RESTAURANT_SUCCESS,
  restaurants
});

export const getRestaurantFailure = (error) => ({
  type: c.GET_RESTAURANT_FAILURE,
  error
});

// export const requestRestaurants2 = () => ({
//   type: c.REQUEST_RESTAURANT
// });

// export const getRestaurantSuccess2 = (restaurants) => ({
//   type: c.GET_RESTAURANT_SUCCESS,
//   restaurants
// });

// export const getRestaurantFailure2 = (error) => ({
//   type: c.GET_RESTAURANT_FAILURE,
//   error
// });



const randomGenerator = () => {
  return Math.random() * (21 - 1) + 1;
}

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    return fetch(`https://salty-fjord-35244.herokuapp.com/restaurants/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          dispatch(getRestaurantSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getRestaurantFailure(error));
      });
  }
}

