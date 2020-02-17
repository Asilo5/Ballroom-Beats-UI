import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class Home extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>Home</Text>
          </View>
      )      
  }
} 

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
});
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withNavigation(Home);