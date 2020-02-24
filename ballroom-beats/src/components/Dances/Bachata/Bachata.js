import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native';

export default class Bachata extends Component {
    state = {
      pulses: [
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
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

    assessPulseDuration = () => {
      return (
        60000/this.props.song.tempo * .5
      )
    }

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
           }),
           Animated.timing(this.state.pulses[2], {
               toValue: 3,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[2], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
           Animated.timing(this.state.pulses[3], {
               toValue: 4,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[3], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
           Animated.timing(this.state.pulses[4], {
               toValue: 3,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[4], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
           Animated.timing(this.state.pulses[5], {
               toValue: 3,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[5], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
           Animated.timing(this.state.pulses[6], {
               toValue: 3,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[6], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
           Animated.timing(this.state.pulses[7], {
               toValue: 4,
               duration: this.assessPulseDuration(),
               easing: Easing.back()
           }),
           Animated.timing(this.state.pulses[7], {
               toValue: 1,
               duration: this.assessPulseDuration()
           }),
        ]
    };

   // generateTiming = () => {
   //   return this.state.pulses.map((pulse) => {
   //     return [
   //        Animated.timing(pulse, {
   //            toValue: 3,
   //            duration: 439,
   //            easing: Easing.back()
   //        }),
   //        Animated.timing(pulse, {
   //            toValue: 1,
   //            duration: 439
   //        })
   //     ]
   //   }).flat();
   // };

   countUp = (num) => {
     const subCounterList = [...this.state.counters];
     subCounterList[num]++;
     this.setState({ counters: subCounterList });
   };


   generateViews = () => {
     const colours = ["#FCFDF9","#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "274FA2", "#6F2C8F"];

     return (
       <View style={styles.danceFloor}>
       <TouchableOpacity onPress={() => {this.countUp(2)}} >
           <Animated.View
               style={{
                   transform: [
                       {
                           scaleX: this.state.pulses[6]
                       },
                       {
                          scaleY: this.state.pulses[6]
                      }
                   ],
                   margin: 20,
                   borderWidth: 10,
                   borderColor: "#FCFDF9",
                   borderRadius: 10
               }}  >
           </Animated.View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {this.countUp(2)}} >
           <Animated.View
               style={{
                   transform: [
                       {
                           scaleX: this.state.pulses[7]
                       },
                       {
                          scaleY: this.state.pulses[7]
                      }
                   ],
                   margin: 20,
                   borderWidth: 10,
                   borderColor: "#F60091",
                   borderRadius: 10
               }}  >
           </Animated.View>
       </TouchableOpacity>
       <View style={styles.middleDots}>
          <View style={styles.splitDots}>
          <TouchableOpacity onPress={() => {this.countUp(2)}} >
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
                      borderWidth: 10,
                      borderColor: "#F6811F",
                      borderRadius: 10
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.countUp(3)}} >
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
                      borderWidth: 10,
                      borderColor: "#FFEB00",
                      borderRadius: 10
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          </View>
          <View style={styles.splitDots}>
          <TouchableOpacity onPress={() => {this.countUp(0)}} >
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
                      borderWidth: 10,
                      borderColor: "#71C043",
                      borderRadius: 10
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.countUp(1)}} >
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
                      borderWidth: 10,
                      borderColor: "#03ABF0",
                      borderRadius: 10
                  }}  >
              </Animated.View>
          </TouchableOpacity>
        </View>
       </View>
         <TouchableOpacity onPress={() => {this.countUp(2)}} >
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
                     borderWidth: 10,
                     borderColor: "#274FA2",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {this.countUp(3)}} >
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
                     borderWidth: 10,
                     borderColor: "#6F2C8F",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
       </View>
     )

   };

    render() {
      console.log('BACHATA SONG', this.props.songs)
        return (
          <View style={styles.bachataComponent}>
              {this.props.start(this.generateTiming())}
            <View style={styles.stepsContainer}>
                {this.generateViews()}
            </View>
          </View>
        );
    }
}

// render() {
//     return (
//       <ImageBackground source={"https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} style={styles.backgroundImage}>
//         <View style={styles.bachataComponent}>
//             <TouchableOpacity style={styles.start} onPress={() => this.props.start(this.generateTiming())}>
//                 <Text style={styles.startText}>Start</Text>
//             </TouchableOpacity>
//             <View style={styles.stepsContainer}>
//                 {this.generateViews()}
//             </View>
//         </View>
//       </ImageBackground>
//     );
// }


const styles = StyleSheet.create({
    // backgroundImage: {
    //   flex: 1,
    //   alignSelf: 'stretch',
    //   width: "100%",
    //   height: "100%"
    // },
    danceFloor: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      right: 50,
      top: 100
    },
    middleDots: {
      display: "flex",
      bottom: 30
    },
    splitDots: {
      display: "flex",
      flexDirection: "row",
    },
    upperSteps:{
      display: 'flex',
      flexDirection: "row",
      width: '70%',
      height: 100,
      justifyContent: 'space-between'
    },
    upperTwoSteps: {
      display: 'flex',
      flexDirection: "row",
    },
    lowerSteps:{
      display: 'flex',
      flexDirection: "row",
      width: '70%',
      justifyContent: 'space-between'
    },
    lowerTwoSteps:{
      display: 'flex',
      flexDirection: "row",
    },
    stepsContainer: {
      padding: 10,
      left: 55,
      marginTop: 60,
      marginBottom: 60
    },
    numberView: {
      backgroundColor: "#FFF",
      margin: 10,
    },
  });
