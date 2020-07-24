import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('restaurant reducer actions', () => {
  it('requestRestaurants should create REQUEST_RESTAURANTS action', () => {
    expect(actions.requestRestaurants()).toEqual({
      type: c.REQUEST_RESTAURANT
    });
  });

  it('getRestaurantSuccess should create GET_RESTAURANT_SUCCESS action', () => {
    const restaurants = 'A restaurant';
    expect(actions.getRestaurantSuccess(restaurants)).toEqual({
      type: c.GET_RESTAURANT_SUCCESS,
      restaurants
    });
  });

  it('getRestaurantFailure should create GET_RESTAURANT_FAILURE action', () => {
    const error = 'An error';
    expect(actions.getRestaurantFailure(error)).toEqual({
      type: c.GET_RESTAURANT_FAILURE,
      error
    });
  });

  
});