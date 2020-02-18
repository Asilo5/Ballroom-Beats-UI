import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

class DanceType extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.dance}>Pick Your Dance Type</Text>
          </View>
      )      
  }
} 

const AppNavigator = createStackNavigator({
    DanceType: {
      screen: DanceType,
    },
});
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dance: {

    },
});

export default withNavigation(DanceType);