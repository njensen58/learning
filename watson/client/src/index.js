import React from 'react'
import ReactDOM from 'react-dom'
import SpeechToTextV1 from 'watson-developer-cloud/speech-to-text/v1'
import curl from 'curl'
import axios from 'axios'

class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
     
    }

    render(){
        return (
            <div>
                <input type="file" accept="audio/*" capture/>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'))