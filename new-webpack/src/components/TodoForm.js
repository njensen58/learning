import React, { Component } from 'react'
import { connect } from 'react-redux'
import{ addTodo } from '../redux'

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
            completed: false
        }
    }

    handleChange = e => {
        e.target.name === "completed" ?
            this.setState(prevState => ({
                    completed: !prevState.completed      
            }))
        :
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo( this.state )
    }

    render(){
        return (
            <form>
                <input onChange={ this.handleChange } name="title" value={ this.state.title }/>
                <input onChange={ this.handleChange } name="description" value={ this.state.description }/>
                <input onChange={ this.handleChange } name="imgUrl" value={ this.state.imgUrl }/>
                <input type="checkbox" onChange={ this.handleChange } name="completed" value={ this.state.completed }/>
                <button onClick={ this.handleSubmit }>Add Todo</button>
            </form>
        )
    }
}

export default connect(state=>state, { addTodo })(TodoForm)