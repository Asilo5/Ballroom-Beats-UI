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

    componentDidMount() {
        this.props.start(this.generateTiming());
        this.props.stopMusic(this.getSongLength());
      };
    
      endGame = (userPoints, gamePoints) => {
          this.props.stopDance(userPoints, gamePoints);
      };
    
      componentWillUnmount() {
        this.endGame(this.state.counter, this.getExpectedValue());
      };
    
      getExpectedValue = () => {
        return this.props.song.duration/60 * this.props.song.tempo;
      };
    
      getSongLength = () => {
        //Real World
    
        // return (
        //   this.props.song.duration * 1000
        // )
    
        //Demo
        return 25000;
      };
    
      assessPulseDuration = () => {
        return (
          60000/this.props.song.tempo
        )
      };
    
      generateTiming = () => {
        return this.state.pulses.map(pulse => {
          return [
            Animated.timing(pulse, {
              toValue: 3,
              duration: this.assessPulseDuration(),
              easing: Easing.back(),
            }),
            Animated.timing(pulse, {
              toValue: 1,
              duration: this.assessPulseDuration(),
            })
          ];
        }).flat();
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