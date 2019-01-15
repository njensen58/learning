import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '../redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const App = () => {
    return (
        <div>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default connect(state=>state, { addOne })(App)