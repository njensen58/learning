import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            userId: '',
            newUserId: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.login( this.state.userId )
        this.setState({ userId: '' })
    }
    handleAddUser = e => {
        e.preventDefault()

    }
    render(){
        return (
            <div className="login-page">
                <div>
                    <h1>Already a User? Enter your Username below</h1>
                    <form onSubmit={ this.handleSubmit }>
                        <input
                            type="text"
                            onChange={ this.handleChange }
                            value={ this.state.userId }
                            name="userId"/>
                        <button>Login</button>
                    </form>
                    <h3>{ this.props.errMsg }</h3>
                </div>
                <div>
                    <h1>Create a New User</h1>
                        <form onSubmit={ this.handleAddUser }>
                            <input
                                type="text"
                                onChange={ this.handleChange }
                                value={ this.state.newUserId }
                                name="newUserId"/>
                            <button>Login</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;
