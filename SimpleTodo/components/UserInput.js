import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native'

const UserInput = props => {
    return(
        <View>
        <TextInput onChangeText={ props.handleChangeText } value={ props.value } />
        {/* <TextInput onChangeText={ props.handleSubText } value={ props.subValue }/>  */}
        <Button 
            onPress={props.handleAddTodo } 
            title="Add Todo"/>
        </View>
    )
}

export default UserInput