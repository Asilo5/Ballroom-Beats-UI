import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';
import { getData } from '../../../apiCalls.js'

class SongPick extends Component {
  constructor(props) {
    super(props)
    this.state= {
        allSongs: [],
        selectedSong: '',
    }
  }

  async componentDidMount() {
    const songList = await getData('https://ballroom-blitz.herokuapp.com/api/v1/songs', 'songs')
    const songData = await songList.data
    this.setState({allSongs: songData})
  }

  findSong = () => {
    return this.state.allSongs.find(song => {
      return song.title === this.state.selectedSong
    })
  }

  getSelectedSongs = () => {
    if (this.props.navigation.getParam('selectedDance', '') === "Waltz") {
      return [
        <Picker.Item label="-- Pick a Song --" value="" />,
        <Picker.Item label="Beyond The Sea - Beginner" value="Beyond the Sea" />,
        <Picker.Item label="Games of Thrones - Advanced" value="Game of Thrones" />
      ]
    }

    if (this.props.navigation.getParam('selectedDance', '') === "Swing") {
      return [
        <Picker.Item label="-- Pick a Song --" value="" />,
        <Picker.Item label="Build Me Up Buttercup - Beginner" value="Build Me Up Buttercup" />,
        <Picker.Item label="Be My Baby - Advanced" value="Be My Baby" />
      ]
    }

    if (this.props.navigation.getParam('selectedDance', '') === "Bachata") {
      return [
        <Picker.Item label="-- Pick a Song --" value="" />,
        <Picker.Item label="Deja Vu - Beginner" value="Deja Vu" />,
        <Picker.Item label="Melancolia Tropical - Advanced" value="Melancolia Tropical" />
      ]
    }
  }



  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.songPick}>Pick Your Song</Text>
            <Picker
                mode="dropdown"
                style={styles.picker}
                itemStyle={styles.picker_text}
                selectedValue={this.state.selectedSong}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedSong: itemValue})} >
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
                    style={[styles.button2, { backgroundColor: this.state.selectedSong ? '#A9C344' : '#3E3E3E'}]}
                    name="arrowright"
                    onPress={() => this.props.navigation.navigate('Loader', {song: this.findSong(), dance: this.props.navigation.getParam('selectedDance', '')})}
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
        backgroundColor: '#666363',
        alignItems: 'center',
        justifyContent: 'center',
    },
    songPick: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
        marginBottom: 10,
    },
    picker: {
        width: 350,
        borderColor: '#A9C344',
        borderWidth: 1,
        marginBottom: 10,
        height: 75,
    },
    picker_text: {
        color: '#A9C344',
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
        backgroundColor: '#A9C344',
        fontSize: 25,
        color: 'white'
    },
    next: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button2: {
        backgroundColor: '#A9C344',
        fontSize: 25,
        color: 'white'
    },
    back: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default withNavigation(SongPick);
