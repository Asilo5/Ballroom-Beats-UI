import React, { Component } from 'react';
import DanceFloor from '../DanceFloor/DanceFloor'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import { Audio } from 'expo-av';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state= {
        timeLeft: 15,
    }
  }

  async componentDidMount() {
    let songPath = this.props.navigation.getParam('song', '').url
    this.backgroundMusic = new Audio.Sound();
    try {
      // await this.backgroundMusic.unloadAsync();
      await this.backgroundMusic.loadAsync(
        this.checkSongSwitch(songPath)
      );
      await this.backgroundMusic.playAsync();
      await this.backgroundMusic.setIsLoopingAsync(false);
    } catch (error) {
       console.log("The music isn't playing")
    }
  };

  // _musicTimeout () {
  //   this.interval = setInterval(() => {
  //     const { timeLeft } = this.state;

  //     if(timeLeft <= 0) {
  //     this.backgroundMusic.stopAsync();
  //     this.props.navigation.navigate('End');
  //     } else {
  //       this.setState(state => ({ timeLeft: state.timeLeft - 1 }));
  //     }
  //   }, 100);
  // }

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
  }
  _start = (sequenceTiming) => {
    Animated.loop(
      Animated.sequence(sequenceTiming), {iterations: -1, useNativeDriver: true}).start();
  };

  _onQuitPress = () => {
    this.backgroundMusic.stopAsync();
    this.props.navigation.navigate('End');
  };

  render() {
      return (
        <>
          <View style={styles.container}>
          <DanceFloor start={this._start} song={this.props.navigation.getParam('song', '')} tempoMultiplier={this.props.navigation.getParam('tempoMultiplier', '')} dance={this.props.navigation.getParam('dance', '')}/>
          {this._startMusic}
          {this._musicTimeout}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        backgroundColor: "black",
    },
    button: {
        backgroundColor: '#A93133',
        margin: 10,
        width: '80%',
        borderRadius: 50
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
