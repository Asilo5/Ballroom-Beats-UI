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
        selectedDance: ''
    }
  }

  getSelectedDance = () =>{

    }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.dance}>Pick Your Dance Type</Text>
            <Text style={styles.dance}>{`${this.state.selectedDance}`}</Text>
                <Picker
                    mode="dropdown"
                    style={styles.picker}
                    iosIcon={<Icon name="arrowdown"></Icon>}
                    itemStyle={styles.picker_text}
                    selectedValue={this.state.selectedDance}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedDance: itemValue})} >
                    <Picker.Item label="-- Pick a Dance --" value="" />
                    <Picker.Item label="Waltz" value="Waltz" />
                    <Picker.Item label="Bachata" value="Bachata" />
                    <Picker.Item label="Swing" value="Swing" />
                </Picker>
                <Icon.Button
                    style={[styles.button, { backgroundColor: this.state.selectedDance ? '#A9C344' : '#545454'}]}
                    name="arrowright"
                    onPress={() => this.props.navigation.navigate('SongPick', {
                      selectedDance: `${this.state.selectedDance}`
                    })}
                    disabled={(this.state.selectedDance == '') ? true : false}
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
        borderColor: '#A9C344',
        borderWidth: 1,
        marginBottom: 20,
        height: 66,
        borderRadius: 3,
    },
    picker_text: {
        color: '#A9C344',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 30,
        height: 64,
    },
    button: {
        backgroundColor: '#A9C344',
        width: 130,
    },
    next: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default withNavigation(DanceType);
