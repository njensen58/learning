import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0,
            errMsg: ""
        }
    }

    increment = () => {
        this.setState(prevState => ({ 
            counter: prevState.counter + 1 ,
            errMsg: prevState.errMsg !== "" ? "" : ""
        }))
    }

    decrement = () => {
        this.setState(p => ({ 
            counter: p.counter === 0 ? 0 : p.counter - 1,
            errMsg: p.counter === 0 ? "The counter cannot go below 0" : ""
        }))
    }

    render(){
        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">
                    The Counter is currently {this.state.counter}
                </h1>
                <p data-test="error-display">
                    {this.state.errMsg}
                </p>
                <button 
                    data-test="increment-button"
                    onClick={this.increment}>
                    Increment counter
                </button>
                <button 
                    data-test="decrement-button"
                    onClick={this.decrement}>
                    Decrement counter
                </button>
            </div>
        )
    }
}

export default App