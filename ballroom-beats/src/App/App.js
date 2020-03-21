import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { registerRootComponent } from 'expo';
import Home from '../components/Home/Home';
import DanceType from '../components/DanceType/DanceType.js';
import SongPick from '../components/SongPick/SongPick.js';
import Loader from '../components/Loader/Loader.js';
import Game from '../components/Game/Game.js';
import End from '../components/End/End.js';
import 'react-native-gesture-handler';
// import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';


const MainNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      header: false,
    }
  },
  DanceType: {
    screen: DanceType,
    navigationOptions: {
      header: false,
    }
  },
  SongPick: {
    screen: SongPick,
    navigationOptions: {
      header: false,
    }
  },
  Loader: {
    screen: Loader,
    navigationOptions: {
      header: false,
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      header: false,
    }
  },
  End: {
    screen: End,
    navigationOptions: {
      header: false,
    }
  }
});

const entry = EStyleSheet.build({
  $bgColor: 'pink',
});

export const App = createAppContainer(MainNavigator);

export default registerRootComponent(App, entry);
