import restaurantReducer from '../../reducers/restaurant-reducer';
import * as c from './../../actions/ActionTypes';

describe('restaurantReducer', () => {
  let action;

  const defaultState = {
    isLoading: false,
    restaurants: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    restaurants: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(restaurantReducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        restaurants: [],
        error: null
      }
    );
  });

  test('requesting restaurants should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_RESTAURANT
    };

    expect(restaurantReducer(defaultState, action)).toEqual({
      isLoading: true,
      restaurants: [],
      error: null
    });
  });

  test('Successfully gettting restaurants should change isLoading to false and update restaurants', () => {
    const restaurants = 'A restaurant';
    action = {
      type: c.GET_RESTAURANT_SUCCESS,
      restaurants
    };

    expect(restaurantReducer(loadingState, action)).toEqual({
      isLoading: false,
      restaurants: 'A restaurant',
      error: null
    });
  });

  test('failing to get restaurants should change isLoading to false and add a error message', () => {
    const error = 'An error';
    action = {
      type: c.GET_RESTAURANT_FAILURE,
      error
    };

    expect(restaurantReducer(loadingState, action)).toEqual({
      isLoading: false,
      restaurants: [],
      error: 'An error'
    });
  });

  
});