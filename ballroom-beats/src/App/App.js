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


const MainNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  DanceType: {
    screen: DanceType,
    navigationOptions: {
      header: null,
    }
  },
  SongPick: {
    screen: SongPick,
    navigationOptions: {
      header: null,
    }
  },
  Loader: {
    screen: Loader,
    navigationOptions: {
      header: null,
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      header: null,
    }
  },
  End: {
    screen: End,
    navigationOptions: {
      header: null,
    }
  }
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App); 

