import React, { Component } from 'react'
import { Text } from 'react-native'

class MyAppText extends Component {
    render(){
        return (
            <Text 
                style={{
                    fontSize: 20,
                    fontWeight: "300",
                    color: 'blue'
                }}>
                { this.props.children }
            </Text>
        )
    }
}

export default MyAppText