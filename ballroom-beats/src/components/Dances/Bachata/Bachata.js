import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native';

export default class Bachata extends Component {
    state = {
      pulses: [
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1)
      ],
      counters: [
          0,
          0,
          0,
          0
      ]
    };


   generateTiming = () => {
     return this.state.pulses.map((pulse) => {
       return [
          Animated.timing(pulse, {
              toValue: 3,
              duration: 439,
              easing: Easing.back()
          }),
          Animated.timing(pulse, {
              toValue: 1,
              duration: 439
          })
       ]
     }).flat();
   }


    render() {
        return (
           
        );
    }
}

