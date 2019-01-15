import React from 'react'

const TodoForm = props => {
    return (
        <div>
            <input type="text" onChange={ props.handleChange } value={ props.title } placeholder='New Todo' name="title"/>
            <input type="text" onChange={ props.handleChange } value={ props.price } placeholder="Price" name="price"/>
            <button onClick={ props.handleAddTodo }>Add Todo</button>
        </div>
    )
}

export default TodoForm