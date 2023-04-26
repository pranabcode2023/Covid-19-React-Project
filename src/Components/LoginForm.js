import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // import useNavigate

function LoginForm({ functionType }) {
    const { createNewUser, logIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();     // initialize navigate

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (functionType === "register") {
            createNewUser(email, password);
            setEmail('');
            setPassword('');
        }
        if (functionType === "login") {
            logIn(email, password);
            setEmail('');
            setPassword('');
            navigate('/about');      // redirect to the About page
        }
    }

    return (
        <div className="login-form" style={{ display: "flex", justifyContent: 'center', margin: '20px' }}>
            {functionType === "register" && (
                <form onSubmit={handleSubmit}>
                    <label>
                        <h1>Register</h1>
                        Email:
                        <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
                    </label>
                    <label>
                        Password:
                        <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <Button className="login-button" type="submit">Registration</Button>
                    <p>Already Registered? Go for log in</p>
                </form>
            )}
            {functionType === "login" && (
                <form onSubmit={handleSubmit} >
                    <label>
                        <h1>Login</h1>
                        Email:
                        <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
                    </label>
                    <label>
                        Password:
                        <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <Button className="login-button" type="submit" >Log in</Button>
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className="social-login">
                        <p>Or login with:</p>
                        <div className="social-buttons">
                            <button className="Gmail-button" type="button">Gmail</button>
                            <button className="facebook-button" type="button">Facebook</button>
                            <button className="github-button" type="button">Github</button>
                        </div>
                    </div>

                </form>
            )}

        </div>
    );
}

export default LoginForm;





//   ****************Form spike**********************




// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext';

// function LogForm({ functionType }) {
//     const { createNewUser, logIn } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (functionType === "register") {
//             createNewUser(email, password);
//             setEmail('');
//             setPassword('');
//         }
//         if (functionType === "login") {
//             logIn(email, password);
//             setEmail('');
//             setPassword('');
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em", alignItems: "flex-start" }}>
//             <input placeholder='email' value={email} onChange={handleEmailChange} type='email' />
//             <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default LogForm

