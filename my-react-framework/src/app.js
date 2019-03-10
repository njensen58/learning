//////////////////////////////////////////////////////////
// Get stateless components and native elements to work //

    // const Hello = function(){
    //     return React.createElement('div', null, "Hello World")
    // }

    // const helloWorld = React.createElement(Hello, null, null)
    // const helloWorld2 = React.createElement(Hello, null, null)
    // const regularDiv = React.createElement('div', null, `I'm just a regular div`)

    // const parent = React.createElement('div', null,
    //     helloWorld,
    //     helloWorld2,
    //     regularDiv,
    //     `I'm just a text`
    // )

//////////////////////////////////
// Get class Components to work //
    // class Hello {
    //     render(){
    //         return React.createElement('div', null, `Hello World`)
    //     }
    // }

///////////////////////////////////////////
// Get Stateless Component props to work //
    // const Hello = ({name}) => {
    //     return React.createElement('div', null, `Hello ${name}`)
    // }

///////////////////////////////////////
// Get Class Component props to work //
    // class Hello extends React.Component {
    //     constructor(props){
    //         super(props)
    //     }

    //     render(){
    //         return React.createElement('div', null, `Hello ${this.props.name}`)
    //     }
    // }

    // const helloWorld = React.createElement(Hello, {name: "Morty"}, null)

///////////////////////////////////////////////////////////////////////
// Get Class Component props to work with methods and eventListeners //
    // class MyButton extends React.Component {
    //     constructor(props){
    //         super(props)
    //     }

    //     render(){
    //         return React.createElement('button', {onclick: this.props.onClick}, `Click me`)
    //     }
    // }

    // const myBtn = React.createElement(MyButton, {onClick: () => alert('yay it worked!')}, null)

//////////////////////////////
// Make a Class have State! //
class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = { value: 0, text: "Nate", names: [] }
    }

    onPlusClick(){
        this.setState({value: this.state.value + 1})
    }

    onMinusClick(){
        this.setState({value: this.state.value - 1})
    }

    handleChange(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ names: [...this.state.names, this.state.text], text: "" })
    }

    render(){
        return React.createElement('div', {}, 
            React.createElement('div', {}, `The Famous Counter`),
            React.createElement('div', {}, `${this.state.value}`),
            React.createElement('button', {onClick: this.onPlusClick.bind(this)}, '+'),
            React.createElement('button', {onClick: this.onMinusClick.bind(this)}, '-'),
            React.createElement('form', {onSubmit: this.handleSubmit.bind(this)}, 
                React.createElement('input', {onChange: this.handleChange.bind(this), name: "text", value: `${this.state.text}`}, ""),
                React.createElement('button', {}, "Change name")
            ),
            ...this.state.names.map(name => React.createElement('div', {class: 'myClass'}, 
                React.createElement('h1', {}, name)
            ))
        )
    }
}

const App = React.createElement(Counter, {}, null)

ReactDOM.render(App, document.getElementById('root'))