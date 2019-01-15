import { Component } from 'react'

class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = { isToggled: props.isToggled || false }
    }
    toggle = () => this.setState(p => ({ isToggled: !p.isToggled }))
    render(){
        return this.props.render({
            isToggled: this.state.isToggled,
            toggle: this.toggle
        })
    }
}

export default Toggle