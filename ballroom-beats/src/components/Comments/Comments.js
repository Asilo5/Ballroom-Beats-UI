import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Dimensions, Easing } from 'react-native';

const { height } = Dimensions.get('window');

const animationY = Math.ceil(height * 0.7);
const negativeEnd = animationY * -1;


class Comments extends Component {

    constructor() {
        super()
        
        this.yAnimation = this.state.position.interpolate({
            inputRange: [negativeEnd, 0],
            outputRange: [animationY, 0] 
          });
   
          this.scaleAnimation = this.yAnimation.interpolate({
             inputRange: [0, 15, 30],
             outputRange: [0, 1.4, 1],
             extrapolate: 'clamp'
          });
    }

    state = {
      position: new Animated.Value(0)
    };

    componentDidMount() {
    //    this.yAnimation = this.state.position.interpolate({
    //      inputRange: [negativeEnd, 0],
    //      outputRange: [animationY, 0] 
    //    });

    //    this.scaleAnimation = this.yAnimation.interpolate({
    //       inputRange: [0, 15, 30],
    //       outputRange: [0, 1.4, 1],
    //       extrapolate: 'clamp'
    //    });

       Animated.timing(this.state.position, {
         duration: 2000,
         toValue: negativeEnd,
         easing: Easing.ease,
         useNativeDriver: true
       }).start();
    }; 

    getStyle = () => {
        return {
            transform: [{ translateY: this.state.position }, { scale: this.scaleAnimation }]
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
        color: 'purple',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
