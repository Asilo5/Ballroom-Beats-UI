import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';
import CountDown from 'react-native-countdown-component';

class Loader extends Component {
  constructor(props) {
    super(props)
  };

  _gameScreen = () => {
    this.props.navigation.navigate('Game', {song: this.props.navigation.getParam('song', ''), dance: this.props.navigation.getParam('dance', '')});
  };

  chooseMessage = () => {
    if (this.props.navigation.getParam('dance', '') === "Bachata") {
      return (
        <Text style={styles.countDown}>Your screen should be in LANDSCAPE mode!</Text>
      )
    }

    if (this.props.navigation.getParam('dance', '') === "Waltz") {
      return (
        <Text style={styles.countDown}>Your screen should be in PORTRAIT mode!</Text>
      )
    }

    if (this.props.navigation.getParam('dance', '') === "Salsa") {
      return (
        <Text style={styles.countDown}>Your screen should be in PORTRAIT mode!</Text>
      )
    }
  }

   render() {
      return (
          <View style={styles.container}>
            <Text style={styles.countDown}>GET READY! </Text>
            {this.chooseMessage()}
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
};

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
        margin: 10,
        textAlign: "center"
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
