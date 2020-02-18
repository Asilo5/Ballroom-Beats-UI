import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../Navbar/Navbar';

class DanceType extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.dance}>Pick Your Dance Type</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    itemStyle={styles.picker_text}
                    // style={{height: 30, width: 110}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => 
                        this.setState({PickerSelectedVal: itemValue})} >
                    <Picker.Item label="Beginner" value="Beginner" />
                    <Picker.Item label="Intermediate" value="Intermediate" />
                    <Picker.Item label="Advanced" value="Advanced" />
                </Picker>
            </View>
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
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
  },
    button: {
        backgroundColor: 'green',
        fontSize: 25,
    },
    next: {
        fontSize: 25,
    }
});

export default withNavigation(DanceType);