import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import Comments from "../../Comments/Comments";
import EStyleSheet from 'react-native-extended-stylesheet';

const randomiseNumber = (min, max) => {
   return Math.random() * (min - max) + min;
};
export default class Waltz extends Component {
  state = {
    pulses: [
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
    ],
    comments: [],
    commentCount: 1,
    counter: 0
  };

  pulse1;
  pulse2;
  pulse3;
  pulse4;
  pulse5;
  pulse6;

  listeners = [this.pulse1, this.pulse2, this.pulse3, this.pulse4, this.pulse5, this.pulse6]

  componentDidMount() {
    this.props.start(this.generateTiming())
    this.generateListeners()
    this.props.stopMusic(this.getSongLength())
  };

  endGame = (userPoints, gamePoints) => {
      this.props.stopDance(userPoints, gamePoints)
  };

  componentWillUnmount() {
    this.endGame(this.state.counter, this.getExpectedValue())
    this.removeListeners()
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
      120000/this.props.song.tempo
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

  generateTiming = () => {
    return this.state.pulses.map(pulse => {
      return [
        Animated.timing(pulse, {
          toValue: 3,
          duration: (this.assessPulseDuration() * 1/5),
          easing: Easing.elastic(1),
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: (this.assessPulseDuration() * 4/5),
        })
      ]
    }).flat();
  };

  countUp = () => {
    let newCount = this.state.counter
    newCount++
    this.setState({counter: newCount});
  };

  registerCount = (i) => {
    if (this.listeners[i] > 1) {
      this.countUp()
      this.addComment()
    }
  }

  generateViews = () => {
      return (
        <View style={styles.danceFloor}>
          <View style={styles.upperSteps}>
            <TouchableOpacity onPress={() => {this.registerCount(0)}} key={0}>
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
                  borderRadius: 24,
                }}
              />
                <Text style={styles.footingPosition}>Left</Text>
              <Animated.View />
            </TouchableOpacity>
          <View style={styles.upperTwoSteps}>
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
                    borderColor: "#FFEB00",
                    borderRadius: 24,
                  }}
                />
                  <Text style={styles.footingPosition}>Left</Text>
                <Animated.View />
              </TouchableOpacity>
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
                    borderColor: "#F6811F",
                    borderRadius: 24,
                  }}
                />
                  <Text style={styles.footingPosition}>Right</Text>
                <Animated.View />
              </TouchableOpacity>
             </View>
          </View>
          <View style={styles.lowerSteps}>
            <View style={styles.lowerTwoSteps}>
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
                      borderRadius: 24,
                    }}
                  />
                    <Text style={styles.footingPosition}>Left</Text>
                  <Animated.View />
                </TouchableOpacity>
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
                          borderWidth:24,
                          borderColor: "#6F2C8F",
                          borderRadius:24,
                        }}
                      />
                        <Text style={styles.footingPosition}>Right</Text>
                      <Animated.View />
                </TouchableOpacity>
            </View>
             <TouchableOpacity onPress={() => {this.registerCount(3)}} key={3}>
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
                      borderColor: "#71C043",
                      borderRadius: 24,
                    }}
                  />
                    <Text style={styles.footingPosition}>Right</Text>
                  <Animated.View />
              </TouchableOpacity>
          </View>
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
        <Text style={styles.userPoints}>Your Points: {`${this.state.counter}`}</Text>
        <Text style={styles.possiblePoints}>Possible Points: {`${Math.floor(this.getExpectedValue())}`}</Text>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  danceFloor: {
    display: "flex",
    flexDirection: "column",
    height: '60%',
    width: 400,
    top: 30
  },
  '@media (orientation: landscape)': {
    danceFloor: {
      width: '100%',
      flex: 1,
    }
  },
  upperSteps:{
    display: 'flex',
    flexDirection: "row",
    width: '80%',
    height: 100,
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  upperTwoSteps: {
    display: 'flex',
    flexDirection: "row",
  },
  lowerSteps:{
    display: 'flex',
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-between',
  },
  lowerTwoSteps:{
    display: 'flex',
    flexDirection: "row",
  },
  stepsContainer: {
    padding: 20,
    left: 40,
    marginTop: 20,
    marginBottom: 60,
    height: 300
  },
  '@media (orientation: landscape)': {
    stepsContainer: {
      width: '100%',
    }
  },
  footingPosition: {
    color: 'white',
    fontSize: 20,
    left: 24
  },
  commentsContainer: {
    position:'absolute',
    bottom: 30,
    backgroundColor: 'transparent'
  },
  userPoints: {
    color: '#A9C344',
    // textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: '#000',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 85
  },
  possiblePoints: {
    color: '#A9C344',
    // textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: '#000',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  }
});
