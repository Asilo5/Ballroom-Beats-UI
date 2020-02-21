import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Home/Home.js';
import DanceType from '../DanceType/DanceType.js';
import SongPick from '../SongPick/SongPick.js';
import Loader from '../Loader/Loader.js';
import Game from '../Game/Game.js';
import End from '../End/End.js';
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

export default App;

