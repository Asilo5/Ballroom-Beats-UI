import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image 
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
class Home extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Image source={require('../../../images/logo_transparent.png')} style={styles.logo} />
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
}; 

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
});
  
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666363',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '@media (orientation: landscape)': {
        container: {
          flex: 0,
        }
      },
    button: {
        backgroundColor: '#A9C344',
    },
    '@media (orientation: landscape)': {
        button: {
          backgroundColor: '$bgColor',
        }
      },
    enter: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        height: 450, 
        width: 425, 
        resizeMode : 'stretch'
    },
    '@media (orientation: landscape)': {
       logo: {
          height: 340, 
          width: 525, 
        //   resizeMode : 'stretch'
        }
      },
});

export default withNavigation(Home);