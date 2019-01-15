import React, {Fragment} from 'react'
import Form from '../../shared/Form'
import Toggle from '../../shared/Toggle'
import AuthForm from './AuthForm'
import { withUser } from '../../context/UserContext'
import './style.css'

const Auth = props => {
    return (
        <div className="auth-container">
            <Toggle render={({ isToggled, toggle }) => 
                <Fragment>
                    <h3 onClick={toggle}>{ isToggled ? "Sign up" : "Login" }</h3>
                    { isToggled 
                        ?   <Form 
                                inputs={{ username: '', password: '' }}
                                submit={inputs => props.signup(inputs)}
                                render={props => <AuthForm {...props} btnText="Signup"/>}
                            />
                        :   <Form 
                                inputs={{ username: '', password: '' }}
                                submit={inputs => props.login(inputs)}
                                render={props => <AuthForm {...props} btnText="Login"/>}
                            />
                    }
                </Fragment>
            }/>
        </div>
    )
}

export default withUser(Auth);