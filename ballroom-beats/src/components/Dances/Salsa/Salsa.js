import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Salsa extends Component {
  
    state = {
        pulses: [
            new Animated.Value(1),
            new Animated.Value(1),
            new Animated.Value(1),
            new Animated.Value(1)
        ],
        counter: 0
    };

   generateViews = () => {
       return (
           <View style={styles.danceFloor}>
               <TouchableOpacity>

               </TouchableOpacity>
               
               <View style={styles.middleSteps}>
                   <TouchableOpacity>
                   
                   </TouchableOpacity>

                   <TouchableOpacity>
                   
                   </TouchableOpacity>
               </View>

               <TouchableOpacity>
                   
               </TouchableOpacity>

           </View>
       )
   }

};

const styles = StyleSheet.create({



});