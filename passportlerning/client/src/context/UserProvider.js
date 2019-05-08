import React, { useState, useContext, useMemo } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const UserProvider = (props) => {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    authErr: ""
  }
  const [userState, setUserState] = useState(initState)
  const value = useMemo(() => [userState, setUserState], [userState])

  const login = (creds) => {
    axios.post("/login", creds)
      .then(res => {
        const {user, token} = res.data
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setUserState({user, token})
      })
      .catch(err => setUserState(p => ({...p, authErr: err.response.data.errMsg})))
  }

  const signup = (creds) => {
    axios.post("/register", creds)
      .then(res => {
        const {user, token} = res.data
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setUserState({user, token})
      })
      .catch(err => setUserState(p => ({...p, authErr: err.response.data.errMsg})))
  }

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUserState({ user: {}, token: "", authErr: "" })
  }

  return (
    <UserContext.Provider value={{ value, login, signup, logout }}>
      {props.children}
    </UserContext.Provider>
  )
}


const useUserState = () => {
  const context = useContext(UserContext)
  if(!context){
    throw new Error("You muse use UserProvider to consume user state context")
  }
  return context
}

export { UserProvider, useUserState }