
let rootDOMElement, rootReactElement
let classCounter = 0
let classMap = {}

const REACT_CLASS = "REACT_CLASS"

function isClass(el){
    return el.toString().slice(0, 5) === "class"
}

function isStatelessComponent(el){
    return typeof(el) === 'function'
}

function handleClass(clazz, props, children){
    console.log(clazz)
    classCounter++
    if(classMap[classCounter]){
        return classMap[classCounter]
    }
    const reactElement = new clazz(props)
    reactElement.children = children
    reactElement.type = REACT_CLASS
    classMap[classCounter] = reactElement
    return reactElement
}

function handleHtmlElement(el, props, children){
    const anElement = document.createElement(el)
        appendChild(anElement, children)
        appendProp(anElement, props)
        return anElement
}

function appendProp(element, props){
    Object.keys(props).forEach(propName => {
        if(/^on.*$/.test(propName)){
            // if the attribute starts with 'on', get the letters after 'on' and add the event listener name and function
            element.addEventListener(propName.substring(2).toLowerCase(), props[propName])
        } else {
            // If it's not an 'on' event, it's a regular attribute and should be added manually
            element.setAttribute(propName, props[propName])
        }
    })
    return element
}

function appendChild(element, children){
    console.log(children)
    children.forEach(child => {
        console.log(child)
        handleChild(element, child)
        // If the child is an object (Component or DOM el (div, img, etc.)), append the element to the created element parent
        if(typeof child === 'object'){
            element.appendChild(child)
        } else if(Array.isArray(child)) {
            child.forEach(ch => appendChild(element, ch))
        } else {
             // If it's just a primitive(string, num), add it to the HTML
            element.innerHTML += child
        }
    })
}

function handleChild(element, child){
    if(child && child.type === REACT_CLASS){
        appendChild(element, child.render())
    }
}
