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
        this.state = { value: 0, text: "", age: "", names: [], data: [] }
    }

    onPlusClick = () => {
        this.setState({value: this.state.value + 1}, true)
    }

    onMinusClick = () => {
        this.setState({value: this.state.value - 1}, true)
    }

    handleChange = e => {
        console.log('hi')
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, false)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ 
            names: [...this.state.names, {name: this.state.text, age: this.state.age}], 
            text: "", 
            age: "" 
        }, true)
    }

    getData = () => {
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
                this.setState({
                    data: res.data.results
                }, true)
            }).catch(err => console.log(err))
    }

    render(){
        if(!this.state.data.length){
            this.getData()
        }

        return React.createElement('div', {class: "app-container"}, "I am the top level container",
            // React.createElement(ColorBox, {}, null), 
            React.createElement(CountDis, {count: this.state.value}, null),
            React.createElement(CountBtnContainer, {
                onMinusClick: this.onMinusClick, 
                onPlusClick: this.onPlusClick}, null),
            React.createElement(InputForm, {
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                text: this.state.text,
                age: this.state.age
            }, null),
            ...React.createElement(NameList, {names: this.state.names}, null),
            React.createElement('div', {class: "list-container"}, 
            ...React.createElement(RickAndMortyList, {names: this.state.data}, null)
            )
        )
    }
}

const CountDis = function(props){
    return React.createElement('h1', {}, `${props.count}`)
}

const CountBtnContainer = function(props){
    return React.createElement('div', {}, 
        React.createElement('button', {onClick: props.onPlusClick, id: "btn"}, "+"),
        React.createElement('button', {onClick: props.onMinusClick}, "-")
    )
}

const InputForm = function(props){
    return React.createElement('form', {onSubmit: props.handleSubmit}, 
                React.createElement('input', {
                        onInput: props.handleChange,
                        name: "text", 
                        value: `${props.text}`}, ""),
                React.createElement('input', {
                        onInput: props.handleChange,
                        name: "age", 
                        value: `${props.age}`}, ""),
                React.createElement('button', {}, "Change name")
            )
}

class ColorBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            colors: ["blue", "green", "yellow", "purple"],
            color: "red"
        }
    }

    changeColor = () => {
        this.setState({
            color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        }, true)
    }

    render(){
        return React.createElement("div", {
                    class: "color-box",
                    style: `background-color: ${this.state.color}`,
                    onClick: this.changeColor
                }, "Click Me!")
    }
}

const NameList = function(props){
    return  props.names.map(person => React.createElement('div', {class: 'myClass'}, 
        React.createElement('h1', {}, person.name),
        React.createElement('h3', {}, person.age)
    ))
}

const RickAndMortyList = function(props){
    return  props.names.map(person => React.createElement('div', {class: 'character-container', style: `background-image: url(${person.image})`}, 
        React.createElement('h1', {}, person.name),
        React.createElement('h3', {}, person.location.name)
    ))
}

const App = React.createElement(Counter, {}, null)


ReactDOM.render(App, document.getElementById('root'))