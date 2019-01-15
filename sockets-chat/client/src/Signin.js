import React, { Component } from 'react'
import axios from 'axios'

class Signin extends Component {
    constructor(){
        super()
        this.state = { username: '' }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        axios.post('/user/signin', this.state).then(res => {
            this.props.saveUserData(res.data)
            this.setState({username: ''})
            this.props.history.push('/game')
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                    placeholder="Username"/>
                <button>Sign in</button>
            </form>
        );
    }
}

export default Signin;
