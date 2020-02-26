import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
import Bachata from "../Dances/Bachata/Bachata.js";
import {
  StyleSheet,
  ImageBackground
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
        />
      )
    }

    if (this.state.dance.includes("Bachata")) {
      return (
        <Bachata
          start={this.props.start}
          style={styles.container1}
          song={this.props.song}
        />
      )
    }
  }

  render() {
    return (
      <>
        <ImageBackground source={require('../../../images/wood_floor.png/')} style={styles.backgroundImage}>
        {/* <ImageBackground source={require('../../../images/lights.png/')} style={styles.backgroundImage}> */}
          {this.chooseDance()}
        </ImageBackground>
      </>
    )
  }

}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: '90%',
    // opacity: 0.7
  },
});
