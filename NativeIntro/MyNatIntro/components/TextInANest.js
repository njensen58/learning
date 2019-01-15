import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default class TextInANest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titleText: "Bird's Nest",
        bodyText: 'This is not really a bird nest.'
      };
    }
  
    render() {
      return (
        <Text style={{ fontWeight: 'bold' }}>
            <Text>First part and</Text>
            <Text>Second part</Text>
        </Text>
      );
    }
}
  
//   const styles = StyleSheet.create({
//     baseText: {
//       fontFamily: 'sans serif',
//     },
//     titleText: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//   });
  