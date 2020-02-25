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
    dance: ""

  };

  componentDidMount() {
    this.setState({dance: this.props.dance})
  }

  chooseDance = () => {
    if (this.state.dance.includes("Waltz")) {
      return (
        <Waltz
        start={this.props.start}
        style={styles.container1}
        song={this.props.song}
        stop={this.props.stop}
        />
      )
    }

    if (this.state.dance.includes("Bachata")) {
      return (
        <Bachata
          start={this.props.start}
          style={styles.container1}
          song={this.props.song}
          stop={this.props.stop}
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
