import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
// import Salsa from "../Dances/Salsa/Salsa.js"
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";


export default class DanceFloor extends Component {
  state = {
    dance: "waltz"

  };

  chooseDance = () => {
    if (this.state.dance === "waltz") {
      return (
        <Waltz
        start={this.props.start}
        />
      )
    }

    // if (this.state.dance === "salsa") {
    //   return (
    //     <Salsa />
    //   )
    // }
  }

  render() {
    return (
      (chooseDance())
    }

const styles = StyleSheet.create({
  container1: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around"
  },
  numberView: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  }
});
