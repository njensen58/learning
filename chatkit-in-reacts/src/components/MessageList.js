import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends Component {
    // Checks to see if the users window should scroll to bottom on new message, or if they user has scrolled up to read messages.
    componentWillUpdate(){
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    // controls whether or not the page will scroll on new message
    componentDidUpdate(){
        if(this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render(){
        if(!this.props.roomId){
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                <div className="users">
                    <h6>Users</h6>
                    { this.props.users.map((user, i) => <span key={ user + i }> o { user } </span>)}
                </div>
                <div className="messages">
                    { this.props.messages.map((message, i) => <Message key={ i } { ...message }/>) }
                </div>
            </div>
        )
    }
}

export default MessageList
