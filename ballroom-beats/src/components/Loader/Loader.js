import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';
import CountDown from 'react-native-countdown-component';

class Loader extends Component {

  _gameScreen = () => {
    this.props.navigation.navigate('Game');
  }  

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.countDown}>Get ready to start the game.....</Text>
                <CountDown
                    until={5}
                    size={35}
                    onFinish={this._gameScreen}
                    digitStyle={{backgroundColor: 'black'}}
                    digitTxtStyle={{color: 'white'}}
                    timeToShow={['S']}
                />
                <Icon.Button style={styles.button1} 
                    name="arrowleft" 
                    onPress={() => this.props.navigation.navigate('SongPick')} 
                    title="BACK">
                    <Text style={styles.back}>Back</Text>
                </Icon.Button>
            <Navbar />
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
    },
    countDown: {
        fontSize: 35,
        color: 'white',
        marginBottom: 10,
    },
    button1: {
        backgroundColor: '#A9C344',
        fontSize: 25,
    },
    back: {
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default withNavigation(Loader);