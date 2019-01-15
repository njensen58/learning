import React from 'react'
import { Button, Alert, View } from 'react-native'

const Buttons = () => {
    return (
        <View style={{ height: 100, width: 100 }}>
            <Button 
                title='Click me'
                onPress={() => { Alert.alert('You tapped the button')}}
                color="violet"
            />
        </View>
    )
}

export default Buttons