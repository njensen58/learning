import React, { Component } from 'react'
import Signin from './Signin'
import Game from './Game'
import { Switch, Route } from 'react-router-dom'

import openSocket from 'socket.io-client'
import axios from 'axios';

export const socket = openSocket('http://localhost:6500')

class App extends Component {
    constructor(){
        super()
        this.state = {
            user: {}
        }
    }
    saveUserData = (user) => {
        // Save username, ID, and socket ID in user Obj.
        this.setState({
            user
        }, () => {
            const updatedSocket = {}
            if(!user.socketId ){
                updatedSocket.socketId = socket.io.engine.id
                axios.put(`/user/socket/${user._id}`, updatedSocket)
                    .then(res => {
                    localStorage.setItem("user", JSON.stringify(res.data))
                    console.log(res.data)
                })
            } 
        })
    }

    componentWillUnmount(){
      
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route 
                        exact path="/" 
                        render={props => 
                            <Signin 
                                {...props}  
                                user={this.state.user}
                                saveUserData={this.saveUserData}/>
                    }/>
                    <Route 
                        path="/game" 
                        render={props => 
                            <Game 
                                {...props}
                                user={this.state.user}
                                saveUserData={this.saveUserData}
                            />
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;
