import restaurantReducer from '../../reducers/restaurant-reducer';
import * as c from './../../actions/ActionTypes';

describe('restaurantReducer', () => {
  let action;

  const defaultState = {
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

});