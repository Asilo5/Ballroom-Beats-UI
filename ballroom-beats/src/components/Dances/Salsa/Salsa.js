import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet,
    Text
  } from 'react-native';
import Comments from "../../Comments/Comments";

const randomiseNumber = (min, max) => {
  return Math.random() * (min - max) + min;
};

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
        counter: 0,
        comments: [],
        commentCount: 1
    };

    pulse1;
    pulse2;
    pulse3;
    pulse4;
    pulse5;
    pulse6;

    listeners = [this.pulse1, this.pulse2, this.pulse3, this.pulse4, this.pulse5, this.pulse6]

    componentDidMount() {
        this.props.start(this.generateTiming());
        this.generateListeners()
        this.props.stopMusic(this.getSongLength());
      };

      endGame = (userPoints, gamePoints) => {
          this.props.stopDance(userPoints, gamePoints);
      };

      componentWillUnmount() {
        this.endGame(this.state.counter, this.getExpectedValue());
        this.removeListeners()
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
          // 49500/this.props.song.tempo
          30000/this.props.song.tempo
        )
      };

      generateListeners = () => {
        return this.state.pulses.map((pulse, i) => {
          pulse.addListener((pulse) => this.listeners[i]= pulse.value)
        });
      }
      removeListeners = () => {
          return this.state.pulses.map(pulse => {
            pulse.removeAllListeners()
          });
      }

      // generateTiming = () => {
      //   return this.state.pulses.map(pulse => {
      //     return [
      //       Animated.timing(pulse, {
      //         toValue: 6,
      //         duration: (this.assessPulseDuration() * 1/5),
      //         easing: Easing.back(),
      //       }),
      //       Animated.timing(pulse, {
      //         toValue: 1,
      //         duration: (this.assessPulseDuration() * 4/5),
      //       })
      //     ]
      //   }).flat();
      // };
      generateTiming = () => {
          return [
             Animated.timing(this.state.pulses[0], {
                 toValue: 3,
                 duration: (this.assessPulseDuration() * 1/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[0], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 4/5),
             }),
             Animated.timing(this.state.pulses[1], {
                 toValue: 3,
                 duration: (this.assessPulseDuration() * 1/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[1], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 4/5),
             }),
             Animated.timing(this.state.pulses[2], {
                 toValue: 3,
                 duration: (this.assessPulseDuration() * 2/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[2], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 8/5),
             }),
             Animated.timing(this.state.pulses[3], {
                 toValue: 4,
                 duration: (this.assessPulseDuration() * 1/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[3], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 4/5),
             }),
             Animated.timing(this.state.pulses[4], {
                 toValue: 3,
                 duration: (this.assessPulseDuration() * 1/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[4], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 4/5),
             }),
             Animated.timing(this.state.pulses[5], {
                 toValue: 3,
                 duration: (this.assessPulseDuration() * 2/5),
                 easing: Easing.elastic(1),
               }),
               Animated.timing(this.state.pulses[5], {
                 toValue: 1,
                 duration: (this.assessPulseDuration() * 8/5),
             })
          ]
      };


   countUp = () => {
       let newCount = this.state.counter;
       newCount++;
       this.setState({ counter: newCount });
   }

   registerCount = (i) => {
     if (this.listeners[i] > 1) {
       this.countUp()
       this.addComment()
     }
   }

   generateViews = () => {
       return (
           <View style={styles.danceFloor}>
               <Text style={styles.footingPositionLone}>Left Front</Text>
               <TouchableOpacity style={styles.loneDot} onPress={() => {this.registerCount(0)}} key={0}>
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
                        borderWidth: 24,
                        borderColor: "#F60091",
                        borderRadius: 24
                    }}
                   >

                   </Animated.View>
               </TouchableOpacity>

               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => {this.registerCount(1)}} key={1}>
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
                          borderWidth: 24,
                          borderColor: "#FFEB00",
                          borderRadius: 24
                      }}
                      >

                       </Animated.View>
                         <Text style={styles.footingPosition}>Right</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => {this.registerCount(2)}} key={2}>
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
                          borderWidth: 24,
                          borderColor: "#F6811F",
                          borderRadius: 24
                      }}
                      >

                       </Animated.View>
                        <Text style={styles.footingPosition}>Left</Text>
                   </TouchableOpacity>
               </View>

               <View style={styles.middleSteps}>
                   <TouchableOpacity onPress={() => {this.registerCount(5)}} key={5}>
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
                          borderWidth: 24,
                          borderColor: "#71C043",
                          borderRadius: 24
                      }}
                      >

                       </Animated.View>
                         <Text style={styles.footingPosition}>Right</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => {this.registerCount(4)}} key={4}>
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
                          borderWidth: 24,
                          borderColor: "#03ABF0",
                          borderRadius: 24
                      }}
                      >

                       </Animated.View>
                         <Text style={styles.footingPosition}>Left</Text>
                   </TouchableOpacity>
               </View>

               <TouchableOpacity style={styles.loneDot} onPress={() => {this.registerCount(3)}} key={3}>
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
                      borderWidth: 24,
                      borderColor: "#6F2C8F",
                      borderRadius: 24
                  }}
                  >

                  </Animated.View>
               </TouchableOpacity>
               <Text style={styles.footingPositionLone}>Right Back</Text>
           </View>
       )
   };

   addComment = () => {
    this.setState({ comments: [...this.state.comments, { id: this.state.commentCount++, right: randomiseNumber(20,-250) }]} );
 };

   render() {
    return (
      <View>
        <View style={styles.stepsContainer}>
            {this.generateViews()}
        </View>

        <View >
           {this.state.comments.map((comment) => {
               return <Comments key={comment.id} style={{ left: comment.right, color: comment.color }} />
           })}
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({

  danceFloor: {
      display: "flex",
      justifyContent: "space-around",
      top: 100,
      padding: 50,
      left: 10
    },

    middleSteps: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 3,
      paddingBottom: 3
    },

    // middleSteps: {
    //   display: "flex",
    //   flexDirection: "row",
    //   justifyContent: "space-around",
    //   padding: 20
    // },

    stepsContainer: {
      marginBottom: 60,
      width: 600
    },

    loneDot: {
      width: '5%',
      left: '35%',
      padding: 20
    },

    footingPosition: {
      color: 'white',
      fontSize: 20,
      left: 24
    },

    footingPositionLone: {
      color: 'white',
      fontSize: 20,
      left: 200,
      marginTop: -25,
      marginBottom: -25
    },

});
