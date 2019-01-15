import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount(){
        axios.get('https://picsum.photos/list').then(response => {
            console.log(response)
            this.setState({
                images: response.data
            })
        })
    } 

    render(){
        return (
            <div>
                { this.state.images.map((image) => 
                    <img 
                        src={image.post_url}
                        height={image.height}
                        width={image.width}/>)}
            </div>
        )
    }
}

export default App