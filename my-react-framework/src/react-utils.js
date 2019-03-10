function isClass(el){
    return el.toString().slice(0, 5) === "class"
}

function isStatelessComponent(el){
    return typeof(el) === 'function'
}



// function handleClass(element, props){
//     const component = new element(props)
//     return component.render()
// }

let rootDOMElement, rootReactElement
let classCounter = 0
let classMap = {}
const REACT_CLASS = "REACT_CLASS"


function handleClass(clazz, props, children){
    classCounter++
    console.log(props)
    console.log(children)
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
            element.addEventListener(propName.substring(2).toLowerCase(), props[propName])
        } else {
            element.setAttribute(propName, props[propName])
        }
    })
    return element
}

function appendChild(element, children){
    children.forEach(child => {
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
    if(child.type === REACT_CLASS){
        appendChild(element, child.render())
    }
}
