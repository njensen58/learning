import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authoriation = `Bearer ${token}`
    return config
})

export default class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            user: {},
            token: ''
        }
    }
    signup = userInfo => {
        axios.post('/auth/signup', userInfo)
            .then(res => {
                const { token, user } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user, token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user, token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    authenticate = (user, token) => {
        this.setState({
            loading: false,
            user,
            token
        })
    }

    verify = () => {
        userAxios.get('/api/user')
            .then(res => {
                const user = res.data
                const token = localStorage.getItem("token")
                this.authenticate(user, token)
            })
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({ loading: false, user: {}, token: '' })
    }

    render(){
        return (
            <UserContext.Provider value={{
                user: this.state.user,
                signup: this.signup,
                login: this.login,
                authenticate: this.authenticate,
                verify: this.verify
            }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export const withUser = C => props => 
    <UserContext.Consumer>
        { value => <C {...value} {...props}/> }
    </UserContext.Consumer>
