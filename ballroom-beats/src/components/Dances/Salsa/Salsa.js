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
          return [
            Animated.timing(this.state.pulses[0], {
              toValue: 3,
              duration: this.assessPulseDuration(),
              easing: Easing.back()
          }),
          Animated.timing(this.state.pulses[0], {
              toValue: 1,
              duration: this.assessPulseDuration()
          }),
          Animated.timing(this.state.pulses[1], {
              toValue: 3,
              duration: this.assessPulseDuration(),
              easing: Easing.back()
          }),
          Animated.timing(this.state.pulses[1], {
              toValue: 1,
              duration: this.assessPulseDuration()
          })
          ];
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
                   <Animated.View
                       style={{
                        transform: [
                            {
                                scaleX: this.state.pulses[0]
                            },
                            {
                               scaleY: this.state.pulses[0]
                           }
                        ],
                        margin: 20,
                        borderWidth: 15,
                        borderColor: "#71C043",
                        borderRadius: 15
                    }}
                   >

                   </Animated.View>
               </TouchableOpacity>
               
               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => this.countUp()} key={4}>
                      <Animated.View
                        style={{
                          transform: [
                              {
                                  scaleX: this.state.pulses[0]
                              },
                              {
                                 scaleY: this.state.pulses[0]
                             }
                          ],
                          margin: 20,
                          borderWidth: 15,
                          borderColor: "#71C043",
                          borderRadius: 15
                      }}
                      >
                       
                       </Animated.View>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.countUp()} key={2}>
                      <Animated.View
                        style={{
                          transform: [
                              {
                                  scaleX: this.state.pulses[1]
                              },
                              {
                                 scaleY: this.state.pulses[1]
                             }
                          ],
                          margin: 20,
                          borderWidth: 15,
                          borderColor: "#71C043",
                          borderRadius: 15
                      }}
                      >
                       
                       </Animated.View>
                   </TouchableOpacity>
               </View>

               <TouchableOpacity onPress={() => this.countUp()} key={3}>
                  <Animated.View
                    style={{
                      transform: [
                          {
                              scaleX: this.state.pulses[0]
                          },
                          {
                             scaleY: this.state.pulses[0]
                         }
                      ],
                      margin: 20,
                      borderWidth: 15,
                      borderColor: "#71C043",
                      borderRadius: 15
                  }}
                  >
                       
                  </Animated.View>
               </TouchableOpacity>
           </View>
       )
   }


   render() {
    return (
      <View>
        <View style={styles.stepsContainer}>
            {this.generateViews()}
        </View>
      </View>
    );
  };


};

const styles = StyleSheet.create({

  danceFloor: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      right: 50,
      top: 100,
      height: 400
    }

});