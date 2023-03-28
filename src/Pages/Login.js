import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login() {

    return (
        <div>
            <h1>Register new user</h1>
            <LoginForm functionType={"register"} />

            <h1>Login existing user</h1>
            <LoginForm functionType={"login"} />
        </div>
    )
}

export default Login