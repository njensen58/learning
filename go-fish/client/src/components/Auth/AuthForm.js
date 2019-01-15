import React from 'react'

const AuthForm = props => {
    const { inputs: { username, password }, handleChange, handleSubmit, btnText } = props
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="Username"/>
            <input type="text" name="password" onChange={handleChange} value={password} placeholder="Password"/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm