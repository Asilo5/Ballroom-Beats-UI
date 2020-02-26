import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  ImageBackground
} from "react-native";

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
      60000/this.props.song.tempo
    )
  }

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
      ]
    }).flat();
  }

  countUp = () => {
    let newCount = this.state.counter
    newCount++
    this.setState({counter: newCount});
  }


  generateViews = () => {
    const colors = ["#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "#6F2C8F"]
      return (
        <View style={styles.danceFloor}>
          <View style={styles.upperSteps}>
            <TouchableOpacity onPress={() => {this.countUp()}} key={0}>
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
                <Text style={styles.bob}>Bob</Text>
              <Animated.View />
            </TouchableOpacity>
          <View style={styles.upperTwoSteps}>

              <TouchableOpacity onPress={() => {this.countUp()}} key={2}>
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
                <Animated.View />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {this.countUp()}} key={1}>
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
                <Animated.View />
              </TouchableOpacity>

             </View>
          </View>

          <View style={styles.lowerSteps}>
            <View style={styles.lowerTwoSteps}>
                <TouchableOpacity onPress={() => {this.countUp()}} key={4}>
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
                  <Animated.View />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.countUp()}} key={5}>
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
                      <Animated.View />
                </TouchableOpacity>
            </View>

             <TouchableOpacity onPress={() => {this.countUp()}} key={3}>
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
                  <Animated.View />
              </TouchableOpacity>
          </View>
        </View>
      )
  };

  render() {
    console.log('COUNTER', this.state.counter)
    return (
      <View style={styles.waltzComponent}>
        <View style={styles.stepsContainer}>
          {this.generateViews()}
        </View>
        <Text style={styles.points}>Your Points: {`${this.state.counter}`}</Text>
        <Text style={styles.points}>Possible Points: {`${Math.floor(this.getExpectedValue())}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  danceFloor: {
    display: "flex",
    flexDirection: "column",
    height: '60%',
    width: 400
  },
  upperSteps:{
    display: 'flex',
    flexDirection: "row",
    width: '80%',
    height: 100,
    justifyContent: 'space-between',
    marginBottom: 150,
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
    // marginTop: 25,
  },
  lowerTwoSteps:{
    display: 'flex',
    flexDirection: "row",
    // marginTop: 30,
  },
  stepsContainer: {
    padding: 20,
    left: 40,
    marginTop: 20,
    marginBottom: 60,
    height: 350
  },
  numberView: {
    backgroundColor: "#FFF",
    margin: 10,
  },
  points: {
    color: '#A9C344',
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  }
});
