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
            <Icon.Button 
                style={styles.button} 
                name="arrowright" 
                onPress={() => this.props.navigation.navigate('SongPick')} 
                title="NEXT">
                <Text style={styles.next}>Next</Text>
            </Icon.Button>
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
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
  },
    button: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    next: {
        fontSize: 25,
    }
});

export default withNavigation(DanceType);