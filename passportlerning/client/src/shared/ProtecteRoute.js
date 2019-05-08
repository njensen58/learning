import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const {path, token, redirectTo, component: Component, ...rest} = props
  return (
    token ?
      <Route path={path} render={rProps => <Component {...rProps} {...rest}/>}/>
    : <Redirect to={redirectTo}/>
  )
}

export default ProtectedRoute