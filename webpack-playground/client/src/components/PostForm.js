import React from 'react'

const PostForm = props => {
    const { inputs: { title }, handleChange, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={ title } onChange={handleChange} placeholder="Title"/>
            <button>Submit</button>
        </form>
    )
}

export default PostForm