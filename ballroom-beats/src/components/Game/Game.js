import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class Game extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>Playing Game</Text>
            <View style={styles.btnContainer}>
                <Icon.Button 
                    style={styles.button} 
                    name="arrowright" 
                    onPress={() => this.props.navigation.navigate('End')} 
                    title="Finish">
                    <Text style={styles.quit}>Quit</Text>
                </Icon.Button>
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