import React, { Component } from 'react';
import ListContainer from './ListContainer';
import TextProvider from './contexts/TextContext';

class App extends Component {
    render(){
        return (
            <TextProvider>
                <ListContainer />
            </TextProvider>
        )
    }
}

export default App;
