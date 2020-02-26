import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Dimensions, Easing } from 'react-native';

const { height } = Dimensions.get('window');

const animationY = Math.ceil(height * 0.7);
const negativeEnd = animationY * -1;


class Comments extends Component {
    state = {
      position: new Animated.Value(0)
    };

    componentDidMount() {
       this.yAnimation = this.state.position.interpolate({
         inputRange: [negativeEnd, 0],
         outputRange: [animationY, 0] 
       });

       Animated.timing(this.state.position, {
         duration: 2000,
         toValue: negativeEnd,
         easing: Easing.ease,
         useNativeDriver: true
       }).start();
    }; 

    getStyle = () => {
        return {
            transform: [
                { translateY: this.state.position }
            ]
        }
    }

    render() {
        return (
            <Animated.View style={[styles.commentsContainer, this.props.style, this.getStyle()]}>
                <Text style={styles.text} >Got it!</Text>
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
        color: 'white',
        fontSize: 30,
    }
});
