import React from 'react'


const Post = props => {
    const { title, imgUrl, deletePost, editPost, _id } = props

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => deletePost(_id)}>Delete</button>
        </div>
    )
}

export default Post