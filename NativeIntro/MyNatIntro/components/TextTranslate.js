import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class TextTranslate extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    handleText = text => {
        console.log(text)
        this.setState({ text: text })
    }

    render(){
        return (
            <View>
                <TextInput onChangeText={ this.handleText }/>
                <Text>
                    { this.state.text.toUpperCase().split(' ').reverse().join(' ') }
                </Text>
            </View>
        )
    }
}

export default TextTranslate