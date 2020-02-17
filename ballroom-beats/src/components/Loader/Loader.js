import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class Loader extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>Loader</Text>
          </View>
      )      
  }
} 

const AppNavigator = createStackNavigator({
    Loader: {
      screen: Loader,
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

export default withNavigation(Loader);