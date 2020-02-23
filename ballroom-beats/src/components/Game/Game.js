import React, { Component } from 'react';
import DanceFloor from '../DanceFloor/DanceFloor'
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { Audio } from 'expo-av';
import CountDown from 'react-native-countdown-component';

class Game extends Component {

  async componentDidMount() {
    this.backgroundMusic = new Audio.Sound();
    try {
      await this.backgroundMusic.loadAsync(
        require('../../../assets/Music/Beyond_-_the_-_Sea.mp3'),
      );
      await this.backgroundMusic.setIsLoopingAsync(true);
    } catch (error) {
       console.log("The music isn't playing")
    }
  };

  _start = (sequenceTiming) => {
    this.backgroundMusic.playAsync();
    Animated.loop(
      Animated.sequence(sequenceTiming), {iterations: -1, useNativeDriver: true}).start();
  }

  _onStopPressed = () => {
      this.backgroundMusic.stopAsync();
  };

  _onQuitPress = () => {
    this.backgroundMusic.stopAsync();
    this.props.navigation.navigate('End');
  };

  render() {
      return (
        <>
          <View style={styles.container}>
          <Text style={styles.text}>The game will start in....
            <CountDown
                until={5}
                size={30}
                digitStyle={{backgroundColor: 'white', borderWidth: 2, borderColor: 'lime'}}
                digitTxtStyle={{color: '#1CC625'}}
                onFinish={this._start}
                digitStyle={{backgroundColor: 'black'}}
                digitTxtStyle={{color: 'white'}}
                timeToShow={['S']}
            />
          </Text>
          <DanceFloor start={this._start}/>
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
}

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
      fontSize: 30,
    }
});

export default withNavigation(Game);
