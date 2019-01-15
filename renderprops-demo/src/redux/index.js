import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'



export const getTodos = () => {
    return dispatch => {
        axios.get('https://api.vschool.io/natej/todo/').then(res => {
            dispatch({
                type: "GET_TODOS",
                todos: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addTodo = newTodo => {
    return dispatch => {
        axios.post('https://api.vschool.io/natej/todo/', newTodo).then(res => {
            dispatch({
                type: "ADD_TODO",
                newTodo: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteTodo = id => {
    return dispatch => {
        axios.delete(`https://api.vschool.io/natej/todo/${id}`).then(res => {
            dispatch({
                type: "DELETE_TODO",
                id
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editTodo = (id, todo) => {
    return dispatch => {
        return axios.put(`https://api.vschool.io/natej/todo/${id}`, todo).then(res => {
            dispatch({
                type: "EDIT_TODO",
                editTodo: res.data,
                id
            })
        }).catch(err => {
            console.log(err)
        })
    }
}


const reducer = (state = { todos: []}, action) => {
    switch(action.type){
        case "GET_TODOS":
            return {
                todos: [...action.todos]
            }
        case "ADD_TODO":
            return {
                todos: [action.newTodo, ...state.todos]
            }
        case "DELETE_TODO":
            return {
                todos: state.todos.filter(todo => todo._id !== action.id)
            }
        case "EDIT_TODO":
            return {
                todos: state.todos.map(todo => todo._id === action.id ? action.editTodo : todo)
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
