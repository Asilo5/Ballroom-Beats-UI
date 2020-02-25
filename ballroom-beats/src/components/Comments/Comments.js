import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated } from 'react-native';

class Comments extends Component {
   

    render() {
        return (
            <Animated.View>
                <Text style={styles.comment}>{this.props.comment}</Text>
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
