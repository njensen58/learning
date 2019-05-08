import React from 'react'
import AuthForm from './AuthForm.js'
import useForm from '../hooks/useForm.js'
import useToggle from '../hooks/useToggle.js'

const Auth = (props) => {

  const {login, signup, authErr} = props
  const [toggle, setToggle] = useToggle()
  const initInputs = {username: "", password: ""}

  const { 
    handleChange: handleSignupChange, 
    handleSubmit: handleSignupSubmit, 
    formInputs:   signupInputs
  } = useForm(initInputs, signup)

  const { 
    handleChange: handleLoginChange, 
    handleSubmit: handleLoginSubmit, 
    formInputs:   loginInputs
  } = useForm(initInputs, login)
  

  return (
    <div>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleSignupChange}
            handleSubmit={handleSignupSubmit}
            inputs={signupInputs}
            btnText="Sign up"
          />
          <p>{authErr}</p>
          <p onClick={() => setToggle(p => !p)}>Already have a username?</p>
        </>
        :
        <>
          <AuthForm 
            handleChange={handleLoginChange}
            handleSubmit={handleLoginSubmit}
            inputs={loginInputs}
            btnText="login"
          />
          <p>{authErr}</p>
          <p onClick={() => setToggle(p => !p)}>Don't have a username?</p>
        </>
      }
    </div>
  )
}

export default Auth
