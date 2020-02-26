import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';
import CountDown from 'react-native-countdown-component';

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }

  _gameScreen = () => {
    this.props.navigation.navigate('Game', {song: this.props.navigation.getParam('song', ''), dance: this.props.navigation.getParam('dance', '')});
  }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.countDown}>Get ready to start the game.....</Text>
                <CountDown
                    until={5}
                    size={35}
                    onFinish={this._gameScreen}
                    digitStyle={{backgroundColor: '#666363'}}
                    digitTxtStyle={{
                        color: 'white',
                        textShadowOffset: { width: 2, height: 2 },
                        textShadowRadius: 2,
                        textShadowColor: '#000',
                        }}
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
        backgroundColor: '#666363',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countDown: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
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
