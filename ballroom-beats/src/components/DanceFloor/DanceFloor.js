import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
import Bachata from "../Dances/Bachata/Bachata.js";
import Salsa from '../Dances/Salsa/Salsa.js';
import {
  StyleSheet,
  ImageBackground
} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

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

    if (this.state.dance.includes("Salsa")) {
      return (
        <Salsa
        start={this.props.start}
        style={styles.container1}
        song={this.props.song}
        stopDance={this.props.stopDance}
        stopMusic={this.props.stopMusic}
        />
      )
    }
  };

  chooseBackground = () => {
    if (this.state.dance.includes("Waltz") || (this.state.dance.includes("Salsa")) {
      return (
        <>
          <ImageBackground source={require('../../../images/stage_lights_blue.png/')} style={styles.backgroundImage1}>
          <ImageBackground source={require('../../../images/wood_floor.png/')}
          style={styles.backgroundImage2}>
            {this.chooseDance()}
          </ImageBackground>
          </ImageBackground>
        </>
      )
    }

    if (this.state.dance.includes("Bachata")) {
      return (
        <ImageBackground source={require('../../../images/stage_lights_blue.png/')} style={styles.backgroundImage3}>
        {this.chooseDance()}
        </ImageBackground>
      )
    }
  }

  render() {
    return (
      <>
        {this.chooseBackground()}
      </>
    )
  }
};

const styles = EStyleSheet.create({
  backgroundImage1: {
    flex: 1,
    width: null,
    height: '95%',
  },
  '@media (orientation: landscape)': {
    backgroundImage1: {
      // flex: 1,
      width: 650,
      // resizeMode : 'stretch',
    }
  },
  backgroundImage2: {
    flex: 2,
    width: null,
    height: '100%',
  },
  '@media (orientation: landscape)': {
    backgroundImage2: {
      // flex: 2,
      width: 650,
      // resizeMode : 'stretch',
    }
  },
  backgroundImage3: {
    width: '95%',
    height: '100%',
    top: 75,
    // bottom: 60,
  },
});
