import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false,
            text: "Hello",
            img: 'https://images.unsplash.com/photo-1540153448870-af780343526e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=156b02ddcd899f8e70270bf6c4f57932&auto=format&fit=crop&w=1650&q=80'
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    render(){
        return (
            <div>
                {this.state.isToggled && 
                    <div>
                        <h1 className="title">{ this.state.text}</h1> 
                        <img src={this.state.img} alt="" width={400}/>
                    </div>
                }
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
}

export default App