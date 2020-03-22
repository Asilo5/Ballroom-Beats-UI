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
          49500/this.props.song.tempo
        )
      };
    
      generateTiming = () => {
        return this.state.pulses.map(pulse => {
          return [
            Animated.timing(pulse, {
              toValue: 6,
              duration: this.assessPulseDuration(),
              easing: Easing.back(),
            }),
            Animated.timing(pulse, {
              toValue: 1,
              duration: this.assessPulseDuration(),
            })
          ]
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
               <TouchableOpacity style={styles.loneDot} onPress={() => this.countUp()} key={0}>
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
                        borderColor: "#FFEB00",
                        borderRadius: 15
                    }}
                   >

                   </Animated.View>
               </TouchableOpacity>
               
               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => this.countUp()} key={1}>
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
                          borderColor: "#F6811F",
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
                                  scaleX: this.state.pulses[2]
                              },
                              {
                                 scaleY: this.state.pulses[2]
                             }
                          ],
                          margin: 20,
                          borderWidth: 15,
                          borderColor: "#03ABF0",
                          borderRadius: 15
                      }}
                      >
                       
                       </Animated.View>
                   </TouchableOpacity>
               </View>

               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => this.countUp()} key={5}>
                      <Animated.View
                        style={{
                          transform: [
                              {
                                  scaleX: this.state.pulses[5]
                              },
                              {
                                 scaleY: this.state.pulses[5]
                             }
                          ],
                          margin: 20,
                          borderWidth: 15,
                          borderColor: "#F6811F",
                          borderRadius: 15
                      }}
                      >
                       
                       </Animated.View>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.countUp()} key={4}>
                      <Animated.View
                        style={{
                          transform: [
                              {
                                  scaleX: this.state.pulses[4]
                              },
                              {
                                 scaleY: this.state.pulses[4]
                             }
                          ],
                          margin: 20,
                          borderWidth: 15,
                          borderColor: "#03ABF0",
                          borderRadius: 15
                      }}
                      >
                       
                       </Animated.View>
                   </TouchableOpacity>
               </View>

               <TouchableOpacity style={styles.loneDot} onPress={() => this.countUp()} key={3}>
                  <Animated.View
                    style={{
                      transform: [
                          {
                              scaleX: this.state.pulses[3]
                          },
                          {
                             scaleY: this.state.pulses[3]
                         }
                      ],
                      margin: 20,
                      borderWidth: 15,
                      borderColor: "#6F2C8F",
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
      justifyContent: "space-around",
      top: 200,
      padding: 50,
      left: 10
    },

    middleSteps: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20
    },

    stepsContainer: {
      marginBottom: 60,
      width: 600
    },

    loneDot: {
      width: '5%',
      left: '40%',
      padding: 20
    }

});