import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated } from 'react-native';

class Comments extends Component {
   

    render() {
        console.log('Great job')
        return (
            <Animated.View>
                <Text style={styles.comment}>Great job!</Text>
            </Animated.View>
        );
    }
}

export default Comments;

const styles = StyleSheet.create({
    comment: {
    color: 'white',
    fontSize: 20,
    left: 100
   }
});
