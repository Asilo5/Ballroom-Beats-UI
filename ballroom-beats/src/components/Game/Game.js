import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { Audio } from 'expo-av';
class Game extends Component {

  async componentDidMount() {
    this.backgroundMusic = new Audio.Sound();
    this.buttonFX = new Audio.Sound();
    try {
      await this.backgroundMusic.loadAsync(
        require('../../../assets/Music/Black_Ant_-_01_-_Fater_Lee.mp3'),
      );
      await this.backgroundMusic.setIsLoopingAsync(true);
    } catch (error) {
       console.log("The music isn't playing")
    }
  };

  _onPlayPressed = () => {
      this.backgroundMusic.playAsync();
  };

  _onStopPressed = () => {
      this.backgroundMusic.stopAsync();
  };

  render() {
      return (
        <>
          <TouchableOpacity 
          // onPress={this._start}
          >
            <Text 
            style={styles.text}
            onPress={this._onPlayPressed}>Start
            </Text>
            {/* <SongPlayer /> */}
          </TouchableOpacity>
          <View style={styles.container}>
            <Text>Playing Game</Text>
            <TouchableOpacity onPress={this._onStopPressed}>
                <View style={styles.btnContainer}>
                    <Icon.Button 
                        style={styles.button} 
                        // onPress={this._onStopPressed}
                        name="arrowright" 
                        onPress={() => this.props.navigation.navigate('End')} 
                        title="Finish">
                        <Text style={styles.quit}>Quit</Text>
                    </Icon.Button>
                </View>
             </TouchableOpacity>
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
    text: {
        fontSize: 40,
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
        margin: 20
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