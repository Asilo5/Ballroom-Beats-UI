import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
import Bachata from "../Dances/Bachata/Bachata.js";
import {
  StyleSheet,
  ImageBackground, 
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get('screen')

export default class DanceFloor extends Component {
  state = {
    dance: ""
  };

  componentDidMount() {
    this.setState({dance: this.props.dance})
  };

  chooseDance = () => {
    if (this.state.dance.includes("Waltz")) {
      return (
        <Waltz
        start={this.props.start}
        style={styles.container1}
        song={this.props.song}
        stopDance={this.props.stopDance}
        stopMusic={this.props.stopMusic}
        />
      )
    }

    if (this.state.dance.includes("Bachata")) {
      return (
        <Bachata
          start={this.props.start}
          style={styles.container1}
          song={this.props.song}
          stopDance={this.props.stopDance}
          stopMusic={this.props.stopMusic}
        />
      )
    }
  };

  render() {
    return (
      <>
        <ImageBackground source={require('../../../images/stage_lights_blue.png/')} style={styles.backgroundImage1}>
        <ImageBackground source={require('../../../images/wood_floor.png/')} style={styles.backgroundImage2}>
          {this.chooseDance()}
        </ImageBackground>
        </ImageBackground>
      </>
    )
  }
};

const styles = StyleSheet.create({
  backgroundImage1: {
    flex: 1,
    width: width,
    height: height,
  },
  backgroundImage2: {
    flex: 2,
    width: width,
    height: height,
  },
});
