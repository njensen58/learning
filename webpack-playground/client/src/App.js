import React, { useContext, useEffect } from 'react'
import { PostContext } from './context/PostProvider'
import Form from './components/shared/Form'
import PostForm from './components/PostForm'
import Post from './components/Post'

const App = () => {
    const { posts, getPosts, addPost, deletePost, editPost } = useContext(PostContext)
    useEffect(() => getPosts(), [])
    
    return (
        <div>
            <Form 
                inputs={{ title: '' }}
                submit={inputs => addPost(inputs)}
                render={props => <PostForm {...props}/>}
            />
            { posts && posts.map(p => <Post 
                                        {...p} 
                                        key={p._id}
                                        deletePost={deletePost}
                                        editPost={editPost}/>)
            }
        </div>
    )
}

export default App