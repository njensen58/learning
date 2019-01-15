import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
        const { token, redirectTo, component: Component, path } = this.props
        return ( token 
            ? <Route path={path} component={Component}/>
            : <Redirect to={redirectTo}/>
        )
    }
}

export default ProtectedRoute