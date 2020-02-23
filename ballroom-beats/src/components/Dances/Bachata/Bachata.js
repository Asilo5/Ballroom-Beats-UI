import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Bachata extends Component {
    state = {
      pulses: [
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1)
      ],
      counters: [
          0,
          0,
          0,
          0
      ]
    };
   

   generateTiming = () => {
     return this.state.pulses.map((pulse) => {
       return [
          Animated.timing(pulse, {
              toValue: 3,
              duration: 439,
              easing: Easing.back()
          }),
          Animated.timing(pulse, {
              toValue: 1,
              duration: 439
          })
       ]
     }).flat();
   };

   countUp = (num) => {
     const subCounterList = [...this.state.counters];
     subCounterList[num]++;
     this.setState({ counters: subCounterList });
   };


   generateViews = () => {
     const colours = ["#F60091", "#F6811F", "#FFEB00", "#71C043"];

     return (
       <View style={styles.danceFloor}>
         <TouchableOpacity onPress={() => {this.countUp(0)}} >
             <Animated.View
                 style={{
                     transform: [
                         {
                             scaleX: this.state.pulses[0]
                         },
                         {
                            scaleY: this.state.pulses[0]
                        }
                     ],
                     margin: 20,
                     borderWidth: 10,
                     borderColor: "#F60091",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {this.countUp(1)}} >
             <Animated.View
                 style={{
                     transform: [
                         {
                             scaleX: this.state.pulses[1]
                         },
                         {
                            scaleY: this.state.pulses[1]
                        }
                     ],
                     margin: 20,
                     borderWidth: 10,
                     borderColor: "#F6811F",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {this.countUp(2)}} >
             <Animated.View
                 style={{
                     transform: [
                         {
                             scaleX: this.state.pulses[2]
                         },
                         {
                            scaleY: this.state.pulses[2]
                        }
                     ],
                     margin: 20,
                     borderWidth: 10,
                     borderColor: "#FFEB00",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {this.countUp(3)}} >
             <Animated.View
                 style={{
                     transform: [
                         {
                             scaleX: this.state.pulses[3]
                         },
                         {
                            scaleY: this.state.pulses[3]
                        }
                     ],
                     margin: 20,
                     borderWidth: 10,
                     borderColor: "#71C043",
                     borderRadius: 10
                 }}  >
             </Animated.View>
         </TouchableOpacity>
       </View>
     )

   };

    render() {
        return (
          <View style={styles.bachataComponent}>
              <TouchableOpacity style={styles.start} onPress={() => this.props.start(this.generateTiming())}>
                  <Text style={styles.startText}>Start</Text>
              </TouchableOpacity>
              <View style={styles.stepsContainer}>
                  {this.generateViews()}
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    danceFloor: {
      display: "flex",
      flexDirection: "column",
    },
    upperSteps:{
      display: 'flex',
      flexDirection: "row",
      width: '70%',
      height: 100,
      justifyContent: 'space-between'
    },
    upperTwoSteps: {
      display: 'flex',
      flexDirection: "row",
    },
    lowerSteps:{
      display: 'flex',
      flexDirection: "row",
      width: '70%',
      justifyContent: 'space-between'
    },
    lowerTwoSteps:{
      display: 'flex',
      flexDirection: "row",
    },
    stepsContainer: {
      padding: 10,
      left: 55,
      marginTop: 60,
      marginBottom: 60
    },
    numberView: {
      backgroundColor: "#FFF",
      margin: 10,
    },
    startText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      padding: 20
    },
    start: {
      backgroundColor: '#1CE61C',
      margin: 40,
      width: '80%',
      left: 100,
      borderRadius: 50,
    }
  });

