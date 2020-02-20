import React, { Component } from 'react';
import DanceFloor from '../DanceFloor/DanceFloor';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { Audio } from 'expo-av';


class Game extends Component {

  async componentDidMount() {
    this.backgroundMusic = new Audio.Sound();
    this.buttonFX = new Audio.Sound();
    // const source = {
    //     uri: "https://open.spotify.com/album/5MsJK0kqiYIJDmd3cjkGMn?highlight=spotify:track:3KzgdYUlqV6TOG7JCmx2Wg"
    //   }
 
    try {
      // await this.backgroundMusic.loadAsync(source);
      await this.backgroundMusic.loadAsync(
        require('../../../assets/Music/Jahzzar_-_05_-_Siesta.mp3'),
      );
      await this.backgroundMusic.setIsLoopingAsync(true);
    } catch (error) {
       console.log("The music isn't playing")
    }
  };

  _start = (sequenceTiming) => {
    Animated.loop(
      Animated.sequence(sequenceTiming), {iterations: -1, useNativeDriver: true}).start();
      this.backgroundMusic.playAsync();
  }

  // _onPlayPressed = () => {
  // };

  _onStopPressed = () => {
      this.backgroundMusic.stopAsync();
  };

  render() {
      return (
        <>
          <View style={styles.container}>
          <DanceFloor start={this._start}/>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                  <View style={styles.btnContainer}>
                      <Icon.Button 
                          style={styles.button} 
                          name="arrowright" 
                          onPress={() => this.props.navigation.navigate('End')} 
                          title="Finish">
                          <Text style={styles.quit}>Quit</Text>
                      </Icon.Button>
                    </View>
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
        flexDirection: 'row',
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    quit: {
        fontSize: 25,
    }
});

export default withNavigation(Game);
