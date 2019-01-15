import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProtectedRoute from './shared/ProtectedRoute'
import { withUser } from './context/UserContext'
import Auth from './components/Auth'
import Home from './components/Home'


class App extends Component {
    componentDidMount(){
        this.props.verify()
    }
    render(){
    const { user, token, loading } = this.props
        return (
            <div>
                { loading 
                    ?  <div>Loading</div>
                    :  <Switch>
                            <Route path="/signin" render={props => 
                                !token ? <Auth /> : <Redirect to="/"/>
                            }/>
                            <Route exact path="/" component={ Home }/>
                       </Switch>
                }
            </div>
        )
    }
}


export default withUser(withRouter(App))