import React from 'react'
import Todo from './Todo'
import { View } from 'react-native'


const Display = props => {
    return (
        <View>
            { props.todos.map( todo => <Todo {...todo}/> ) }
        </View>
    )
}




export default Display