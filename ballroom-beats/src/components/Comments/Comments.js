import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated } from 'react-native';

class Comments extends Component {
   

    render() {
        console.log('hey', this.props.heart);
        return (
            <Animated.View style={[styles.commentsContainer, this.props.style]}>
                <Text style={styles.text} >Insideeee</Text>
               {/* <this.props.Heart color='blue' /> */}
            </Animated.View>
        );
    }
}

export default Comments;

const styles = StyleSheet.create({
    commentsContainer: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'transparent'
    },
    text: {
        color: 'blue',
        fontSize: 30
    }
});
