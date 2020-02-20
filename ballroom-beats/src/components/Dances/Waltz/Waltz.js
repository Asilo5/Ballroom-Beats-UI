import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
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

    counters: [
      0,
      0,
      0,
      0,
      0,
      0,
    ]


  };

  // _start = () => {
  //   Animated.loop(
  //     Animated.sequence(this.generateTiming()), {iterations: -1, useNativeDriver: true}).start();
  // };

  generateTiming = () => {
    return this.state.pulses.map(pulse => {
      return [
        Animated.timing(pulse, {
          toValue: 3,
          duration: 439.61519,
          easing: Easing.back()
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 439.61519,
        })
      ]
    }).flat();
  }

  countUp = (num) => {
    const subCounterList = [...this.state.counters]

    subCounterList[num]++

    this.setState({counters: subCounterList})
  }


  generateNumberCounts = () => {
    return this.state.counters.map((counter, i) => {
      return (
        <Text key={i} style={styles.text}>{counter.toString()}</Text>
      )
    })
  }

  generateViews = () => {
    const colors = ["#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "#6F2C8F"]
    return this.state.counters.map((counter, i) => {
      return (
        <TouchableOpacity onPress={() => {this.countUp(i)}} key={i}>
          <Animated.View
            style={{
              transform: [
                {
                  scaleX: this.state.pulses[i]
                },
                {
                  scaleY: this.state.pulses[i]
                }
              ],
              margin: 20,
              borderWidth: 10,
              borderColor: `${colors[i]}`,
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <>
        <TouchableOpacity
          style={styles.start}
          onPress={()=> this.props.start(this.generateTiming())}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <View style={styles.numberView}>
          {this.generateNumberCounts()}
        </View>
        <View style={styles.stepsContainer}>
          {this.generateViews()}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  stepsContainer: {
    display: "flex",
    flex: 5,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  numberView: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  },
  start: {
    fontSize: 40,
    backgroundColor: "green",
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
