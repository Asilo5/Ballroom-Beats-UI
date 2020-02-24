import React, { Component } from 'react';
import { createAppContainer, withNavigation  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


class Navbar extends Component {
  
  render() {
    return (
      <View style={styles.bottomContainer}>
          <View style={styles.btnContainer}>
            <Icon.Button 
                style={styles.button} 
                name="home" 
                onPress={() => this.props.navigation.navigate('Home')} 
                title="BACK">
                <Text style={styles.home}>Home</Text>
            </Icon.Button>
      </View>
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
  bottomContainer: {
    backgroundColor: '#B9253F',
    bottom: 3,
    width: '100%',
    position: 'absolute',
  },
  btnContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#B9253F',
    padding: 20,
    fontSize: 35
  },
  home: {
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    color: 'white'
  }
});

export default withNavigation(Navbar);