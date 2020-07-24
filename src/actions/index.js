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