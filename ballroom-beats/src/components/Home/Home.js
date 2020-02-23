import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

class Home extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.homeHeader}>Ballroom Beatz</Text>
            <Icon.Button 
                style={styles.button} 
                name="arrowright" 
                onPress={() => this.props.navigation.navigate('DanceType')} 
                title="ENTER">
                <Text style={styles.enter}>ENTER</Text>
            </Icon.Button>
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeHeader: {
        fontSize: 40,
        color: 'white',
        marginBottom: 25,
  },
    button: {
        backgroundColor: '#32CD32',
        fontSize: 25,
    },
    enter: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default withNavigation(Home);