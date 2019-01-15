import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TextInANest from './components/TextInANest.js'
import MyAppText from './styles/MyAppText.js'
import FlexDimensions from './components/FlexDimensions.js'
import TextTranslate from './components/TextTranslate.js'
import Buttons from './components/Buttons.js'

export default class App extends React.Component {
  render() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text>Enter some Text</Text>
          <Buttons />
        </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding: 40
//   },
// });

/* <MyAppText>
            Hello World!
        </MyAppText>
        <TextInANest /> */