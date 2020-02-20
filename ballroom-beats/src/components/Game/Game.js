import React, { Component } from 'react';
import DanceFloor from '../DanceFloor/DanceFloor.js'
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class Game extends Component {

  _start = (sequenceTiming) => {
    Animated.loop(
      Animated.sequence(sequenceTiming), {iterations: -1, useNativeDriver: true}).start();
  };

  render() {
      return (
          <View style={styles.container}>
            <Text>Playing Game</Text>
            <View style={styles.btnContainer}>
              <DanceFloor start={this._start}/> 
                <TouchableOpacity  
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('End')}>
                    <Text style={styles.quit}>Quit</Text>
                </TouchableOpacity>
             </View>
             <Navbar />
          </View>
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
        color: '#ffff',
        margin: 30,
        // width: '50%',
        borderRadius: 50
    },
    quit: {
        fontSize: 30,
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    }
});

export default withNavigation(Game);
