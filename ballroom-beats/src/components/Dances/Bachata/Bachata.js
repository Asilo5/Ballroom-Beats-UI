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
import EStyleSheet from 'react-native-extended-stylesheet';

const randomiseNumber = (min, max) => {
   return Math.random() * (min - max) + min;
};

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
      comments: [],
      commentCount: 1,
      counter: 0
    };

    componentDidMount() {
      this.props.start(this.generateTiming())
      this.props.stopMusic(this.getSongLength())
    };

    endGame = (userPoints, gamePoints) => {
        this.props.stopDance(userPoints, gamePoints)
    };

    componentWillUnmount() {
      this.endGame(this.state.counter, this.getExpectedValue())
    };

    getExpectedValue = () => {
      return this.props.song.duration/60 * this.props.song.tempo
    };

    getSongLength = () => {
      //Real World

      // return (
      //   this.props.song.duration * 1000
      // )

      //Demo
      return 25000
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
               duration: (this.assessPulseDuration() * 1/5),
               easing: Easing.elastic(1),
             }),
             Animated.timing(this.state.pulses[2], {
               toValue: 1,
               duration: (this.assessPulseDuration() * 4/5),
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
               duration: (this.assessPulseDuration() * 1/5),
               easing: Easing.elastic(1),
             }),
             Animated.timing(this.state.pulses[5], {
               toValue: 1,
               duration: (this.assessPulseDuration() * 4/5),
           }),
           Animated.timing(this.state.pulses[6], {
               toValue: 3,
               duration: (this.assessPulseDuration() * 1/5),
               easing: Easing.elastic(1),
             }),
             Animated.timing(this.state.pulses[6], {
               toValue: 1,
               duration: (this.assessPulseDuration() * 4/5),
           }),
           Animated.timing(this.state.pulses[7], {
               toValue: 4,
               duration: (this.assessPulseDuration() * 1/5),
               easing: Easing.elastic(1),
             }),
             Animated.timing(this.state.pulses[7], {
               toValue: 1,
               duration: (this.assessPulseDuration() * 4/5),
           }),
        ]
    };

    countUp = () => {
      let newCount = this.state.counter
      newCount++
      this.setState({counter: newCount});
    };

   generateViews = () => {
     return (
       <View style={styles.danceFloor}>
       <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={6}>
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
                   borderWidth: 24,
                   borderColor: "#FCFDF9",
                   borderRadius: 24
               }}  >
           </Animated.View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={7}>
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
                   borderWidth: 24,
                   borderColor: "#F60091",
                   borderRadius: 24
               }}  >
           </Animated.View>
       </TouchableOpacity>
       <View style={styles.middleDots}>
          <View style={styles.splitDots}>
          <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={1}>
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
                      borderColor: "#F6811F",
                      borderRadius: 24
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={0}>
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
                      borderColor: "#FFEB00",
                      borderRadius: 24
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          </View>
          <View style={styles.splitDots}>
          <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={4}>
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
                      borderColor: "#71C043",
                      borderRadius: 24
                  }}  >
              </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={5}>
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
                      borderColor: "#03ABF0",
                      borderRadius: 24
                  }}  >
              </Animated.View>
          </TouchableOpacity>
        </View>
       </View>
         <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={3}>
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
                     borderColor: "#274FA2",
                     borderRadius: 24
                 }}  >
             </Animated.View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {this.countUp(), this.addComment()}} key={2}>
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
                     borderColor: "#6F2C8F",
                     borderRadius: 24
                 }}  >
             </Animated.View>
         </TouchableOpacity>
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
            {/*<View >
               {this.state.comments.map((comment) => {
                   return <Comments key={comment.id} style={{ left: comment.right, color: comment.color }} />
               })}
            </View>*/}
          </View>
        );
    };
};

const styles = EStyleSheet.create({
    danceFloor: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      right: 50,
      top: 30,
      height: 350,
    },
    '@media (orientation: landscape)': {
        danceFloor: {
          width: '100%',
        }
      },
    middleDots: {
      display: "flex",
      bottom: 40,
      marginBottom: 100
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
    commentsContainer: {
      position:'absolute',
      bottom: 30,
      backgroundColor: 'transparent'
    },
    stepsContainer: {
      padding: 10,
      left: 55,
      marginTop: 30,
      marginBottom: 80,
    },
    '@media (orientation: landscape)': {
        stepsContainer: {
          width: '100%',
        }
      },
});
