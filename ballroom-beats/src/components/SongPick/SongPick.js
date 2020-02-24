import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';
import { getData } from '../../apiCalls.js'

class SongPick extends Component {
  constructor() {
    super()
    this.state={
<<<<<<< HEAD
        songList: [],
        selectedSong : '',
        tempoMultiplier: ""
    }
  }

  async componentDidMount() {
    const songList = await getData('https://ballroom-blitz.herokuapp.com/api/v1/songs', 'songs')
    this.setState({allSongs: {songList}})
  }

  findSong = () => {
    return songList.find(song => {
      return song.title === this.state.selectedSong
    })
  }

  getSelectedTempo = () => {
    if (this.props.selectedDance.includes("Advanced")) {
      this.setState({tempoMultiplier: 2})
    }

    if (this.props.selectedDance.includes("Beginner")) {
      this.setState({tempoMultiplier: 1})
=======
        selectedSong: ''
>>>>>>> master
    }
  }

      // method for taking value, passing down to songPick for what songs to display
  getSelectedSongs = () => {
    if (this.props.selectedDance.includes("Waltz")) {
      return (
        <>
          <Picker.Item label="Beyond The Sea" value="Beyond The Sea" />
          <Picker.Item label="Games of Thrones" value="Game of Thrones" />
        </>

      )
    }

    if (this.props.selectedDance.includes("Swing")) {
      return (
        <>
          <Picker.Item label="Jump Jive an’ Wail" value="Jump Jive an’ Wail" />
          <Picker.Item label="Be My Baby" value="Be My Baby" />
        </>

      )
    }

    if (this.props.selectedDance.includes("Bachata")) {
      return (
        <>
          <Picker.Item label="Deja Vu" value="Deja Vu" />
          <Picker.Item label="Blinding Lights" value="Blinding Lights" />
        </>

      )
    }
  }



  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.songPick}>Pick Your Song</Text>
            <Picker
                style={styles.picker}
                itemStyle={styles.picker_text}
                selectedValue={this.state.selectedSong}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedSong: itemValue})} >
                <Picker.Item label="-- Pick a Song --" value="" />
                {this.getSelectedSongs()}
            </Picker>
            <View style={styles.btnContainer}>
                <Icon.Button
                    style={styles.button1}
                    name="arrowleft"
                    onPress={() => this.props.navigation.navigate('DanceType')}
                    title="BACK">
                    <Text style={styles.back}>Back</Text>
                </Icon.Button>
                <Icon.Button
                    style={[styles.button2, { backgroundColor: this.state.selectedSong ? '#32CD32' : '#545454'}]}
                    name="arrowright"
                    onPress={() => this.props.navigation.navigate('Loader', {song: this.findSong(), tempoMultiplier: this.state.tempoMultiplier})}
                    disabled={(this.state.selectedSong == '') ? true : false}
                    title="NEXT">
                    <Text style={styles.next}>Next</Text>
                </Icon.Button>
            </View>
            <Navbar />
          </View>
      )
  }
};

const AppNavigator = createStackNavigator({
    SongPick: {
      screen: SongPick,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    songPick: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    picker: {
        width: 340,
        borderColor: 'lime',
        borderWidth: 1,
        marginBottom: 20,
        height: 75,
    },
    picker_text: {
        color: 'lime',
        fontWeight: 'bold',
        backgroundColor: '#39373A',
        fontSize: 30,
        height: 73,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    button1: {
        backgroundColor: '#32CD32',
        fontSize: 25,
    },
    next: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button2: {
        fontSize: 25,
    },
    back: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default withNavigation(SongPick);
