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

    }
  }

  async componentDidMount() {
    console.log('SONGPATH', this.props.navigation.getParam('song', '').url)
    // let songPath = require('../../../assets/Music/Deja_-_vu.mp3')
    this.backgroundMusic = new Audio.Sound();
    try {
      await this.backgroundMusic.loadAsync(
        require(songPath)
        // songpath
        // require('../../../assets/Music/Deja_-_vu.mp3'),

      );
      await this.backgroundMusic.playAsync();
      await this.backgroundMusic.setIsLoopingAsync(true);
    } catch (error) {
       console.log("The music isn't playing")
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

  render() {
      return (
        <>
          <View style={styles.container}>
          <DanceFloor start={this._start} song={this.props.navigation.getParam('song', '')} tempoMultiplier={this.props.navigation.getParam('tempoMultiplier', '')} dance={this.props.navigation.getParam('dance', '')}/>
          {this._startMusic}
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
        flex: 2,
        backgroundColor: "black",
    },
    button: {
        backgroundColor: '#D00000',
        margin: 30,
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
