import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class Navbar extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>Navbar</Text>
          </View>
      )      
  }
};  

const AppNavigator = createStackNavigator({
    Navbar: {
      screen: Navbar,
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

export default withNavigation(Navbar);