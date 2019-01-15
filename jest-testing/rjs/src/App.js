import React, { Component } from 'react'
import getData from './fetch'

class App extends Component {
    constructor(){
        super()
        this.state = {
            answer: null
        }
    }

    fetch = () => getData().then(answer => this.setState({ answer }))

    render() {
        return (
            <div className="App">
                <div className="question">
                    <input type="text" />
                    <button type="submit" onClick={ this.fetch }>Ask to the Gods of the Internet!</button>
                </div>

                { this.state.answer && 
                    <div className="answer">
                        <h1>{this.state.answer.answer}</h1>
                        <img src={this.state.answer.image} alt=""/>
                    </div>
                }
            </div>
        );
    }
}

export default App


//https://yesno.wtf/api/