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



const randomGenerator = () => {
  return Math.random() * (18 - 1) + 1;
}

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    return fetch(`https://serene-earth-10579.herokuapp.com/restaurants/${randomGenerator()}`)
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

export const makeApiCall2 = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    return fetch(`https://serene-earth-10579.herokuapp.com/restaurants`)
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