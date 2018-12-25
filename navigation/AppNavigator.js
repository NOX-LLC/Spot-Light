import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GameView from '../screens/GameView';

export default createStackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  GameView: {
    screen: GameView,
    navigationOptions: {
      header: null,
    },
  },
});