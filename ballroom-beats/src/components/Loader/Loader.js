import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class Loader extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.countDown}>....to play time</Text>
            <View style={styles.btnContainer}>
                <Icon.Button style={styles.button1} 
                    name="arrowleft" 
                    onPress={() => this.props.navigation.navigate('SongPick')} 
                    title="BACK">
                    <Text style={styles.back}>Back</Text>
                </Icon.Button>
                <Icon.Button style={styles.button2} 
                    name="arrowright" 
                    onPress={() => this.props.navigation.navigate('Game')} 
                    title="NEXT">
                    <Text style={styles.play}>Play</Text>
                </Icon.Button>
            </View>
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
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button1: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    play: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    button2: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    back: {
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default withNavigation(Loader);