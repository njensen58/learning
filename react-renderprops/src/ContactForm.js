import React from 'react';

const ContactForm = (props) => {
    const { handleSubmit, handleChange, inputs } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                name="name"
                value={ inputs.name }
                placeholder="Name"
                onChange={ handleChange }/>
            <input
                type="checkbox"
                name="isHappy"
                checked={ inputs.isHappy }
                onChange={ handleChange }/>
            <button>Submit</button>
        </form>
    )
}

export default ContactForm;
