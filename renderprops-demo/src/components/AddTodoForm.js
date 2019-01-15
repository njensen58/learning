import React from 'react';

const AddTodoForm = (props) => {
    const { handleChange, inputs, handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
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

export default AddTodoForm;
