import React from 'react';

const EditTodoForm = (props) => {
    const { handleChange, inputs, handleEdit } = props;
    return (
        <form onSubmit={ handleEdit }>
            <input
                type="text"
                name="title"
                value={ inputs.title }
                onChange={ handleChange }
                placeholder="title"
            />
            <input
                type="text"
                name="description"
                value={ inputs.description }
                onChange={ handleChange }
                placeholder="title"
            />
        <button>Submit</button>
        </form>
    )
}

export default EditTodoForm;
