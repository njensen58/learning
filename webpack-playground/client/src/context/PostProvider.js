import React, { useState } from 'react'
import axios from 'axios'


export const PostContext = React.createContext()

const PostProvider = props => {
    const initState = { posts: [] } 
    const [state, setState] = useState(initState)
    const getPosts = () => { 
        axios.get('/posts').then(res => 
            setState({posts: res.data})
        ).catch(err => console.log(err))
    }
    const addPost = newPost => { 
        axios.post('/posts', newPost).then(res => {
            console.log(res)
            setState({ posts: [...state.posts, res.data] })
        }).catch(err => console.log(err))
    }
    const deletePost = id => {
        axios.delete(`/posts/${id}`).then(res => {
            setState({ posts: state.posts.filter(post => post._id !== id) })
        }).catch(err => console.log(err))
    }
    const editPost = (id, updates) => {
        axios.put(`/posts/${id}`, updates).then(res => {
            setState({ posts: state.posts.map(post => post._id === id ? res.data : post) })
        }).catch(err => console.log(err))
    }

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                getPosts, addPost,
                deletePost, editPost
            }}>
            { props.children }
        </PostContext.Provider>
    )
}

export default PostProvider