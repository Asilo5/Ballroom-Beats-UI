import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Picker
} from 'react-native';
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

   render() {
      return (
          <View style={styles.container}>
            <Text style={styles.dance}>Pick Your Dance Type</Text>
                <Picker
                    mode="dropdown"
                    style={styles.picker}
                    iosIcon={<Icon name="arrowdown"></Icon>}
                    itemStyle={styles.picker_text}
                    selectedValue={this.state.selectedDance}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedDance: itemValue})} >
                    <Picker.Item label="-- Pick a Dance --" value="" />
                    <Picker.Item label="Waltz (Portrait)" value="Waltz" />
                    <Picker.Item label="Salsa (Portrait)" value="Salsa" />
                    <Picker.Item label="Bachata (Landscape)" value="Bachata" />
                </Picker>
                <Icon.Button
                    style={[styles.button, { backgroundColor: this.state.selectedDance ? '#A9C344' : '#3E3E3E'}]}
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
};

const AppNavigator = createStackNavigator({
    DanceType: {
      screen: DanceType,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666363',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dance: {
        fontSize: 35,
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
        height: 66,
        borderRadius: 3,
    },
    picker_text: {
        color: '#A9C344',
        fontWeight: 'bold',
        backgroundColor: '#39373A',
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
