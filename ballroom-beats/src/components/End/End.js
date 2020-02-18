import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

class End extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.gameEnd}>End, Play Again</Text>
            <Button 
                style={styles.button} 
                onPress={() => this.props.navigation.navigate('DanceType')} 
                title="PLAY AGAIN">
                <Text style={styles.playAgain}>Play Again</Text>
            </Button>
          </View>
      )      
  }
} 

const AppNavigator = createStackNavigator({
    End: {
      screen: End,
    },
});
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameEnd: {
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'green',
        fontSize: 45,
        color: 'black',
    },
    playAgain: {
        fontSize: 25,
        color: 'black',
    }
});

export default withNavigation(End);