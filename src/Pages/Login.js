import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login() {

    return (
        <div style={{ display: "flex", justifyContent: 'center', margin: '80px' }}>
            {/* <h1>Register</h1> */}
            <LoginForm functionType={"register"} />

            {/* <h1>Login</h1> */}

            <LoginForm functionType={"login"} />
        </div>


    )
}

export default Login