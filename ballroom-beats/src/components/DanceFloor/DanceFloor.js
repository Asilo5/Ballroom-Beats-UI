import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
import Bachata from "../Dances/Bachata/Bachata.js";
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
    dance: "bachata"

  };

  chooseDance = () => {
    if (this.state.dance === "waltz") {
      return (
        <Waltz
        start={this.props.start}
        style={styles.container1}
        song={this.props.song}
        tempoMultiplier={this.props.tempoMultiplier}
        />
      )
    }

    if (this.state.dance === "bachata") {
      return (
        <Bachata
          start={this.props.start}
          style={styles.container1}
          song={this.props.song}
          tempoMultiplier={this.props.tempoMultiplier}
        />
      )
    }
  }

  render() {
    return (
      <>
        {this.chooseDance()}
      </>
    )
  }

}

const styles = StyleSheet.create({
  container1: {
    // display: "flex",
    // flex: 1,
    // flexDirection: "row",
    // backgroundColor: "#FFF",
    // alignItems: "center",
    // justifyContent: "space-around"
  },
});
