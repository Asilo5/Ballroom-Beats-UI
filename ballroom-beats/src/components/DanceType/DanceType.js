import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class DanceType extends Component {
  constructor() {
    super()
    this.state= {
        PickerSelectedDance : ''
    }
  }
    // method for taking value, passing down to songPick for what songs to display
    getSelectedPickerDance = () =>{
    
    }
// Lets try not to use redux. Instead pass dance type to song pick to measure the difficulty of song that is available
  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.dance}>Pick Your Dance Type</Text>
                <Picker
                    mode="dropdown"
                    style={styles.picker}
                    iosIcon={<Icon name="arrowdown"></Icon>}
                    itemStyle={styles.picker_text}
                    selectedValue={this.state.PickerSelectedDance}
                    onValueChange={(itemValue, itemIndex) => 
                        this.setState({PickerSelectedDance: itemValue})} >
                    <Picker.Item label="-- Pick a Dance --" value="" />
                    <Picker.Item label="Beginner: Waltz" value="Waltz" />
                    <Picker.Item label="Intermediate: Bachata" value="Bachata" />
                    <Picker.Item label="Advanced: Swing" value="Swing" />
                </Picker>
                <Icon.Button 
                    style={styles.button} 
                    name="arrowright" 
                    onPress={() => this.props.navigation.navigate('SongPick')} 
                    title="NEXT">
                    <Text style={styles.next}>Next</Text>
                </Icon.Button>
            <Navbar />
          </View>
      )      
  }
} 

const AppNavigator = createStackNavigator({
    DanceType: {
      screen: DanceType,
    },
});
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dance: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    picker: {
        width: 350,
        borderColor: 'lime',
        borderWidth: 1,
        marginBottom: 20,
        height: 66,
        borderRadius: 3,
    },
    picker_text: {
        color: 'lime',
        fontWeight: 'bold',
        backgroundColor: '#39373A',
        fontSize: 30,
        height: 64,
    },
    button: {
        backgroundColor: '#32CD32',
        width: 130,
    },
    next: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default withNavigation(DanceType);