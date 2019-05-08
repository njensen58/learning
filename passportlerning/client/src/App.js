import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {useUserState} from './context/UserProvider.js'
import ProtectedRoute from './shared/ProtecteRoute.js'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Home from './components/Home.js'



const App = () => {
  const {value: [ userState ], login, signup, logout} = useUserState()
  // const {value: [ userState ], login, signup} = userContext 
  const {user, token, authErr} = userState
  return (
    <div>
      { token && <Navbar logout={logout}/> }
      <Switch>
        <Route 
          exact path="/" 
          render={rProps => !token 
            ? <Auth 
                {...rProps} 
                signup={signup}  
                login={login}
                authErr={authErr}/> 
            : <Home {...rProps} user={user}/>
          }/>
        <ProtectedRoute 
          token={token}
          path="/home"
          component={Home}
          redirectTo="/"
          user={user}
        />
      </Switch>
    </div>
  )
}

export default App