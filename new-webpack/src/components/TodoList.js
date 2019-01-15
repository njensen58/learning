import React from 'react' 
import { connect } from 'react-redux'

const TodoList = props => {
    console.log(props)
    return (
        <div>
        {props.todos.map(todo => {
            return (
                <div>   
                    <p>Todo: {todo.title}</p>
                    <p>More: {todo.description}</p>
                    <img src={todo.imgUrl} alt={todo.title} style={{ width: 200 }}/>
                    <p>Completed: { todo.completed ? "Yes" : "No" }</p>
                </div>
            )   
        })}
        </div>
    )
}

export default connect(state=>state, {})(TodoList)