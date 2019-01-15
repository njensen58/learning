import React, { Component } from 'react';
import axios from 'axios'
import {socket} from './App'

class Game extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        const {user} = this.props
        if(!user._id){
            if(localStorage.getItem("user")){
                const user = JSON.parse(localStorage.getItem("user"))
                this.props.saveUserData(user)
            }
        }
        // socket.on("game", data => {
        //     if(this.props.user.socketId !== socket.io.engine.id && socket.io.engine.id !== null){
        //         const updatedSocket = {}
        //         updatedSocket.socketId = socket.io.engine.id
        //         axios.put(`/user/socket/${user._id}`, updatedSocket)
        //         .then(res => {
        //             localStorage.setItem("user")
        //         })
        //     }
        // })
    }

    joinNewGame = () => {
        socket.emit("game", {
            user: this.props.user._id,
            socketId: socket.io.engine.id
        })
        // console.log(socket.io.engine.id)
    }

    render() {
        return (
            <div>
                <button onClick={ this.joinNewGame }>New Game</button>
            </div>
        );
    }
}

export default Game;
