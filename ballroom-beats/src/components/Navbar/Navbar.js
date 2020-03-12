import React, { Component } from 'react';
import { createAppContainer, withNavigation  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { 
  StyleSheet, 
  View, 
  Text, 
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('screen')
console.log('screen', screen)
const width = Dimensions.get('window')
console.log('width', width)
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

const styles = EStyleSheet.create({
  bottomContainer: {
    backgroundColor: '#D1005A',
    // backgroundColor: '$bgColor',
    bottom: 1,
    width: '100%',
    position: 'absolute',
  },
  // '@media (orientation: landscape)': {
  //   bottomContainer: {
  //     bottom: -30,
  //     backgroundColor: '$bgColor',
  //   }
  // },
  '@media (min-width: 500)': {
    bottomContainer: {
      backgroundColor: '$bgColor',
      // bottom: -40,
    }
  },
  btnContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D1005A',
    padding: 20,
    fontSize: 30
  },
  '@media (min-width: 500)': {
    button: {
      backgroundColor: '$bgColor',
    }
  },
  home: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    color: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000001',
  },
  '@media (min-width: 500)': {
    home: {
      fontSize: 25,
      backgroundColor: '$bgColor',
    }
  },
});

export default withNavigation(Navbar);