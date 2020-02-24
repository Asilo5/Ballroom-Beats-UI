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
        />
      )
    }

    if (this.state.dance === "bachata") {
      return (
        <Bachata 
          start={this.props.start}
          style={styles.container1}
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
    height: '80%',
    flex: 1
  },
});
