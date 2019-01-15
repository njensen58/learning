import React, { useState } from 'react'

const Todo = props => {
    const { id, title, dispatch } = props
    const [edit, editToggle] = useState(false)
    const [editInputs, setEditInputs] = useState({title: ''})
    return (
        <div key={id}>
            {!edit 
                ?
                    <div>
                        <h1>{title}</h1>
                        <button onClick={() => dispatch({type: 'delete_todo', id })}>Delete</button>
                        <button onClick={() => editToggle(p => !p)}>Edit</button>
                    </div>
                :
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            dispatch({type: 'edit_todo', updatedTodo: {title: editInputs.title, id}, id})
                            setEditInputs({title: ''})
                            editToggle(p => !p)
                        }}>
                            <input type="text" name="title" value={editInputs.title} onChange={(e) => setEditInputs({title: e.target.value})}/>
                            <button>Submit</button>
                        </form>
                        <button onClick={() => editToggle(p => !p)}>Close</button>
                    </div>
            }
        </div>
    )
}

export default Todo