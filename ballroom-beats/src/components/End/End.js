import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class End extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.gameEnd}>End Of Game</Text>
            <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('DanceType')}
                title="PLAY AGAIN">
                <Text style={styles.playAgain}>Play Again</Text>
            </Button>
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
        margin: 10,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#BD4413',
        padding: 20,
        fontSize: 35
    },
    playAgain: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default withNavigation(End);
