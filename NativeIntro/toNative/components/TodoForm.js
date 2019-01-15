import React from 'react'
import { View, TextInput, Button } from 'react-native'

const TodoForm = props => {
    return (
        <View>
            <TextInput onChangeText={ props.handleChangeTitle } value={ props.title } placeholder='New Todo'/>
            <TextInput onChangeText={ props.handleChangePrice } value={ props.price } placeholder="Price" />
            <Button onPress={ props.handleAddTodo } title="Add Todo"/>
        </View>
    )
}

export default TodoForm