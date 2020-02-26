import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    Animated, 
    Dimensions, 
    Easing 
} from 'react-native';

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

          this.xAnimation = this.yAnimation.interpolate({
             inputRange: [ 0 , animationY / 6 , animationY / 3, animationY / 2 , animationY],
             outputRange: [0, 50, 30, 20, 10]
          });

          this.rotateAnimation = this.yAnimation.interpolate({
            inputRange: [ 0 , animationY / 6 , animationY / 3, animationY / 2 , animationY],
            outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg']
          });
    };

    state = {
      position: new Animated.Value(0)
    };

    componentDidMount() {

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
                { translateY: this.state.position }, 
                { scale: this.scaleAnimation },
                { translateX: this.xAnimation },
                { rotate: this.rotateAnimation }
            ]
        }
    };

    render() {
      let positiveAffirmation = ['Yass!', 'Doing Great!', 'Awesome!', 'Pro!'];
      let randomAffirmation = positiveAffirmation[Math.floor(Math.random()*positiveAffirmation.length)];

        return (
            <Animated.View style={[styles.commentsContainer, this.props.style, this.getStyle()]}>
                <Text style={styles.text}>{randomAffirmation}</Text>
            </Animated.View>
        );
    }
};

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
        fontWeight: 'bold'
    }
});
