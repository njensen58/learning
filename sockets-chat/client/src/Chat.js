import React, { Component } from 'react'
import openSocket from 'socket.io-client';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'


const socket = openSocket('http://localhost:6500')


class Chat extends Component {
    constructor(){
        super()
        this.state = {
            handle: '',
            message: '',
            messages: [],
            typing: '',
            users: []
        }
    }

    componentDidMount(){
        
        socket.on("chat", data => {
            console.log(socket.io.engine.id)
            // Save socket ID in game object
            // axios.put('/user/socket/')
            this.setState(p => ({ messages: [...p.messages, data.message], typing: ''}))
        })
        // socket.on("typing", data => {
        //     this.setState({ typing: data })
        // })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
        if(name === "message"){
            socket.emit("typing", {value, handle: this.state.handle })
        }
    }
    
    handleSubmit = () => {
        // What to call the item - what you are sending
        socket.emit("chat", {
            message: this.state.message,
            handle: this. state.handle,
            userId: socket.id
        })
        this.setState({ message: '' })
    }

    render() {
        const {handle, message, typing } = this.state
        return (
            <div>
                <div id="mario-chat">
                    <div id="chat-window">
                        <div id="output">
                            { this.state.messages.map((m, i) => <p key={m + i}>{m}</p>)}
                        </div>
                        <div id="feedback">
                            <p style={{fontStyle: "italic"}}> 
                                { this.state.typing  &&
                                    `${typing.handle} is typing a message...`
                                }
                            </p>
                        </div>
                        <div id="inputs">
                            <input 
                                type="text" 
                                name="handle" 
                                onChange={this.handleChange} 
                                value={handle} 
                                placeholder="Handle"/>
                            <input 
                                type="text" 
                                name="message" 
                                onChange={this.handleChange} 
                                value={message} 
                                placeholder="Message"/>
                            <button onClick={this.handleSubmit}>Send</button>
                        </div>
                    </div>
                </div>
                {/* <div id="current-users">
                {   
                    this.state.users.map(user => {
                        return <p>{user.handle}</p>
                    })
                }
                </div> */}
            </div>
        )
    }
}

export default Chat;