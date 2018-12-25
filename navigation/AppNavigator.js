import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';

// TODO: move to different file
import GameView from '../screens/GameView';
//

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: HomeScreen,
  GameView: GameView,
});