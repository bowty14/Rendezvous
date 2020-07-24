import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('restaurant reducer actions', () => {
  it('requestRestaurants should create REQUEST_RESTAURANTS action', () => {
    expect(actions.requestRestaurants()).toEqual({
      type: c.REQUEST_RESTAURANT
    });
  });

  
});