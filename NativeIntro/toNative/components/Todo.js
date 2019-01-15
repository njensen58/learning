import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Todo = props => {
    return (
         <View style={ styles.item } key={props.title}>
            <Text>Todo: { props.title }</Text>
            <Text>Price: { props.price }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        borderRadius: 10,
        margin: 5
    }
})

export default Todo