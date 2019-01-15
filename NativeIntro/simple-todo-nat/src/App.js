import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import Display from './components/Display'

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            price: '',
            todos: []
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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

        const styles = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }

        return (
            <div style={ styles }>
                <h1> My Todo App </h1>
                <TodoForm 
                    handleChange={ this.handleChange } 
                    handleAddTodo={ this.handleAddTodo } 
                    title={ this.state.title }
                    price={ this.state.price }/>
                <Display todos={ this.state.todos }/>
            </div>
        )
    }
}

export default App