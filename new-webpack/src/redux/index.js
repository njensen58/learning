import { createStore } from 'redux'

const initState = {
    todos: [
        {
            title: "please",
            description: 'please',
            imgUrl: 'img.jpg',
            completed: false
        }
    ]
}

export const addTodo = newTodo => {
    return {
        type: "ADD_ONE",
        newTodo
    }
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                todos: [...state.todos, action.newTodo]
            }
        default:
            return state
    }
}


export default createStore(reducer)