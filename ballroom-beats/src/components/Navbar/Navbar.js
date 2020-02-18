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
    backgroundColor: 'blue',
    bottom: 60,
    width: '100%',
    position: 'absolute',
  },
  btnContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    fontSize: 25,
  },
  home: {
    fontSize: 25,
  }
});

export default withNavigation(Navbar);