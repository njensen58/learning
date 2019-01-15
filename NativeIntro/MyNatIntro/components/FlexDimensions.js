import React, { Component } from 'react'
import { View } from 'react-native'


export default class FlexDimensions extends Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'powderblue' }}/>
                <View style={{ height: 100, width: 100, backgroundColor: 'skyblue' }}/>
                <View style={{ height: 100, width: 100, backgroundColor: 'steelblue' }}/>
            </View>
        )
    }
}