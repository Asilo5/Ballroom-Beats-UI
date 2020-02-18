import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class SongPick extends Component {
  constructor() {
    super()
    this.state={
        PickerSelectedSong : ''
    }
  }

      // method for taking value, passing down to songPick for what songs to display
  getSelectedPickerSong = () =>{
    
  }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.songPick}>Pick Your Song</Text>
            <Picker
                style={styles.picker}
                itemStyle={styles.picker_text}
                style={{height: 50, width: 110}}
                selectedValue={this.state.PickerSelectedVal}
                onValueChange={(itemValue, itemIndex) => 
                    this.setState({PickerSelectedVal: itemValue})} >
                <Picker.Item label="Song 1" value="Song 1" />
                <Picker.Item label="Song 2" value="Song 2" />
                <Picker.Item label="Song 3" value="Song 3" />
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
        color: 'white',
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    button1: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    next: {
        fontSize: 25,
    },
    button2: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    back: {
        fontSize: 25,
    }
});

export default withNavigation(SongPick);