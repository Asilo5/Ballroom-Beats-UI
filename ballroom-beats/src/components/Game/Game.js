import React, { Component } from 'react';
import DanceFloor from '../DanceFloor/DanceFloor'
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  TouchableOpacity 
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import { Audio } from 'expo-av';
import EStyleSheet from 'react-native-extended-stylesheet';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state= {
      renderDance: true
    }
    this.danceTime = null
  };

  async componentDidMount() {
    // let timeToEnd = this.props.navigation.getParam('song', '') * 1000
    let timeToEnd = 75000 // changed for LANDSCAPE VIEW STYLING ******************
    this.danceTime = setTimeout(() => this.setState({renderDance: false}), timeToEnd);
    let songPath = this.props.navigation.getParam('song', '').url
    this.backgroundMusic = new Audio.Sound();
    try {
      await this.backgroundMusic.loadAsync(
        this.checkSongSwitch(songPath)
      );
      await this.backgroundMusic.playAsync();
      await this.backgroundMusic.setIsLoopingAsync(false);
    } catch (error) {
       console.log("The music isn't playing")
    }
  };

  checkSongSwitch = (path) => {
    switch (path) {
      case "beyond-the-sea":
        return require('../../../assets/Music/Beyond_-_the_-_Sea.mp3');
      case "deja-vu":
        return require('../../../assets/Music/Deja_-_vu.mp3');
      case "game-of-thrones":
        return require('../../../assets/Music/Game_-_of_-_Thrones.mp3');
      case "melancolia-tropical":
        return require('../../../assets/Music/Melancolia_-_Tropical.mp3');
      default:
        return require('../../../assets/Music/Never_-_Gonna_-_Give_-_You_-_Up.mp3');
    }
  };

  _start = (sequenceTiming) => {
    Animated.loop(
      Animated.sequence(sequenceTiming), {iterations: -1, useNativeDriver: true}).start();
  };

  _onQuitPress = () => {
    this.backgroundMusic.stopAsync();
    this.props.navigation.navigate('End');
  };

  stopMusic = (time) => {
    setTimeout(() => {
      this.backgroundMusic.stopAsync();
      // const scoreText = this.getScore(getCounterValue, getExpectedValue)
      // this.props.navigation.navigate('End', {scoreText: scoreText});
    }, time);
  };

  stopDance = (getCounterValue, getExpectedValue) => {
    this.props.navigation.navigate('End', {scoreText: this.getScore(getCounterValue, getExpectedValue)});
  };

  getScore = (getCounterValue, getExpectedFloat, moose) => {
    let getExpectedValue = Math.floor(getExpectedFloat)

    if (getCounterValue > getExpectedValue) {
      return `${getCounterValue} out of ${getExpectedValue} steps - stop stumbling around!`
    } else if (getCounterValue < getExpectedValue) {
      return `${getCounterValue} out of ${getExpectedValue} steps - try to keep up!`
    } else {
      return `${getCounterValue} out of ${getExpectedValue} steps - you're perfect!  You don't need this app!`
    }
  };

  render() {
      return (
        <>
          <View style={styles.container}>
          {this.state.renderDance ? <DanceFloor start={this._start} song={this.props.navigation.getParam('song', '')} dance={this.props.navigation.getParam('dance', '')} stopMusic={this.stopMusic} stopDance={this.stopDance}/> : null}
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onQuitPress}>
                    <Text style={styles.quit}>Quit</Text>
                </TouchableOpacity>
             </View>
          </View>
        </>
      )
  }
};

const AppNavigator = createStackNavigator({
    Game: {
      screen: Game,
    },
});

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        // backgroundColor: "black",
    },
    '@media (min-width: 500)': {
      btnContainer: {
        backgroundColor: '',
      }
    },
    button: {
        backgroundColor: '#A93133',
        margin: 10,
        width: '80%',
        borderRadius: 50
    },
    '@media (min-width: 500)': {
      button: {
        width: '30%',
      }
    },
    quit: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20
    },
    text: {
      color: 'white',
      fontSize: 20,
      display: 'flex',
      flexDirection: 'row',
    }
});

export default withNavigation(Game);
