import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const Display = props => {
    return (
        <View style={ styles.list }>
            <Text>{ props.text }</Text>
            <FlatList 
                data={ props.todos }
                renderItem={({item}) => <Text style={ styles.items } key={ item + '1' }>{item}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-evenly',
        flex: 1
    },
    items: {
        padding: 10,
        fontSize: 22,
        color: 'steelblue',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        width: 200,
        height: 50,
        alignItems: 'center'
    }
})


export default Display