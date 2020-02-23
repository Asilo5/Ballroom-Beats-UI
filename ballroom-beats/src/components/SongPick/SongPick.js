import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class SongPick extends Component {
  constructor() {
    super()
    this.state={
        selectedSong : ''
    }
  }

      // method for taking value, passing down to songPick for what songs to display
  getSelectedSong = () =>{
    
  }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.songPick}>Pick Your Song</Text>
            <Picker
                style={styles.picker}
                itemStyle={styles.picker_text}
                selectedValue={this.state.PickerSelectedVal}
                onValueChange={(itemValue) => 
                    this.setState({PickerSelectedVal: itemValue})} >
                <Picker.Item label="-- Pick a Song --" value="" />
                <Picker.Item label="Beyond The Sea" value="Beyond The Sea" />
                <Picker.Item label="Be My Baby" value="Be My Baby by Leslie Grace" />
                <Picker.Item label="Jump Jive an’ Wail" value="Jump Jive an’ Wail" />
            </Picker>
            <View style={styles.btnContainer}>
                <Icon.Button style={styles.button1} 
                    name="arrowleft" 
                    onPress={() => this.props.navigation.navigate('DanceType')} 
                    title="BACK">
                    <Text style={styles.back}>Back</Text>
                </Icon.Button>
                <Icon.Button style={styles.button2} 
                    name="arrowright" 
                    onPress={() => this.props.navigation.navigate('Loader')} 
                    title="NEXT">
                    <Text style={styles.next}>Next</Text>
                </Icon.Button>
            </View>
            <Navbar />
          </View>
      )      
  }
} 

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
        width: 350,
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
        width: '60%',
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
        backgroundColor: '#32CD32',
        fontSize: 25,
    },
    back: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default withNavigation(SongPick);