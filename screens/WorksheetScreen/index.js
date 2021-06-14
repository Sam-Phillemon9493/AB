
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';

export default class WorksheetScreen extends Component {

   constructor(props) {
      super(props);
      this.state = {
      //Initial Value of slider
         rowSliderValue: 8,
         colSliderValue: 5,
         alphaSliderValue: 13,
         betaSliderValue: 10
      };
      
   }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >
         <View style={{ border: 1,  borderBottomWidth: 1, width: '100%', alignItems: "center"}}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, padding: 10, paddingTop:0}}> WORKSHEET </Text>
         </View>
         <View 
            style={{flexDirection: "row", width: '100%', display:"flex", justifyContent:"space-evenly", alignItems: "center",paddingTop:35}}
         >
            <Button style={styles.btn}  mode="contained" onPress={() => console.log('Pressed')}>
               /
            </Button>
            <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
               *
            </Button>
            <Button  style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
               +
            </Button>
            <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
               -
            </Button>
         </View>
        {/*Text to show slider value*/}
      <View style={{ paddingTop: 30 }}>
        <Text style={styles.headerText}>Row : {this.state.rowSliderValue}</Text>

        {/*Slider with max, min, step and initial value*/}

        <Slider
          maximumValue={20}
          minimumValue={2}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.rowSliderValue}
          onValueChange={(rowSliderValue) => this.setState({ rowSliderValue })}
          style={{ width: 300, height: 40 }}
        />

        <Text style={styles.headerText}>Column : {this.state.colSliderValue}</Text>

         <Slider
          maximumValue={8}
          minimumValue={2}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.colSliderValue}
          onValueChange={(colSliderValue) => this.setState({ colSliderValue })}
          style={{ width: 300, height: 40 }}
        />

        <Text style={styles.headerText}>Alpha : {this.state.alphaSliderValue}</Text>

         <Slider
          maximumValue={30}
          minimumValue={2}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.alphaSliderValue}
          onValueChange={(alphaSliderValue) => this.setState({ alphaSliderValue })}
          style={{ width: 300, height: 40 }}
        />

         <Text style={styles.headerText}>Beta : {this.state.betaSliderValue}</Text>

         <Slider
          maximumValue={20}
          minimumValue={2}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.betaSliderValue}
          onValueChange={(betaSliderValue) => this.setState({ betaSliderValue })}
          style={{ width: 300, height: 40 }}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    btn: {
       width: 40,
       height: 50,
       padding: 5,
      //  backgroundColor: "black"
      
    }

  });