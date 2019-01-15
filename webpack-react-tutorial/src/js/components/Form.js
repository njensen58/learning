import React from 'react';

const Form = ({handleSubmit, handleChange, value}) => {
    return (
        <form>
            <input type="text" onChange={handleChange} value={value} name="input"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;
