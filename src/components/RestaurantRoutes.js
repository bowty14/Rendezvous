import React from "react";
import { Switch, Route } from 'react-router-dom';
import RandomRestaurant from './RandomRestaurant';
import RestaurantList from './RestaurantList';
import Home from './Home';


const RestaurantRoutes = () => {
  return (
    <Switch>
      <Route exact path='/random' component={RandomRestaurant}></Route>
      <Route path='/restaurant' component={RestaurantList}></Route>
      <Route path='/' component={Home}></Route>
    </Switch>
  );
}

export default RestaurantRoutes;