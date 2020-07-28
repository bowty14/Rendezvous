import React from "react";
import { Switch, Route } from 'react-router-dom';
import RandomRestaurant from './RandomRestaurant';
import RestaurantList from './RestaurantList';

const RestaurantRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={RandomRestaurant}></Route>
      <Route path='/restaurant' component={RestaurantList}></Route>
    </Switch>
  );
}

export default RestaurantRoutes;