import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class End extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>Pick Your Song</Text>
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withNavigation(End);