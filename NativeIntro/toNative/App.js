import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import Display from './components/Display'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            price: '',
            todos: []
        }
    }

    handleChangeTitle = title => {
        this.setState({ title })
    }

    handleChangePrice = price => {
        this.setState({ price })
    }
    
    handleAddTodo = () => {
        const newTodo = { title: this.state.title, price: this.state.price }
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
            title: '',
            price: ''
        }))
    }
    
    render(){
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }> My Todo App 
                </Text>
                <TodoForm 
                    handleChangeTitle={ this.handleChangeTitle } 
                    handleChangePrice={ this.handleChangePrice }
                    handleAddTodo={ this.handleAddTodo } 
                    title={ this.state.title }
                    price={ this.state.price }/>
                <Display todos={ this.state.todos }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 40
    }
})

export default App