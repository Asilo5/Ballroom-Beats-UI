import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withNavigation(Loader);