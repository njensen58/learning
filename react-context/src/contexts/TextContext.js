import React, { Component } from 'react';
export const TextContext = React.createContext({})

class TextProvider extends Component {
    state = {
        text: "hello world"
    }
    render(){
        return (
            <TextContext.Provider value={this.state}>
                { this.props.children }
            </TextContext.Provider>
        )
    }
}

export default TextProvider;
