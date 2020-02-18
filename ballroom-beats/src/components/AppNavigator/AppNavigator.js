import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Home/Home';
import DanceType from '../DanceType/DanceType';
import SongPick from '../SongPick/SongPick';
import Loader from '../Loader/Loader';
import Game from '../Game/Game';
import End from '../End/End';


const AppNavigator = createAppContainer({
    Home: Home,
    DanceType: DanceType,
    SongPick: SongPick,
    Loader: Loader,
    Game: Game,
    End: End
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
