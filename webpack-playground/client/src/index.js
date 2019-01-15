import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PostProvider from './context/PostProvider'

ReactDOM.render(
    <PostProvider>
        <App/>
    </PostProvider>, 
document.getElementById('root'))