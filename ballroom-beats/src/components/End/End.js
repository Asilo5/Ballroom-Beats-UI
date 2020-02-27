import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';


class End extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.gameEnd}>End Of Game</Text>
            <Icon.Button
                name={'playcircleo'}
                style={styles.button}
                onPress={() => this.props.navigation.navigate('DanceType')}
                title="PLAY AGAIN">
                <Text style={styles.playAgain}>Play Again</Text>
            </Icon.Button>
            <Text style={styles.score}>{this.props.navigation.getParam('scoreText', '')}</Text>
          </View>
      )
  }
}

const AppNavigator = createStackNavigator({
    End: {
      screen: End,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666363',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameEnd: {
        fontSize: 40,
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
        marginBottom: 10,
    },
    score: {
        fontSize: 40,
        color: '#A9C344',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
        margin: 10,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#D1005A',
        padding: 10,
        fontSize: 25
    },
    playAgain: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default withNavigation(End);
