import React, { Component } from 'react'
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import LoginForm from './components/LoginForm'
import Chatkit from '@pusher/chatkit'

import { tokenUrl, instanceLocator } from './config'

class App extends Component {
    constructor(){
        super()
        this.state = {
            roomId: null,
            userId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            currentUsers: [],
            errMsg: ''
        }
    }

    loginToChat = userId => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId,
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser
            console.log(currentUser.rooms[0])
            this.getRooms()
        }).catch(err => {
            console.log(err)
            this.setState({ userId: null, errMsg: "That Username does not exist" })
        })
        this.setState({ userId })
    }

    getRooms = () => {
        this.currentUser.getJoinableRooms().then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        }).catch(err => {
            console.log(err)
        })
    }

    getUsers = roomId => {
        const allRooms = [...this.state.joinedRooms, ...this.state.joinableRooms]
        const currentRoom = allRooms.filter(room => room.id === roomId)
        this.setState({
            currentUsers: [...currentRoom[0].userIds]
        })
    }

    subscribeToRoom = roomId => {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            messageLimit: 20, // default is 20, loads 20 newest messages
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                },
                onUserStartedTyping: user => {
                    /*render ou the users*/
                }
            }
        }).then(room => {
            this.setState({ roomId: room.id })
            this.getRooms()
        }).catch(err => {
            console.log(err)
        })
        this.getUsers( roomId )
    }

    sendMessage = text => {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    createRoom = name => {
        this.currentUser.createRoom({
            name,
        }).then(room => {
            this.subscribeToRoom( room.id )
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className="app">
                {!this.state.userId
                    ? <LoginForm
                        login={ this.loginToChat }
                        errMsg={ this.state.errMsg }/>
                    : <React.Fragment>
                            <RoomList
                                subscribeToRoom={ this.subscribeToRoom }
                                rooms={ [...this.state.joinableRooms, ...this.state.joinedRooms] }
                                roomId={ this.state.roomId }/>
                            <MessageList
                                messages={ this.state.messages }
                                roomId={ this.state.roomId }
                                users={ this.state.currentUsers }/>
                            <SendMessageForm
                                sendMessage={ this.sendMessage }
                                disabled={ !this.state.roomId }/>
                            <NewRoomForm createRoom={ this.createRoom }/>
                      </React.Fragment>
                }
            </div>
        )
    }
}

export default App
