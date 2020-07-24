import restaurantReducer from '../../reducers/restaurantReducer';

describe('restaurantReducer', () => {

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

  
});