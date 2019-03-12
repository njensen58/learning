(() => {
    
    function anElement(element, props, children){
        // If the element is a class, create an instance of the class and return it's called render method to return the html
        if(isClass(element)){
            return handleClass(element, props, children)
        } else {
            // If the element is a function that returns an element(Component), call it with it's props (if any)
            if(isStatelessComponent(element)){
                return element(props)
            } else {
            // Else create the native html element and show children(text, content, display el)
                return handleHtmlElement(element, props, children)
            }
        }
    }

    function createElement(el, props, ...children){
        return anElement(el, props, children)
    }

    class Component {
        constructor(props){
            this.props = props
        }
        setState(state, render){
            this.state = Object.assign({}, this.state, state)
            render && reRender()
        }
    }

    function reRender(){
        const rootDOMElement = document.getElementById('root')
        const rootReactElement = App
        // Wipe out the DOM other than the 'root' div
        while(rootDOMElement.hasChildNodes()){
            rootDOMElement.removeChild(rootDOMElement.lastChild)
        }
        // ReRender updated ReactDOMTree to actual DOM
        ReactDOM.render(rootReactElement, rootDOMElement)
    }
    
    
    window.React = { 
        createElement,
        Component
    }

    window.ReactDOM = {
        render: (el, domEl) => {
            rootReactElement = el
            rootDOMElement = domEl
            if(rootReactElement.render){
                const currentDOM = rootReactElement.render()
                rootDOMElement.appendChild(currentDOM)
            } else {
                const currentDOM = rootReactElement
                rootDOMElement.appendChild(currentDOM)
            }
        }
    }

})()