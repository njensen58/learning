import React, { Component } from 'react'

class SendMessageForm extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.sendMessage( this.state.message )
        this.setState({ message: '' })
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit } className="send-message-form">
                <input
                    type="text"
                    placeholder="Type your message and hit ENTER"
                    onChange={ this.handleChange }
                    name="message"
                    value={ this.state.message }
                    disabled={ this.props.disabled }/>
            </form>
        )
    }
}

export default SendMessageForm;
