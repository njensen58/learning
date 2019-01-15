import React, { useReducer, useState } from 'react'
import uuid from 'uuid/v4'
import styled from 'styled-components'
import Todo from './Todo'

// REDUCER // STATE //
const initTodos = { 
    todos: [
        { title: "My First Todo ", id: uuid() },
        { title: "Second Todo ", id: uuid() }
    ] 
}
const initInputs = { title: '' }

const reducer = (state , action) => {
    switch(action.type){
        case 'add_todo':
            return { todos: [...state.todos, action.newTodo] }
        case 'delete_todo':
            return { todos: state.todos.filter(todo => todo.id !== action.id) }
        case 'edit_todo':
            return { todos: state.todos.map(todo => todo.id === action.id ? action.updatedTodo : todo) }
        default:
            return state
    }
}
//////////////////////


// STYLED_COMPONENTS
// const Todo = styled.div`
//     border: 1px solid black;
//     padding: 5px;
//     border-radius: 3px;
// `

const App = () => {
    const [state, dispatch] = useReducer(reducer, initTodos)
    const [inputs, setInputs] = useState(initInputs)

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch({type: 'add_todo', newTodo: { title: inputs.title, id: uuid() }})
                setInputs(initInputs)
            }}>
                <input type="text" name="title" value={inputs.title} onChange={(e) => setInputs({title: e.target.value})}/>
                <button>Add Todo</button>
            </form>

            { state.todos.map(todo => <Todo {...todo} dispatch={dispatch}/>) }

        </div>
    )
}

export default App