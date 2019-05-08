import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import io from "socket.io-client"

let games = io.connect("http://localhost:7000/games")

class App extends Component {
    state = {}
    componentDidMount(){
        games.on("welcome", msg => {
            console.log("RECEIVED: " + msg)
        })
    }
    render(){
        return (
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

