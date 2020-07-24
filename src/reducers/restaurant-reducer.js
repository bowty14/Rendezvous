import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  restaurants: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_RESTAURANT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_RESTAURANT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        restaurants: action.restaurants
      });
    case c.GET_RESTAURANT_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state
  }
};