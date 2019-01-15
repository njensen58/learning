import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends Component {
    state = {
        input: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            name: value
        })
    }

    render() {
        return (
            <div className="titleDiv">
                <h1>Hello World!</h1>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;
