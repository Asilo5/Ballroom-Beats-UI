import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

class Game extends Component {

  render() {
      return (
        <>
          <TouchableOpacity onPress={this._start}>
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