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


   countUp = () => {
       let newCount = this.state.counter;
       newCount++;
       this.setState({ counter: newCount });
   } 

   generateViews = () => {
       return (
           <View style={styles.danceFloor}>
               <TouchableOpacity onPress={() => this.countUp()} key={1}>
                   <Animated.View>

                   </Animated.View>
               </TouchableOpacity>
               
               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => this.countUp()} key={4}>
                      <Animated.View>
                       
                       </Animated.View>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.countUp()} key={2}>
                      <Animated.View>
                       
                       </Animated.View>
                   </TouchableOpacity>
               </View>

               <TouchableOpacity onPress={() => this.countUp()} key={3}>
                  <Animated.View>
                       
                  </Animated.View>
               </TouchableOpacity>
           </View>
       )
   }

};

const styles = StyleSheet.create({



});