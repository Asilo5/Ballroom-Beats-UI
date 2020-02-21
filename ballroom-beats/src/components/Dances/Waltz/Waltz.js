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
    const subCounterList = [...this.state.counters];

    subCounterList[num]++;

    this.setState({counters: subCounterList});
  }


  // generateNumberCounts = () => {
  //   return this.state.counters.map((counter, i) => {
  //     return (
  //       <Text key={i} style={styles.startText}>{counter.toString()}</Text>
  //     )
  //   })
  // }

  generateNumberCounts = () => {
      return (
        <>
          <Text key={0} style={styles.startText}>{this.state.counters[0].toString()}</Text>
          <Text key={1} style={styles.startText}>{this.state.counters[1].toString()}</Text>
          <Text key={2} style={styles.startText}>{this.state.counters[2].toString()}</Text>
          <Text key={3} style={styles.startText}>{this.state.counters[3].toString()}</Text>
          <Text key={4} style={styles.startText}>{this.state.counters[4].toString()}</Text>
          <Text key={5} style={styles.startText}>{this.state.counters[5].toString()}</Text>
        </>
      )

  }

  // generateViews = () => {
  //   const colors = ["#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "#6F2C8F"]
  //   return this.state.counters.map((counter, i) => {
  //     return (
  //       <TouchableOpacity onPress={() => {this.countUp(i)}} key={i}>
  //         <Animated.View
  //           style={{
  //             transform: [
  //               {
  //                 scaleX: this.state.pulses[i]
  //               },
  //               {
  //                 scaleY: this.state.pulses[i]
  //               }
  //             ],
  //             margin: 20,
  //             borderWidth: 10,
  //             borderColor: `${colors[i]}`,
  //             borderRadius: 10,
  //           }}
  //         />
  //         <Animated.View />
  //       </TouchableOpacity>
  //     )
  //   })
  // }

  generateViews = () => {
    const colors = ["#F60091", "#F6811F", "#FFEB00", "#71C043", "#03ABF0", "#6F2C8F"]

      return (
        <>
        <TouchableOpacity onPress={() => {this.countUp(0)}} key={0}>
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
              borderColor: "#F60091",
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.countUp(1)}} key={1}>
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
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.countUp(2)}} key={2}>
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
              borderColor: "#FFEB00",
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.countUp(3)}} key={3}>
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
              borderColor: "#71C043",
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.countUp(4)}} key={4}>
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
              borderColor: "#03ABF0",
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.countUp(5)}} key={5}>
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
              borderColor: "#6F2C8F",
              borderRadius: 10,
            }}
          />
          <Animated.View />
        </TouchableOpacity>
        </>
      )

  }

  render() {
    return (
      <View style={styles.waltzComponent}>
        <TouchableOpacity
          style={styles.start}
          onPress={()=> this.props.start(this.generateTiming())}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
        {/* <View style={styles.numberView}>
          {this.generateNumberCounts()}
        </View> */}
        <ImageBackground source={'https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} style={styles.stepsContainer}>
          {this.generateViews()}
        </ImageBackground> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  numberView: {
    backgroundColor: "#FFF",
    margin: 10,
  },
  startText: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  },
  start: {
    backgroundColor: '#1CE61C',
    color: '#ffff',
    margin: 30,
    width: '80%',
    borderRadius: 50
  }
});
