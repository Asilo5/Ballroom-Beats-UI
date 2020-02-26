import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet,
<<<<<<< HEAD
    ImageBackground,
    Image
=======
>>>>>>> master
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
      counter: 0
    };

    componentDidMount() {
      this.props.start(this.generateTiming())
      this.props.stopMusic(this.getSongLength())
    }

    endGame = (userPoints, gamePoints) => {
        this.props.stopDance(userPoints, gamePoints)
    }

    componentWillUnmount() {
      this.endGame(this.state.counter, this.getExpectedValue())
    }

    getExpectedValue = () => {
      return this.props.song.duration/60 * this.props.song.tempo
    }

    getSongLength = () => {
      //Real World

      // return (
      //   this.props.song.duration * 1000
      // )

      //Demo
      return 10000
    }

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


    countUp = () => {
      let newCount = this.state.counter
      newCount++
      this.setState({counter: newCount});
    }


   generateViews = () => {
     const colours = ["#FCFDF9","#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "274FA2", "#6F2C8F"];

     return (
       <View style={styles.danceFloor}>
       <TouchableOpacity onPress={() => {this.countUp()}} >
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
       <TouchableOpacity onPress={() => {this.countUp()}} >
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
          <TouchableOpacity onPress={() => {this.countUp()}} >
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
          <TouchableOpacity onPress={() => {this.countUp()}} >
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
          <TouchableOpacity onPress={() => {this.countUp()}} >
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
          <TouchableOpacity onPress={() => {this.countUp()}} >
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
         <TouchableOpacity onPress={() => {this.countUp()}} >
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
         <TouchableOpacity onPress={() => {this.countUp()}} >
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
        return (
            <View style={styles.stepsContainer}>
                {this.generateViews()}
            </View>
<<<<<<< HEAD
            <Text style={styles.points}>Your Points: {`${this.state.counter}`}</Text>
            <Text style={styles.points}>Possible Points: {`${Math.floor(this.getExpectedValue())}`}</Text>
          </View>
=======
>>>>>>> master
        );
    }
}

<<<<<<< HEAD


=======
>>>>>>> master
const styles = StyleSheet.create({
    danceFloor: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      right: 50,
      top: 100,
      height: 400
    },
    middleDots: {
      display: "flex",
<<<<<<< HEAD
      bottom: 30
=======
      bottom: 40,
      marginBottom: 100
>>>>>>> master
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
<<<<<<< HEAD
    points: {
      color: '#A9C344',
      fontSize: 15,
      textAlign: 'center',
      margin: 10
    }
  });
=======
  });
>>>>>>> master
